import React from 'react';
import type { ActiveTab } from './Header';
import { Layers, Dumbbell, BarChart3 } from 'lucide-react';

interface MobileNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800 px-4 py-2 flex items-center justify-around">
      <button
        onClick={() => onTabChange('repertoire')}
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-medium transition ${
          activeTab === 'repertoire' ? 'text-emerald-400' : 'text-zinc-500'
        }`}
      >
        <Layers className="w-5 h-5" />
        <span>Açılışlar</span>
      </button>

      <button
        onClick={() => onTabChange('drill')}
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-medium transition ${
          activeTab === 'drill' ? 'text-emerald-400' : 'text-zinc-500'
        }`}
      >
        <Dumbbell className="w-5 h-5" />
        <span>Drill</span>
      </button>

      <button
        onClick={() => onTabChange('analytics')}
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-medium transition ${
          activeTab === 'analytics' ? 'text-emerald-400' : 'text-zinc-500'
        }`}
      >
        <BarChart3 className="w-5 h-5" />
        <span>Analiz</span>
      </button>
    </nav>
  );
};