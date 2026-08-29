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
    name: 'Espresso & Walnut',
    description: 'Sıcak Viyana kafe atmosferi, ceviz ağacı & sütlü krema tahta',
    badge: '☕ Açık / Sıcak',
    isLight: true,
    bgBase: '#ece3d4',
    bgSurface: '#ded2bf',
    bgCard: '#f4ede1',
    textPrimary: '#261b17',
    textSecondary: '#6e5c54',
    accent: '#8c593b',
    accentHover: '#704328',
    accentText: '#ffffff',
    boardDark: '#795548',
    boardLight: '#f1ebd8',
  },
  'colorhunt-nordic': {
    id: 'colorhunt-nordic',
    name: 'Nordic Slate & Ice',
    description: 'Ferah İskandinav kütüphanesi, gök mavisi & buzul tahta',
    badge: '❄️ Açık / Ferah',
    isLight: true,
    bgBase: '#dfe7ed',
    bgSurface: '#cbd8e3',
    bgCard: '#ebf1f6',
    textPrimary: '#1a2736',
    textSecondary: '#4e6175',
    accent: '#0284c7',
    accentHover: '#0369a1',
    accentText: '#ffffff',
    boardDark: '#4a6b8a',
    boardLight: '#eef4f9',
  },
  'colorhunt-terracotta': {
    id: 'colorhunt-terracotta',
    name: 'Sand & Terracotta',
    description: 'Akdeniz esintisi, mat çöl kumu & pişmiş toprak tahta',
    badge: '🏜️ Açık / Toprak',
    isLight: true,
    bgBase: '#e4d3bf',
    bgSurface: '#d6c1a8',
    bgCard: '#eee0d0',
    textPrimary: '#2d1c10',
    textSecondary: '#6b4f3a',
    accent: '#b84a39',
    accentHover: '#963728',
    accentText: '#ffffff',
    boardDark: '#93513a',
    boardLight: '#efe3d4',
  },
  'colorhunt-matcha': {
    id: 'colorhunt-matcha',
    name: 'Tournament Forest',
    description: 'FIDE turnuva yeşili & fildişi tahta, dinlendirici orman tonu',
    badge: '🌲 Koyu / Dinlendirici',
    isLight: false,
    bgBase: '#15241c',
    bgSurface: '#1d3227',
    bgCard: '#263f32',
    textPrimary: '#edf3e8',
    textSecondary: '#a5baa8',
    accent: '#4ade80',
    accentHover: '#22c55e',
    accentText: '#0a140e',
    boardDark: '#567a42',
    boardLight: '#e4eccf',
  },
  'colorhunt-midnight': {
    id: 'colorhunt-midnight',
    name: 'Midnight Indigo',
    description: 'Linear/Raycast ekolü, derin gece mavisi & kehribar vurgular',
    badge: '🌌 Koyu / Gece',
    isLight: false,
    bgBase: '#111827',
    bgSurface: '#1a243b',
    bgCard: '#24324f',
    textPrimary: '#f8fafc',
    textSecondary: '#9bb0c9',
    accent: '#f59e0b',
    accentHover: '#d97706',
    accentText: '#0b0f19',
    boardDark: '#355373',
    boardLight: '#dbe7f3',
  },
  'colorhunt-monochrome': {
    id: 'colorhunt-monochrome',
    name: 'Grandmaster Charcoal',
    description: 'Minimalist mat antrasit kömür, platin aksanlar & mermer tahta',
    badge: '♟️ Koyu / Monokrom',
    isLight: false,
    bgBase: '#18181b',
    bgSurface: '#232328',
    bgCard: '#2e2e34',
    textPrimary: '#f4f4f5',
    textSecondary: '#a8a8b2',
    accent: '#e4e4e7',
    accentHover: '#ffffff',
    accentText: '#121214',
    boardDark: '#4e4e54',
    boardLight: '#dcdce0',
  },
};
