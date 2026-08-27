import { useState, useEffect } from 'react';
import { THEMES, type ThemeId, type ThemeConfig } from '../types/theme';

const STORAGE_KEY = 'apertura_theme_id_v3';

export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId;
    return (saved && THEMES[saved]) ? saved : 'colorhunt-midnight';
  });

  const theme: ThemeConfig = THEMES[themeId] || THEMES['colorhunt-midnight'];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeId);

    // Apply classes to document root and body
    const isLight = !!theme.isLight;
    document.documentElement.className = `theme-${themeId} ${isLight ? 'theme-light' : 'theme-dark'}`;
    document.body.className = `theme-${themeId} ${isLight ? 'theme-light' : 'theme-dark'}`;

    // Apply CSS Custom Properties
    const root = document.documentElement;
    root.style.setProperty('--theme-bg-base', theme.bgBase);
    root.style.setProperty('--theme-bg-surface', theme.bgSurface);
    root.style.setProperty('--theme-bg-card', theme.bgCard);
    root.style.setProperty('--theme-text-primary', theme.textPrimary);
    root.style.setProperty('--theme-text-secondary', theme.textSecondary);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-accent-hover', theme.accentHover);
    root.style.setProperty('--theme-accent-text', theme.accentText);
    root.style.setProperty('--board-dark', theme.boardDark);
    root.style.setProperty('--board-light', theme.boardLight);
  }, [themeId, theme]);

  return {
    themeId,
    theme,
    setThemeId,
    themes: THEMES,
  };
}
