export type ThemeId = 
  | 'obsidian-amber' 
  | 'nordic-emerald' 
  | 'midnight-cyber' 
  | 'grandmaster-mono'
  | 'glacier-ice'
  | 'vintage-parchment';

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
    description: 'Klasik ceviz ahşap tahta & sıcak kehribar vurgular',
    badge: '🏆 Varsayılan',
    isLight: false,
    bgBase: '#0c0e14',
    bgSurface: '#141722',
    bgCard: '#1a1e2d',
    textPrimary: '#f4f4f5',
    textSecondary: '#a1a1aa',
    accent: '#f59e0b',
    accentHover: '#d97706',
    boardDark: '#b58863',
    boardLight: '#f0d9b5',
  },
  'glacier-ice': {
    id: 'glacier-ice',
    name: 'Glacier Ice',
    description: 'Açık buzul mavisi & keskin kar beyazı tahta',
    badge: '❄️ Buz Mavisi',
    isLight: true,
    bgBase: '#f0f9ff',
    bgSurface: '#e0f2fe',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    accent: '#0284c7',
    accentHover: '#0369a1',
    boardDark: '#4a82b4',
    boardLight: '#ffffff',
  },
  'vintage-parchment': {
    id: 'vintage-parchment',
    name: 'Vintage Parchment',
    description: 'Sıcak açık fildişi & klasik maun ahşap tahta',
    badge: '📜 Fildişi',
    isLight: true,
    bgBase: '#faf6ee',
    bgSurface: '#f2e8d8',
    bgCard: '#ffffff',
    textPrimary: '#291b12',
    textSecondary: '#6e5645',
    accent: '#c26d2e',
    accentHover: '#9a4c16',
    boardDark: '#9e6d42',
    boardLight: '#f7f0e3',
  },
  'nordic-emerald': {
    id: 'nordic-emerald',
    name: 'Nordic Emerald',
    description: 'İskandinav ormanı & Lichess usta yeşili tahta',
    badge: '🌲 Zümrüt',
    isLight: false,
    bgBase: '#060a08',
    bgSurface: '#0e1411',
    bgCard: '#151e19',
    textPrimary: '#f4f4f5',
    textSecondary: '#9ca3af',
    accent: '#10b981',
    accentHover: '#059669',
    boardDark: '#769656',
    boardLight: '#eeeed2',
  },
  'midnight-cyber': {
    id: 'midnight-cyber',
    name: 'Midnight Cyber',
    description: 'Derin gece uzayı & buzul mavi-lacivert tahta',
    badge: '🌌 Siber Gece',
    isLight: false,
    bgBase: '#050711',
    bgSurface: '#0b0f20',
    bgCard: '#121830',
    textPrimary: '#f4f4f5',
    textSecondary: '#94a3b8',
    accent: '#06b6d4',
    accentHover: '#0891b2',
    boardDark: '#3d5a80',
    boardLight: '#e0fbfc',
  },
  'grandmaster-mono': {
    id: 'grandmaster-mono',
    name: 'Grandmaster Mono',
    description: 'Minimalist mat kömür & platin mermer tahta',
    badge: '♟️ Minimal',
    isLight: false,
    bgBase: '#101012',
    bgSurface: '#18181b',
    bgCard: '#222226',
    textPrimary: '#ffffff',
    textSecondary: '#a1a1aa',
    accent: '#e4e4e7',
    accentHover: '#ffffff',
    boardDark: '#585c6a',
    boardLight: '#e2e8f0',
  },
};
