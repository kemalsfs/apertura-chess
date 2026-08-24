import { Chess } from 'chess.js';
import type { Key } from 'chessground/types';

export const STARTING_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

/**
 * Normalizes a FEN string by removing the halfmove clock and fullmove number.
 * This allows matching identical board positions reached through different move orders (Transposition).
 */
export function normalizeFen(fen: string): string {
  const parts = fen.trim().split(' ');
  if (parts.length >= 4) {
    return `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`;
  }
  return fen;
}

/**
 * Computes legal move destinations for each square from current chess.js instance.
 * Format required by Chessground: Map<origSquare, destSquares[]>
 */
export function getLegalDests(chess: Chess): Map<Key, Key[]> {
  const dests = new Map<Key, Key[]>();
  const legalMoves = chess.moves({ verbose: true });

  for (const move of legalMoves) {
    const from = move.from as Key;
    const to = move.to as Key;
    const existing = dests.get(from);
    if (existing) {
      existing.push(to);
    } else {
      dests.set(from, [to]);
    }
  }

  return dests;
}

/**
 * Checks if a move is a pawn promotion.
 */
export function isPromotionMove(chess: Chess, from: string, to: string): boolean {
  const piece = chess.get(from as any);
  if (!piece || piece.type !== 'p') return false;

  const targetRank = to[1];
  if (piece.color === 'w' && targetRank === '8') return true;
  if (piece.color === 'b' && targetRank === '1') return true;

  return false;
}

/**
 * Converts UCI (e.g. "e2e4") to from/to squares.
 */
export function parseUci(uci: string): { from: string; to: string; promotion?: string } {
  return {
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
  };
}