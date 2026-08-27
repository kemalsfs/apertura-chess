import React from 'react';
import type { ExplorerResult, EvaluationResult } from '../../types/explorer';
import { Cpu, Users, ShieldAlert, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { parseUci } from '../../utils/chessHelpers';

interface DualityPanelProps {
  explorerData: ExplorerResult | null;
  evaluation: EvaluationResult;
  onPlayMove: (from: string, to: string, promotion?: string) => void;
}

export const DualityPanel: React.FC<DualityPanelProps> = ({
  explorerData,
  evaluation,
  onPlayMove,
}) => {
  const topMasterMoves = explorerData?.moves?.slice(0, 3) || [];
  const bestMasterMove = topMasterMoves[0];

  const topEngineMoves = evaluation.topMoves || (evaluation.bestMove ? [{
    uci: evaluation.bestMove,
    from: evaluation.bestMove.slice(0, 2),
    to: evaluation.bestMove.slice(2, 4),
    type: evaluation.type,
    value: evaluation.value,
    depth: evaluation.depth,
    rank: 1,
    san: evaluation.bestMove,
  }] : []);

  const bestEngineMove = topEngineMoves[0];

  // Evaluate duality discrepancy
  const isDualityMismatch =
    bestMasterMove &&
    bestEngineMove &&
    bestMasterMove.uci !== bestEngineMove.uci;

  const handlePlayUci = (uci: string) => {
    const { from, to, promotion } = parseUci(uci);
    onPlayMove(from, to, promotion);
  };

  const formatScore = (val: number, type: 'cp' | 'mate') => {
    if (type === 'mate') return `#${val}`;
    const sign = val > 0 ? '+' : '';
    return `${sign}${(val / 100).toFixed(1)}`;
  };

  return (
    <div className="space-y-3 font-sans text-xs">
      {/* Trap & Divergence Alert Banner */}
      {isDualityMismatch && bestMasterMove && bestEngineMove ? (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-start gap-2.5 shadow-sm">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-[11px]">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <span>⚡ Teori & Motor Ayrışması (Tuzak İhtimali)</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              İnsan ustalar çoğunlukla <strong className="text-amber-400 font-mono">{bestMasterMove.san}</strong> oynuyor (%{bestMasterMove.whitePercent.toFixed(0)} B / %{bestMasterMove.blackPercent.toFixed(0)} S), ancak Stockfish derinlik {evaluation.depth}'de <strong className="text-emerald-400 font-mono">{bestEngineMove.san || bestEngineMove.uci}</strong> hamlesini ({formatScore(bestEngineMove.value, bestEngineMove.type)}) en iyi görüyor.
            </p>
          </div>
        </div>
      ) : topMasterMoves.length > 0 && bestEngineMove ? (
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 flex items-center gap-2 text-[11px] text-emerald-300 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Mükemmel Uyum: Büyükustalar ve Stockfish aynı ana hatta birleşiyor.</span>
        </div>
      ) : topMasterMoves.length === 0 ? (
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 flex items-center gap-2 text-[11px] text-zinc-400">
          <Sparkles className="w-4 h-4 text-zinc-500 shrink-0" />
          <span>Teori Dışı / Serbest Konum: Stockfish derin motor analizine devam ediyor.</span>
        </div>
      ) : null}

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Left: Top 3 Human Master Moves */}
        <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 mb-2.5">
              <div className="flex items-center gap-1.5 font-bold text-zinc-200 text-[11px]">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>İnsan Usta Tercihleri</span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono">Masters DB</span>
            </div>

            {topMasterMoves.length === 0 ? (
              <div className="py-6 text-center text-zinc-600 italic text-[11px]">
                Kayıtlı usta maçı yok (Teori Sonu)
              </div>
            ) : (
              <div className="space-y-1.5">
                {topMasterMoves.map((m, idx) => (
                  <div
                    key={m.uci}
                    onClick={() => handlePlayUci(m.uci)}
                    className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800/50 hover:border-zinc-700 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-500 w-3">{idx + 1}.</span>
                      <span className="font-mono font-bold text-zinc-100 text-xs">{m.san}</span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[10px]">
                      <span className="text-zinc-400">{m.totalGames.toLocaleString()} oyun</span>
                      <span className="text-amber-400 font-bold">%{m.whitePercent.toFixed(0)} B</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Stockfish Top 3 Engine Moves (MultiPV=3) */}
        <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 mb-2.5">
              <div className="flex items-center gap-1.5 font-bold text-zinc-200 text-[11px]">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>Stockfish Top 3 Öneri</span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono">
                {evaluation.isLoading ? 'Hesaplanıyor...' : `Derinlik: ${evaluation.depth}`}
              </span>
            </div>

            {topEngineMoves.length > 0 ? (
              <div className="space-y-1.5">
                {topEngineMoves.map((m) => (
                  <div
                    key={m.uci}
                    onClick={() => handlePlayUci(m.uci)}
                    className={`flex items-center justify-between p-2 rounded-lg transition cursor-pointer border ${
                      m.rank === 1
                        ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20'
                        : 'bg-zinc-900/80 border-zinc-800/60 hover:bg-zinc-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold w-3">
                        {m.rank}.
                      </span>
                      <span className="font-mono font-bold text-xs text-zinc-100">
                        {m.san || m.uci}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono font-bold text-[10px] px-1.5 py-0.5 rounded ${
                          m.value > 50
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : m.value < -50
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-zinc-800 text-zinc-300'
                        }`}
                      >
                        {formatScore(m.value, m.type)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-zinc-600 italic text-[11px]">
                Motor analizi hesaplanıyor...
              </div>
            )}
          </div>

          {bestEngineMove && (
            <button
              onClick={() => handlePlayUci(bestEngineMove.uci)}
              className="mt-2.5 w-full py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-semibold transition flex items-center justify-center gap-1 cursor-pointer border border-zinc-700"
            >
              <span>1. Motor Hamlesini Oyna ({bestEngineMove.san || bestEngineMove.uci})</span>
              <ArrowRight className="w-3 h-3 text-emerald-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
