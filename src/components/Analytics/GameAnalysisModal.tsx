import React, { useState, useEffect, useMemo } from 'react';
import { Chess } from 'chess.js';
import type { ImportedGame } from '../../types/analytics';
import type { RepertoireNode, RepertoireColor, DrawShape } from '../../types/chess';
import { ChessgroundBoard } from '../Chessboard/ChessgroundBoard';
import { EvalBar } from '../Chessboard/EvalBar';
import { useEvaluation } from '../../hooks/useEvaluation';
import { normalizeFen, STARTING_FEN, parseUci } from '../../utils/chessHelpers';
import { ECO_BOOK } from '../../data/ecoBook';
import { db } from '../../db/db';
import { 
  classifyMove, 
  MOVE_QUALITY_MAP, 
  type MoveQuality, 
  type ClassificationResult 
} from '../../utils/moveClassifier';
import { GameReviewService } from '../../services/gameReviewService';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsRight, 
  ChevronsLeft,
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  Check, 
  ExternalLink,
  Cpu,
  Users
} from 'lucide-react';

interface GameAnalysisModalProps {
  game: ImportedGame | null;
  whiteNodes: Map<string, RepertoireNode>;
  blackNodes: Map<string, RepertoireNode>;
  onClose: () => void;
  onRefreshRepertoire?: () => void;
}

interface MoveStep {
  ply: number;
  moveNumber: number;
  turn: 'w' | 'b';
  san: string;
  uci: string;
  from: string;
  to: string;
  fen: string;
  prevFen: string;
  normFen: string;
  isUserMove: boolean;
  isInRepertoire: boolean;
  expectedRepertoireSan?: string;
  isDeviationStep: boolean;
  isInMasterBook: boolean;
}

