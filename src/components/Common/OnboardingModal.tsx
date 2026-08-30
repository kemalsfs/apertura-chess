import React from 'react';
import { 
  Compass, 
  Layers, 
  Dumbbell, 
  BarChart3, 
  KeyRound, 
  Palette, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  X, 
  Heart,
  ChevronRight,
  Check
} from 'lucide-react';
import type { ActiveTab } from '../Layout/Header';
import type { ThemeId } from '../../types/theme';
import { THEMES } from '../../types/theme';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: ActiveTab) => void;
  onOpenTokenModal: () => void;
  currentThemeId: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenTokenModal,
  currentThemeId,
  onSelectTheme,
}) => {
  if (!isOpen) return null;

  const handleNavigate = (tab: ActiveTab) => {
    onNavigateTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in overflow-x-hidden">
      <div className="bg-zinc-900 border border-zinc-700/80 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xl shadow-inner">
              ♟
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-extrabold text-zinc-100 tracking-tight">
                  Apertura
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold">
                  v2.0.0
                </span>
              </div>
              <p className="text-xs text-zinc-400">Kişisel İkinci Beyin & Satranç Düşünce Ortağı</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition cursor-pointer"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-zinc-200 custom-scrollbar">
          
          {/* Welcome & Vision Card */}
          <div className="bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Apertura v2.0 Ekosistemine Hoş Geldiniz</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Apertura; büyükusta teorisi, insan oyun psikolojisi ve derin yapay zeka analizini bir araya getiren yeni nesil bir satranç repertuvar ve düşünce platformudur.
            </p>
          </div>

          {/* Quick Navigation Hub (APK & Mobile Optimized) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                🚀 Hızlı Sayfa Gezgini (Uygulama İçi Modlar)
              </h3>
              <span className="text-[10px] text-amber-400 font-mono">APK Öncelikli Menü</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* 1. Kumanda Hub */}
              <button
                onClick={() => handleNavigate('hub')}
                className="group flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-amber-500/50 transition cursor-pointer text-left shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-100 group-hover:text-amber-400 transition">
                      Kumanda Hub
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition" />
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                    Açılış radarı, ezber tamamlama oranları ve genel genel bakış.
                  </p>
                </div>
              </button>

              {/* 2. Satranç Masası & Duality */}
              <button
                onClick={() => handleNavigate('repertoire')}
                className="group flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-amber-500/50 transition cursor-pointer text-left shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-100 group-hover:text-amber-400 transition">
                      Satranç Masası
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition" />
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                    7.854 Konumluk FIDE DAG, İnsan DB ve Duality tuzak tespiti.
                  </p>
                </div>
              </button>

              {/* 3. Hızlı Drill & Antrenman */}
              <button
                onClick={() => handleNavigate('drill')}
                className="group flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-amber-500/50 transition cursor-pointer text-left shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-100 group-hover:text-amber-400 transition">
                      Hızlı Drill
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition" />
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                    Aralıklı Tekrar (Spaced Repetition) ile aktif varyant testi.
                  </p>
                </div>
              </button>

              {/* 4. Maç Analitiği */}
              <button
                onClick={() => handleNavigate('analytics')}
                className="group flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-amber-500/50 transition cursor-pointer text-left shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-100 group-hover:text-amber-400 transition">
                      Maç Analitiği
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition" />
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                    PGN yükleme, rozetli hamle kalitesi ve performans raporu.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Core Highlights of v2.0 */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              ⚡ v2.0 Öne Çıkan Özellikleri
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Duality Analizi</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  En popüler 3 insan hamlesi ile Stockfish MultiPV=3 önerilerini yan yana kıyaslar.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>7.854 Konumlu DAG</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Resmi 3.810 hatlık Lichess A00-E99 veritabanı ile veriler asla erken tükenmez.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs">
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Depth 50 Cloud Eval</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  0% CPU yükü ile Lichess bulut motorundan anında derinlik 50 değerlendirmesi.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions (API Token & Theme Selector) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              🛠️ Hızlı Araçlar & Kişiselleştirme
            </h3>

            <div className="flex flex-col sm:flex-row gap-2.5">
              {/* Lichess Token Quick Access */}
              <button
                onClick={() => {
                  onClose();
                  onOpenTokenModal();
                }}
                className="flex-1 flex items-center justify-between p-3 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-100">Lichess API Bağlantısı</div>
                    <div className="text-[10px] text-zinc-400">5.5 Milyar maç için token bağla</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>
            </div>

            {/* Quick Theme Switcher */}
            <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-3 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                <span>Tahta & Arayüz Teması</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-36 overflow-y-auto pr-1">
                {Object.values(THEMES).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => onSelectTheme(t.id)}
                    className={`flex items-center justify-between p-2 rounded-xl text-[11px] font-medium transition cursor-pointer border ${
                      currentThemeId === t.id
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 font-bold'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                    }`}
                  >
                    <span className="truncate">{t.name}</span>
                    {currentThemeId === t.id && <Check className="w-3 h-3 text-amber-400 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer & About */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span>Geliştirici & Vizyon:</span>
              <strong className="text-zinc-300 font-semibold">Kemal (KemalOS)</strong>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1 text-zinc-400">
                <Heart className="w-3 h-3 text-amber-500" /> J.A.R.V.I.S Mimari
              </span>
              <span className="font-mono text-zinc-600">•</span>
              <span className="font-mono text-amber-400/80">v2.0.0 (APK Ready)</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
