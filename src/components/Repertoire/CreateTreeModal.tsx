import React, { useState } from 'react';
import { GitBranch, X, Plus } from 'lucide-react';
import type { RepertoireColor } from '../../types/chess';

interface CreateTreeModalProps {
  isOpen: boolean;
  defaultColor?: RepertoireColor;
  onClose: () => void;
  onCreate: (name: string, color: RepertoireColor, description?: string, makeDefault?: boolean) => void;
}

export const CreateTreeModal: React.FC<CreateTreeModalProps> = ({
  isOpen,
  defaultColor = 'white',
  onClose,
  onCreate,
}) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState<RepertoireColor>(defaultColor);
  const [description, setDescription] = useState('');
  const [makeDefault, setMakeDefault] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name.trim(), color, description.trim() || undefined, makeDefault);
    setName('');
    setDescription('');
    setMakeDefault(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md font-sans">
      <div className="bg-zinc-900 border border-zinc-700/80 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100">Yeni Açılış Ağacı Oluştur</h3>
              <p className="text-xs text-zinc-400">Repertuvar kütüphanene yeni bir dal ekle</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-xl transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Color Switcher */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300">Ağaç Rengi</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setColor('white')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 ${
                  color === 'white'
                    ? 'bg-zinc-100 text-zinc-950 border-white shadow-md'
                    : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>⚪ Beyaz Ağacı</span>
              </button>

              <button
                type="button"
                onClick={() => setColor('black')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 ${
                  color === 'black'
                    ? 'bg-zinc-800 text-zinc-100 border-zinc-600 shadow-md'
                    : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>⚫ Siyah Ağacı</span>
              </button>
            </div>
          </div>

          {/* Name Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300">Ağaç Adı</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={color === 'white' ? 'örn. Beyaz (1. d4 Katalan)' : 'örn. Siyah (Sicilya Najdorf)'}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition shadow-inner"
            />
          </div>

          {/* Description Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300">Açıklama & Not (Opsiyonel)</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Açılış hedefleri veya hazırlık notu..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition shadow-inner"
            />
          </div>

          {/* Make Default Checkbox */}
          <label className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 cursor-pointer hover:border-zinc-700 transition">
            <input
              type="checkbox"
              checked={makeDefault}
              onChange={(e) => setMakeDefault(e.target.checked)}
              className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 focus:ring-offset-zinc-900 cursor-pointer"
            />
            <div className="text-xs">
              <span className="font-bold text-zinc-200">Varsayılan Ağaç Olarak Ayarla</span>
              <p className="text-[10px] text-zinc-500">Tahtada yeni varyant kaydedildiğinde doğrudan bu ağaca yazılır.</p>
            </div>
          </label>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-800">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition cursor-pointer"
            >
              İptal
            </button>

            <button
              type="submit"
              disabled={!name.trim()}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-bold text-xs shadow-md transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Ağacı Oluştur</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
