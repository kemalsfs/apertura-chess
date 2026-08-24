import React, { useState, useEffect } from 'react';
import type { RepertoireNode } from '../../types/chess';
import { MessageSquare, Save, Check } from 'lucide-react';

interface MoveAnnotationProps {
  currentNode: RepertoireNode | null;
  onSaveComment: (comment: string) => void;
}

export const MoveAnnotation: React.FC<MoveAnnotationProps> = ({
  currentNode,
  onSaveComment,
}) => {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setText(currentNode?.comment || '');
    setSaved(false);
  }, [currentNode]);

  if (!currentNode) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-md text-xs text-zinc-500 italic text-center">
        Açılış notu eklemek için bir hamle seçin veya tahtada yeni bir hamle yapın.
      </div>
    );
  }

  const handleSave = () => {
    onSaveComment(text);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-md mt-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-300">
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>{currentNode.san} İçin Hamle Notu & Açıklama</span>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-lg text-xs transition cursor-pointer"
        >
          {saved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
          {saved ? 'Kaydedildi' : 'Kaydet'}
        </button>
      </div>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Örn: Bu hamlede d4 karesini kontrol ediyoruz. Siyah e5 oynarsa tuzak var..."
        rows={3}
        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 resize-none transition"
      />
    </div>
  );
};