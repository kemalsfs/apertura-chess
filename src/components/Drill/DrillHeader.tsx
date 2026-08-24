import React from 'react';
import type { DrillStats } from '../../hooks/useDrillSession';
import { ArrowLeft, Flame, Target, RotateCcw } from 'lucide-react';

interface DrillHeaderProps {
  repertoireName: string;
  currentLineIndex: number;
  totalLines: number;
  stats: DrillStats;
  onExit: () => void;
  onRestart: () => void;
}

export const DrillHeader: React.FC<DrillHeaderProps> = ({
  repertoireName,
  currentLineIndex,
  totalLines,
  stats,
  onExit,
  onRestart,
}) => {
  const accuracy =
    stats.totalAnswers > 0
      ? Math.round((stats.correctAnswers / stats.totalAnswers) * 100)
      : 100;

  const progressPercent =
    totalLines > 0 ? Math.round(((currentLineIndex + 1) / totalLines) * 100) : 0;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 mb-4 shadow-md flex flex-col gap-2.5">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 px-2.5 py-1.5 rounded-lg transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">Çıkış</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-zinc-100">{repertoireName}</span>
            <span className="text-xs text-zinc-500 font-mono">
              (Varyant {totalLines > 0 ? currentLineIndex + 1 : 0} / {totalLines})
            </span>
          </div>
        </div>

        {/* Stats: Streak & Accuracy */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg text-amber-400 font-bold">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>{stats.streak} Seri</span>
          </div>

          <div className="flex items-center gap-1 text-xs bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg text-emerald-400 font-bold font-mono">
            <Target className="w-3.5 h-3.5" />
            <span>%{accuracy}</span>
          </div>

          <button
            onClick={onRestart}
            title="Antrenmanı Sıfırla"
            className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};