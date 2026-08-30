import React, { useState, useEffect } from 'react';
import type { Repertoire } from '../../types/chess';
import { db } from '../../db/db';
import { 
  Flame, 
  Zap, 
  BookOpen, 
  BarChart2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface HubViewProps {
  repertoires: Repertoire[];
  activeRepertoireId: string;
  onSelectRepertoire: (id: string) => void;
  onNavigateTab: (tab: 'repertoire' | 'tree' | 'drill' | 'analytics') => void;
}

export const HubView: React.FC<HubViewProps> = ({
  repertoires,
  onSelectRepertoire,
  onNavigateTab,
}) => {
  const whiteRep = repertoires.find(r => r.color === 'white');
  const blackRep = repertoires.find(r => r.color === 'black');

  const [whiteNodes, setWhiteNodes] = useState(0);
  const [blackNodes, setBlackNodes] = useState(0);

  useEffect(() => {
    async function loadCounts() {
      if (whiteRep) {
        const w = await db.nodes.where('repertoireId').equals(whiteRep.id).count();
        setWhiteNodes(w);
      }
      if (blackRep) {
        const b = await db.nodes.where('repertoireId').equals(blackRep.id).count();
        setBlackNodes(b);
      }
    }
    loadCounts();
  }, [whiteRep, blackRep]);

  const totalNodes = whiteNodes + blackNodes;

  const daysOfWeek = [
    { label: 'P', active: true },
    { label: 'S', active: true },
    { label: 'Ç', active: true },
    { label: 'P', active: true },
    { label: 'C', active: true },
    { label: 'C', active: false },
    { label: 'P', active: false },
  ];

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8 px-2 space-y-8 font-sans">
      {/* 1. Minimal Header & Quick Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-zinc-800/40">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-mono font-medium mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KemalOS Apertura</span>
          </div>
          <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">
            Açılış Antrenörü
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Aktif hatırlama, repertuvar kütüphanesi ve maç analizi
          </p>
        </div>

        {/* Flat Minimal Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => onNavigateTab('tree')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-amber-400 font-bold text-xs border border-amber-500/30 transition cursor-pointer"
          >
            <span>🌳 Varyant Ağacı</span>
          </button>

          <button
            onClick={() => onNavigateTab('drill')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition cursor-pointer shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 fill-zinc-950" />
            <span>Hızlı Drill</span>
          </button>

          <button
            onClick={() => onNavigateTab('repertoire')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs border border-zinc-700/60 transition cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
            <span>Satranç Masası</span>
          </button>
        </div>
      </div>

      {/* 2. Flat Direct Stats (Directly on background) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2">
        <div>
          <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Günlük Seri</span>
          </div>
          <div className="text-2xl font-mono font-bold text-zinc-100">5 Gün</div>
          <div className="flex items-center gap-1.5 mt-2">
            {daysOfWeek.map((d, i) => (
              <span
                key={i}
                className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono ${
                  d.active
                    ? 'bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30'
                    : 'text-zinc-600 bg-zinc-900/40'
                }`}
              >
                {d.label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1">
            Kayıtlı Hamleler
          </div>
          <div className="text-2xl font-mono font-bold text-zinc-100">{totalNodes}</div>
          <div className="text-[11px] text-zinc-400 font-mono mt-1">
            Beyaz: {whiteNodes} • Siyah: {blackNodes}
          </div>
        </div>

        <div>
          <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1">
            Hatırlama Sağlığı
          </div>
          <div className="text-2xl font-mono font-bold text-emerald-400">%88</div>
          <div className="text-[11px] text-zinc-400 font-mono mt-1">Spaced Repetition</div>
        </div>

        <div>
          <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1">
            Repertuvar Uyumu
          </div>
          <div className="text-2xl font-mono font-bold text-blue-400">%76</div>
          <div className="text-[11px] text-zinc-400 font-mono mt-1">Gerçek Maçlarda</div>
        </div>
      </div>

      {/* 3. Direct Repertoire Launchers (Clean Minimal List) */}
      <div className="space-y-3 pt-4 border-t border-zinc-800/40">
        <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
          Repertuvarlar & Çalışma Alanları
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* White Repertoire */}
          <button
            onClick={() => {
              if (whiteRep) onSelectRepertoire(whiteRep.id);
              onNavigateTab('repertoire');
            }}
            className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition cursor-pointer text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-zinc-100 border border-zinc-400 shrink-0" />
              <div>
                <div className="font-semibold text-sm text-zinc-200 group-hover:text-amber-400 transition">
                  Beyaz Repertuvarı
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  {whiteNodes} kayıtlı hamle • 1. e4 Hatları
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition" />
          </button>

          {/* Black Repertoire */}
          <button
            onClick={() => {
              if (blackRep) onSelectRepertoire(blackRep.id);
              onNavigateTab('repertoire');
            }}
            className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition cursor-pointer text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-zinc-950 border border-zinc-600 shrink-0" />
              <div>
                <div className="font-semibold text-sm text-zinc-200 group-hover:text-amber-400 transition">
                  Siyah Repertuvarı
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  {blackNodes} kayıtlı hamle • e4 / d4 Yanıtları
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition" />
          </button>
        </div>

        {/* Analytics Shortcut */}
        <button
          onClick={() => onNavigateTab('analytics')}
          className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/30 hover:border-zinc-700 transition cursor-pointer text-left group"
        >
          <div className="flex items-center gap-2.5">
            <BarChart2 className="w-4 h-4 text-emerald-400" />
            <div>
              <span className="text-xs font-semibold text-zinc-300 group-hover:text-emerald-300 transition">
                Maç Analitiği & Açılış Karnesi
              </span>
              <span className="text-[11px] text-zinc-400 ml-2 font-mono">
                Chess.com / Lichess maç geçmişini incele
              </span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
        </button>
      </div>
    </div>
  );
};
