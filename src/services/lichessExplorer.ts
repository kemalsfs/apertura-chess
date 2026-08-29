import { db } from '../db/db';
import type { ExplorerResult, ExplorerSource, ExplorerMove } from '../types/explorer';
import { normalizeFen } from '../utils/chessHelpers';
import { ECO_BOOK } from '../data/ecoBook';

// In-Memory Fast Cache separated by source
const memoryCache = new Map<string, ExplorerResult>();

export const LICHESS_TOKEN_KEY = 'apertura_lichess_token';

export function getLichessToken(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(LICHESS_TOKEN_KEY) || '';
}

export function setLichessToken(token: string): void {
  if (typeof window === 'undefined') return;
  if (token.trim()) {
    localStorage.setItem(LICHESS_TOKEN_KEY, token.trim());
  } else {
    localStorage.removeItem(LICHESS_TOKEN_KEY);
  }
}

export async function fetchOpeningExplorer(
  fen: string,
  source: ExplorerSource = 'masters',
  signal?: AbortSignal
): Promise<ExplorerResult> {
  const normFen = normalizeFen(fen);
  const cacheKey = `${source}:${normFen}`;

  // 1. Check in-memory cache
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey)!;
  }

  // 2. Check IndexedDB cache
  try {
    const dbItem = await db.explorerCache.get(cacheKey);
    if (
      dbItem &&
      dbItem.data &&
      dbItem.source === source &&
      Date.now() - dbItem.timestamp < 1000 * 60 * 60 * 24 * 7
    ) {
      memoryCache.set(cacheKey, dbItem.data);
      return dbItem.data;
    }
  } catch (err) {
    console.warn('Error reading from IndexedDB explorerCache:', err);
  }

  // 3. Construct API URL with strict URL encoding
  const baseUrl =
    source === 'masters'
      ? 'https://explorer.lichess.ovh/masters'
      : 'https://explorer.lichess.ovh/lichess';

  const params = new URLSearchParams();
  params.set('fen', fen);
  if (source === 'lichess') {
    params.set('ratings', '1600,1800,2000,2200,2500');
    params.set('speeds', 'blitz,rapid,classical');
  }
  params.set('topGames', '0');

  const url = `${baseUrl}?${params.toString()}`;

  // 4. Prepare Headers with Bearer Token if available
  const token = getLichessToken();
  const headers: Record<string, string> = {
    'Accept': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // 5. Fetch from Lichess Explorer
  try {
    const response = await fetch(url, { signal, headers });
    if (!response.ok) {
      throw new Error(`Lichess Explorer API error: HTTP ${response.status}`);
    }

    const raw = await response.json();

    const totalWhite = raw.white || 0;
    const totalDraws = raw.draws || 0;
    const totalBlack = raw.black || 0;
    const totalPositionGames = totalWhite + totalDraws + totalBlack;

    const moves: ExplorerMove[] = (raw.moves || []).map((m: any) => {
      const white = m.white || 0;
      const draws = m.draws || 0;
      const black = m.black || 0;
      const total = white + draws + black;

      return {
        uci: m.uci,
        san: m.san,
        white,
        draws,
        black,
        averageRating: m.averageRating,
        whitePercent: total > 0 ? (white / total) * 100 : 0,
        drawsPercent: total > 0 ? (draws / total) * 100 : 0,
        blackPercent: total > 0 ? (black / total) * 100 : 0,
        totalGames: total,
      };
    });

    const result: ExplorerResult = {
      moves,
      opening: raw.opening ? { eco: raw.opening.eco, name: raw.opening.name } : undefined,
      white: totalWhite,
      draws: totalDraws,
      black: totalBlack,
      totalGames: totalPositionGames,
    };

    // Store in memory and IndexedDB
    memoryCache.set(cacheKey, result);
    try {
      await db.explorerCache.put({
        id: cacheKey,
        fen: normFen,
        source,
        data: result,
        timestamp: Date.now(),
      });
    } catch (err) {
      console.warn('Error saving to IndexedDB explorerCache:', err);
    }

    return result;
  } catch (apiError) {
    // Offline fallback: Use exact master games from ECO_BOOK strictly for Masters DB
    const localEco = ECO_BOOK[normFen];
    if (localEco && source === 'masters') {
      let totalPosWhite = 0;
      let totalPosDraws = 0;
      let totalPosBlack = 0;

      const calculatedMoves: ExplorerMove[] = localEco.moves.map((m: any) => {
        const white = m.white || 0;
        const draws = m.draws || 0;
        const black = m.black || 0;
        const total = white + draws + black;

        totalPosWhite += white;
        totalPosDraws += draws;
        totalPosBlack += black;

        return {
          uci: m.uci,
          san: m.san,
          white,
          draws,
          black,
          averageRating: 2480,
          whitePercent: total > 0 ? (white / total) * 100 : 0,
          drawsPercent: total > 0 ? (draws / total) * 100 : 0,
          blackPercent: total > 0 ? (black / total) * 100 : 0,
          totalGames: total,
        };
      });

      const totalPositionGames = totalPosWhite + totalPosDraws + totalPosBlack;

      const fallbackResult: ExplorerResult = {
        moves: calculatedMoves,
        opening: { eco: localEco.eco, name: localEco.name },
        white: totalPosWhite,
        draws: totalPosDraws,
        black: totalPosBlack,
        totalGames: totalPositionGames,
      };

      memoryCache.set(cacheKey, fallbackResult);
      return fallbackResult;
    }

    // Truthful empty result for out-of-theory positions or unauthenticated live Lichess DB
    const emptyResult: ExplorerResult = {
      moves: [],
      opening: undefined,
      white: 0,
      draws: 0,
      black: 0,
      totalGames: 0,
    };

    memoryCache.set(cacheKey, emptyResult);
    return emptyResult;
  }
}
