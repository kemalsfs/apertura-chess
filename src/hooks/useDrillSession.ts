import { useState, useEffect, useCallback, useMemo } from 'react';
import { Chess } from 'chess.js';
import { db } from '../db/db';
import type { RepertoireNode, RepertoireColor, DrawShape } from '../types/chess';
import { STARTING_FEN } from '../utils/chessHelpers';
import { extractRepertoireLines, calculateNextSRS } from '../services/srsScheduler';
import { soundEffects } from '../services/soundEffects';

export interface DrillFeedback {
  status: 'your_turn' | 'opponent_turn' | 'correct' | 'wrong' | 'complete';
  message: string;
  comment?: string;
  expectedSan?: string;
}

export interface DrillStats {
  totalAnswers: number;
  correctAnswers: number;
  streak: number;
  maxStreak: number;
}

export function useDrillSession(activeRepertoireId: string, orientation: RepertoireColor) {
  const [lines, setLines] = useState<RepertoireNode[][]>([]);
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [currentFen, setCurrentFen] = useState<string>(STARTING_FEN);
  const [lastMove, setLastMove] = useState<[string, string] | undefined>(undefined);
  const [arrows, setArrows] = useState<DrawShape[]>([]);
  const [feedback, setFeedback] = useState<DrillFeedback>({
    status: 'your_turn',
    message: 'Antrenman Hazırlanıyor...',
  });
  const [stats, setStats] = useState<DrillStats>({
    totalAnswers: 0,
    correctAnswers: 0,
    streak: 0,
    maxStreak: 0,
  });
  const [isSessionFinished, setIsSessionFinished] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load repertoire and extract all training lines
  useEffect(() => {
    async function loadRepertoire() {
      setIsLoading(true);
      const repNodes = await db.nodes.where('repertoireId').equals(activeRepertoireId).toArray();
      const nodeMap = new Map<string, RepertoireNode>();
      for (const node of repNodes) {
        nodeMap.set(node.id, node);
      }

      const allLines = extractRepertoireLines(nodeMap);
      setLines(allLines);
      setLineIndex(0);
      setStepIndex(0);
      setCurrentFen(STARTING_FEN);
      setLastMove(undefined);
      setArrows([]);
      setIsSessionFinished(allLines.length === 0);
      setIsLoading(false);
    }

    loadRepertoire();
  }, [activeRepertoireId]);

  const activeLine = useMemo(() => {
    return lines[lineIndex] || [];
  }, [lines, lineIndex]);

  const chess = useMemo(() => {
    return new Chess(currentFen);
  }, [currentFen]);

  // Check if current step is User's move or Opponent's move
  const isUserTurn = useMemo(() => {
    if (!activeLine || stepIndex >= activeLine.length) return false;
    const isStepWhite = stepIndex % 2 === 0;
    return orientation === 'white' ? isStepWhite : !isStepWhite;
  }, [activeLine, stepIndex, orientation]);

  // Handle Opponent Auto-Move
  useEffect(() => {
    if (isLoading || isSessionFinished || lines.length === 0) return;
    if (stepIndex >= activeLine.length) return;

    if (!isUserTurn) {
      setFeedback({
        status: 'opponent_turn',
        message: 'Rakip oynuyor...',
      });

      const opponentMoveNode = activeLine[stepIndex];
      const timer = setTimeout(() => {
        try {
          soundEffects.playMove();
          setCurrentFen(opponentMoveNode.fen);
          setLastMove([opponentMoveNode.from, opponentMoveNode.to]);
          setArrows([]);
          setStepIndex(prev => prev + 1);
          setFeedback({
            status: 'your_turn',
            message: 'Sıra Sende: Repertuvarındaki doğru hamleyi oyna',
          });
        } catch (err) {
          console.error('Error auto-playing opponent move:', err);
        }
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setFeedback(prev => {
        if (prev.status === 'wrong') return prev; // Keep wrong feedback visible until retry
        return {
          status: 'your_turn',
          message: 'Sıra Sende: Repertuvarındaki doğru hamleyi oyna',
        };
      });
    }
  }, [isUserTurn, activeLine, stepIndex, isLoading, isSessionFinished, lines.length]);

  // Advance to next training line
  const advanceToNextLine = useCallback(() => {
    if (lineIndex + 1 < lines.length) {
      setLineIndex(prev => prev + 1);
      setStepIndex(0);
      setCurrentFen(STARTING_FEN);
      setLastMove(undefined);
      setArrows([]);
      setFeedback({
        status: 'your_turn',
        message: 'Yeni varyant başlıyor...',
      });
    } else {
      setIsSessionFinished(true);
      soundEffects.playComplete();
      setFeedback({
        status: 'complete',
        message: '🎉 Tebrikler! Tüm antrenman serisini tamamladın.',
      });
    }
  }, [lineIndex, lines.length]);

  // Retry/Rewind Current Line to Beginning
  const retryCurrentLine = useCallback(() => {
    setStepIndex(0);
    setCurrentFen(STARTING_FEN);
    setLastMove(undefined);
    setArrows([]);
    setFeedback({
      status: 'your_turn',
      message: 'Varyant baştan başladı: Doğru hamleyi oyna',
    });
  }, []);

  // Handle User Move Attempt
  const playUserMove = useCallback(
    async (from: string, to: string, promotion?: string): Promise<boolean> => {
      if (!isUserTurn || stepIndex >= activeLine.length) return false;

      const expectedNode = activeLine[stepIndex];

      // Validate on chess.js
      try {
        const moveAttempt = chess.move({
          from,
          to,
          promotion: promotion || undefined,
        });

        if (!moveAttempt) return false;

        const playedSan = moveAttempt.san;

        // Check if move matches expected SAN
        if (playedSan === expectedNode.san) {
          // --- CORRECT MOVE ---
          soundEffects.playCorrect();

          // Update SRS in DB
          const newSrs = calculateNextSRS(expectedNode.srs, true);
          await db.nodes.update(expectedNode.id, { srs: newSrs });

          // Update Stats
          setStats(prev => {
            const nextStreak = prev.streak + 1;
            return {
              totalAnswers: prev.totalAnswers + 1,
              correctAnswers: prev.correctAnswers + 1,
              streak: nextStreak,
              maxStreak: Math.max(prev.maxStreak, nextStreak),
            };
          });

          setCurrentFen(expectedNode.fen);
          setLastMove([from, to]);
          setArrows([]);

          // Check if line complete
          if (stepIndex + 1 >= activeLine.length) {
            soundEffects.playComplete();
            setFeedback({
              status: 'complete',
              message: `🎉 Varyant Tamamlandı: ${expectedNode.san}`,
              comment: expectedNode.comment,
            });

            // Automatically proceed to next line after 1.2s
            setTimeout(() => {
              advanceToNextLine();
            }, 1200);
          } else {
            setFeedback({
              status: 'correct',
              message: `Harika! ${expectedNode.san} doğru hamle.`,
              comment: expectedNode.comment,
            });
            setStepIndex(prev => prev + 1);
          }

          return true;
        } else {
          // --- WRONG MOVE ---
          soundEffects.playMistake();

          // Update SRS in DB (Failed)
          const newSrs = calculateNextSRS(expectedNode.srs, false);
          await db.nodes.update(expectedNode.id, { srs: newSrs });

          // Reset Stats streak
          setStats(prev => ({
            ...prev,
            totalAnswers: prev.totalAnswers + 1,
            streak: 0,
          }));

          // Show green arrow for expected move
          setArrows([
            {
              orig: expectedNode.from,
              dest: expectedNode.to,
              brush: 'green',
            },
          ]);

          setFeedback({
            status: 'wrong',
            message: `Hata! Doğru hamle: ${expectedNode.san}`,
            expectedSan: expectedNode.san,
            comment: expectedNode.comment,
          });

          // Re-queue this line to retry at the end of the session
          setLines(prev => [...prev, activeLine]);

          return false;
        }
      } catch (err) {
        console.error('Invalid move attempt in drill:', err);
        return false;
      }
    },
    [isUserTurn, stepIndex, activeLine, chess, advanceToNextLine]
  );

  // Restart entire drill session
  const restartSession = useCallback(() => {
    setLineIndex(0);
    setStepIndex(0);
    setCurrentFen(STARTING_FEN);
    setLastMove(undefined);
    setArrows([]);
    setStats({
      totalAnswers: 0,
      correctAnswers: 0,
      streak: 0,
      maxStreak: 0,
    });
    setIsSessionFinished(false);
  }, []);

  return {
    lines,
    lineIndex,
    stepIndex,
    activeLine,
    currentFen,
    chess,
    lastMove,
    arrows,
    feedback,
    stats,
    isUserTurn,
    isSessionFinished,
    isLoading,
    playUserMove,
    retryCurrentLine,
    advanceToNextLine,
    restartSession,
  };
}