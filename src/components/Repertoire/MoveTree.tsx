import React from 'react';
import type { MoveHistoryItem, RepertoireNode } from '../../types/chess';
import { GitBranch, CornerDownRight } from 'lucide-react';

interface MoveTreeProps {
  history: MoveHistoryItem[];
  currentChildren: RepertoireNode[];
  currentNodeId: string | null;
  onSelectNode: (nodeId: string | null) => void;
}

export const MoveTree: React.FC<MoveTreeProps> = ({
  history,
  currentChildren,
  currentNodeId,
  onSelectNode,
}) => {
  // Group history items strictly into standard chronological pairs (Move 1: W & B, Move 2: W & B)
  const movePairs: { moveNumber: number; white?: MoveHistoryItem; black?: MoveHistoryItem }[] = [];

  for (let i = 0; i < history.length; i += 2) {
    const moveNumber = Math.floor(i / 2) + 1;
    const white = history[i];
    const black = i + 1 < history.length ? history[i + 1] : undefined;
    movePairs.push({
      moveNumber,
      white,
      black,
    });
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-md flex flex-col h-full">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
        <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
          <GitBranch className="w-4 h-4 text-emerald-400" />
          Açılış Ağacı & Notasyon
        </h3>
        <button
          onClick={() => onSelectNode(null)}
          className={`text-xs px-2.5 py-1 rounded-lg transition cursor-pointer ${
            currentNodeId === null
              ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
          }`}
        >
          Başlangıç
        </button>
      </div>

      {/* Move History Flow */}
      <div className="flex-1 overflow-y-auto min-h-[140px] max-h-[220px] pr-1 space-y-1 font-mono text-sm">
        {movePairs.length === 0 ? (
          <div className="text-xs text-zinc-500 italic py-6 text-center">
            Repertoara hamle eklemek için tahta üzerinde taşları hareket ettirin.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-1">
            {movePairs.map(pair => (
              <div key={pair.moveNumber} className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-zinc-800/40">
                <span className="w-7 text-zinc-500 text-xs font-semibold">{pair.moveNumber}.</span>

                {/* White Move */}
                {pair.white ? (
                  <button
                    onClick={() => onSelectNode(pair.white!.nodeId)}
                    className={`px-2.5 py-0.5 rounded text-xs transition cursor-pointer font-bold ${
                      currentNodeId === pair.white.nodeId
                        ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                        : 'text-zinc-200 hover:bg-zinc-800'
                    }`}
                  >
                    {pair.white.san}
                  </button>
                ) : (
                  <span className="w-12 text-zinc-600 text-xs">...</span>
                )}

                {/* Black Move */}
                {pair.black ? (
                  <button
                    onClick={() => onSelectNode(pair.black!.nodeId)}
                    className={`px-2.5 py-0.5 rounded text-xs transition cursor-pointer font-bold ${
                      currentNodeId === pair.black.nodeId
                        ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                        : 'text-zinc-200 hover:bg-zinc-800'
                    }`}
                  >
                    {pair.black.san}
                  </button>
                ) : (
                  <span className="text-zinc-600 text-xs px-2">...</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Branching Candidate Moves (Children from current position) */}
      <div className="mt-3 pt-3 border-t border-zinc-800">
        <div className="text-xs text-zinc-400 font-semibold mb-2 flex items-center gap-1">
          <CornerDownRight className="w-3.5 h-3.5 text-zinc-400" />
          Kayıtlı Devam Yolları ({currentChildren.length}):
        </div>

        {currentChildren.length === 0 ? (
          <div className="text-xs text-zinc-500">
            Bu konumda henüz kayıtlı bir devam yolu yok. Tahtada yeni bir hamle oynayarak ekleyin.
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {currentChildren.map(child => (
              <button
                key={child.id}
                onClick={() => onSelectNode(child.id)}
                className="flex items-center gap-1 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-lg text-xs font-mono font-medium transition cursor-pointer"
              >
                <span className="text-emerald-400 font-bold">{child.san}</span>
                {child.comment && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Not var" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};