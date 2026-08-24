import React from 'react';
import type { RepertoireColor } from '../../types/chess';

interface PromotionModalProps {
  isOpen: boolean;
  color: RepertoireColor;
  onSelect: (piece: string) => void;
  onCancel: () => void;
}

export const PromotionModal: React.FC<PromotionModalProps> = ({
  isOpen,
  color,
  onSelect,
  onCancel,
}) => {
  if (!isOpen) return null;

  const pieces = [
    { type: 'q', label: 'Vezir (Queen)', icon: color === 'white' ? '♕' : '♛' },
    { type: 'n', label: 'At (Knight)', icon: color === 'white' ? '♘' : '♞' },
    { type: 'r', label: 'Kale (Rook)', icon: color === 'white' ? '♖' : '♜' },
    { type: 'b', label: 'Fil (Bishop)', icon: color === 'white' ? '♗' : '♝' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl max-w-xs w-full text-center">
        <h3 className="text-lg font-bold text-zinc-100 mb-4">Terfi Taşı Seçin</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {pieces.map(p => (
            <button
              key={p.type}
              onClick={() => onSelect(p.type)}
              className="flex flex-col items-center justify-center p-4 bg-zinc-800 hover:bg-emerald-600/30 border border-zinc-700 hover:border-emerald-500 rounded-xl transition cursor-pointer"
            >
              <span className="text-4xl mb-1">{p.icon}</span>
              <span className="text-xs text-zinc-300 font-medium">{p.label}</span>
            </button>
          ))}
        </div>
        <button
          onClick={onCancel}
          className="w-full py-2 text-xs text-zinc-400 hover:text-zinc-200 transition"
        >
          İptal
        </button>
      </div>
    </div>
  );
};