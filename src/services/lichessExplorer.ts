import { db } from '../db/db';
import type { ExplorerResult, ExplorerSource, ExplorerMove, ExplorerProvenance } from '../types/explorer';
import { normalizeFen } from '../utils/chessHelpers';

// In-Memory Fast Cache separated by source
const memoryCache = new Map<string, ExplorerResult>();

export const LICHESS_TOKEN_KEY = 'apertura_lichess_token';
// Earlier cache versions can contain offline counts whose provenance is unknown.
export const CACHE_VERSION = 'v5';

export function getLichessToken(): string {
  if (typeof window === 'undefined') return '';
  const stored = localStorage.getItem(LICHESS_TOKEN_KEY);
  if (stored && stored.trim()) return stored.trim();
  const envToken = import.meta.env.VITE_LICHESS_API_TOKEN;
  if (envToken && typeof envToken === 'string' && envToken.trim()) {
    return envToken.trim();
  }
  return '';
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
  const cacheKey = `${CACHE_VERSION}:${source}:${normFen}`;

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
      dbItem.data.provenance?.kind === 'lichess-api' &&
      dbItem.data.provenance.source === source &&
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
  const provenanceBase: Omit<ExplorerProvenance, 'kind' | 'retrievedAt'> = {
    source,
    sourceUrl: baseUrl,
    filters: source === 'lichess'
      ? { ratings: '1600,1800,2000,2200,2500', speeds: 'blitz,rapid,classical', topGames: 0 }
      : { topGames: 0 },
    schemaVersion: 1,
  };

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
      provenance: { ...provenanceBase, kind: 'lichess-api', retrievedAt: new Date().toISOString() },
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
    if (signal?.aborted) throw apiError;

    // Legacy bundled books lack a verifiable source and retrieval date. Do not
    // report their counts as Masters or human games when the API is unavailable.
    // Do not cache this result: the next request should retry the live service.
    const unavailableResult: ExplorerResult = {
      provenance: { ...provenanceBase, kind: 'unavailable', retrievedAt: null },
      moves: [],
      opening: undefined,
      white: 0,
      draws: 0,
      black: 0,
      totalGames: 0,
    };

    return unavailableResult;
  }
}
