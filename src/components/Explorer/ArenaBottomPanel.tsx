import React, { useState, useEffect } from 'react';
import { 
  fetchOpeningExplorer, 
  getLichessToken, 
  setLichessToken 
} from '../../services/lichessExplorer';
import type { ExplorerResult, ExplorerSource, EvaluationResult } from '../../types/explorer';
import type { RepertoireNode } from '../../types/chess';
import { 
  Zap, 
  Database, 
  Award, 
  Users, 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  Check, 
  Plus, 
  Loader2,
  KeyRound,
  ExternalLink,
  X
} from 'lucide-react';
import { parseUci } from '../../utils/chessHelpers';

interface ArenaBottomPanelProps {
  tokenModalRequest?: number;
  fen: string;
  currentChildren: RepertoireNode[];
  evaluation: EvaluationResult;
  onPlayMove: (from: string, to: string, promotion?: string) => void;
}

export const ArenaBottomPanel: React.FC<ArenaBottomPanelProps> = ({
  tokenModalRequest = 0,
  fen,
  currentChildren,
  evaluation,
  onPlayMove,
}) => {
  const [activeTab, setActiveTab] = useState<'duality' | 'theory'>('duality');
  const [source, setSource] = useState<ExplorerSource>('masters');
  const [data, setData] = useState<ExplorerResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [tokenInput, setTokenInput] = useState(() => getLichessToken());
  const [hasToken, setHasToken] = useState(() => !!getLichessToken());

  useEffect(() => {
    if (tokenModalRequest > 0) {
      setTokenInput(getLichessToken());
      setIsTokenModalOpen(true);
    }
  }, [tokenModalRequest]);

  // Fetch opening explorer data on FEN or source change
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
          setError('Açılış verileri yüklenemedi');
          setIsLoading(false);
        }
      }
    }

    const timer = setTimeout(loadExplorer, 60);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [fen, source, hasToken]);

  const handleSaveToken = () => {
    setLichessToken(tokenInput);
    setHasToken(!!tokenInput.trim());
    setIsTokenModalOpen(false);
  };

  // Set of SAN moves already in user's active repertoire
  const savedSans = new Set(currentChildren.map(c => c.san));

  // Helper to format game counts honestly
  const formatCount = (count: number) => {
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
    return count.toString();
  };

  // Helper to format centipawn score from White's perspective
  const formatScore = (val: number, type: 'cp' | 'mate') => {
    if (type === 'mate') return `#${val > 0 ? `+${val}` : val}`;
    const sign = val > 0 ? '+' : '';
    return `${sign}${(val / 100).toFixed(1)}`;
  };

  // Human top moves
  const topHumanMoves = data?.moves?.slice(0, 3) || [];
  const humanBest = topHumanMoves[0];
  const dataUnavailable = data?.provenance.kind === 'unavailable';
  const sourceLabel = data?.provenance.kind === 'lichess-api'
    ? `Lichess API · ${source === 'masters' ? 'Masters' : 'İnsan'}`
    : 'Veri yok';

  // Engine top moves (MultiPV=3)
  const topEngineMoves = evaluation.topMoves && evaluation.topMoves.length > 0
    ? evaluation.topMoves.slice(0, 3)
    : evaluation.bestMove
    ? [{
        uci: evaluation.bestMove,
        from: evaluation.bestMove.slice(0, 2),
        to: evaluation.bestMove.slice(2, 4),
        type: evaluation.type,
        value: evaluation.value,
        depth: evaluation.depth,
        rank: 1,
        san: evaluation.bestMove,
      }]
    : [];

  const engineBest = topEngineMoves[0];

  // Duality comparison: check if human preference #1 deviates from Stockfish top engine move
  const isDualityDivergence =
    humanBest &&
    engineBest &&
    humanBest.uci !== engineBest.uci;

  // Handle clicking a move to play on the board
  const handlePlayUci = (uci: string) => {
    const { from, to, promotion } = parseUci(uci);
    onPlayMove(from, to, promotion);
  };

  return (
    <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-3.5 shadow-xl backdrop-blur-xl flex flex-col gap-2.5 transition-all">
      {/* Top Header & Tab Navigation Bar */}
      <div className="flex flex-col gap-2 pb-2 border-b border-zinc-800/80 sm:flex-row sm:items-center sm:justify-between">
        {/* Main Tabs */}
        <div className="flex w-full items-center gap-1 bg-zinc-900 border border-zinc-800 p-0.5 rounded-xl sm:w-auto">
          <button
            onClick={() => setActiveTab('duality')}
            className={`flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-2 py-1 rounded-lg text-xs font-semibold transition cursor-pointer sm:flex-none sm:px-3 ${
              activeTab === 'duality'
                ? 'bg-zinc-800 text-amber-400 font-bold border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>⚡ Duality & Tuzak</span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-2 py-1 rounded-lg text-xs font-semibold transition cursor-pointer sm:flex-none sm:px-3 ${
              activeTab === 'theory'
                ? 'bg-zinc-800 text-amber-400 font-bold border border-zinc-700 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>📚 Açılış Teorisi</span>
          </button>
        </div>

        {/* Database Source Switcher & Token Status */}
        <div className="flex w-full items-center justify-between gap-1.5 sm:w-auto sm:justify-start">
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-0.5 rounded-xl">
            <button
              onClick={() => setSource('masters')}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-semibold transition cursor-pointer ${
                source === 'masters'
                  ? 'bg-zinc-800 text-amber-400 font-bold border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Lichess Masters açılış verileri"
            >
              <Award className="w-3 h-3 text-amber-400" />
              <span>Büyükustalar</span>
            </button>

            <button
              onClick={() => setSource('lichess')}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-semibold transition cursor-pointer ${
                source === 'lichess'
                  ? 'bg-zinc-800 text-blue-400 font-bold border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Lichess oyuncu açılış verileri"
            >
              <Users className="w-3 h-3 text-blue-400" />
              <span>İnsan DB</span>
            </button>
          </div>

          <button
            onClick={() => setIsTokenModalOpen(true)}
            className={`p-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1 text-[10px] font-mono ${
              hasToken
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
            title={hasToken ? 'Lichess API Token: Aktif' : 'Lichess API Token Ekle'}
          >
            <KeyRound className="w-3 h-3" />
            <span className="hidden sm:inline">{hasToken ? 'API Açık' : 'Token'}</span>
          </button>
        </div>
      </div>

      {/* =========================================================
          TAB 1: DUALITY & TACTICAL TRAP PANEL
         ========================================================= */}
      {activeTab === 'duality' && (
        <div className="space-y-2.5">
          {/* Trap & Divergence Status Banner */}
          {isDualityDivergence && humanBest && engineBest ? (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 flex items-start gap-2 text-xs shadow-xs">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="font-bold text-amber-300 flex items-center gap-1">
                  <span>⚡ Teori & Motor Ayrışması (Taktiksel Fırsat / Tuzak)</span>
                </div>
                <p className="text-zinc-300 text-[11px] leading-relaxed">
                  {source === 'masters' ? 'Masters verisinde' : 'İnsan verisinde'} en sık <strong className="text-amber-400 font-mono">{humanBest.san}</strong> oynanmış ({formatCount(humanBest.totalGames)} oyun, %{humanBest.whitePercent.toFixed(0)} B / %{humanBest.blackPercent.toFixed(0)} S), fakat Stockfish <strong className="text-emerald-400 font-mono">{engineBest.san || engineBest.uci}</strong> hamlesini ({formatScore(engineBest.value, engineBest.type)}) en üstün görüyor.
                </p>
              </div>
            </div>
          ) : topHumanMoves.length > 0 && engineBest ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2 flex items-center gap-2 text-[11px] text-emerald-300 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span><strong>Hamle uyumu:</strong> {source === 'masters' ? 'Masters' : 'İnsan'} verisinde en sık oynanan hamle Stockfish önerisiyle aynı ({humanBest.san}).</span>
            </div>
          ) : (
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2 flex items-center gap-2 text-[11px] text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{dataUnavailable ? 'Açılış verisi yok; çevrimdışı istatistik gösterilmiyor.' : 'Bu konum için karşılaştırılacak açılış hamlesi yok.'}</span>
            </div>
          )}

          {/* 2-Column Side-by-Side Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Left: Top 3 Human Moves with Win Rates */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800/80 mb-2">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-200 text-xs">
                    {source === 'masters' ? (
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Users className="w-3.5 h-3.5 text-blue-400" />
                    )}
                    <span>En Popüler 3 {source === 'masters' ? 'Usta' : 'İnsan'} Hamlesi</span>
                  </div>
                  <span className={`text-[9px] font-mono font-bold ${source === 'masters' ? 'text-amber-400' : 'text-blue-400'}`}>
                    {sourceLabel}
                  </span>
                </div>

                {isLoading ? (
                  <div className="flex items-center justify-center py-5 text-zinc-500 text-xs gap-1.5">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500" />
                    <span>Yükleniyor...</span>
                  </div>
                ) : topHumanMoves.length === 0 ? (
                  <div className="py-5 text-center text-zinc-500 text-[11px] italic">
                    {dataUnavailable ? 'Veri yok: Lichess verisine erişilemedi.' : 'Bu konum için kayıtlı hamle yok.'}
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {topHumanMoves.map((m, idx) => {
                      const isSaved = savedSans.has(m.san);
                      return (
                        <div
                          key={m.uci}
                          onClick={() => handlePlayUci(m.uci)}
                          className="group flex items-center justify-between p-1.5 rounded-lg bg-zinc-950/70 hover:bg-zinc-800 border border-zinc-800/60 hover:border-zinc-700 transition cursor-pointer"
                          title="Tahtada oyna"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-zinc-500 w-3">{idx + 1}.</span>
                            <span className="font-mono font-bold text-xs text-zinc-100 group-hover:text-amber-400 transition">
                              {m.san}
                            </span>
                            {isSaved && (
                              <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/10 text-amber-400 font-mono">
                                Kayıtlı
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 font-mono text-[10px]">
                            {m.totalGames > 0 ? (
                              <>
                                <span className="text-zinc-400">{formatCount(m.totalGames)}</span>
                                {/* Real Win % Pills */}
                                <div className="flex items-center gap-1 text-[9px] font-bold">
                                  <span className="text-zinc-200" title="Beyaz Galibiyeti">⚪%{m.whitePercent.toFixed(0)}</span>
                                  <span className="text-zinc-400" title="Beraberlik">🔘%{m.drawsPercent.toFixed(0)}</span>
                                  <span className="text-zinc-500" title="Siyah Galibiyeti">⚫%{m.blackPercent.toFixed(0)}</span>
                                </div>
                              </>
                            ) : (
                              <span className="text-[9px] text-zinc-500 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-sans">
                                Resmi Teori
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Top 3 Stockfish Moves with Resulting Centipawn Eval */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800/80 mb-2">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-200 text-xs">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span>En İyi 3 Stockfish Hamlesi</span>
                  </div>
                  <span className="text-[9px] text-zinc-500 font-mono">
                    {evaluation.isLoading ? 'Hesaplanıyor...' : `Derinlik: ${evaluation.depth}`}
                  </span>
                </div>

                {topEngineMoves.length > 0 ? (
                  <div className="space-y-1.5">
                    {topEngineMoves.map((m) => {
                      const isRank1 = m.rank === 1;
                      const isCpAdvantage = m.value > 30;
                      const isCpDisadvantage = m.value < -30;

                      return (
                        <div
                          key={m.uci}
                          onClick={() => handlePlayUci(m.uci)}
                          className={`flex items-center justify-between p-1.5 rounded-lg transition cursor-pointer border ${
                            isRank1
                              ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20'
                              : 'bg-zinc-950/70 border-zinc-800/60 hover:bg-zinc-800'
                          }`}
                          title="Tahtada oyna"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-emerald-400 font-bold w-3">
                              {m.rank}.
                            </span>
                            <span className="font-mono font-bold text-xs text-zinc-100">
                              {m.san || m.uci}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {/* Centipawn Score Badge */}
                            <span
                              className={`font-mono font-bold text-[10px] px-2 py-0.5 rounded-md ${
                                isCpAdvantage
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  : isCpDisadvantage
                                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                                  : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                              }`}
                            >
                              {formatScore(m.value, m.type)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-5 text-center text-zinc-500 text-[11px] italic flex items-center justify-center gap-1.5">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-500" />
                    <span>Motor analizi hesaplanıyor...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          TAB 2: THEORY EXPLORER & FULL VARIATION TABLE
         ========================================================= */}
      {activeTab === 'theory' && (
        <div className="space-y-2">
          {/* Opening ECO & Name Header */}
          {data?.opening && (
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-3 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  source === 'masters' ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {data.opening.eco}
                </span>
                <span className="text-xs font-medium text-zinc-200 truncate max-w-[240px] md:max-w-md">
                  {data.opening.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-500 font-mono">
                  {data.totalGames > 0 ? `${formatCount(data.totalGames)} oyun` : 'Kayıtlı oyun yok'}
                </span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                  source === 'masters' 
                    ? 'bg-amber-500/10 text-amber-400' 
                    : hasToken 
                    ? 'bg-emerald-500/10 text-emerald-400' 
                    : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {sourceLabel}
                </span>
              </div>
            </div>
          )}

          {/* Moves Table */}
          <div className="overflow-y-auto max-h-[190px] pr-1 space-y-1">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-6 text-zinc-500 gap-1.5">
                    <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                    <span className="text-xs">Açılış ağacı taranıyor...</span>
                  </div>
                ) : error ? (
                  <div className="text-xs text-zinc-500 py-6 text-center italic">{error}</div>
                ) : !data || data.moves.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-6 text-center text-xs text-zinc-500">
                    <span className="font-semibold text-zinc-400">{dataUnavailable ? 'Veri yok' : 'Kayıtlı hamle yok'}</span>
                    <span className="text-[11px] text-zinc-600 mt-0.5">
                      {dataUnavailable ? 'Lichess verisine erişilemedi; doğrulanmamış çevrimdışı sayılar gösterilmiyor.' : 'Seçili veritabanında bu konum için kayıtlı hamle bulunmuyor.'}
                    </span>
                  </div>
                ) : (
              data.moves.map((m) => {
                const isSaved = savedSans.has(m.san);
                return (
                  <div
                    key={m.uci}
                    onClick={() => handlePlayUci(m.uci)}
                    className="group flex items-center justify-between p-1.5 px-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/60 hover:border-zinc-700 transition cursor-pointer"
                  >
                    {/* Left: Move SAN & Saved Status */}
                    <div className="flex items-center gap-2 min-w-[90px]">
                      <span className="font-mono font-bold text-sm text-zinc-100 group-hover:text-amber-400 transition">
                        {m.san}
                      </span>
                      {isSaved ? (
                        <span className="flex items-center text-[9px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-sans font-medium">
                          <Check className="w-2.5 h-2.5 mr-0.5" /> Kayıtlı
                        </span>
                      ) : (
                        <span className="opacity-0 group-hover:opacity-100 transition flex items-center text-[9px] text-zinc-400 hover:text-amber-300 font-sans">
                          <Plus className="w-2.5 h-2.5 mr-0.5" /> Oyna
                        </span>
                      )}
                    </div>

                    {/* Total Games Count or Theory Badge */}
                    {m.totalGames > 0 ? (
                      <>
                        <div className="text-[11px] text-zinc-400 font-mono text-right w-14">
                          {formatCount(m.totalGames)}
                        </div>

                        {/* Win / Draw / Loss Bar with Exact Percentages */}
                        <div className="flex items-center gap-1 w-44">
                          <div className="flex-1 h-3.5 bg-zinc-950 rounded overflow-hidden flex text-[8px] font-bold">
                            {/* White win % */}
                            {m.whitePercent > 0 && (
                              <div
                                style={{ width: `${m.whitePercent}%` }}
                                className="bg-zinc-200 text-zinc-950 flex items-center justify-center overflow-hidden"
                                title={`Beyaz Kazanır: %${m.whitePercent.toFixed(0)}`}
                              >
                                {m.whitePercent >= 20 && `${m.whitePercent.toFixed(0)}%`}
                              </div>
                            )}
                            {/* Draw % */}
                            {m.drawsPercent > 0 && (
                              <div
                                style={{ width: `${m.drawsPercent}%` }}
                                className="bg-zinc-500 text-zinc-100 flex items-center justify-center overflow-hidden"
                                title={`Beraberlik: %${m.drawsPercent.toFixed(0)}`}
                              >
                                {m.drawsPercent >= 20 && `${m.drawsPercent.toFixed(0)}%`}
                              </div>
                            )}
                            {/* Black win % */}
                            {m.blackPercent > 0 && (
                              <div
                                style={{ width: `${m.blackPercent}%` }}
                                className="bg-zinc-900 border-l border-zinc-700 text-zinc-400 flex items-center justify-center overflow-hidden"
                                title={`Siyah Kazanır: %${m.blackPercent.toFixed(0)}`}
                              >
                                {m.blackPercent >= 20 && `${m.blackPercent.toFixed(0)}%`}
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-zinc-400 bg-zinc-800/80 border border-zinc-700/60 px-2 py-0.5 rounded font-sans">
                          Resmi Teori
                        </span>
                      </div>
                    )}
                  </div>
                );
              }))}
            </div>
          </div>
        )}

      {/* Lichess Personal API Token Configuration Modal */}
      {isTokenModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-700/80 rounded-2xl p-5 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm text-zinc-100">Lichess API Token (2026+)</h3>
              </div>
              <button
                onClick={() => setIsTokenModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-zinc-100 rounded-lg transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Lichess, 2026 yılından itibaren Açılış Gezgini ve Bulut Analiz istekleri için ücretsiz <strong>Personal API Token (lip_...)</strong> zorunluluğu getirdi. Token bağladığınızda hem Büyükustalar hem de Lichess Oyuncu veritabanı doğrudan <strong>5.5 Milyarlık Lichess sunucu kümesinden</strong> anlık çekilir.
            </p>

            {/* Step 1: 1-Click Open Token Creator */}
            <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-zinc-200">1. Adım: Token Oluşturun</span>
                <a
                  href="https://lichess.org/account/oauth/token/create?description=Apertura+Chess+Explorer"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] rounded-lg shadow-sm transition"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Token Sayfasını Aç</span>
                </a>
              </div>
              <p className="text-[10px] text-zinc-400 leading-relaxed">
                Açılan sayfada hiçbir kutucuğu işaretlemenize gerek yoktur (varsayılan okuma yetkisi yeterlidir). En alttaki mavi <strong>Oluştur (Submit)</strong> butonuna basıp çıkan <code className="text-amber-400 bg-zinc-900 px-1 rounded">lip_...</code> kodunu kopyalayın.
              </p>
            </div>

            {/* Step 2: Paste Token */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-zinc-300">
                2. Adım: Token'ı Buraya Yapıştırın:
              </label>
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="lip_XXXXXXXXXXXXXXXXXXXXXXXX"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs font-mono text-zinc-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              {hasToken && (
                <button
                  onClick={() => {
                    setTokenInput('');
                    setLichessToken('');
                    setHasToken(false);
                  }}
                  className="text-xs text-red-400 hover:text-red-300 font-semibold cursor-pointer"
                >
                  Token'ı Kaldır
                </button>
              )}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setIsTokenModalOpen(false)}
                  className="px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
                >
                  Vazgeç
                </button>
                <button
                  onClick={handleSaveToken}
                  className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl shadow-md cursor-pointer transition"
                >
                  Kaydet & Uygula
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
