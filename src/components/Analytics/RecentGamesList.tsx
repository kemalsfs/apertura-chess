import React from 'react';
import type { ImportedGame } from '../../types/analytics';
import { ExternalLink, Check, AlertTriangle, Shield, Clock, Play } from 'lucide-react';

interface RecentGamesListProps {
  games: ImportedGame[];
  onSelectGame?: (game: ImportedGame) => void;
}

export const RecentGamesList: React.FC<RecentGamesListProps> = ({ games, onSelectGame }) => {
  const recent = games.slice(0, 20);

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md flex flex-col">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-zinc-100">Son Oynanan Maçlar</h3>
        </div>
        <span className="text-[11px] text-zinc-500 font-mono">Son {recent.length} maç (İncelemek için tıkla)</span>
      </div>

      {recent.length === 0 ? (
        <div className="text-xs text-zinc-500 italic py-6 text-center">
          Henüz maç geçmişi bulunmuyor.
        </div>
      ) : (
        <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
          {recent.map(game => {
            const isWin = game.result === 'win';
            const isLoss = game.result === 'loss';

            return (
              <div
                key={game.id}
                onClick={() => onSelectGame && onSelectGame(game)}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-emerald-500/50 hover:bg-zinc-950 transition text-xs cursor-pointer group"
              >
                {/* Left: Result & Opponent */}
                <div className="flex items-center gap-2.5">
                  {/* Result Badge */}
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-black text-[11px] shrink-0 ${
                      isWin
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : isLoss
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                    }`}
                  >
                    {isWin ? 'G' : isLoss ? 'M' : 'B'}
                  </span>

                  {/* Opponent & Opening */}
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-zinc-200">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          game.userColor === 'white' ? 'bg-zinc-100' : 'bg-zinc-800 border border-zinc-600'
                        }`}
                        title={game.userColor === 'white' ? 'Beyaz' : 'Siyah'}
                      />
                      <span>vs {game.opponentUsername}</span>
                      {game.opponentRating && (
                        <span className="text-[10px] text-zinc-500 font-mono">
                          ({game.opponentRating})
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono truncate max-w-[200px]">
                      {game.eco && <span className="text-emerald-400 mr-1">{game.eco}</span>}
                      {game.openingName || 'Açılış'}
                    </div>
                  </div>
                </div>

                {/* Right: Repertoire Match Tag & Link */}
                <div className="flex items-center gap-3">
                  {/* Repertoire Deviation Status */}
                  {game.matchResult?.whoDeviated === 'user' && (
                    <span
                      className="hidden sm:flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md"
                      title={`Repertuvarından ${game.matchResult.deviationStepIndex! + 1}. hamlede saptın`}
                    >
                      <AlertTriangle className="w-3 h-3" />
                      <span>{game.matchResult.deviationStepIndex! + 1}.h Sen Saptın</span>
                    </span>
                  )}

                  {game.matchResult?.whoDeviated === 'opponent' && (
                    <span
                      className="hidden sm:flex items-center gap-1 text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md"
                      title="Rakip repertuvarın dışına çıktı"
                    >
                      <Shield className="w-3 h-3" />
                      <span>Rakip Saptı</span>
                    </span>
                  )}

                  {game.matchResult?.whoDeviated === 'none' && (
                    <span
                      className="hidden sm:flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md"
                      title="Maç repertuvarına tam uydu"
                    >
                      <Check className="w-3 h-3" />
                      <span>Tam Uyum</span>
                    </span>
                  )}

                  <span className="text-[10px] text-zinc-500 font-mono">
                    {formatDate(game.date)}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectGame) onSelectGame(game);
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold transition cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-emerald-400" />
                    <span>İncele</span>
                  </button>

                  {game.url && (
                    <a
                      href={game.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 text-zinc-500 hover:text-emerald-400 transition"
                      title="Lichess / Chess.com'da Aç"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};