export const GameAnalysisModal: React.FC<GameAnalysisModalProps> = ({
  game,
  whiteNodes,
  blackNodes,
  onClose,
  onRefreshRepertoire,
}) => {
  const [currentPly, setCurrentPly] = useState<number>(0);
  const [savedSteps, setSavedSteps] = useState<Set<number>>(new Set());
  const [stepClassifications, setStepClassifications] = useState<Map<number, ClassificationResult>>(new Map());
  const [isFullAnalysisRunning, setIsFullAnalysisRunning] = useState<boolean>(false);

  // Parse PGN to sequential step list
  const steps: MoveStep[] = useMemo(() => {
    if (!game || !game.pgn) return [];

    const tempChess = new Chess();
    try {
      tempChess.loadPgn(game.pgn);
    } catch (e) {
      console.warn('Could not parse PGN:', e);
      return [];
    }

    const history = tempChess.history({ verbose: true });
    const replayChess = new Chess();
    const resultSteps: MoveStep[] = [];

    const userColor: RepertoireColor = game.userColor;
    const userNodes = userColor === 'white' ? whiteNodes : blackNodes;

    let hasDeviated = false;

    // Fast Normalized FEN lookup map for user's repertoire
    const repFenMap = new Map<string, RepertoireNode>();
    for (const node of userNodes.values()) {
      repFenMap.set(node.normalizedFen, node);
    }

    for (let i = 0; i < history.length; i++) {
      const h = history[i];
      const prevFen = replayChess.fen();
      const prevNormFen = normalizeFen(prevFen);
      
      replayChess.move(h.san);
      
      const currentNormFen = normalizeFen(replayChess.fen());
      const moveNumber = Math.floor(i / 2) + 1;
      const turn: 'w' | 'b' = i % 2 === 0 ? 'w' : 'b';
      const isUserMove = (userColor === 'white' && turn === 'w') || (userColor === 'black' && turn === 'b');

      // Check user repertoire match
      const matchingRepNode = repFenMap.get(currentNormFen);
      const parentRepNode = repFenMap.get(prevNormFen);
      const isInRepertoire = !!matchingRepNode;

      let isDeviationStep = false;
      let expectedRepertoireSan: string | undefined = undefined;

      if (isUserMove && !hasDeviated) {
        if (!isInRepertoire) {
          isDeviationStep = true;
          hasDeviated = true;
          // Find what user had saved from previous position
          if (parentRepNode && parentRepNode.childrenIds?.length > 0) {
            const childNode = userNodes.get(parentRepNode.childrenIds[0]);
            expectedRepertoireSan = childNode?.san;
          }
        }
      }

      // Check Master ECO Book
      const isInMasterBook = !!ECO_BOOK[currentNormFen];

      resultSteps.push({
        ply: i + 1,
        moveNumber,
        turn,
        san: h.san,
        uci: `${h.from}${h.to}`,
        from: h.from,
        to: h.to,
        fen: replayChess.fen(),
        prevFen,
        normFen: currentNormFen,
        isUserMove,
        isInRepertoire,
        expectedRepertoireSan,
        isDeviationStep,
        isInMasterBook,
      });
    }

    return resultSteps;
  }, [game, whiteNodes, blackNodes]);

  // Jump to start on game change & initialize opening book classifications
  useEffect(() => {
    setCurrentPly(0);
    setSavedSteps(new Set());

    const initialMap = new Map<number, ClassificationResult>();
    steps.forEach((step) => {
      if (step.ply <= 24 && step.isInMasterBook) {
        initialMap.set(step.ply, {
          quality: 'book',
          badge: MOVE_QUALITY_MAP.book,
          winDrop: 0,
          accuracy: 100,
        });
      }
    });
    setStepClassifications(initialMap);
  }, [game, steps]);

  // Progressive Dedicated Game Review (Cloud + Local Stockfish Worker)
  useEffect(() => {
    if (!steps || steps.length === 0) return;

    setIsFullAnalysisRunning(true);
    const reviewer = new GameReviewService();
    const evalMap = new Map<number, { cp: number; bestMove?: string }>();
    evalMap.set(0, { cp: 20 }); // Starting standard equal position

    const positionsToAnalyze = [
      ...steps.map(s => ({ ply: s.ply, fen: s.fen, turn: s.turn === 'w' ? 'b' as const : 'w' as const }))
    ];

    reviewer.analyzePositions(positionsToAnalyze, (point) => {
      evalMap.set(point.ply, { cp: point.cp, bestMove: point.bestMove });

      const step = steps.find(s => s.ply === point.ply);
      if (step) {
        const prevEval = evalMap.get(step.ply - 1) || { cp: 20 };
        const currEval = evalMap.get(step.ply);

        if (currEval) {
          const classification = classifyMove({
            prevFen: step.prevFen,
            playedUci: step.uci,
            playedSan: step.san,
            turn: step.turn,
            bestMoveUci: prevEval.bestMove,
            prevCp: prevEval.cp,
            currentCp: currEval.cp,
            plyNumber: step.ply,
          });

          if (classification) {
            setStepClassifications(prev => {
              const next = new Map(prev);
              next.set(step.ply, classification);
              return next;
            });
          }
        }
      }
    }).finally(() => {
      setIsFullAnalysisRunning(false);
    });

    return () => {
      reviewer.cancel();
    };
  }, [steps]);

  // Current position FEN & Chess instance
  const currentStep = currentPly > 0 ? steps[currentPly - 1] : null;
  const currentFen = currentStep ? currentStep.fen : STARTING_FEN;
  const normFen = currentStep ? currentStep.normFen : normalizeFen(STARTING_FEN);

  const currentChess = useMemo(() => {
    return new Chess(currentFen);
  }, [currentFen]);

  const evaluation = useEvaluation(currentFen, currentChess.turn());

  const orientation: RepertoireColor = game?.userColor || 'white';

  // Navigation Handlers
  const goToStart = () => setCurrentPly(0);
  const goBack = () => setCurrentPly(prev => Math.max(0, prev - 1));
  const goForward = () => setCurrentPly(prev => Math.min(steps.length, prev + 1));
  const goToEnd = () => setCurrentPly(steps.length);

  // Keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goBack();
      if (e.key === 'ArrowRight') goForward();
      if (e.key === 'Home') goToStart();
      if (e.key === 'End') goToEnd();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [steps.length]);

  // Master book moves for current position
  const masterMoves = useMemo(() => {
    const entry = ECO_BOOK[normFen];
    return entry?.moves?.slice(0, 3) || [];
  }, [normFen]);

  // Top Engine Moves
  const topEngineMoves = evaluation.topMoves || (evaluation.bestMove ? [{
    uci: evaluation.bestMove,
    from: evaluation.bestMove.slice(0, 2),
    to: evaluation.bestMove.slice(2, 4),
    type: evaluation.type,
    value: evaluation.value,
    depth: evaluation.depth,
    rank: 1,
    san: evaluation.bestMove,
  }] : []);

  // Board shapes: Silik/Ghost Arrow for Stockfish best move
  const boardShapes = useMemo<DrawShape[]>(() => {
    const shapes: DrawShape[] = [];
    if (evaluation.bestMove && evaluation.bestMove.length >= 4) {
      const { from, to } = parseUci(evaluation.bestMove);
      shapes.push({
        orig: from,
        dest: to,
        brush: 'paleGreen', // Transparent ghost arrow for engine recommendation
      });
    }
    return shapes;
  }, [evaluation.bestMove]);

  // Compute Overall Game Accuracy & Badge Counts for White and Black
  const accuracyStats = useMemo(() => {
    let whiteAccSum = 0;
    let whiteCount = 0;
    let blackAccSum = 0;
    let blackCount = 0;

    const badgeCounts: Record<MoveQuality, number> = {
      brilliant: 0,
      best: 0,
      book: 0,
      excellent: 0,
      good: 0,
      inaccuracy: 0,
      mistake: 0,
      blunder: 0,
      miss: 0,
    };

    steps.forEach(s => {
      const c = stepClassifications.get(s.ply);
      if (c) {
        badgeCounts[c.quality] = (badgeCounts[c.quality] || 0) + 1;
        if (s.turn === 'w') {
          whiteAccSum += c.accuracy;
          whiteCount++;
        } else {
          blackAccSum += c.accuracy;
          blackCount++;
        }
      }
    });

    return {
      whiteAccuracy: whiteCount > 0 ? Math.round(whiteAccSum / whiteCount) : 0,
      blackAccuracy: blackCount > 0 ? Math.round(blackAccSum / blackCount) : 0,
      badgeCounts,
      analyzedCount: whiteCount + blackCount,
    };
  }, [steps, stepClassifications]);

  // Current move classification result
  const currentClassification = currentStep ? stepClassifications.get(currentStep.ply) : null;

  // Save current step to user's repertoire
  const handleSaveToRepertoire = async () => {
    if (!currentStep || !game) return;

    const repertoireId = game.userColor === 'white' ? 'default-white' : 'default-black';
    const repNodes = game.userColor === 'white' ? whiteNodes : blackNodes;

    // Check parent
    const prevFen = currentPly > 1 ? steps[currentPly - 2].fen : STARTING_FEN;
    const prevNorm = normalizeFen(prevFen);

    let parentId: string | null = null;
    for (const node of repNodes.values()) {
      if (node.normalizedFen === prevNorm) {
        parentId = node.id;
        break;
      }
    }

    const newNodeId = crypto.randomUUID();
    const newNode: RepertoireNode = {
      id: newNodeId,
      repertoireId,
      fen: currentStep.fen,
      normalizedFen: currentStep.normFen,
      san: currentStep.san,
      uci: `${currentStep.from}${currentStep.to}`,
      from: currentStep.from,
      to: currentStep.to,
      turn: currentStep.turn === 'w' ? 'b' : 'w',
      moveNumber: currentStep.moveNumber,
      parentId,
      childrenIds: [],
      createdAt: Date.now(),
      comment: `Maçtan eklendi: vs ${game.opponentUsername}`,
    };

    await db.nodes.put(newNode);

    if (parentId) {
      const parentNode = repNodes.get(parentId);
      if (parentNode) {
        const updatedChildren = Array.from(new Set([...(parentNode.childrenIds || []), newNodeId]));
        await db.nodes.update(parentId, { childrenIds: updatedChildren });
      }
    }

    setSavedSteps(prev => new Set(prev).add(currentPly));
    if (onRefreshRepertoire) onRefreshRepertoire();
  };

  const formatScore = (val: number, type: 'cp' | 'mate') => {
    if (type === 'mate') return `#${val}`;
    const sign = val > 0 ? '+' : '';
    return `${sign}${(val / 100).toFixed(1)}`;
  };

  if (!game) return null;

  const isWin = game.result === 'win';
  const isLoss = game.result === 'loss';

  const lastMove: [string, string] | undefined = currentStep
    ? [currentStep.from, currentStep.to]
    : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-zinc-950/85 backdrop-blur-md font-sans overflow-x-hidden">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-5xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden relative">
        {/* Top Header */}
        <div className="p-3 sm:p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <span
              className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-xs ${
                isWin
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : isLoss
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
              }`}
            >
              {isWin ? 'G' : isLoss ? 'M' : 'B'}
            </span>

            <div>
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-zinc-100">
                <span>vs {game.opponentUsername}</span>
                {game.opponentRating && (
                  <span className="text-[11px] text-zinc-500 font-mono">({game.opponentRating})</span>
                )}
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                  {game.userColor === 'white' ? '⚪ Beyaz' : '⚫ Siyah'}
                </span>
              </div>
              <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-2">
                <span>{game.openingName || game.eco || 'Satranç Maçı'}</span>
                <span>•</span>
                <span>{new Date(game.date).toLocaleDateString('tr-TR')}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {game.url && (
              <a
                href={game.url}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 sm:p-2 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 rounded-xl transition cursor-pointer"
                title="Lichess / Chess.com'da Aç"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-xl transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game Review & Accuracy KPI Summary Bar */}
        <div className="px-3 sm:px-4 py-2 bg-zinc-950/90 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
          <div className="flex items-center gap-3">
            {/* White Accuracy */}
            <div className="flex items-center gap-1.5 bg-zinc-900 px-2.5 py-1 rounded-xl border border-zinc-800">
              <span className="text-[11px] text-zinc-400">⚪ Beyaz İsabet:</span>
              <strong className="font-mono font-bold text-zinc-100">%{accuracyStats.whiteAccuracy}</strong>
            </div>

            {/* Black Accuracy */}
            <div className="flex items-center gap-1.5 bg-zinc-900 px-2.5 py-1 rounded-xl border border-zinc-800">
              <span className="text-[11px] text-zinc-400">⚫ Siyah İsabet:</span>
              <strong className="font-mono font-bold text-zinc-100">%{accuracyStats.blackAccuracy}</strong>
            </div>
          </div>

          {/* Badge Breakdown Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 text-[10px] font-mono">
            {accuracyStats.badgeCounts.brilliant > 0 && (
              <span className="px-2 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center gap-1">
                <span>💎</span>
                <span>{accuracyStats.badgeCounts.brilliant}</span>
              </span>
            )}
            {accuracyStats.badgeCounts.best > 0 && (
              <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center gap-1">
                <span>⭐</span>
                <span>{accuracyStats.badgeCounts.best}</span>
              </span>
            )}
            {accuracyStats.badgeCounts.book > 0 && (
              <span className="px-2 py-0.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold flex items-center gap-1">
                <span>📖</span>
                <span>{accuracyStats.badgeCounts.book}</span>
              </span>
            )}
            {accuracyStats.badgeCounts.inaccuracy > 0 && (
              <span className="px-2 py-0.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold flex items-center gap-1">
                <span>⚠️</span>
                <span>{accuracyStats.badgeCounts.inaccuracy}</span>
              </span>
            )}
            {accuracyStats.badgeCounts.mistake > 0 && (
              <span className="px-2 py-0.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold flex items-center gap-1">
                <span>❌</span>
                <span>{accuracyStats.badgeCounts.mistake}</span>
              </span>
            )}
            {accuracyStats.badgeCounts.blunder > 0 && (
              <span className="px-2 py-0.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-bold flex items-center gap-1">
                <span>💥</span>
                <span>{accuracyStats.badgeCounts.blunder}</span>
              </span>
            )}
            {isFullAnalysisRunning && (
              <span className="text-[10px] text-zinc-500 italic animate-pulse">
                Analiz ediliyor...
              </span>
            )}
          </div>
        </div>

        {/* Modal Main Content: Split Grid */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start custom-scrollbar">
          {/* Left Column: Board + Eval Bar + Navigation Controls */}
          <div className="lg:col-span-7 flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3 w-full max-w-[480px]">
              <EvalBar evaluation={evaluation} orientation={orientation} />

              <div className="flex-1 aspect-square max-w-[430px] relative">
                <ChessgroundBoard
                  fen={currentFen}
                  orientation={orientation}
                  chess={currentChess}
                  onMove={() => {}}
                  lastMove={lastMove}
                  shapes={boardShapes}
                />

                {/* Floating Move Quality Badge Overlay on Board */}
                {currentClassification && (
                  <div className={`absolute bottom-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-xl shadow-lg backdrop-blur-md border ${currentClassification.badge.bgColor} ${currentClassification.badge.borderColor} ${currentClassification.badge.textColor} font-bold text-xs animate-fade-in`}>
                    <span className="text-sm">{currentClassification.badge.icon}</span>
                    <span>{currentClassification.badge.label}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons Bar */}
            <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 p-2 rounded-2xl w-full max-w-[480px]">
              <div className="flex items-center gap-1">
                <button
                  onClick={goToStart}
                  disabled={currentPly === 0}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Başlangıca Git (Home)"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={goBack}
                  disabled={currentPly === 0}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Geri (Sol Ok)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-zinc-300">
                  {currentPly} / {steps.length}
                </span>
                {evaluation.bestMove && (
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span>💡 En İyi:</span>
                    <strong>{topEngineMoves[0]?.san || evaluation.bestMove}</strong>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={goForward}
                  disabled={currentPly >= steps.length}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="İleri (Sağ Ok)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={goToEnd}
                  disabled={currentPly >= steps.length}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Sona Git (End)"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Step Inspector, Top Moves, Deviation & Move Grid */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Move Quality & Deviation Inspector Card */}
            {currentStep ? (
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-zinc-100">
                      {currentStep.moveNumber}.{currentStep.turn === 'b' ? '..' : ''} {currentStep.san}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      ({currentStep.isUserMove ? 'Senin Hamlen' : 'Rakip Hamlesi'})
                    </span>
                  </div>

                  {/* Save to Repertoire Button */}
                  {currentStep.isUserMove && (
                    <button
                      onClick={handleSaveToRepertoire}
                      disabled={currentStep.isInRepertoire || savedSteps.has(currentPly)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                        currentStep.isInRepertoire || savedSteps.has(currentPly)
                          ? 'bg-zinc-800 text-amber-400 border border-amber-500/30'
                          : 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20'
                      }`}
                    >
                      {currentStep.isInRepertoire || savedSteps.has(currentPly) ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Kayıtlı</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Repertuvara Ekle</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Move Quality Badge Card */}
                {currentClassification && (
                  <div className={`p-3 rounded-xl border ${currentClassification.badge.bgColor} ${currentClassification.badge.borderColor} flex items-start gap-2.5`}>
                    <span className="text-xl shrink-0 mt-0.5">{currentClassification.badge.icon}</span>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-bold text-xs ${currentClassification.badge.textColor}`}>
                          {currentClassification.badge.label}
                        </span>
                        {currentClassification.winDrop > 0 && (
                          <span className="text-[10px] font-mono text-zinc-400">
                            -%{currentClassification.winDrop} kazanma kaybı
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-relaxed">
                        {currentClassification.badge.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Deviation Status */}
                {currentStep.isDeviationStep ? (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 flex items-start gap-2 text-xs text-amber-300">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5 text-[11px]">
                      <div className="font-bold">⚡ REPERTUARDAN SAPMA NOKTASI</div>
                      <p className="text-zinc-300">
                        Repertuvarının dışına çıktın.
                        {currentStep.expectedRepertoireSan && (
                          <span> Kayıtlı hamle: <strong className="text-amber-400 font-mono">{currentStep.expectedRepertoireSan}</strong></span>
                        )}
                      </p>
                    </div>
                  </div>
                ) : currentStep.isInRepertoire ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2 flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Repertuvarına Tam Uyumlu</span>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Side-by-Side: Master Moves vs Top-3 Engine Moves */}
            <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-2.5 rounded-2xl border border-zinc-800 text-[11px]">
              {/* Left: Master Moves */}
              <div className="space-y-1.5 border-r border-zinc-800/80 pr-2">
                <div className="flex items-center gap-1 font-bold text-zinc-300 text-[10px]">
                  <Users className="w-3 h-3 text-amber-400" />
                  <span>Usta Tercihleri</span>
                </div>
                {masterMoves.length === 0 ? (
                  <div className="text-zinc-600 italic text-[10px] py-2">Teori sonu</div>
                ) : (
                  masterMoves.map((m: any, idx: number) => {
                    const totalG = (m.white || 0) + (m.draws || 0) + (m.black || 0);
                    return (
                      <div key={m.uci} className="flex items-center justify-between text-[10px] font-mono bg-zinc-900/60 p-1 rounded">
                        <span className="font-bold text-zinc-200">{idx + 1}. {m.san}</span>
                        <span className="text-zinc-500">{totalG > 0 ? `${totalG.toLocaleString()} m` : ''}</span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Right: Stockfish Top 3 */}
              <div className="space-y-1.5 pl-1">
                <div className="flex items-center gap-1 font-bold text-zinc-300 text-[10px]">
                  <Cpu className="w-3 h-3 text-emerald-400" />
                  <span>Stockfish Top 3</span>
                </div>
                {topEngineMoves.length === 0 ? (
                  <div className="text-zinc-600 italic text-[10px] py-2">Hesaplanıyor...</div>
                ) : (
                  topEngineMoves.map((m) => (
                    <div key={m.uci} className="flex items-center justify-between text-[10px] font-mono bg-zinc-900/60 p-1 rounded">
                      <span className="font-bold text-emerald-300">{m.rank}. {m.san || m.uci}</span>
                      <span className="text-zinc-400">{formatScore(m.value, m.type)}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Move Grid / PGN Explorer with Badges */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 flex flex-col">
              <div className="flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-zinc-800">
                <span>Maç Hamle Listesi</span>
                <span className="font-mono text-zinc-500">Rozetli Analiz</span>
              </div>

              <div className="flex-1 max-h-[170px] overflow-y-auto pr-1 space-y-1 font-mono text-xs custom-scrollbar">
                {Array.from({ length: Math.ceil(steps.length / 2) }).map((_, moveIdx) => {
                  const whiteStep = steps[moveIdx * 2];
                  const blackStep = steps[moveIdx * 2 + 1];
                  const moveNumber = moveIdx + 1;

                  const whiteClass = whiteStep ? stepClassifications.get(whiteStep.ply) : null;
                  const blackClass = blackStep ? stepClassifications.get(blackStep.ply) : null;

                  return (
                    <div key={moveNumber} className="flex items-center gap-2 py-0.5">
                      <span className="w-6 text-zinc-600 text-[11px]">{moveNumber}.</span>

                      {/* White Move */}
                      {whiteStep && (
                        <button
                          onClick={() => setCurrentPly(whiteStep.ply)}
                          className={`flex-1 text-left px-2 py-1 rounded-lg transition cursor-pointer flex items-center justify-between ${
                            currentPly === whiteStep.ply
                              ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                              : whiteStep.isDeviationStep
                              ? 'bg-amber-950/40 text-amber-400 border border-amber-600/30'
                              : 'text-zinc-300 hover:bg-zinc-900'
                          }`}
                        >
                          <span className="truncate">{whiteStep.san}</span>
                          <span className="shrink-0 flex items-center gap-1 text-[11px]">
                            {whiteClass ? (
                              <span title={whiteClass.badge.label}>{whiteClass.badge.icon}</span>
                            ) : whiteStep.isDeviationStep ? (
                              <AlertTriangle className="w-3 h-3 text-amber-400" />
                            ) : null}
                          </span>
                        </button>
                      )}

                      {/* Black Move */}
                      {blackStep && (
                        <button
                          onClick={() => setCurrentPly(blackStep.ply)}
                          className={`flex-1 text-left px-2 py-1 rounded-lg transition cursor-pointer flex items-center justify-between ${
                            currentPly === blackStep.ply
                              ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                              : blackStep.isDeviationStep
                              ? 'bg-amber-950/40 text-amber-400 border border-amber-600/30'
                              : 'text-zinc-300 hover:bg-zinc-900'
                          }`}
                        >
                          <span className="truncate">{blackStep.san}</span>
                          <span className="shrink-0 flex items-center gap-1 text-[11px]">
                            {blackClass ? (
                              <span title={blackClass.badge.label}>{blackClass.badge.icon}</span>
                            ) : blackStep.isDeviationStep ? (
                              <AlertTriangle className="w-3 h-3 text-amber-400" />
                            ) : null}
                          </span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
