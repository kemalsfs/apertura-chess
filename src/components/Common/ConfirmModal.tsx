import React, { useId, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useModalFocus } from '../../hooks/useModalFocus';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'danger' | 'warning' | 'primary';
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'Evet, Sil',
  cancelText = 'İptal',
  confirmVariant = 'danger',
  onConfirm,
  onCancel,
}) => {
  const titleId = useId();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useModalFocus(isOpen, onCancel, cancelRef);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className="bg-zinc-900 border border-zinc-700/80 rounded-2xl max-w-sm w-full p-5 shadow-2xl space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 id={titleId} className="text-sm font-bold text-zinc-100">{title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{message}</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-800">
          <button
            ref={cancelRef}
            onClick={onCancel}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition cursor-pointer"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shadow-md ${
              confirmVariant === 'danger'
                ? 'bg-red-600 hover:bg-red-500 text-white'
                : 'bg-amber-500 hover:bg-amber-400 text-zinc-950'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
