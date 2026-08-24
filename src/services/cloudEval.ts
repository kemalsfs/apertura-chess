import type { EvaluationResult } from '../types/explorer';

const cloudEvalCache = new Map<string, EvaluationResult>();

export async function fetchCloudEval(
  fen: string,
  turn: 'w' | 'b',
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

    if (pv.mate !== undefined) {
      // Mate in N
      // Lichess gives mate from active player perspective. Convert to White perspective:
      const mateVal = turn === 'b' ? -pv.mate : pv.mate;
      evalResult = {
        type: 'mate',
        value: mateVal,
        depth,
        bestMove,
        source: 'cloud',
        isLoading: false,
      };
    } else if (pv.cp !== undefined) {
      // Centipawns (100 cp = 1 pawn)
      const cpVal = turn === 'b' ? -pv.cp : pv.cp;
      evalResult = {
        type: 'cp',
        value: cpVal,
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