import React, { useState, useRef, useEffect } from 'react';
import { Compass, Layers, GitBranch, Dumbbell, BarChart3, Palette, Check } from 'lucide-react';
import { THEMES, type ThemeId } from '../../types/theme';

export type ActiveTab = 'hub' | 'repertoire' | 'tree' | 'drill' | 'analytics';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  currentThemeId: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
  onOpenOnboarding: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  currentThemeId,
  onSelectTheme,
  onOpenOnboarding,
}) => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-black/10 dark:bg-black/30 backdrop-blur-xl border-b border-black/5 dark:border-white/5 px-4 py-3 sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand (Click to open Onboarding & Navigation Hub) */}
        <div
          onClick={onOpenOnboarding}
          className="flex items-center gap-3 cursor-pointer group select-none"
          title="Apertura v2.0 Rehberi & Hızlı Menü (Tıkla)"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg group-hover:scale-110 group-hover:bg-amber-500/30 transition shadow-inner">
            ♟
          </div>
          <div>
            <h1 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5 group-hover:text-amber-400 transition">
              Apertura <span className="text-amber-400 font-normal text-xs bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/30">v2.0</span>
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
              <span>Hızlı Menü & Rehber</span>
              <span className="text-[9px] text-amber-500/70">✦</span>
            </p>
          </div>
        </div>

        {/* 5 Main Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
          <button
            onClick={() => onTabChange('hub')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'hub'
                ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            Kumanda Hub
          </button>

          <button
            onClick={() => onTabChange('repertoire')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'repertoire'
                ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Satranç Masası
          </button>

          <button
            onClick={() => onTabChange('tree')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'tree'
                ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            Varyant Ağacı
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
            Hızlı Drill
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

        {/* Right Controls: Theme Picker Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-xl transition cursor-pointer"
            title="Renk Paleti Seçici"
          >
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline font-medium">{THEMES[currentThemeId]?.name}</span>
          </button>

          {/* Theme Dropdown Menu */}
          {isThemeOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-2 z-50 space-y-1">
              <div className="px-3 py-2 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-800">
                Renk Paletleri
              </div>

              {Object.values(THEMES).map(t => {
                const isSelected = t.id === currentThemeId;
                return (
                  <div
                    key={t.id}
                    onClick={() => {
                      onSelectTheme(t.id);
                      setIsThemeOpen(false);
                    }}
                    className={`p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition ${
                      isSelected
                        ? 'bg-zinc-800 border border-amber-500/30 text-zinc-100'
                        : 'hover:bg-zinc-800/60 text-zinc-300'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center -space-x-1 shrink-0">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: t.bgBase }}
                          />
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: t.boardDark }}
                          />
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: t.accent }}
                          />
                        </div>
                        <span className="font-semibold text-xs">{t.name}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/10 text-zinc-400 font-mono">
                          {t.badge}
                        </span>
                      </div>
                      <p className="text-[10px] text-zinc-500">{t.description}</p>
                    </div>

                    {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};