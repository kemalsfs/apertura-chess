import React from 'react';
import type { ActiveTab } from './Header';
import { Compass, Layers, GitBranch, Dumbbell, BarChart3 } from 'lucide-react';

interface MobileNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

const tabs = [
  { id: 'hub', label: 'Bugün', Icon: Compass },
  { id: 'repertoire', label: 'Tahta', Icon: Layers },
  { id: 'tree', label: 'Ağaç', Icon: GitBranch },
  { id: 'drill', label: 'Çalış', Icon: Dumbbell },
  { id: 'analytics', label: 'Analiz', Icon: BarChart3 },
] as const satisfies ReadonlyArray<{ id: ActiveTab; label: string; Icon: typeof Compass }>;

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, onTabChange }) => (
  <nav aria-label="Ana gezinme" className="mobile-nav md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 px-1 pt-1.5 flex items-center">
    {tabs.map(({ id, label, Icon }) => (
      <button
        key={id}
        type="button"
        onClick={() => onTabChange(id)}
        aria-current={activeTab === id ? 'page' : undefined}
        className={`min-w-0 min-h-12 flex-1 flex flex-col items-center justify-center gap-1 rounded-lg px-0.5 text-[11px] font-medium transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-400 ${
          activeTab === id ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-100'
        }`}
      >
        <Icon aria-hidden="true" className="w-5 h-5" />
        <span className="truncate max-w-full">{label}</span>
      </button>
    ))}
  </nav>
);
