import React, { useState } from 'react';
import type { Repertoire } from '../../types/chess';
import { BookOpen, Trash2, Plus, Star } from 'lucide-react';
import { ConfirmModal } from '../Common/ConfirmModal';

interface RepertoireHeaderProps {
  repertoires: Repertoire[];
  activeId: string;
  onSelect: (id: string) => void;
  onClearRepertoire?: () => void;
  onCreateTree?: () => void;
  onSetDefault?: (id: string) => void;
  onDeleteTree?: (id: string) => void;
}

export const RepertoireHeader: React.FC<RepertoireHeaderProps> = ({
  repertoires,
  activeId,
  onSelect,
  onClearRepertoire,
  onCreateTree,
  onSetDefault,
  onDeleteTree,
}) => {
  const [isWipeModalOpen, setIsWipeModalOpen] = useState(false);
  const [isDeleteTreeModalOpen, setIsDeleteTreeModalOpen] = useState(false);

  const activeRepertoire = repertoires.find(r => r.id === activeId);

  const handleConfirmWipe = () => {
    if (onClearRepertoire) {
      onClearRepertoire();
    }
    setIsWipeModalOpen(false);
  };

  const handleConfirmDeleteTree = () => {
    if (onDeleteTree && activeId) {
      onDeleteTree(activeId);
    }
    setIsDeleteTreeModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-zinc-900 border border-zinc-800 rounded-2xl p-2.5 sm:p-3 mb-3 shadow-md">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-bold text-zinc-300 shrink-0">Aktif Ağaç:</span>
          <span className="text-xs font-extrabold text-zinc-100 truncate">{activeRepertoire?.name}</span>
          {activeRepertoire?.isDefault && (
            <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1.5 py-0.2 rounded shrink-0 flex items-center gap-0.5">
              <Star className="w-2.5 h-2.5 fill-amber-400" />
              <span>Varsayılan</span>
            </span>
          )}
        </div>

        {/* Tree Selector Pills & Action Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
          {repertoires.map(rep => {
            const isActive = rep.id === activeId;
            return (
              <button
                key={rep.id}
                onClick={() => onSelect(rep.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer shrink-0 ${
                  isActive
                    ? rep.color === 'white'
                      ? 'bg-zinc-100 text-zinc-950 font-bold shadow-md'
                      : 'bg-zinc-800 text-zinc-100 border border-zinc-600 font-bold shadow-md'
                    : 'bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800/80'
                }`}
                title={rep.isDefault ? `${rep.name} (Varsayılan Kayıt Ağacı)` : rep.name}
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    rep.color === 'white' ? 'bg-amber-400 border border-zinc-400' : 'bg-zinc-900 border border-zinc-500'
                  }`}
                />
                <span className="truncate max-w-[130px]">{rep.name}</span>
                {rep.isDefault && <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />}
              </button>
            );
          })}

          {/* Create New Tree Button */}
          {onCreateTree && (
            <button
              onClick={onCreateTree}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-zinc-800 hover:bg-amber-500/20 text-zinc-300 hover:text-amber-300 border border-zinc-700 hover:border-amber-500/40 rounded-xl text-xs font-bold transition cursor-pointer shrink-0"
              title="Yeni Açılış Ağacı Ekle"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Yeni Ağaç</span>
            </button>
          )}

          {/* Set as Default Action */}
          {onSetDefault && activeRepertoire && !activeRepertoire.isDefault && (
            <button
              onClick={() => onSetDefault(activeId)}
              className="p-1.5 text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 rounded-lg transition cursor-pointer shrink-0"
              title="Bu ağacı varsayılan kayıt hedefi yap"
            >
              <Star className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Delete Repertoire Tree */}
          {onDeleteTree && activeRepertoire && repertoires.filter(r => r.color === activeRepertoire.color).length > 1 && (
            <button
              onClick={() => setIsDeleteTreeModalOpen(true)}
              className="p-1.5 text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition cursor-pointer shrink-0"
              title="Bu Açılış Ağacını Tamamen Sil"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Wipe/Clear Content Modal */}
      <ConfirmModal
        isOpen={isWipeModalOpen}
        title="Repertuvarı Temizle"
        message={`"${activeRepertoire?.name || 'Repertuvar'}" içindeki tüm hamle ağacı ve varyantlar kalıcı olarak silinecektir. Devam etmek istiyor musunuz?`}
        confirmText="Evet, Temizle"
        cancelText="Vazgeç"
        confirmVariant="danger"
        onConfirm={handleConfirmWipe}
        onCancel={() => setIsWipeModalOpen(false)}
      />

      {/* Delete Repertoire Tree Modal */}
      <ConfirmModal
        isOpen={isDeleteTreeModalOpen}
        title="Açılış Ağacını Sil"
        message={`"${activeRepertoire?.name || 'Repertuvar'}" ağacı ve içindeki tüm varyantlar kalıcı olarak silinecektir. Devam etmek istiyor musunuz?`}
        confirmText="Ağacı Sil"
        cancelText="Vazgeç"
        confirmVariant="danger"
        onConfirm={handleConfirmDeleteTree}
        onCancel={() => setIsDeleteTreeModalOpen(false)}
      />
    </>
  );
};