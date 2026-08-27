export type ThemeId = 
  | 'colorhunt-espresso' 
  | 'colorhunt-nordic'
  | 'colorhunt-matcha'
  | 'colorhunt-midnight'
  | 'colorhunt-terracotta'
  | 'colorhunt-monochrome';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  badge: string;
  isLight?: boolean;
  bgBase: string;
  bgSurface: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  accentHover: string;
  accentText: string;
  boardDark: string;
  boardLight: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  'colorhunt-espresso': {
    id: 'colorhunt-espresso',
    name: 'Espresso & Cream',
    description: 'Sıcak mat krema zemin, sütlü kahve tuşlar & ahşap tahta',
    badge: '☕ Açık / Sıcak',
    isLight: true,
    bgBase: '#ece2d0',
    bgSurface: '#ded1bc',
    bgCard: '#f4ede1',
    textPrimary: '#2b2024',
    textSecondary: '#6e5d57',
    accent: '#7a5c43',
    accentHover: '#5c432f',
    accentText: '#ffffff',
    boardDark: '#7a5c43',
    boardLight: '#f4ede1',
  },
  'colorhunt-nordic': {
    id: 'colorhunt-nordic',
    name: 'Nordic Slate & Ice',
    description: 'Ferah açık buzul grisi zemin, gök mavisi tuşlar & buzul tahta',
    badge: '❄️ Açık / Ferah',
    isLight: true,
    bgBase: '#e2e7ec',
    bgSurface: '#cfd7e0',
    bgCard: '#edf1f5',
    textPrimary: '#1e293b',
    textSecondary: '#526071',
    accent: '#0284c7',
    accentHover: '#0369a1',
    accentText: '#ffffff',
    boardDark: '#486988',
    boardLight: '#f0f5fa',
  },
  'colorhunt-terracotta': {
    id: 'colorhunt-terracotta',
    name: 'Sand & Terracotta',
    description: 'Doğal mat çöl kumu zemin, kiremit tuşlar & pişmiş toprak tahta',
    badge: '🏜️ Açık / Doğal',
    isLight: true,
    bgBase: '#eadbc8',
    bgSurface: '#dec4a8',
    bgCard: '#f4ebd9',
    textPrimary: '#2c1d11',
    textSecondary: '#694e39',
    accent: '#a04838',
    accentHover: '#7e3527',
    accentText: '#ffffff',
    boardDark: '#8e4c32',
    boardLight: '#f4ebd9',
  },
  'colorhunt-matcha': {
    id: 'colorhunt-matcha',
    name: 'Matcha & Forest',
    description: 'Dinlendirici mat orman yeşili zemin, matcha tuşlar & Lichess yeşili tahta',
    badge: '🌲 Koyu / Dinlendirici',
    isLight: false,
    bgBase: '#15221b',
    bgSurface: '#1c2d24',
    bgCard: '#24392e',
    textPrimary: '#eaefe3',
    textSecondary: '#9cb09e',
    accent: '#65a30d',
    accentHover: '#4d7c0f',
    accentText: '#0f172a',
    boardDark: '#688a58',
    boardLight: '#e3ebd0',
  },
  'colorhunt-midnight': {
    id: 'colorhunt-midnight',
    name: 'Midnight Indigo',
    description: 'Derin gece mavisi zemin, kehribar tuşlar & kobalt tahta',
    badge: '🌌 Koyu / Gece',
    isLight: false,
    bgBase: '#0f172a',
    bgSurface: '#1e293b',
    bgCard: '#27354a',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    accent: '#f59e0b',
    accentHover: '#d97706',
    accentText: '#0f172a',
    boardDark: '#3b536f',
    boardLight: '#dce7f3',
  },
  'colorhunt-monochrome': {
    id: 'colorhunt-monochrome',
    name: 'Charcoal & Platinum',
    description: 'Minimalist mat kömür zemin, platin tuşlar & mermer tahta',
    badge: '♟️ Koyu / Minimal',
    isLight: false,
    bgBase: '#171717',
    bgSurface: '#212121',
    bgCard: '#2b2b2b',
    textPrimary: '#f5f5f5',
    textSecondary: '#a3a3a3',
    accent: '#e5e5e5',
    accentHover: '#ffffff',
    accentText: '#171717',
    boardDark: '#525252',
    boardLight: '#d6d6d6',
  },
};
