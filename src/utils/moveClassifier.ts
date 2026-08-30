import { Chess } from 'chess.js';
import { ECO_BOOK } from '../data/ecoBook';
import { LICHESS_PLAYER_BOOK } from '../data/lichessPlayerBook';
import { normalizeFen } from './chessHelpers';

export type MoveQuality = 
  | 'brilliant' 
  | 'best' 
  | 'book' 
  | 'excellent' 
  | 'good' 
  | 'inaccuracy' 
  | 'mistake' 
  | 'blunder' 
  | 'miss';

export interface MoveQualityBadge {
  quality: MoveQuality;
  label: string;
  shortLabel: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  description: string;
}

export const MOVE_QUALITY_MAP: Record<MoveQuality, MoveQualityBadge> = {
  brilliant: {
    quality: 'brilliant',
    label: 'Parlak Hamle',
    shortLabel: 'Parlak',
    icon: '💎',
    color: '#06b6d4',
    bgColor: 'bg-cyan-500/15',
    borderColor: 'border-cyan-500/40',
    textColor: 'text-cyan-400',
    description: 'Materyal fedası içeren ve kazancı koruyan dahi hamle!',
  },
  best: {
    quality: 'best',
    label: 'En İyi Hamle',
    shortLabel: 'En İyi',
    icon: '⭐',
    color: '#10b981',
    bgColor: 'bg-emerald-500/15',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    description: 'Motorun en üstün gördüğü kusursuz hamle.',
  },
  book: {
    quality: 'book',
    label: 'Kitap Hamlesi',
    shortLabel: 'Kitap',
    icon: '📖',
    color: '#3b82f6',
    bgColor: 'bg-blue-500/15',
    borderColor: 'border-blue-500/40',
    textColor: 'text-blue-400',
    description: 'Resmi FIDE / Usta açılış teorisi.',
  },
  excellent: {
    quality: 'excellent',
    label: 'Mükemmel',
    shortLabel: 'Mükemmel',
    icon: '✨',
    color: '#84cc16',
    bgColor: 'bg-lime-500/15',
    borderColor: 'border-lime-500/40',
    textColor: 'text-lime-400',
    description: 'En iyi hamleye çok yakın alternatif.',
  },
  good: {
    quality: 'good',
    label: 'İyi Hamle',
    shortLabel: 'İyi',
    icon: '👍',
    color: '#22c55e',
    bgColor: 'bg-green-500/15',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400',
    description: 'Pozisyonu koruyan sağlam tercih.',
  },
  inaccuracy: {
    quality: 'inaccuracy',
    label: 'Şüpheli',
    shortLabel: 'Şüpheli',
    icon: '⚠️',
    color: '#eab308',
    bgColor: 'bg-yellow-500/15',
    borderColor: 'border-yellow-500/40',
    textColor: 'text-yellow-400',
    description: 'Üstünlüğü hafifçe eriten kaçırılmış fırsat.',
  },
  mistake: {
    quality: 'mistake',
    label: 'Hata',
    shortLabel: 'Hata',
    icon: '❌',
    color: '#f97316',
    bgColor: 'bg-orange-500/15',
    borderColor: 'border-orange-500/40',
    textColor: 'text-orange-400',
    description: 'Ciddi avantaj kaybı veya konumu eşitleyen hamle.',
  },
  blunder: {
    quality: 'blunder',
    label: 'Çift Soru',
    shortLabel: 'Blunder',
    icon: '💥',
    color: '#ef4444',
    bgColor: 'bg-red-500/15',
    borderColor: 'border-red-500/40',
    textColor: 'text-red-400',
    description: 'Oyunu kayba sürükleyen veya mat kaçıran vahim hata.',
  },
  miss: {
    quality: 'miss',
    label: 'Fırsat Kaçtı',
    shortLabel: 'Kaçtı',
    icon: '🧩',
    color: '#a855f7',
    bgColor: 'bg-purple-500/15',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-400',
    description: 'Taktiksel bir kazanç veya mat varken kaçırıldı.',
  },
};

/**
 * Standard Winning Percentage Formula (Sigmoid)
 */
export function winningPercentage(cp: number): number {
  const clamped = Math.max(-1500, Math.min(1500, cp));
  return 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * clamped)) - 1);
}

/**
 * Piece value mapping for sacrifice detection
 */
const PIECE_VALUES: Record<string, number> = {
  p: 100,
  n: 300,
  b: 310,
  r: 500,
  q: 900,
  k: 20000,
};

/**
 * Detect if a move is a piece sacrifice
 */
