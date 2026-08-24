import React from 'react';
import type { DrillStats } from '../../hooks/useDrillSession';
import { Trophy, Flame, Target, RotateCcw, ArrowRight } from 'lucide-react';

interface DrillSummaryModalProps {
  isOpen: boolean;
  stats: DrillStats;
  totalLines: number;
  onRestart: () => void;
  onExit: () => void;
}

export const DrillSummaryModal: React.FC<DrillSummaryModalProps> = ({
  isOpen,
  stats,
  totalLines,
  onRestart,
  onExit,
}) => {
  if (!isOpen) return null;

  const accuracy =
    stats.totalAnswers > 0
      ? Math.round((stats.correctAnswers / stats.totalAnswers) * 100)
      : 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl max-w-sm w-full text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
        {/* Trophy Icon */}
        <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 rounded-2xl flex items-center justify-center mb-4 text-amber-400 shadow-lg">
          <Trophy className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-bold text-zinc-100 mb-1">Antrenman Tamamlandı!</h2>
        <p className="text-xs text-zinc-400 mb-6">
          {totalLines} varyanttaki tüm hamleleri başarıyla gözden geçirdin.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 w-full mb-6">
          <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-xl flex flex-col items-center">
            <div className="flex items-center gap-1 text-xs text-zinc-400 mb-1">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>Doğruluk</span>
            </div>
            <span className="text-xl font-mono font-black text-emerald-400">%{accuracy}</span>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-xl flex flex-col items-center">
            <div className="flex items-center gap-1 text-xs text-zinc-400 mb-1">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Maks Seri</span>
            </div>
            <span className="text-xl font-mono font-black text-amber-400">{stats.maxStreak}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5 w-full">
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tekrar Çalış</span>
          </button>

          <button
            onClick={onExit}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold rounded-xl text-xs transition cursor-pointer border border-zinc-700"
          >
            <span>Açılış Ağacına Dön</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};