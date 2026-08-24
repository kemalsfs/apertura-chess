import type { EvaluationResult } from '../types/explorer';

const cloudEvalCache = new Map<string, EvaluationResult>();

export async function fetchCloudEval(
  fen: string,
  _turn: 'w' | 'b',
  signal?: AbortSignal
): Promise<EvaluationResult | null> {
  if (cloudEvalCache.has(fen)) {
    return cloudEvalCache.get(fen)!;
  }

  try {
    const url = `https://lichess.org/api/cloud-eval?fen=${encodeURIComponent(fen)}&multiPv=1`;
    const response = await fetch(url, { signal });

    if (!response.ok) {
      // 404 means not in cloud database
      return null;
    }

    const data = await response.json();
    if (!data || !data.pvs || data.pvs.length === 0) {
      return null;
    }

    const pv = data.pvs[0];
    const depth = data.depth || 30;
    const moves = pv.moves ? pv.moves.split(' ') : [];
    const bestMove = moves[0] || undefined;

    let evalResult: EvaluationResult;

    // NOTE: Lichess Cloud Eval API already provides scores from White perspective.
    if (pv.mate !== undefined) {
      evalResult = {
        type: 'mate',
        value: pv.mate,
        depth,
        bestMove,
        source: 'cloud',
        isLoading: false,
      };
    } else if (pv.cp !== undefined) {
      evalResult = {
        type: 'cp',
        value: pv.cp,
        depth,
        bestMove,
        source: 'cloud',
        isLoading: false,
      };
    } else {
      return null;
    }

    cloudEvalCache.set(fen, evalResult);
    return evalResult;
  } catch (err: any) {
    if (err.name === 'AbortError') return null;
    console.warn('Cloud eval fetch error:', err);
    return null;
  }
}