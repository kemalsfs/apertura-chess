import React, { useState, useCallback } from 'react';
import { useDrillSession } from '../../hooks/useDrillSession';
import { useEvaluation } from '../../hooks/useEvaluation';
import { ChessgroundBoard } from '../Chessboard/ChessgroundBoard';
import { EvalBar } from '../Chessboard/EvalBar';
import { DrillHeader } from './DrillHeader';
import { DrillFeedback } from './DrillFeedback';
import { DrillSummaryModal } from './DrillSummaryModal';
import { DrillVariantManagerModal } from './DrillVariantManagerModal';
import type { Repertoire, RepertoireColor } from '../../types/chess';
import { Layers, ArrowRight, RotateCcw } from 'lucide-react';

interface DrillViewProps {
  repertoires: Repertoire[];
  activeRepertoireId: string;
  orientation: RepertoireColor;
  onExit: () => void;
  onOpenVariantOnBoard?: (nodeId: string) => void;
}

export const DrillView: React.FC<DrillViewProps> = ({
  repertoires,
  activeRepertoireId,
  orientation,
  onExit,
  onOpenVariantOnBoard,
}) => {
  const [isVariantManagerOpen, setIsVariantManagerOpen] = useState(false);

  const {
    allExtractedLines,
    lines,
    lineIndex,
    currentFen,
    chess,
    lastMove,
    arrows,
    feedback,
    stats,
    filter,
    isSessionFinished,
    isLoading,
    playUserMove,
    retryCurrentLine,
    advanceToNextLine,
    restartSession,
    changeFilter,
  } = useDrillSession(activeRepertoireId, orientation);

  const evaluation = useEvaluation(currentFen, chess.turn());

  const activeRep = repertoires.find(r => r.id === activeRepertoireId);
  const repName = activeRep ? activeRep.name : 'Repertuvar';

  const handleMove = useCallback(
    (orig: string, dest: string) => {
      playUserMove(orig, dest);
    },
    [playUserMove]
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24 text-zinc-500 text-sm">
        Antrenman varyantları yükleniyor...
      </div>
    );
  }

  // If no lines recorded in this repertoire
  if (lines.length === 0 && allExtractedLines.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center max-w-md mx-auto my-12 shadow-2xl">
        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-400">
          <Layers className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-bold text-zinc-100 mb-2">Repertuvarda Hamle Bulunamadı</h2>
        <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
          Drill antrenmanı yapabilmek için önce Açılış Ağacı sekmesinden tahta üzerinde varyantlar oluşturup kaydetmelisin.
        </p>
        <button
          onClick={onExit}
          className="flex items-center justify-center gap-2 w-full py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer shadow-md"
        >
          <span>Açılış Ağacına Git</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      {/* Top Drill Navigation & Progress Header */}
      <DrillHeader
        repertoireName={repName}
        currentLineIndex={lineIndex}
        totalLines={lines.length}
        stats={stats}
        currentFilter={filter}
        onExit={onExit}
        onRestart={restartSession}
        onOpenVariantManager={() => setIsVariantManagerOpen(true)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Board + Eval Bar */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3.5 w-full max-w-[560px] mx-auto">
            {/* Eval Bar */}
            <EvalBar evaluation={evaluation} orientation={orientation} />

            {/* Board */}
            <div className="flex-1 aspect-square max-w-[500px]">
              <ChessgroundBoard
                fen={currentFen}
                orientation={orientation}
                chess={chess}
                onMove={handleMove}
                lastMove={lastMove}
                shapes={arrows}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Feedback, Comments, and Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <DrillFeedback feedback={feedback} onRetryLine={retryCurrentLine} />

          {/* Action Bar: Restart Line or Skip */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center justify-between shadow-sm">
            <button
              onClick={retryCurrentLine}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold transition cursor-pointer border border-zinc-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Varyantı Baştan Al</span>
            </button>

            <button
              onClick={() => advanceToNextLine(false)}
              className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-xs font-medium transition cursor-pointer"
            >
              Sonraki Varyant
            </button>
          </div>
        </div>
      </div>

      {/* Variant Manager Filter Modal */}
      <DrillVariantManagerModal
        isOpen={isVariantManagerOpen}
        allLines={allExtractedLines}
        currentFilter={filter}
        onSelectFilter={changeFilter}
        onClose={() => setIsVariantManagerOpen(false)}
        onOpenOnBoard={(nodeId) => {
          setIsVariantManagerOpen(false);
          if (onOpenVariantOnBoard) {
            onOpenVariantOnBoard(nodeId);
          }
        }}
      />

      {/* End of Session Summary Modal */}
      <DrillSummaryModal
        isOpen={isSessionFinished}
        stats={stats}
        totalLines={lines.length}
        onRestart={restartSession}
        onExit={onExit}
      />
    </div>
  );
};