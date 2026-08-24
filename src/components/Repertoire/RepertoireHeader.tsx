import React, { useState } from 'react';
import type { Repertoire } from '../../types/chess';
import { BookOpen, Trash2 } from 'lucide-react';

interface RepertoireHeaderProps {
  repertoires: Repertoire[];
  activeId: string;
  onSelect: (id: string) => void;
  onClearRepertoire?: () => void;
}

export const RepertoireHeader: React.FC<RepertoireHeaderProps> = ({
  repertoires,
  activeId,
  onSelect,
  onClearRepertoire,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClear = () => {
    if (onClearRepertoire) {
      onClearRepertoire();
      setShowConfirm(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-3 mb-3 shadow-md">
      <div className="flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-emerald-400" />
        <span className="text-sm font-semibold text-zinc-200">Repertoar:</span>
      </div>

      <div className="flex items-center gap-2">
        {repertoires.map(rep => {
          const isActive = rep.id === activeId;
          return (
            <button
              key={rep.id}
              onClick={() => onSelect(rep.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                isActive
                  ? rep.color === 'white'
                    ? 'bg-zinc-100 text-zinc-900 font-bold shadow'
                    : 'bg-zinc-800 text-zinc-100 border border-zinc-600 font-bold shadow'
                  : 'bg-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  rep.color === 'white' ? 'bg-amber-100 border border-zinc-400' : 'bg-zinc-900 border border-zinc-500'
                }`}
              />
              {rep.name}
            </button>
          );
        })}

        {/* Clear/Wipe Repertoire Button */}
        {onClearRepertoire && (
          <div className="relative ml-2">
            {!showConfirm ? (
              <button
                onClick={() => setShowConfirm(true)}
                title="Bu Repertoardaki Tüm Hamleleri Temizle"
                className="p-1.5 text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-1 bg-red-950 border border-red-800 px-2 py-1 rounded-lg text-[10px]">
                <span className="text-red-200">Emin misin?</span>
                <button
                  onClick={handleClear}
                  className="px-1.5 py-0.5 bg-red-600 text-white font-bold rounded hover:bg-red-500"
                >
                  Evet, Sil
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-1.5 py-0.5 text-zinc-400 hover:text-zinc-200"
                >
                  İptal
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};