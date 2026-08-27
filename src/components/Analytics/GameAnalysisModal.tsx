import React, { useState, useEffect, useMemo } from 'react';
import { Chess } from 'chess.js';
import type { ImportedGame } from '../../types/analytics';
import type { RepertoireNode, RepertoireColor } from '../../types/chess';
import { ChessgroundBoard } from '../Chessboard/ChessgroundBoard';
import { EvalBar } from '../Chessboard/EvalBar';
import { useEvaluation } from '../../hooks/useEvaluation';
import { normalizeFen, STARTING_FEN } from '../../utils/chessHelpers';
import { ECO_BOOK } from '../../data/ecoBook';
import { db } from '../../db/db';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsRight, 
  ChevronsLeft,
  AlertTriangle, 
  CheckCircle2, 
  BookOpen, 
  Plus, 
  Check, 
  Sparkles,
  ExternalLink
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
  from: string;
  to: string;
  fen: string;
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
      const prevNormFen = normalizeFen(replayChess.fen());
      
      replayChess.move(h.san);
      
      const currentNormFen = normalizeFen(replayChess.fen());
      const moveNumber = Math.floor(i / 2) + 1;
      const turn = i % 2 === 0 ? 'w' : 'b';
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
        from: h.from,
        to: h.to,
        fen: replayChess.fen(),
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

  // Jump to start on game change
  useEffect(() => {
    setCurrentPly(0);
    setSavedSteps(new Set());
  }, [game]);

  // Current position FEN & Chess instance
  const currentStep = currentPly > 0 ? steps[currentPly - 1] : null;
  const currentFen = currentStep ? currentStep.fen : STARTING_FEN;

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

  if (!game) return null;

  const isWin = game.result === 'win';
  const isLoss = game.result === 'loss';

  const lastMove: [string, string] | undefined = currentStep
    ? [currentStep.from, currentStep.to]
    : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-zinc-950/85 backdrop-blur-md font-sans">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60">
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
              <div className="flex items-center gap-2 font-bold text-sm text-zinc-100">
                <span>vs {game.opponentUsername}</span>
                {game.opponentRating && (
                  <span className="text-xs text-zinc-500 font-mono">({game.opponentRating})</span>
                )}
                <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                  {game.userColor === 'white' ? '⚪ Beyaz' : '⚫ Siyah'}
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                {game.openingName || game.eco || 'Satranç Maçı'} • {new Date(game.date).toLocaleDateString('tr-TR')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {game.url && (
              <a
                href={game.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 rounded-xl transition cursor-pointer"
                title="Lichess / Chess.com'da Aç"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-xl transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Grid */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Board + Eval Bar + Navigation Controls */}
          <div className="lg:col-span-7 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3.5 w-full max-w-[480px]">
              <EvalBar evaluation={evaluation} orientation={orientation} />

              <div className="flex-1 aspect-square max-w-[430px]">
                <ChessgroundBoard
                  fen={currentFen}
                  orientation={orientation}
                  chess={currentChess}
                  onMove={() => {}}
                  lastMove={lastMove}
                />
              </div>
            </div>

            {/* Navigation Buttons Bar */}
            <div className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 p-2 rounded-2xl w-full max-w-[480px]">
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

              <span className="text-xs font-mono font-bold text-zinc-300 px-3">
                {currentPly} / {steps.length}
              </span>

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

          {/* Right Column: Step Inspector, Deviation Info & Move Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Deviation & Theory Status Banner */}
            {currentStep ? (
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2.5">
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
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
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

                {/* Status Badges */}
                {currentStep.isDeviationStep ? (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-300">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="font-bold">⚡ REPERTUARDAN SAPMA NOKTASI</div>
                      <p className="text-[11px] text-zinc-300">
                        Bu hamlede kendi hazırladığın repertuvarın dışına çıktın.
                        {currentStep.expectedRepertoireSan && (
                          <span> Repertuvarındaki kayıtlı hamle: <strong className="text-amber-400 font-mono">{currentStep.expectedRepertoireSan}</strong></span>
                        )}
                      </p>
                    </div>
                  </div>
                ) : currentStep.isInRepertoire ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Repertuvarına Tam Uyumlu</span>
                  </div>
                ) : currentStep.isInMasterBook ? (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-2.5 flex items-center gap-2 text-xs text-blue-300">
                    <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Büyükusta Teorisi (Master DB)</span>
                  </div>
                ) : (
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 flex items-center gap-2 text-xs text-zinc-400">
                    <Sparkles className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span>Teori Dışı / Orta Oyun Hamlesi</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-500 text-center">
                Başlangıç Konumu. Hamleleri ilerletmek için sağ ok tuşuna basın.
              </div>
            )}

            {/* Move Grid / PGN Explorer */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 flex flex-col">
              <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2 pb-2 border-b border-zinc-800">
                Maç Hamle Listesi
              </div>

              <div className="flex-1 max-h-[220px] overflow-y-auto pr-1 space-y-1 font-mono text-xs">
                {Array.from({ length: Math.ceil(steps.length / 2) }).map((_, moveIdx) => {
                  const whiteStep = steps[moveIdx * 2];
                  const blackStep = steps[moveIdx * 2 + 1];
                  const moveNumber = moveIdx + 1;

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
                          <span>{whiteStep.san}</span>
                          {whiteStep.isDeviationStep && <AlertTriangle className="w-3 h-3 text-amber-400" />}
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
                          <span>{blackStep.san}</span>
                          {blackStep.isDeviationStep && <AlertTriangle className="w-3 h-3 text-amber-400" />}
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