function isSacrifice(prevFen: string, uci: string): boolean {
  try {
    const chess = new Chess(prevFen);
    const from = uci.slice(0, 2);
    const to = uci.slice(2, 4);
    const piece = chess.get(from as any);
    if (!piece || piece.type === 'p' || piece.type === 'k') return false;

    const targetPiece = chess.get(to as any);
    const movedVal = PIECE_VALUES[piece.type] || 0;
    const targetVal = targetPiece ? (PIECE_VALUES[targetPiece.type] || 0) : 0;

    // Material given up > material gained
    if (movedVal > targetVal + 150) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export interface ClassifyInput {
  prevFen: string;
  playedUci: string;
  playedSan: string;
  turn: 'w' | 'b';
  bestMoveUci?: string;
  prevCp?: number;
  currentCp?: number;
  plyNumber: number;
}

export interface ClassificationResult {
  quality: MoveQuality;
  badge: MoveQualityBadge;
  winDrop: number;
  accuracy: number;
}

/**
 * Classifies a played move based on Theory, Engine Evaluation Drop, and Tactical Sacrifice.
 */
export function classifyMove(input: ClassifyInput): ClassificationResult | null {
  const normPrevFen = normalizeFen(input.prevFen);
  
  // 1. Check Opening Theory (Early book moves are always Book)
  if (input.plyNumber <= 24) {
    const masterEntry = ECO_BOOK[normPrevFen];
    const playerEntry = LICHESS_PLAYER_BOOK[normPrevFen];
    
    const isMasterMove = masterEntry?.moves?.some(m => m.uci === input.playedUci || m.san === input.playedSan);
    const isPlayerMove = playerEntry?.moves?.some(m => m.uci === input.playedUci || m.san === input.playedSan);

    if (isMasterMove || isPlayerMove) {
      return {
        quality: 'book',
        badge: MOVE_QUALITY_MAP.book,
        winDrop: 0,
        accuracy: 100,
      };
    }
  }

  // If no evaluation data is available yet, DO NOT FABRICATE DATA!
  if (input.prevCp === undefined || input.currentCp === undefined) {
    return null;
  }

  // Normalize CP from player perspective
  const playerPrevCp = input.turn === 'w' ? input.prevCp : -input.prevCp;
  const playerCurrentCp = input.turn === 'w' ? input.currentCp : -input.currentCp;

  const prevWin = winningPercentage(playerPrevCp);
  const currentWin = winningPercentage(playerCurrentCp);

  // Win Drop (positive means player lost winning chances)
  const winDrop = Math.max(0, prevWin - currentWin);

  // Calculate move accuracy (CAPS formula)
  const accuracy = Math.min(100, Math.max(0, 103.1668 * Math.exp(-0.04354 * winDrop) - 3.1669));

  // Check if player played the exact best move
  const isBestMove = input.bestMoveUci && input.bestMoveUci === input.playedUci;

  // 2. Check Brilliant Move (Sacrifice + Best Move + Good Evaluation)
  if (isBestMove && playerCurrentCp >= -50 && isSacrifice(input.prevFen, input.playedUci)) {
    return {
      quality: 'brilliant',
      badge: MOVE_QUALITY_MAP.brilliant,
      winDrop,
      accuracy: 100,
    };
  }

  // 3. Check Missed Win (Player was winning > +3.0 and dropped below +0.8)
  if (playerPrevCp >= 300 && playerCurrentCp < 80 && winDrop >= 25) {
    return {
      quality: 'miss',
      badge: MOVE_QUALITY_MAP.miss,
      winDrop,
      accuracy: Math.round(accuracy),
    };
  }

  // 4. Threshold Classifications based on Win Drop
  let quality: MoveQuality = 'good';

  if (isBestMove || winDrop <= 1.5) {
    quality = 'best';
  } else if (winDrop <= 4.0) {
    quality = 'excellent';
  } else if (winDrop <= 9.0) {
    quality = 'good';
  } else if (winDrop <= 20.0) {
    quality = 'inaccuracy';
  } else if (winDrop <= 35.0) {
    quality = 'mistake';
  } else {
    quality = 'blunder';
  }

  return {
    quality,
    badge: MOVE_QUALITY_MAP[quality],
    winDrop: Math.round(winDrop * 10) / 10,
    accuracy: Math.round(accuracy),
  };
}

export interface PlayerGameAccuracy {
  whiteAccuracy: number;
  blackAccuracy: number;
  whiteBadges: Record<MoveQuality, number>;
  blackBadges: Record<MoveQuality, number>;
}
