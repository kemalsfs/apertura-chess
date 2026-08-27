import React, { useState, useEffect } from 'react';
import type { Repertoire } from '../../types/chess';
import { db } from '../../db/db';
import { Layers, Compass, ShieldCheck } from 'lucide-react';

interface OpeningRadarCardProps {
  repertoires: Repertoire[];
  onSelectRepertoire: (id: string) => void;
  onOpenArena: () => void;
}

export const OpeningRadarCard: React.FC<OpeningRadarCardProps> = ({
  repertoires,
  onSelectRepertoire,
  onOpenArena,
}) => {
  const whiteRep = repertoires.find(r => r.color === 'white');
  const blackRep = repertoires.find(r => r.color === 'black');

  const [whiteNodes, setWhiteNodes] = useState(0);
  const [blackNodes, setBlackNodes] = useState(0);

  useEffect(() => {
    async function loadNodeCounts() {
      if (whiteRep) {
        const wCount = await db.nodes.where('repertoireId').equals(whiteRep.id).count();
        setWhiteNodes(wCount);
      }
      if (blackRep) {
        const bCount = await db.nodes.where('repertoireId').equals(blackRep.id).count();
        setBlackNodes(bCount);
      }
    }
    loadNodeCounts();
  }, [whiteRep, blackRep]);

  const totalNodes = whiteNodes + blackNodes;

  // Calculate mastery score based on nodes and coverage (0 - 100%)
  const whiteMastery = Math.min(100, Math.round((whiteNodes / 40) * 100));
  const blackMastery = Math.min(100, Math.round((blackNodes / 40) * 100));
  const totalMastery = Math.round((whiteMastery + blackMastery) / 2);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold text-zinc-100">Açılış Hakimiyet Radarı</h3>
              <p className="text-[11px] text-zinc-500 font-mono">
                Repertuvar derinliği ve varyant kapsama haritası
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
            %{totalMastery} Kapsama
          </span>
        </div>

        {/* Visual Dual Progress Bars */}
        <div className="space-y-4 my-3">
          {/* White Repertoire */}
          <div
            onClick={() => {
              if (whiteRep) onSelectRepertoire(whiteRep.id);
              onOpenArena();
            }}
            className="group p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/40 transition cursor-pointer"
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-2 font-semibold text-zinc-200">
                <span className="w-3 h-3 rounded-full bg-zinc-100 border border-zinc-400 inline-block shrink-0" />
                <span>Beyaz Repertuvarı</span>
                <span className="text-[10px] text-zinc-500 font-mono">({whiteNodes} hamle)</span>
              </div>
              <span className="font-mono font-bold text-amber-400">%{whiteMastery}</span>
            </div>

            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                style={{ width: `${whiteMastery}%` }}
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
              />
            </div>
          </div>

          {/* Black Repertoire */}
          <div
            onClick={() => {
              if (blackRep) onSelectRepertoire(blackRep.id);
              onOpenArena();
            }}
            className="group p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/40 transition cursor-pointer"
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-2 font-semibold text-zinc-200">
                <span className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-600 inline-block shrink-0" />
                <span>Siyah Repertuvarı</span>
                <span className="text-[10px] text-zinc-500 font-mono">({blackNodes} hamle)</span>
              </div>
              <span className="font-mono font-bold text-amber-400">%{blackMastery}</span>
            </div>

            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                style={{ width: `${blackMastery}%` }}
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-zinc-400" />
          <span>Toplam {totalNodes} kayıtlı varyant düğümü</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Aktif & Güncel</span>
        </div>
      </div>
    </div>
  );
};
