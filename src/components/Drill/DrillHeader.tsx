import React from 'react';
import type { DrillStats } from '../../hooks/useDrillSession';
import { ArrowLeft, Flame, Target, RotateCcw, SlidersHorizontal, Sparkles } from 'lucide-react';
import type { DrillFilterType } from '../../services/srsScheduler';

interface DrillHeaderProps {
  repertoireName: string;
  currentLineIndex: number;
  totalLines: number;
  stats: DrillStats;
  currentFilter: DrillFilterType;
  singleLine?: boolean;
  onExit: () => void;
  onRestart: () => void;
  onOpenVariantManager: () => void;
}

export const DrillHeader: React.FC<DrillHeaderProps> = ({
  repertoireName,
  currentLineIndex,
  totalLines,
  stats,
  currentFilter,
  singleLine = false,
  onExit,
  onRestart,
  onOpenVariantManager,
}) => {
  const accuracy =
    stats.totalAnswers > 0
      ? Math.round((stats.correctAnswers / stats.totalAnswers) * 100)
      : 100;

  const progressPercent =
    totalLines > 0 ? Math.round(((currentLineIndex + 1) / totalLines) * 100) : 0;

  const filterLabels: Record<DrillFilterType, string> = {
    due: '🔥 Günün Tekrarı',
    weak: '⚠️ Zayıf Varyantlar',
    stale: '⏳ 3+ Günlükler',
    all: '📚 Tüm Varyantlar',
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-4 shadow-md flex flex-col gap-2 w-full max-w-full overflow-hidden">
      {/* Top Bar: Responsive 2-row layout on mobile, 1-row on desktop */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        {/* Row 1 / Left Side: Exit + Repertoire Name + Variant Index */}
        <div className="flex items-center justify-between sm:justify-start gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={onExit}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 px-2 py-1.5 rounded-lg transition cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold hidden xs:inline">Çıkış</span>
            </button>

            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-xs sm:text-sm font-bold text-zinc-100 truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">
                {repertoireName}
              </span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-mono shrink-0">
                ({totalLines > 0 ? currentLineIndex + 1 : 0}/{totalLines})
              </span>
            </div>
          </div>

          {/* Round Badge (Shown on top row for mobile) */}
          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3" />
            Tur {stats.currentRound}
          </span>
        </div>

        {/* Row 2 / Right Side: Filter Manager + Streak + Accuracy + Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 pt-1.5 sm:pt-0 border-t border-zinc-800/60 sm:border-0">
          {/* Variant Manager Filter Button */}
          <button
            onClick={onOpenVariantManager}
            disabled={singleLine}
            className="flex items-center gap-1 text-[11px] sm:text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 px-2 sm:px-2.5 py-1 rounded-lg font-medium transition cursor-pointer"
            title="Varyant Yönetimi & Filtre"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-[100px] xs:max-w-none">{singleLine ? 'Seçili Varyant' : filterLabels[currentFilter]}</span>
          </button>

          <div className="flex items-center gap-1 text-[11px] sm:text-xs bg-amber-500/10 border border-amber-500/20 px-2 sm:px-2.5 py-1 rounded-lg text-amber-400 font-bold shrink-0">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{stats.streak}</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] sm:text-xs bg-emerald-500/10 border border-emerald-500/20 px-2 sm:px-2.5 py-1 rounded-lg text-emerald-400 font-bold font-mono shrink-0">
            <Target className="w-3.5 h-3.5" />
            <span>%{accuracy}</span>
          </div>

          <button
            onClick={onRestart}
            title="Antrenmanı Sıfırla"
            className="p-1 sm:p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition cursor-pointer shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
