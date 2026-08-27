import React, { useState, useMemo } from 'react';
import type { OpeningPerformanceStat } from '../../types/analytics';
import { Layers, Search } from 'lucide-react';

interface OpeningPerformanceTableProps {
  openingStats: OpeningPerformanceStat[];
  onSelectOpening?: (eco: string, name: string) => void;
}

export const OpeningPerformanceTable: React.FC<OpeningPerformanceTableProps> = ({
  openingStats,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [colorFilter, setColorFilter] = useState<'all' | 'white' | 'black'>('all');

  const filteredStats = useMemo(() => {
    return openingStats.filter(stat => {
      const matchesSearch =
        stat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stat.eco.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesColor = colorFilter === 'all' || stat.color === colorFilter;
      return matchesSearch && matchesColor;
    });
  }, [openingStats, searchTerm, colorFilter]);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md flex flex-col mb-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800 mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="text-sm font-bold text-zinc-100">Açılış Performans Matrisi</h3>
            <p className="text-[11px] text-zinc-500 font-mono">
              Oynadığınız maçların açılış varyantlarına göre kazanma oranları
            </p>
          </div>
        </div>

        {/* Filter and Search */}
        <div className="flex items-center gap-2">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Açılış ara..."
              className="bg-zinc-950 border border-zinc-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 w-36 sm:w-44"
            />
          </div>

          {/* Color Switcher */}
          <div className="flex items-center bg-zinc-950 border border-zinc-800 p-0.5 rounded-xl">
            <button
              onClick={() => setColorFilter('all')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition cursor-pointer ${
                colorFilter === 'all'
                  ? 'bg-zinc-800 text-emerald-400 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setColorFilter('white')}
              className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition cursor-pointer ${
                colorFilter === 'white'
                  ? 'bg-zinc-800 text-zinc-100 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Beyaz
            </button>
            <button
              onClick={() => setColorFilter('black')}
              className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition cursor-pointer ${
                colorFilter === 'black'
                  ? 'bg-zinc-800 text-zinc-100 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Siyah
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {filteredStats.length === 0 ? (
          <div className="text-xs text-zinc-500 italic py-8 text-center">
            {openingStats.length === 0
              ? 'Henüz maç yüklenmedi. Yukarıdaki "Maçları İçe Aktar" butonuyla maçlarınızı senkronize edin.'
              : 'Arama kriterlerine uygun açılış bulunamadı.'}
          </div>
        ) : (
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800/80 pb-2">
                <th className="pb-2 font-semibold">Açılış / Varyant</th>
                <th className="pb-2 font-semibold text-center w-16">Renk</th>
                <th className="pb-2 font-semibold text-center w-16">Maç</th>
                <th className="pb-2 font-semibold w-40">Dağılım (G / B / M)</th>
                <th className="pb-2 font-semibold text-right w-20">Kazanma %</th>
                <th className="pb-2 font-semibold text-right w-24">Repertuvar Sapması</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {filteredStats.map((stat, idx) => (
                <tr
                  key={`${stat.color}_${stat.eco}_${stat.name}_${idx}`}
                  className="hover:bg-zinc-800/30 transition"
                >
                  {/* Opening Name & ECO */}
                  <td className="py-2.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded shrink-0">
                        {stat.eco}
                      </span>
                      <span className="font-medium text-zinc-200 truncate max-w-xs" title={stat.name}>
                        {stat.name}
                      </span>
                    </div>
                  </td>

                  {/* Color Badge */}
                  <td className="py-2.5 text-center">
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        stat.color === 'white'
                          ? 'bg-zinc-100 border border-zinc-400'
                          : 'bg-zinc-950 border border-zinc-600'
                      }`}
                      title={stat.color === 'white' ? 'Beyaz ile oynandı' : 'Siyah ile oynandı'}
                    />
                  </td>

                  {/* Games Count */}
                  <td className="py-2.5 text-center font-mono font-bold text-zinc-300">
                    {stat.totalGames}
                  </td>

                  {/* Win/Draw/Loss Bar */}
                  <td className="py-2.5">
                    <div className="w-full h-3 bg-zinc-950 rounded overflow-hidden flex font-mono text-[8px] font-bold">
                      {stat.wins > 0 && (
                        <div
                          style={{ width: `${(stat.wins / stat.totalGames) * 100}%` }}
                          className="bg-emerald-500 text-zinc-950 flex items-center justify-center"
                          title={`Galibiyet: ${stat.wins}`}
                        >
                          {stat.wins}
                        </div>
                      )}
                      {stat.draws > 0 && (
                        <div
                          style={{ width: `${(stat.draws / stat.totalGames) * 100}%` }}
                          className="bg-zinc-500 text-zinc-100 flex items-center justify-center"
                          title={`Beraberlik: ${stat.draws}`}
                        >
                          {stat.draws}
                        </div>
                      )}
                      {stat.losses > 0 && (
                        <div
                          style={{ width: `${(stat.losses / stat.totalGames) * 100}%` }}
                          className="bg-red-500 text-zinc-100 flex items-center justify-center"
                          title={`Mağlubiyet: ${stat.losses}`}
                        >
                          {stat.losses}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Winrate */}
                  <td className="py-2.5 text-right font-mono font-bold">
                    <span
                      className={
                        stat.winRate >= 55
                          ? 'text-emerald-400'
                          : stat.winRate <= 40
                          ? 'text-red-400'
                          : 'text-zinc-300'
                      }
                    >
                      %{stat.winRate}
                    </span>
                  </td>

                  {/* Deviation Count */}
                  <td className="py-2.5 text-right font-mono text-[11px] text-zinc-400">
                    {stat.userDeviations > 0 ? (
                      <span className="text-amber-400 font-semibold" title="Bu açılışta kendi repertuvarından saptığın maçlar">
                        {stat.userDeviations} maçta
                      </span>
                    ) : (
                      <span className="text-zinc-600">0</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};