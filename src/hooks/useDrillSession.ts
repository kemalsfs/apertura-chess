import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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

  // Timer ref to prevent memory leaks or overlapping auto-moves
  const autoMoveTimerRef = useRef<any>(null);

  const activeLine = useMemo(() => {
    return lines[lineIndex] || [];
  }, [lines, lineIndex]);

  const chess = useMemo(() => {
    return new Chess(currentFen);
  }, [currentFen]);

  // Is it user's turn to play
  const isUserTurn = useMemo(() => {
    if (!activeLine || stepIndex >= activeLine.length) return false;
    const isStepWhite = stepIndex % 2 === 0;
    return orientation === 'white' ? isStepWhite : !isStepWhite;
  }, [activeLine, stepIndex, orientation]);

  // Start / Init a specific line according to user orientation pedagogy
  const setupLine = useCallback(
    (line: RepertoireNode[]) => {
      if (autoMoveTimerRef.current) {
        clearTimeout(autoMoveTimerRef.current);
      }

      if (!line || line.length === 0) return;

      if (orientation === 'white') {
        // WHITE REPERTOIRE:
        // Automatically play White's 1st move (ply 0), and let Opponent play Black's 1st move (ply 1).
        // Then prompt user starting from White's 2nd move (ply 2).
        if (line.length >= 2) {
          const whiteFirstNode = line[0];
          const blackFirstNode = line[1];

          // 1. Instantly set White's first move
          setCurrentFen(whiteFirstNode.fen);
          setLastMove([whiteFirstNode.from, whiteFirstNode.to]);
          setArrows([]);
          setFeedback({
            status: 'opponent_turn',
            message: `1. ${whiteFirstNode.san} oynandı. Rakip yanıt veriyor...`,
          });

          // 2. Play Black's reply with slight realistic delay
          autoMoveTimerRef.current = setTimeout(() => {
            soundEffects.playMove();
            setCurrentFen(blackFirstNode.fen);
            setLastMove([blackFirstNode.from, blackFirstNode.to]);
            setStepIndex(2);
            setFeedback({
              status: 'your_turn',
              message: `Rakip ${blackFirstNode.san} oynadı. 2. hamleni yap!`,
            });
          }, 600);
        } else if (line.length === 1) {
          // Only 1 move in line
          const whiteFirstNode = line[0];
          setCurrentFen(STARTING_FEN);
          setLastMove(undefined);
          setArrows([]);
          setStepIndex(0);
          setFeedback({
            status: 'your_turn',
            message: `İlk hamleni oyna: ${whiteFirstNode.san}`,
          });
        }
      } else {
        // BLACK REPERTOIRE:
        // Automatically play Opponent's (White's) 1st move (ply 0).
        // Then prompt user for Black's 1st move (ply 1).
        if (line.length >= 1) {
          const whiteFirstNode = line[0];
          setCurrentFen(STARTING_FEN);
          setLastMove(undefined);
          setArrows([]);
          setFeedback({
            status: 'opponent_turn',
            message: 'Beyaz (Rakip) ilk hamlesini yapıyor...',
          });

          autoMoveTimerRef.current = setTimeout(() => {
            soundEffects.playMove();
            setCurrentFen(whiteFirstNode.fen);
            setLastMove([whiteFirstNode.from, whiteFirstNode.to]);
            setStepIndex(1);
            setFeedback({
              status: 'your_turn',
              message: `Beyaz ${whiteFirstNode.san} oynadı. Siyah ile cevabını ver!`,
            });
          }, 400);
        }
      }
    },
    [orientation]
  );

  // Load Repertoire and Start
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
      setIsSessionFinished(allLines.length === 0);
      setIsLoading(false);

      if (allLines.length > 0) {
        setupLine(allLines[0]);
      }
    }

    loadRepertoire();

    return () => {
      if (autoMoveTimerRef.current) clearTimeout(autoMoveTimerRef.current);
    };
  }, [activeRepertoireId, setupLine]);

  // Handle Subsequent Opponent Auto-Moves (Beyond ply 1)
  useEffect(() => {
    if (isLoading || isSessionFinished || lines.length === 0) return;
    if (stepIndex >= activeLine.length) return;

    if (!isUserTurn) {
      setFeedback({
        status: 'opponent_turn',
        message: 'Rakip oynuyor...',
      });

      const opponentMoveNode = activeLine[stepIndex];
      autoMoveTimerRef.current = setTimeout(() => {
        try {
          soundEffects.playMove();
          setCurrentFen(opponentMoveNode.fen);
          setLastMove([opponentMoveNode.from, opponentMoveNode.to]);
          setArrows([]);
          setStepIndex(prev => prev + 1);
          setFeedback({
            status: 'your_turn',
            message: `Rakip ${opponentMoveNode.san} oynadı. Sıra sende!`,
          });
        } catch (err) {
          console.error('Error auto-playing opponent move:', err);
        }
      }, 500);

      return () => {
        if (autoMoveTimerRef.current) clearTimeout(autoMoveTimerRef.current);
      };
    }
  }, [isUserTurn, activeLine, stepIndex, isLoading, isSessionFinished, lines.length]);

  // Advance to Next Line
  const advanceToNextLine = useCallback(() => {
    if (lineIndex + 1 < lines.length) {
      const nextIdx = lineIndex + 1;
      setLineIndex(nextIdx);
      setupLine(lines[nextIdx]);
    } else {
      setIsSessionFinished(true);
      soundEffects.playComplete();
      setFeedback({
        status: 'complete',
        message: '🎉 Tebrikler! Tüm antrenman serisini tamamladın.',
      });
    }
  }, [lineIndex, lines, setupLine]);

  // Retry / Rewind Current Line
  const retryCurrentLine = useCallback(() => {
    if (activeLine && activeLine.length > 0) {
      setupLine(activeLine);
    }
  }, [activeLine, setupLine]);

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
    setStats({
      totalAnswers: 0,
      correctAnswers: 0,
      streak: 0,
      maxStreak: 0,
    });
    setIsSessionFinished(false);
    if (lines.length > 0) {
      setupLine(lines[0]);
    }
  }, [lines, setupLine]);

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
