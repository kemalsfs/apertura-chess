export type ThemeId = 
  | 'obsidian-amber' 
  | 'glacier-ice'
  | 'vintage-parchment'
  | 'nordic-emerald' 
  | 'midnight-cyber' 
  | 'grandmaster-mono';

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
  boardDark: string;
  boardLight: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  'obsidian-amber': {
    id: 'obsidian-amber',
    name: 'Obsidian & Amber',
    description: 'Klasik ceviz ahşap tahta & sıcak kehribar',
    badge: '🏆 Koyu Klasik',
    isLight: false,
    bgBase: '#12151e',
    bgSurface: '#181d2a',
    bgCard: '#202637',
    textPrimary: '#f4f4f5',
    textSecondary: '#9ca3af',
    accent: '#f59e0b',
    accentHover: '#d97706',
    boardDark: '#b58863',
    boardLight: '#f0d9b5',
  },
  'glacier-ice': {
    id: 'glacier-ice',
    name: 'Glacier Ice',
    description: 'Dinlendirici mat buzul mavisi & yumuşak buz kareleri',
    badge: '❄️ Buz Mavisi',
    isLight: false,
    bgBase: '#131b26',
    bgSurface: '#1a2433',
    bgCard: '#222f42',
    textPrimary: '#f1f5f9',
    textSecondary: '#94a3b8',
    accent: '#38bdf8',
    accentHover: '#0ea5e9',
    boardDark: '#4a7298',
    boardLight: '#cce2f5',
  },
  'vintage-parchment': {
    id: 'vintage-parchment',
    name: 'Vintage Parchment',
    description: 'Göz yormayan sıcak mat parşömen & maun ahşap',
    badge: '📜 Fildişi Parşömen',
    isLight: true,
    bgBase: '#ebe5db',
    bgSurface: '#dfd8cb',
    bgCard: '#f5f0e6',
    textPrimary: '#29221b',
    textSecondary: '#6e6255',
    accent: '#b45309',
    accentHover: '#92400e',
    boardDark: '#9e6d42',
    boardLight: '#f2e8da',
  },
  'nordic-emerald': {
    id: 'nordic-emerald',
    name: 'Nordic Emerald',
    description: 'Dinlendirici orman yeşili & Lichess usta tahtası',
    badge: '🌲 Zümrüt',
    isLight: false,
    bgBase: '#0d1612',
    bgSurface: '#14221c',
    bgCard: '#1c2d25',
    textPrimary: '#f3f4f6',
    textSecondary: '#9ca3af',
    accent: '#10b981',
    accentHover: '#059669',
    boardDark: '#769656',
    boardLight: '#eeeed2',
  },
  'midnight-cyber': {
    id: 'midnight-cyber',
    name: 'Midnight Cyber',
    description: 'Gece uzayı & elektrik mavisi analitik çizgiler',
    badge: '🌌 Siber Gece',
    isLight: false,
    bgBase: '#090d1a',
    bgSurface: '#10162a',
    bgCard: '#17203b',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    accent: '#06b6d4',
    accentHover: '#0891b2',
    boardDark: '#3d5a80',
    boardLight: '#d2e4f7',
  },
  'grandmaster-mono': {
    id: 'grandmaster-mono',
    name: 'Grandmaster Mono',
    description: 'Minimalist mat kömür & platin mermer',
    badge: '♟️ Minimal Mat',
    isLight: false,
    bgBase: '#141417',
    bgSurface: '#1c1c21',
    bgCard: '#26262c',
    textPrimary: '#ffffff',
    textSecondary: '#a1a1aa',
    accent: '#e4e4e7',
    accentHover: '#ffffff',
    boardDark: '#585c6a',
    boardLight: '#d4d8e2',
  },
};
