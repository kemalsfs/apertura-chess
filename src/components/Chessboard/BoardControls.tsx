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
  Loader2,
} from 'lucide-react';
import { ConfirmModal } from '../Common/ConfirmModal';

interface BoardControlsProps {
  onGoToStart: () => void;
  onGoBack: () => void;
  onGoForward: () => void;
  onFlipBoard: () => void;
  onSaveToRepertoire: () => void | Promise<void>;
  saveFeedback?: { status: 'pending' | 'success' | 'error'; repertoireName: string } | null;
  saveBusyElsewhere?: boolean;
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
  saveFeedback,
  saveBusyElsewhere = false,
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
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-y-2 bg-zinc-900 border border-zinc-800 rounded-xl p-2 shadow-md sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-3">
          {/* Navigation Buttons */}
          <div className="col-start-1 row-start-1 flex items-center">
            <button
              onClick={onGoToStart}
              disabled={!canGoBack}
              title="Başlangıç Konumu"
              className="flex min-h-11 min-w-11 items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition cursor-pointer"
            >
              <ChevronFirst className="w-5 h-5" />
            </button>
            <button
              onClick={onGoBack}
              disabled={!canGoBack}
              title="Önceki Hamle"
              className="flex min-h-11 min-w-11 items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onGoForward}
              disabled={!canGoForward}
              title="Sonraki Hamle"
              className="flex min-h-11 min-w-11 items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Center: Save to Repertoire Action Button */}
          {canSave && (
            <div className="col-span-2 row-start-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:mx-auto">
              {!isSaved ? (
                <button
                  onClick={onSaveToRepertoire}
                  disabled={saveFeedback?.status === 'pending' || saveBusyElsewhere}
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-zinc-950 shadow-md transition hover:bg-amber-400 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {saveFeedback?.status === 'pending' || saveBusyElsewhere
                    ? <Loader2 className="h-4 w-4 animate-spin" />
                    : <BookmarkPlus className="h-4 w-4" />}
                  <span>{saveFeedback?.status === 'pending' || saveBusyElsewhere ? 'Kaydediliyor...' : saveFeedback?.status === 'error' ? 'Tekrar Dene' : 'Repertuvara Kaydet'}</span>
                </button>
              ) : (
                <div className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-[11px] font-semibold text-amber-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Kayıtlı Varyant</span>
                </div>
              )}
            </div>
          )}

          {/* Action Tools */}
          <div className="col-start-2 row-start-1 flex items-center justify-end sm:col-start-3">
            <button
              onClick={onFlipBoard}
              title="Tahtayı Döndür"
              className="flex min-h-11 min-w-11 items-center justify-center text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={copyFen}
              title="FEN Kopyala"
              className="flex min-h-11 min-w-11 items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
            </button>

            {canDelete && onDeleteCurrentNode && (
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                title="Bu Hamleyi/Varyantı Sil"
                className="flex min-h-11 min-w-11 items-center justify-center text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        {saveFeedback && (
          <p
            role={saveFeedback.status === 'error' ? 'alert' : 'status'}
            className={`rounded-lg px-3 py-2 text-xs ${saveFeedback.status === 'error'
              ? 'border border-red-500/30 bg-red-500/10 text-red-300'
              : 'border border-amber-500/20 bg-amber-500/10 text-amber-200'}`}
          >
            {saveFeedback.status === 'pending' && `“${saveFeedback.repertoireName}” repertuvarına kaydediliyor...`}
            {saveFeedback.status === 'success' && `“${saveFeedback.repertoireName}” repertuvarına kaydedildi.`}
            {saveFeedback.status === 'error' && `“${saveFeedback.repertoireName}” repertuvarına kaydedilemedi. Tekrar deneyin.`}
          </p>
        )}
        {saveBusyElsewhere && !isSaved && (
          <p role="status" className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
            Başka bir konum kaydediliyor. İşlem bitince bu konumu kaydedebilirsiniz.
          </p>
        )}
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
