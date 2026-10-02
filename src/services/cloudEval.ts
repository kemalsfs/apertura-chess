import type { EvaluationResult, EngineMoveOption } from '../types/explorer';
import { getLichessToken } from './lichessExplorer';

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
    const url = `https://lichess.org/api/cloud-eval?fen=${encodeURIComponent(fen)}&multiPv=3`;
    const token = getLichessToken();
    const headers: Record<string, string> = {
      'Accept': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, { headers, signal });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (!data || !data.pvs || data.pvs.length === 0) {
      return null;
    }

    const depth = data.depth;
    if (!Number.isInteger(depth) || depth <= 0) return null;
    const topMoves: EngineMoveOption[] = [];

    data.pvs.forEach((pv: any) => {
      const moves = pv.moves ? pv.moves.split(' ') : [];
      const uciMove = moves[0];
      if (!uciMove) return;

      const from = uciMove.slice(0, 2);
      const to = uciMove.slice(2, 4);

      let scoreType: 'cp' | 'mate';
      let scoreValue: number;
      if (Number.isInteger(pv.mate)) {
        scoreType = 'mate';
        scoreValue = pv.mate;
      } else if (Number.isFinite(pv.cp)) {
        scoreType = 'cp';
        scoreValue = pv.cp;
      } else {
        return;
      }

      topMoves.push({
        uci: uciMove,
        from,
        to,
        type: scoreType,
        value: scoreValue,
        depth,
        rank: topMoves.length + 1,
      });
    });

    const bestOption = topMoves[0];
    if (!bestOption) return null;

    const evalResult: EvaluationResult = {
      type: bestOption.type,
      value: bestOption.value,
      depth,
      bestMove: bestOption.uci,
      topMoves,
      source: 'cloud',
      isLoading: false,
    };

    cloudEvalCache.set(fen, evalResult);
    return evalResult;
  } catch (err: any) {
    if (err.name === 'AbortError') return null;
    return null;
  }
}
