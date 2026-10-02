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
    description: 'Mat krem yüzey ve sakin ceviz tonları',
    badge: '☕ Açık / Sıcak',
    isLight: true,
    bgBase: '#e7e0d5',
    bgSurface: '#ddd3c5',
    bgCard: '#eee7dc',
    textPrimary: '#29231e',
    textSecondary: '#62534a',
    accent: '#745039',
    accentHover: '#60412f',
    accentText: '#ffffff',
    boardDark: '#806b58',
    boardLight: '#ded2be',
  },
  'colorhunt-nordic': {
    id: 'colorhunt-nordic',
    name: 'Nordic Slate & Ice',
    description: 'Yumuşak taş mavisi ve sisli gri yüzeyler',
    badge: '❄️ Açık / Ferah',
    isLight: true,
    bgBase: '#e0e7e7',
    bgSurface: '#d2dcdd',
    bgCard: '#ebf0ef',
    textPrimary: '#263238',
    textSecondary: '#52646a',
    accent: '#476b74',
    accentHover: '#385760',
    accentText: '#ffffff',
    boardDark: '#607680',
    boardLight: '#d6e2df',
  },
  'colorhunt-terracotta': {
    id: 'colorhunt-terracotta',
    name: 'Sand & Terracotta',
    description: 'Yumuşak kum ve soluk pişmiş toprak tonları',
    badge: '🏜️ Açık / Toprak',
    isLight: true,
    bgBase: '#e6dcd2',
    bgSurface: '#d9c8ba',
    bgCard: '#efe5dc',
    textPrimary: '#302821',
    textSecondary: '#66564b',
    accent: '#895140',
    accentHover: '#704231',
    accentText: '#ffffff',
    boardDark: '#896956',
    boardLight: '#e5d6c5',
  },
  'colorhunt-matcha': {
    id: 'colorhunt-matcha',
    name: 'Tournament Forest',
    description: 'Yumuşak orman yeşili ve mat fildişi tahta',
    badge: '🌲 Koyu / Dinlendirici',
    isLight: false,
    bgBase: '#19231d',
    bgSurface: '#222e26',
    bgCard: '#2b3930',
    textPrimary: '#e5eae1',
    textSecondary: '#b0c0b1',
    accent: '#abc49e',
    accentHover: '#c0d3b4',
    accentText: '#1b2a20',
    boardDark: '#587259',
    boardLight: '#c7d1b8',
  },
  'colorhunt-midnight': {
    id: 'colorhunt-midnight',
    name: 'Midnight Indigo',
    description: 'Mat gece mavisi ve sıcak, düşük parlaklıklı vurgu',
    badge: '🌌 Koyu / Gece',
    isLight: false,
    bgBase: '#151d28',
    bgSurface: '#1e2935',
    bgCard: '#273540',
    textPrimary: '#e7ecea',
    textSecondary: '#b1c0c9',
    accent: '#d4ac73',
    accentHover: '#e1bd8b',
    accentText: '#282117',
    boardDark: '#5a7180',
    boardLight: '#d4dedb',
  },
  'colorhunt-monochrome': {
    id: 'colorhunt-monochrome',
    name: 'Grandmaster Charcoal',
    description: 'Mat antrasit ve yumuşak gri tahta',
    badge: '♟️ Koyu / Monokrom',
    isLight: false,
    bgBase: '#1b1f20',
    bgSurface: '#242a2b',
    bgCard: '#2d3536',
    textPrimary: '#e6e9e7',
    textSecondary: '#b5c0bc',
    accent: '#c5cec8',
    accentHover: '#d6ded8',
    accentText: '#232b27',
    boardDark: '#636d6a',
    boardLight: '#c8d0ca',
  },
};
