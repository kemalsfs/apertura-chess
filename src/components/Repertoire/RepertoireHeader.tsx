import React from 'react';
import type { Repertoire } from '../../types/chess';
import { BookOpen } from 'lucide-react';

interface RepertoireHeaderProps {
  repertoires: Repertoire[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const RepertoireHeader: React.FC<RepertoireHeaderProps> = ({
  repertoires,
  activeId,
  onSelect,
}) => {
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
      </div>
    </div>
  );
};