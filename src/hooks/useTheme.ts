import { useState, useEffect } from 'react';
import { THEMES, type ThemeId, type ThemeConfig } from '../types/theme';

const STORAGE_KEY = 'apertura_theme_id';

export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId;
    return (saved && THEMES[saved]) ? saved : 'obsidian-amber';
  });

  const theme: ThemeConfig = THEMES[themeId] || THEMES['obsidian-amber'];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeId);

    // Apply class to html and body
    document.documentElement.className = `theme-${themeId}`;
    document.body.className = `theme-${themeId}`;

    document.documentElement.style.setProperty('--theme-bg-base', theme.bgBase);
    document.documentElement.style.setProperty('--theme-bg-surface', theme.bgSurface);
    document.documentElement.style.setProperty('--theme-bg-card', theme.bgCard);
    document.documentElement.style.setProperty('--theme-accent', theme.accent);
    document.documentElement.style.setProperty('--theme-accent-hover', theme.accentHover);
  }, [themeId, theme]);

  return {
    themeId,
    theme,
    setThemeId,
    themes: THEMES,
  };
}
