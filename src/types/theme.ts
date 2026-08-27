export type ThemeId = 'obsidian-amber' | 'nordic-emerald' | 'midnight-cyber' | 'grandmaster-mono';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  badge: string;
  bgBase: string;
  bgSurface: string;
  bgCard: string;
  accent: string;
  accentHover: string;
  boardTheme: 'brown' | 'wood' | 'green' | 'blue';
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  'obsidian-amber': {
    id: 'obsidian-amber',
    name: 'Obsidian & Amber',
    description: 'Klasik turnuva salonu & sıcak kehribar vurgular',
    badge: '🏆 Varsayılan',
    bgBase: '#0f1117',
    bgSurface: '#161922',
    bgCard: '#1d212d',
    accent: '#f59e0b',
    accentHover: '#d97706',
    boardTheme: 'brown',
  },
  'nordic-emerald': {
    id: 'nordic-emerald',
    name: 'Nordic Emerald',
    description: 'Modern orman & dinlendirici zümrüt tonları',
    badge: '🌲 Lichess Stili',
    bgBase: '#090d0b',
    bgSurface: '#111815',
    bgCard: '#17221e',
    accent: '#10b981',
    accentHover: '#059669',
    boardTheme: 'brown',
  },
  'midnight-cyber': {
    id: 'midnight-cyber',
    name: 'Midnight Cyber',
    description: 'Derin uzay & elektrik mavisi analitik çizgiler',
    badge: '🌌 Dijital',
    bgBase: '#070913',
    bgSurface: '#0e1222',
    bgCard: '#151b32',
    accent: '#06b6d4',
    accentHover: '#0891b2',
    boardTheme: 'brown',
  },
  'grandmaster-mono': {
    id: 'grandmaster-mono',
    name: 'Grandmaster Mono',
    description: 'Minimalist mat kömür & dikkati dağıtmayan platin',
    badge: '♟️ Minimal',
    bgBase: '#121212',
    bgSurface: '#1c1c1c',
    bgCard: '#242424',
    accent: '#e4e4e7',
    accentHover: '#ffffff',
    boardTheme: 'brown',
  },
};
