import React, { useCallback } from 'react';
import { useDrillSession } from '../../hooks/useDrillSession';
import { useEvaluation } from '../../hooks/useEvaluation';
import { ChessgroundBoard } from '../Chessboard/ChessgroundBoard';
import { EvalBar } from '../Chessboard/EvalBar';
import { DrillHeader } from './DrillHeader';
import { DrillFeedback } from './DrillFeedback';
import { DrillSummaryModal } from './DrillSummaryModal';
import type { Repertoire, RepertoireColor } from '../../types/chess';
import { Layers, ArrowRight } from 'lucide-react';

interface DrillViewProps {
  repertoires: Repertoire[];
  activeRepertoireId: string;
  orientation: RepertoireColor;
  onExit: () => void;
}

export const DrillView: React.FC<DrillViewProps> = ({
  repertoires,
  activeRepertoireId,
  orientation,
  onExit,
}) => {
  const {
    lines,
    lineIndex,
    currentFen,
    chess,
    lastMove,
    arrows,
    feedback,
    stats,
    isSessionFinished,
    isLoading,
    playUserMove,
    advanceToNextLine,
    restartSession,
  } = useDrillSession(activeRepertoireId, orientation);

  const evaluation = useEvaluation(currentFen, chess.turn());

  const activeRep = repertoires.find(r => r.id === activeRepertoireId);
  const repName = activeRep ? activeRep.name : 'Repertoar';

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
  if (lines.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center max-w-md mx-auto my-12 shadow-2xl">
        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-400">
          <Layers className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-bold text-zinc-100 mb-2">Repertoarda Hamle Bulunamadı</h2>
        <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
          Drill antrenmanı yapabilmek için önce Açılış Ağacı sekmesinden tahta üzerinde varyantlar oluşturmalısın.
        </p>
        <button
          onClick={onExit}
          className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer"
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
        onExit={onExit}
        onRestart={restartSession}
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
          <DrillFeedback feedback={feedback} />

          {/* Manual Skip / Next Line Button if user gets stuck */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center justify-between shadow-sm">
            <span className="text-xs text-zinc-400">Bu varyantı geçmek ister misin?</span>
            <button
              onClick={advanceToNextLine}
              className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              Sonraki Varyant
            </button>
          </div>
        </div>
      </div>

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