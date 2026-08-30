import React from 'react';
import { GitBranch, Plus, X, ArrowRight } from 'lucide-react';
import type { Repertoire } from '../../types/chess';

interface TreeRoutingModalProps {
  isOpen: boolean;
  firstMoveSan: string;
  existingRepertoire: Repertoire;
  onConfirmExisting: () => void;
  onCreateNew: () => void;
  onCancel: () => void;
}

export const TreeRoutingModal: React.FC<TreeRoutingModalProps> = ({
  isOpen,
  firstMoveSan,
  existingRepertoire,
  onConfirmExisting,
  onCreateNew,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md font-sans">
      <div className="bg-zinc-900 border border-zinc-700/80 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-100">Farklı Açılış Kökü Algılandı</h3>
              <p className="text-xs text-amber-400 font-mono">1. {firstMoveSan} Hamlesi</p>
            </div>
          </div>

          <button
            onClick={onCancel}
            className="p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-xl transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message */}
        <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800/80">
          Oynadığınız varyant <strong className="text-amber-400 font-mono">1. {firstMoveSan}</strong> ile başlıyor. Bu hamle için zaten mevcut bir <strong className="text-zinc-100 font-semibold">"{existingRepertoire.name}"</strong> açılış ağacınız var.
        </p>

        {/* Action Options */}
        <div className="space-y-2.5">
          <button
            onClick={onConfirmExisting}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition cursor-pointer shadow-md group"
          >
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 fill-zinc-950" />
              <span>Mevcut "{existingRepertoire.name}" Ağacına Ekle</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </button>

          <button
            onClick={onCreateNew}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs border border-zinc-700 transition cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-zinc-400" />
              <span>Yeni Bağımsız Bir Ağaç Olarak Oluştur</span>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition" />
          </button>
        </div>

        {/* Cancel Footer */}
        <div className="text-center pt-1">
          <button
            onClick={onCancel}
            className="text-xs text-zinc-500 hover:text-zinc-300 font-medium transition cursor-pointer"
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
};
