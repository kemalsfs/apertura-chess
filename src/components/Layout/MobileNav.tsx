import React from 'react';
import type { ActiveTab } from './Header';
import { Compass, Layers, GitBranch, Dumbbell, BarChart3 } from 'lucide-react';

interface MobileNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="mobile-nav md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 px-1 pt-1.5 flex items-center justify-around">
      <button
        onClick={() => onTabChange('hub')}
        className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded-lg text-[9px] font-medium transition cursor-pointer ${
          activeTab === 'hub' ? 'text-amber-400 font-bold' : 'text-zinc-500'
        }`}
      >
        <Compass className="w-4 h-4" />
        <span>Kumanda</span>
      </button>

      <button
        onClick={() => onTabChange('repertoire')}
        className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded-lg text-[9px] font-medium transition cursor-pointer ${
          activeTab === 'repertoire' ? 'text-amber-400 font-bold' : 'text-zinc-500'
        }`}
      >
        <Layers className="w-4 h-4" />
        <span>Masası</span>
      </button>

      <button
        onClick={() => onTabChange('tree')}
        className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded-lg text-[9px] font-medium transition cursor-pointer ${
          activeTab === 'tree' ? 'text-amber-400 font-bold' : 'text-zinc-500'
        }`}
      >
        <GitBranch className="w-4 h-4" />
        <span>Ağaç</span>
      </button>

      <button
        onClick={() => onTabChange('drill')}
        className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded-lg text-[9px] font-medium transition cursor-pointer ${
          activeTab === 'drill' ? 'text-amber-400 font-bold' : 'text-zinc-500'
        }`}
      >
        <Dumbbell className="w-4 h-4" />
        <span>Drill</span>
      </button>

      <button
        onClick={() => onTabChange('analytics')}
        className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded-lg text-[9px] font-medium transition cursor-pointer ${
          activeTab === 'analytics' ? 'text-amber-400 font-bold' : 'text-zinc-500'
        }`}
      >
        <BarChart3 className="w-4 h-4" />
        <span>Analiz</span>
      </button>
    </nav>
  );
};
