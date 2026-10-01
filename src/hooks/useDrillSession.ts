import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Chess } from 'chess.js';
import { db } from '../db/db';
import type { RepertoireNode, RepertoireColor, DrawShape } from '../types/chess';
import { STARTING_FEN } from '../utils/chessHelpers';
import { 
  extractRepertoireLines, 
  calculateNextSRS, 
  filterRepertoireLines,
  isTrainableLine,
  firstPlayerStepIndex,
  type DrillFilterType 
} from '../services/srsScheduler';
import { soundEffects } from '../services/soundEffects';

export interface DrillFeedback {
  status: 'your_turn' | 'opponent_turn' | 'correct' | 'wrong' | 'hint' | 'round_transition' | 'complete';
  message: string;
  comment?: string;
  expectedSan?: string;
  attemptsLeft?: number;
}

export interface DrillStats {
  totalAnswers: number;
  correctAnswers: number;
  streak: number;
  maxStreak: number;
  currentRound: number;
  roundTotalLines: number;
  roundPassedLines: number;
}

export function useDrillSession(
  activeRepertoireId: string, 
  orientation: RepertoireColor,
  initialFilter: DrillFilterType = 'due'
) {
  const [allExtractedLines, setAllExtractedLines] = useState<RepertoireNode[][]>([]);
  const [skippedUntrainableLines, setSkippedUntrainableLines] = useState(0);
  const [filter, setFilter] = useState<DrillFilterType>(initialFilter);
  const [lines, setLines] = useState<RepertoireNode[][]>([]);
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [attemptsOnCurrentStep, setAttemptsOnCurrentStep] = useState<number>(0);
  const [hasFailedCurrentLine, setHasFailedCurrentLine] = useState<boolean>(false);
  const [failedLinesInRound, setFailedLinesInRound] = useState<RepertoireNode[][]>([]);
  const [currentRound, setCurrentRound] = useState<number>(1);

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
    currentRound: 1,
    roundTotalLines: 0,
    roundPassedLines: 0,
  });
  const [isSessionFinished, setIsSessionFinished] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const autoMoveTimerRef = useRef<any>(null);
  const transitionTimerRef = useRef<any>(null);

  const activeLine = useMemo(() => {
    return lines[lineIndex] || [];
  }, [lines, lineIndex]);

  const chess = useMemo(() => {
    return new Chess(currentFen);
  }, [currentFen]);

  // Is it user's turn
  const isUserTurn = useMemo(() => {
    if (!activeLine || stepIndex >= activeLine.length) return false;
    const isStepWhite = stepIndex % 2 === 0;
    return orientation === 'white' ? isStepWhite : !isStepWhite;
  }, [activeLine, stepIndex, orientation]);

  // Setup specific training line
  const setupLine = useCallback(
    (line: RepertoireNode[], preserveFailure = false) => {
      if (autoMoveTimerRef.current) {
        clearTimeout(autoMoveTimerRef.current);
      }

      if (!line || !isTrainableLine(line, orientation)) return;
      setStepIndex(-1); // Intro moves are controlled by the setup timer, not the opponent effect.
      setAttemptsOnCurrentStep(0);
      setHasFailedCurrentLine(preserveFailure);

      if (orientation === 'white') {
        // WHITE REPERTOIRE:
        // Automatically play White's 1st move (ply 0), Opponent plays Black's 1st move (ply 1).
        // User starts at ply 2.
        if (line.length >= 2) {
          const whiteFirstNode = line[0];
          const blackFirstNode = line[1];

          setCurrentFen(whiteFirstNode.fen);
          setLastMove([whiteFirstNode.from, whiteFirstNode.to]);
          setArrows([]);
          setFeedback({
            status: 'opponent_turn',
            message: `1. ${whiteFirstNode.san} oynandı. Rakip yanıt veriyor...`,
          });

          autoMoveTimerRef.current = setTimeout(() => {
            soundEffects.playMove();
            setCurrentFen(blackFirstNode.fen);
            setLastMove([blackFirstNode.from, blackFirstNode.to]);
            setStepIndex(firstPlayerStepIndex(orientation));
            setFeedback({
              status: 'your_turn',
              message: `Rakip ${blackFirstNode.san} oynadı. 2. hamleni yap!`,
              attemptsLeft: 3,
            });
          }, 500);
        }
      } else {
        // BLACK REPERTOIRE:
        // Opponent plays White's 1st move (ply 0). User answers with Black's 1st move (ply 1).
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
            setStepIndex(firstPlayerStepIndex(orientation));
            setFeedback({
              status: 'your_turn',
              message: `Beyaz ${whiteFirstNode.san} oynadı. Siyah ile cevabını ver!`,
              attemptsLeft: 3,
            });
          }, 400);
        }
      }
    },
    [orientation]
  );

  // Load Repertoire and apply filter
  useEffect(() => {
    async function loadRepertoire() {
      setIsLoading(true);
      const repNodes = await db.nodes.where('repertoireId').equals(activeRepertoireId).toArray();
      const nodeMap = new Map<string, RepertoireNode>();
      for (const node of repNodes) {
        nodeMap.set(node.id, node);
      }

      const extractedLines = extractRepertoireLines(nodeMap);
      const allLines = extractedLines.filter(line => isTrainableLine(line, orientation));
      setSkippedUntrainableLines(extractedLines.length - allLines.length);
      setAllExtractedLines(allLines);

      const activeLines = filterRepertoireLines(allLines, filter);

      setLines(activeLines);
      setLineIndex(0);
      setCurrentRound(1);
      setFailedLinesInRound([]);
      setStats(prev => ({
        ...prev,
        currentRound: 1,
        roundTotalLines: activeLines.length,
        roundPassedLines: 0,
      }));
      setIsSessionFinished(activeLines.length === 0);
      setIsLoading(false);

      if (activeLines.length > 0) {
        setupLine(activeLines[0]);
      }
    }

    loadRepertoire();

    return () => {
      if (autoMoveTimerRef.current) clearTimeout(autoMoveTimerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, [activeRepertoireId, filter, orientation, setupLine]);

  // Handle subsequent opponent auto-moves beyond ply 1
  useEffect(() => {
    if (isLoading || isSessionFinished || lines.length === 0) return;
    if (stepIndex < 0 || stepIndex >= activeLine.length) return;

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
          setAttemptsOnCurrentStep(0);
          setStepIndex(prev => prev + 1);
          setFeedback({
            status: 'your_turn',
            message: `Rakip ${opponentMoveNode.san} oynadı. Sıra sende!`,
            attemptsLeft: 3,
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

  // Advance to next line or trigger Next Round
  const advanceToNextLine = useCallback(
    (wasCurrentLineClean: boolean = true) => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      // Record if failed
      let updatedFailedLines = [...failedLinesInRound];
      if (!wasCurrentLineClean || hasFailedCurrentLine) {
        if (!updatedFailedLines.some(l => l === activeLine)) {
          updatedFailedLines.push(activeLine);
          setFailedLinesInRound(updatedFailedLines);
        }
      } else {
        setStats(prev => ({
          ...prev,
          roundPassedLines: prev.roundPassedLines + 1,
        }));
      }

      if (lineIndex + 1 < lines.length) {
        // Next line in current round
        const nextIdx = lineIndex + 1;
        setLineIndex(nextIdx);
        setupLine(lines[nextIdx]);
      } else {
        // End of round reached!
        if (updatedFailedLines.length > 0) {
          // Trigger next round with failed lines
          const nextRoundNum = currentRound + 1;
          setStepIndex(-1);
          setCurrentRound(nextRoundNum);
          setLines(updatedFailedLines);
          setLineIndex(0);
          setFailedLinesInRound([]);
          setStats(prev => ({
            ...prev,
            currentRound: nextRoundNum,
            roundTotalLines: updatedFailedLines.length,
            roundPassedLines: 0,
          }));

          soundEffects.playMove();
          setFeedback({
            status: 'round_transition',
            message: `🔥 ${nextRoundNum}. Tur Başlıyor: Hata yaptığın ${updatedFailedLines.length} varyantı pekiştirelim!`,
          });

          transitionTimerRef.current = setTimeout(() => {
            setupLine(updatedFailedLines[0]);
          }, 1500);
        } else {
          // All lines completed flawlessly!
          setIsSessionFinished(true);
          soundEffects.playComplete();
          setFeedback({
            status: 'complete',
            message: `🎉 Tebrikler! ${currentRound} turda tüm varyantları eksiksiz pekiştirdin.`,
          });
        }
      }
    },
    [lineIndex, lines, activeLine, failedLinesInRound, hasFailedCurrentLine, currentRound, setupLine]
  );

  // Retry / Rewind Current Line
  const retryCurrentLine = useCallback(() => {
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    if (activeLine && activeLine.length > 0) {
      setHasFailedCurrentLine(true);
      setupLine(activeLine, true);
    }
  }, [activeLine, setupLine]);

  // Handle User Move Attempt with 3-Stage Progressive Hint System
  const playUserMove = useCallback(
    async (from: string, to: string, promotion?: string): Promise<boolean> => {
      if (!isUserTurn || stepIndex >= activeLine.length) return false;

      const expectedNode = activeLine[stepIndex];

      try {
        const moveAttempt = chess.move({
          from,
          to,
          promotion: promotion || undefined,
        });

        if (!moveAttempt) return false;

        const playedSan = moveAttempt.san;

        if (playedSan === expectedNode.san) {
          // ===================================
          // CORRECT MOVE
          // ===================================
          soundEffects.playCorrect();

          // Update SRS in DB
          const newSrs = await db.transaction('rw', db.nodes, async () => {
            const latestNode = await db.nodes.get(expectedNode.id);
            if (!latestNode) throw new Error(`Drill node missing: ${expectedNode.id}`);
            const next = calculateNextSRS(latestNode.srs, true);
            await db.nodes.update(expectedNode.id, { srs: next });
            return next;
          });
          setAllExtractedLines(prev => prev.map(line => line.map(node =>
            node.id === expectedNode.id ? { ...node, srs: newSrs } : node
          )));
          setLines(prev => prev.map(line => line.map(node =>
            node.id === expectedNode.id ? { ...node, srs: newSrs } : node
          )));

          // Update Stats
          setStats(prev => {
            const nextStreak = prev.streak + 1;
            return {
              ...prev,
              totalAnswers: prev.totalAnswers + 1,
              correctAnswers: prev.correctAnswers + 1,
              streak: nextStreak,
              maxStreak: Math.max(prev.maxStreak, nextStreak),
            };
          });

          setCurrentFen(expectedNode.fen);
          setLastMove([from, to]);
          setArrows([]);
          setAttemptsOnCurrentStep(0);

          // Check if line complete
          if (stepIndex + 1 >= activeLine.length) {
            soundEffects.playComplete();
            setFeedback({
              status: 'complete',
              message: `🎉 Varyant Tamamlandı: ${expectedNode.san}`,
              comment: expectedNode.comment,
            });

            transitionTimerRef.current = setTimeout(() => {
              advanceToNextLine(!hasFailedCurrentLine);
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
          // ===================================
          // WRONG MOVE: Progressive Hint System
          // ===================================
          soundEffects.playMistake();
          setHasFailedCurrentLine(true);

          const nextAttempt = attemptsOnCurrentStep + 1;
          setAttemptsOnCurrentStep(nextAttempt);

          // Update SRS in DB (Failed)
          const newSrs = await db.transaction('rw', db.nodes, async () => {
            const latestNode = await db.nodes.get(expectedNode.id);
            if (!latestNode) throw new Error(`Drill node missing: ${expectedNode.id}`);
            const next = calculateNextSRS(latestNode.srs, false);
            await db.nodes.update(expectedNode.id, { srs: next });
            return next;
          });
          setAllExtractedLines(prev => prev.map(line => line.map(node =>
            node.id === expectedNode.id ? { ...node, srs: newSrs } : node
          )));
          setLines(prev => prev.map(line => line.map(node =>
            node.id === expectedNode.id ? { ...node, srs: newSrs } : node
          )));

          setStats(prev => ({
            ...prev,
            totalAnswers: prev.totalAnswers + 1,
            streak: 0,
          }));

          if (nextAttempt === 1) {
            // Stage 1: 1st Mistake -> Undo move on board, allow retry (2 attempts left)
            setArrows([]);
            setFeedback({
              status: 'wrong',
              message: '❌ Yanlış hamle! Tekrar dene. (2 hakkın kaldı)',
              attemptsLeft: 2,
            });
            return false;
          } else if (nextAttempt === 2) {
            // Stage 2: 2nd Mistake -> Highlight piece origin square with glowing yellow brush (1 attempt left)
            setArrows([
              {
                orig: expectedNode.from,
                brush: 'yellow',
              },
            ]);
            setFeedback({
              status: 'hint',
              message: '⚠️ İpucu: Sarı ile parıldayan taşı oynamalısın! (1 hakkın kaldı)',
              attemptsLeft: 1,
            });
            return false;
          } else {
            // Stage 3: 3rd Mistake -> Reveal correct move with green arrow, play it automatically, queue for next round
            setArrows([
              {
                orig: expectedNode.from,
                dest: expectedNode.to,
                brush: 'green',
              },
            ]);

            setFeedback({
              status: 'wrong',
              message: `❌ 3. Hata! Doğru hamle: ${expectedNode.san}`,
              expectedSan: expectedNode.san,
              comment: expectedNode.comment,
              attemptsLeft: 0,
            });

            // Automatically play expected move after 1s and advance
            transitionTimerRef.current = setTimeout(() => {
              setCurrentFen(expectedNode.fen);
              setLastMove([expectedNode.from, expectedNode.to]);
              transitionTimerRef.current = setTimeout(() => {
                advanceToNextLine(false);
              }, 1200);
            }, 800);

            return false;
          }
        }
      } catch (err) {
        console.error('Invalid move attempt in drill:', err);
        return false;
      }
    },
    [isUserTurn, stepIndex, activeLine, chess, attemptsOnCurrentStep, hasFailedCurrentLine, advanceToNextLine]
  );

  // Restart entire session
  const restartSession = useCallback(() => {
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    const activeLines = filterRepertoireLines(allExtractedLines, filter);

    setLines(activeLines);
    setLineIndex(0);
    setCurrentRound(1);
    setFailedLinesInRound([]);
    setStats({
      totalAnswers: 0,
      correctAnswers: 0,
      streak: 0,
      maxStreak: 0,
      currentRound: 1,
      roundTotalLines: activeLines.length,
      roundPassedLines: 0,
    });
    setIsSessionFinished(activeLines.length === 0);
    if (activeLines.length > 0) {
      setupLine(activeLines[0]);
    }
  }, [allExtractedLines, filter, setupLine]);

  // Apply a new custom filter
  const changeFilter = useCallback(
    (newFilter: DrillFilterType) => {
      setFilter(newFilter);
    },
    []
  );

  return {
    allExtractedLines,
    skippedUntrainableLines,
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
    filter,
    isUserTurn,
    isSessionFinished,
    isLoading,
    playUserMove,
    retryCurrentLine,
    advanceToNextLine,
    restartSession,
    changeFilter,
  };
}
