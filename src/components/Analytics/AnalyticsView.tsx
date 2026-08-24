import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../../db/db';
import type { ImportedGame } from '../../types/analytics';
import type { RepertoireNode } from '../../types/chess';
import { calculateOverallAnalytics } from '../../services/repertoireMatcher';
import { AnalyticsSummaryCards } from './AnalyticsSummaryCards';
import { OpeningPerformanceTable } from './OpeningPerformanceTable';
import { RecentGamesList } from './RecentGamesList';
import { GameImportModal } from './GameImportModal';
import { Globe, RefreshCw, BarChart2 } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const [games, setGames] = useState<ImportedGame[]>([]);
  const [whiteNodes, setWhiteNodes] = useState<Map<string, RepertoireNode>>(new Map());
  const [blackNodes, setBlackNodes] = useState<Map<string, RepertoireNode>>(new Map());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const allGames = await db.games.orderBy('date').reverse().toArray();
    const allNodes = await db.nodes.toArray();

    const wMap = new Map<string, RepertoireNode>();
    const bMap = new Map<string, RepertoireNode>();

    for (const n of allNodes) {
      if (n.repertoireId === 'default-white') {
        wMap.set(n.id, n);
      } else if (n.repertoireId === 'default-black') {
        bMap.set(n.id, n);
      }
    }

    setWhiteNodes(wMap);
    setBlackNodes(bMap);
    setGames(allGames);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const { overall, openingStats, processedGames } = calculateOverallAnalytics(
    games,
    whiteNodes,
    blackNodes
  );

  return (
    <div className="flex flex-col max-w-6xl mx-auto w-full">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-6 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-100">Maç Analitiği & Açılış Karnesi</h2>
            <p className="text-xs text-zinc-400">
              Chess.com ve Lichess maçlarınızı açılış ağacınızla eşleştirip kazanma oranlarınızı görün
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={loadData}
            title="Yenile"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-xl transition cursor-pointer border border-zinc-800"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer shadow-md"
          >
            <Globe className="w-4 h-4" />
            <span>Maçları İçe Aktar</span>
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20 text-zinc-500 text-sm">
          Maç analitiği yükleniyor...
        </div>
      ) : games.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center max-w-md mx-auto my-6 shadow-2xl flex flex-col items-center">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-4 text-emerald-400">
            <Globe className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-zinc-100 mb-2">Henüz Maç İçe Aktarılmadı</h3>
          <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
            Chess.com veya Lichess kullanıcı adınızı girerek son maçlarınızı tek tıkla çekin, hangi açılışta % kaç kazandığınızı keşfedin.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer shadow-lg"
          >
            Şimdi Maçları İçe Aktar
          </button>
        </div>
      ) : (
        <>
          {/* Summary KPI Cards */}
          <AnalyticsSummaryCards analytics={overall} />

          {/* Opening Performance Table */}
          <OpeningPerformanceTable openingStats={openingStats} />

          {/* Recent Games List */}
          <RecentGamesList games={processedGames} />
        </>
      )}

      {/* Game Import Modal */}
      <GameImportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={loadData}
      />
    </div>
  );
};