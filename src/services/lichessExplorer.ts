import { db } from '../db/db';
import type { ExplorerResult, ExplorerSource, ExplorerMove } from '../types/explorer';
import { normalizeFen } from '../utils/chessHelpers';

// In-Memory Fast Cache
const memoryCache = new Map<string, ExplorerResult>();

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
    if (dbItem && Date.now() - dbItem.timestamp < 1000 * 60 * 60 * 24 * 7) {
      // Valid for 7 days
      memoryCache.set(cacheKey, dbItem.data);
      return dbItem.data;
    }
  } catch (err) {
    console.warn('Error reading from IndexedDB explorerCache:', err);
  }

  // 3. Construct API URL
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

  // 4. Fetch from Lichess Explorer
  const response = await fetch(url, { signal });
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

  // 5. Store in memory and IndexedDB
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
}