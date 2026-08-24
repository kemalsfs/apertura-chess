import React, { useState } from 'react';
import {
  ChevronFirst,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trash2,
  Copy,
  Check,
} from 'lucide-react';

interface BoardControlsProps {
  onGoToStart: () => void;
  onGoBack: () => void;
  onGoForward: () => void;
  onFlipBoard: () => void;
  onDeleteCurrentNode?: () => void;
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
  onDeleteCurrentNode,
  canGoBack,
  canGoForward,
  canDelete,
  fen,
}) => {
  const [copied, setCopied] = useState(false);

  const copyFen = () => {
    navigator.clipboard.writeText(fen);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-2 px-3 shadow-md mt-3 w-full max-w-[600px] mx-auto">
      {/* Navigation Buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={onGoToStart}
          disabled={!canGoBack}
          title="Başlangıç Konumu"
          className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition"
        >
          <ChevronFirst className="w-5 h-5" />
        </button>
        <button
          onClick={onGoBack}
          disabled={!canGoBack}
          title="Önceki Hamle"
          className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onGoForward}
          disabled={!canGoForward}
          title="Sonraki Hamle"
          className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Action Tools */}
      <div className="flex items-center gap-1">
        <button
          onClick={onFlipBoard}
          title="Tahtayı Döndür"
          className="p-2 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 rounded-lg transition"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={copyFen}
          title="FEN Kopyala"
          className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>

        {canDelete && onDeleteCurrentNode && (
          <button
            onClick={onDeleteCurrentNode}
            title="Bu Varyantı Sil"
            className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};