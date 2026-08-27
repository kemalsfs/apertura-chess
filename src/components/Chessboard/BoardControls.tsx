import React, { useState } from 'react';
import {
  ChevronFirst,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trash2,
  Copy,
  Check,
  BookmarkPlus,
  CheckCircle2,
} from 'lucide-react';
import { ConfirmModal } from '../Common/ConfirmModal';

interface BoardControlsProps {
  onGoToStart: () => void;
  onGoBack: () => void;
  onGoForward: () => void;
  onFlipBoard: () => void;
  onSaveToRepertoire: () => void;
  onDeleteCurrentNode?: () => void;
  isSaved: boolean;
  canSave: boolean;
  canGoBack: boolean;
  canGoForward: boolean;
  canDelete: boolean;
  fen: string;
}

export const BoardControls: React.FC<BoardControlsProps> = ({
  onGoToStart,
  onGoBack,
  onGoForward,
  onFlipBoard,
  onSaveToRepertoire,
  onDeleteCurrentNode,
  isSaved,
  canSave,
  canGoBack,
  canGoForward,
  canDelete,
  fen,
}) => {
  const [copied, setCopied] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const copyFen = () => {
    navigator.clipboard.writeText(fen);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDeleteConfirm = () => {
    if (onDeleteCurrentNode) {
      onDeleteCurrentNode();
    }
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 w-full max-w-[560px] mx-auto mt-1">
        {/* Main Bar */}
        <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-2 px-3 shadow-md">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={onGoToStart}
              disabled={!canGoBack}
              title="Başlangıç Konumu"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition cursor-pointer"
            >
              <ChevronFirst className="w-5 h-5" />
            </button>
            <button
              onClick={onGoBack}
              disabled={!canGoBack}
              title="Önceki Hamle"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onGoForward}
              disabled={!canGoForward}
              title="Sonraki Hamle"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Center: Save to Repertoire Action Button */}
          {canSave && (
            <div>
              {!isSaved ? (
                <button
                  onClick={onSaveToRepertoire}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg text-xs transition cursor-pointer shadow-md"
                >
                  <BookmarkPlus className="w-4 h-4" />
                  <span>Repertuvara Kaydet</span>
                </button>
              ) : (
                <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Kayıtlı Varyant</span>
                </div>
              )}
            </div>
          )}

          {/* Action Tools */}
          <div className="flex items-center gap-1">
            <button
              onClick={onFlipBoard}
              title="Tahtayı Döndür"
              className="p-2 text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={copyFen}
              title="FEN Kopyala"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
            </button>

            {canDelete && onDeleteCurrentNode && (
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                title="Bu Hamleyi/Varyantı Sil"
                className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Node Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="Hamleyi Sil"
        message="Bu hamleyi ve altındaki tüm devam varyantlarını repertuvarınızdan silmek istediğinizden emin misiniz?"
        confirmText="Evet, Sil"
        cancelText="Vazgeç"
        confirmVariant="danger"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};