import React, { useState, useEffect } from 'react';
import { fetchOpeningExplorer } from '../../services/lichessExplorer';
import type { ExplorerResult, ExplorerSource, EvaluationResult } from '../../types/explorer';
import type { RepertoireNode } from '../../types/chess';
import { Database, Award, Users, Check, Plus, Loader2, Zap } from 'lucide-react';
import { parseUci } from '../../utils/chessHelpers';
import { DualityPanel } from './DualityPanel';

interface OpeningExplorerProps {
  fen: string;
  currentChildren: RepertoireNode[];
  evaluation: EvaluationResult;
  onPlayMove: (from: string, to: string, promotion?: string) => void;
}

export const OpeningExplorer: React.FC<OpeningExplorerProps> = ({
  fen,
  currentChildren,
  evaluation,
  onPlayMove,
}) => {
  const [source, setSource] = useState<ExplorerSource>('masters');
  const [explorerTab, setExplorerTab] = useState<'moves' | 'duality'>('duality');
  const [data, setData] = useState<ExplorerResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dataUnavailable = data?.provenance.kind === 'unavailable';

  useEffect(() => {
    const controller = new AbortController();
    let isCancelled = false;

    setIsLoading(true);
    setError(null);
    setData(null);

    async function loadExplorer() {
      try {
        const res = await fetchOpeningExplorer(fen, source, controller.signal);
        if (!isCancelled) {
          setData(res);
          setIsLoading(false);
        }
      } catch (err: any) {
        if (!isCancelled && err.name !== 'AbortError') {
          console.warn('Opening explorer fetch failed:', err);
          setError('Açılış verileri alınamadı');
          setIsLoading(false);
        }
      }
    }

    // Small debounce
    const timer = setTimeout(loadExplorer, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [fen, source]);

  // Set of SAN moves already saved in user's repertoire for this position
  const savedSans = new Set(currentChildren.map(c => c.san));

  // Format large numbers (e.g. 1420500 -> 1.4M, 24500 -> 24.5K)
  const formatCount = (count: number) => {
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
    return count.toString();
  };

  const handleMoveClick = (uci: string) => {
    const { from, to, promotion } = parseUci(uci);
    onPlayMove(from, to, promotion);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-md flex flex-col">
      {/* Top Header & Tab Switcher */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
        {/* Main Explorer View Tabs */}
        <div className="flex items-center bg-zinc-950 border border-zinc-800 p-0.5 rounded-lg">
          <button
            onClick={() => setExplorerTab('moves')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer ${
              explorerTab === 'moves'
                ? 'bg-zinc-800 text-amber-400 font-bold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Usta Veritabanı</span>
          </button>

          <button
            onClick={() => setExplorerTab('duality')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer ${
              explorerTab === 'duality'
                ? 'bg-zinc-800 text-amber-400 font-bold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>⚡ Duality & Tuzak</span>
          </button>
        </div>

        {/* Database Source Switcher (Only in moves tab) */}
        {explorerTab === 'moves' && (
          <div className="flex items-center bg-zinc-950 border border-zinc-800 p-0.5 rounded-lg">
            <button
              onClick={() => setSource('masters')}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold transition cursor-pointer ${
                source === 'masters'
                  ? 'bg-zinc-800 text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Award className="w-3 h-3" />
              Büyükustalar
            </button>

            <button
              onClick={() => setSource('lichess')}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold transition cursor-pointer ${
                source === 'lichess'
                  ? 'bg-zinc-800 text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Users className="w-3 h-3" />
              Lichess
            </button>
          </div>
        )}
      </div>

      {/* Duality & Trap View */}
      {explorerTab === 'duality' ? (
        <DualityPanel
          explorerData={data}
          evaluation={evaluation}
          onPlayMove={onPlayMove}
        />
      ) : (
        <>
          {/* Opening ECO & Name Banner */}
          {data?.opening && data.totalGames > 0 && (
            <div className="bg-zinc-950/80 border border-amber-500/20 rounded-lg px-3 py-2 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  {data.opening.eco}
                </span>
                <span className="text-xs font-medium text-zinc-200 truncate max-w-[240px] md:max-w-xs">
                  {data.opening.name}
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono">
                {formatCount(data.totalGames)} oyun
              </span>
            </div>
          )}

      {/* Moves List Table */}
      <div className="flex-1 overflow-y-auto max-h-[260px] pr-1">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8 text-zinc-500 gap-2">
            <Loader2 className="w-5 h-5 animate-spin text-amber-500" />
            <span className="text-xs">İstatistikler yükleniyor...</span>
          </div>
        ) : error ? (
          <div className="text-xs text-zinc-500 py-6 text-center italic">{error}</div>
        ) : !data || data.moves.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center text-xs">
            <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-2 text-zinc-600 text-sm">
              ♟
            </div>
            <span className="font-semibold text-zinc-400">{dataUnavailable ? 'Veri yok' : 'Kayıtlı hamle yok'}</span>
            <span className="text-[11px] text-zinc-600 mt-0.5 max-w-[220px]">
              {dataUnavailable
                ? 'Lichess verisine erişilemedi; doğrulanmamış çevrimdışı sayılar gösterilmiyor.'
                : 'Seçili Lichess veritabanında bu konum için kayıtlı hamle bulunmuyor.'}
            </span>
          </div>
        ) : (
          <div className="space-y-1.5 font-mono text-xs">
            {data.moves.map(m => {
              const isSaved = savedSans.has(m.san);

              return (
                <div
                  key={m.uci}
                  onClick={() => handleMoveClick(m.uci)}
                  className="group flex items-center justify-between p-2 rounded-lg bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800/60 hover:border-zinc-700 transition cursor-pointer"
                >
                  {/* Left: Move & Status */}
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <span className="font-bold text-sm text-zinc-100 group-hover:text-amber-400 transition">
                      {m.san}
                    </span>
                    {isSaved ? (
                      <span className="flex items-center text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-sans font-medium" title="Repertuvarda kayıtlı">
                        <Check className="w-3 h-3 mr-0.5" /> Kayıtlı
                      </span>
                    ) : (
                      <span className="opacity-0 group-hover:opacity-100 transition flex items-center text-[10px] text-zinc-400 hover:text-amber-300 font-sans">
                        <Plus className="w-3 h-3 mr-0.5" /> Ekle
                      </span>
                    )}
                  </div>

                  {/* Games Count */}
                  <div className="text-[11px] text-zinc-400 text-right w-16">
                    {formatCount(m.totalGames)}
                  </div>

                  {/* Win / Draw / Loss Bar */}
                  <div className="flex items-center gap-1 w-44">
                    <div className="flex-1 h-4 bg-zinc-900 rounded overflow-hidden flex text-[9px] font-bold">
                      {/* White win % */}
                      {m.whitePercent > 0 && (
                        <div
                          style={{ width: `${m.whitePercent}%` }}
                          className="bg-zinc-100 text-zinc-950 flex items-center justify-center overflow-hidden"
                          title={`Beyaz Kazanır: %${m.whitePercent.toFixed(0)}`}
                        >
                          {m.whitePercent >= 18 && `${m.whitePercent.toFixed(0)}%`}
                        </div>
                      )}
                      {/* Draw % */}
                      {m.drawsPercent > 0 && (
                        <div
                          style={{ width: `${m.drawsPercent}%` }}
                          className="bg-zinc-500 text-zinc-100 flex items-center justify-center overflow-hidden"
                          title={`Beraberlik: %${m.drawsPercent.toFixed(0)}`}
                        >
                          {m.drawsPercent >= 18 && `${m.drawsPercent.toFixed(0)}%`}
                        </div>
                      )}
                      {/* Black win % */}
                      {m.blackPercent > 0 && (
                        <div
                          style={{ width: `${m.blackPercent}%` }}
                          className="bg-zinc-900 border-l border-zinc-700 text-zinc-400 flex items-center justify-center overflow-hidden"
                          title={`Siyah Kazanır: %${m.blackPercent.toFixed(0)}`}
                        >
                          {m.blackPercent >= 18 && `${m.blackPercent.toFixed(0)}%`}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      </>
      )}
    </div>
  );
};
