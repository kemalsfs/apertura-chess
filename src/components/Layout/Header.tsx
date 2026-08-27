import React from 'react';
import { Layers, Dumbbell, BarChart3, ShieldCheck } from 'lucide-react';

export type ActiveTab = 'repertoire' | 'drill' | 'analytics';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 px-4 py-3 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg">
            ♟
          </div>
          <div>
            <h1 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
              Apertura <span className="text-amber-400 font-normal text-xs">v2.0</span>
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono">Chess Repertoire & Trainer</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
          <button
            onClick={() => onTabChange('repertoire')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'repertoire'
                ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Açılış Ağacı
          </button>

          <button
            onClick={() => onTabChange('drill')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'drill'
                ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            Drill & Tekrar
          </button>

          <button
            onClick={() => onTabChange('analytics')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Maç Analitiği
          </button>
        </nav>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-lg">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span className="text-[11px] font-mono text-zinc-300">Local-First (Dexie)</span>
        </div>
      </div>
    </header>
  );
};