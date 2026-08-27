import React from 'react';
import type { RepertoireNode } from '../../types/chess';
import { 
  getLineMetadata, 
  type DrillFilterType,
  type LineMetadata 
} from '../../services/srsScheduler';
import { 
  X, 
  Flame, 
  AlertTriangle, 
  Clock, 
  BookOpen, 
  Zap, 
  Layers
} from 'lucide-react';

interface DrillVariantManagerModalProps {
  isOpen: boolean;
  allLines: RepertoireNode[][];
  currentFilter: DrillFilterType;
  onSelectFilter: (filter: DrillFilterType) => void;
  onClose: () => void;
}

export const DrillVariantManagerModal: React.FC<DrillVariantManagerModalProps> = ({
  isOpen,
  allLines,
  currentFilter,
  onSelectFilter,
  onClose,
}) => {
  if (!isOpen) return null;

  // Derive metadata for all lines
  const linesMeta: { line: RepertoireNode[]; meta: LineMetadata }[] = allLines.map(line => ({
    line,
    meta: getLineMetadata(line),
  }));

  // Filter counters
  const now = Date.now();
  const threeDaysAgo = now - 3 * 24 * 60 * 60 * 1000;

  const dueCount = linesMeta.filter(m => m.meta.isDue || m.meta.lastReviewed === null).length;
  const weakCount = linesMeta.filter(m => m.meta.status === 'learning' || m.meta.successRate < 70).length;
  const staleCount = linesMeta.filter(m => m.meta.lastReviewed === null || m.meta.lastReviewed <= threeDaysAgo).length;
  const totalCount = linesMeta.length;

  // Filtered displayed lines
  const filteredLines = linesMeta.filter(({ meta }) => {
    if (currentFilter === 'due') return meta.isDue || meta.lastReviewed === null;
    if (currentFilter === 'weak') return meta.status === 'learning' || meta.successRate < 70;
    if (currentFilter === 'stale') return meta.lastReviewed === null || meta.lastReviewed <= threeDaysAgo;
    return true;
  });

  const formatLastReviewed = (timestamp: number | null) => {
    if (!timestamp) return 'Hiç çalışılmadı';
    const diffHours = Math.round((Date.now() - timestamp) / (1000 * 60 * 60));
    if (diffHours < 1) return 'Az önce';
    if (diffHours < 24) return `${diffHours} saat önce`;
    const diffDays = Math.round(diffHours / 24);
    return `${diffDays} gün önce`;
  };

  const getStatusBadge = (status: LineMetadata['status']) => {
    switch (status) {
      case 'mastered':
        return (
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
            Ustalaşıldı
          </span>
        );
      case 'review':
        return (
          <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded">
            Tekrar Ediliyor
          </span>
        );
      case 'learning':
        return (
          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
            Öğreniliyor
          </span>
        );
      case 'new':
      default:
        return (
          <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">
            Yeni
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden font-sans">
        {/* Modal Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-100">Varyant Antrenman Yöneticisi</h2>
              <p className="text-xs text-zinc-500">
                Spaced Repetition hafıza seviyeleri ve özel antrenman filtreleri
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-xl transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Filter Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 bg-zinc-950/50 border-b border-zinc-800">
          {/* Filter 1: Due */}
          <button
            onClick={() => onSelectFilter('due')}
            className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
              currentFilter === 'due'
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" /> Günün Tekrarı
              </span>
              <span className="font-mono font-bold text-xs">{dueCount}</span>
            </div>
            <span className="text-[10px] text-zinc-500">Akıllı SRS Seçimi</span>
          </button>

          {/* Filter 2: Weak */}
          <button
            onClick={() => onSelectFilter('weak')}
            className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
              currentFilter === 'weak'
                ? 'bg-red-500/10 border-red-500/40 text-red-300'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> Zayıf Hatlar
              </span>
              <span className="font-mono font-bold text-xs">{weakCount}</span>
            </div>
            <span className="text-[10px] text-zinc-500">&lt; %70 Başarı</span>
          </button>

          {/* Filter 3: Stale */}
          <button
            onClick={() => onSelectFilter('stale')}
            className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
              currentFilter === 'stale'
                ? 'bg-blue-500/10 border-blue-500/40 text-blue-300'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> 3+ Günlük
              </span>
              <span className="font-mono font-bold text-xs">{staleCount}</span>
            </div>
            <span className="text-[10px] text-zinc-500">Eski Varyantlar</span>
          </button>

          {/* Filter 4: All */}
          <button
            onClick={() => onSelectFilter('all')}
            className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
              currentFilter === 'all'
                ? 'bg-zinc-800 border-zinc-600 text-zinc-100'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-zinc-300" /> Tüm Liste
              </span>
              <span className="font-mono font-bold text-xs">{totalCount}</span>
            </div>
            <span className="text-[10px] text-zinc-500">Karışık Drill</span>
          </button>
        </div>

        {/* Variant Lines Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 max-h-[380px]">
          {filteredLines.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 text-xs">
              Bu filtre kriterine uyan varyant bulunamadı.
            </div>
          ) : (
            filteredLines.map(({ meta }, idx) => (
              <div
                key={meta.id + idx}
                className="p-3 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-zinc-200">
                      {meta.name}
                    </span>
                    {getStatusBadge(meta.status)}
                  </div>
                  <div className="font-mono text-[11px] text-zinc-400 leading-relaxed truncate max-w-md">
                    {meta.movesText}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs shrink-0 font-mono">
                  <div className="text-right">
                    <div className="text-[10px] text-zinc-500">Son Çalışma</div>
                    <div className="text-zinc-300 text-[11px]">
                      {formatLastReviewed(meta.lastReviewed)}
                    </div>
                  </div>

                  <div className="text-right w-16">
                    <div className="text-[10px] text-zinc-500">Başarı</div>
                    <div
                      className={`text-[11px] font-bold ${
                        meta.successRate >= 80
                          ? 'text-emerald-400'
                          : meta.successRate >= 60
                          ? 'text-amber-400'
                          : 'text-red-400'
                      }`}
                    >
                      %{meta.successRate}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between">
          <div className="text-xs text-zinc-400">
            <strong className="text-amber-400">{filteredLines.length}</strong> varyant seçildi
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-md transition cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-zinc-950" />
            <span>Bu Filtreyle Antrenmanı Başlat</span>
          </button>
        </div>
      </div>
    </div>
  );
};
