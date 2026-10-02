import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  GitBranch, 
  Dumbbell, 
  BarChart3, 
  KeyRound, 
  Palette, 
  Sparkles, 
  ShieldCheck, 
  X, 
  Heart, 
  ChevronRight, 
  Check, 
  Mail, 
  Copy, 
  RotateCcw, 
  MessageSquare,
  Scale
} from 'lucide-react';
import type { ActiveTab } from '../Layout/Header';
import type { ThemeId } from '../../types/theme';
import { THEMES } from '../../types/theme';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: ActiveTab) => void;
  onOpenTokenModal: () => void;
  onRestartTour: () => void;
  currentThemeId: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenTokenModal,
  onRestartTour,
  currentThemeId,
  onSelectTheme,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'hub' | 'contact' | 'legal'>('hub');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleNavigate = (tab: ActiveTab) => {
    onNavigateTab(tab);
    onClose();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kemalsfs5234@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
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

        {/* Navigation Tabs Inside Modal */}
        <div className="flex items-center gap-1.5 px-4 pt-3 border-b border-zinc-800 bg-zinc-950/40 text-xs shrink-0">
          <button
            onClick={() => setActiveSubTab('hub')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-bold transition cursor-pointer ${
              activeSubTab === 'hub'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Hızlı Menü & Keşif</span>
          </button>

          <button
            onClick={() => setActiveSubTab('contact')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-bold transition cursor-pointer ${
              activeSubTab === 'contact'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>İletişim & Geri Bildirim</span>
          </button>

          <button
            onClick={() => setActiveSubTab('legal')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-bold transition cursor-pointer ${
              activeSubTab === 'legal'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Yasal & Lisanslar</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-zinc-200 custom-scrollbar flex-1">
          
          {/* ========================================================
              SUB-TAB 1: QUICK NAVIGATION & HUB
             ======================================================== */}
          {activeSubTab === 'hub' && (
            <div className="space-y-6">
              {/* Welcome & Vision Card */}
              <div className="bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Apertura'ya Hoş Geldiniz</span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onRestartTour();
                    }}
                    className="flex items-center gap-1 text-[11px] text-amber-400 font-bold hover:underline cursor-pointer bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Tanıtım Turunu Başlat</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Açılış repertuvarınızı oluşturun, Lichess istatistiklerini ve motor önerilerini inceleyin, kaydettiğiniz varyantları çalışın.
                </p>
              </div>

              {/* Quick Navigation Hub */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    🚀 Hızlı Sayfa Gezgini (Uygulama İçi Modlar)
                  </h3>
                  <span className="text-[10px] text-amber-400 font-mono">Modlar</span>
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
                        Açılış radarı, ezber tamamlama oranları ve genel bakış.
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
                        Açılış verileri, motor önerileri ve Duality karşılaştırması.
                      </p>
                    </div>
                  </button>

                  {/* 3. Varyant & Açılış Ağacı */}
                  <button
                    onClick={() => handleNavigate('tree')}
                    className="group flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-amber-500/50 transition cursor-pointer text-left shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-100 group-hover:text-amber-400 transition">
                          Varyant Ağacı
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition" />
                      </div>
                      <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                        Kayıtlı varyantları görselleştir, ara ve tek tıkla tahtada aç.
                      </p>
                    </div>
                  </button>

                  {/* 4. Hızlı Drill & Antrenman */}
                  <button
                    onClick={() => handleNavigate('drill')}
                    className="group flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-amber-500/50 transition cursor-pointer text-left shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition">
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

                  {/* 5. Maç Analitiği */}
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

              {/* Quick Actions (API Token & Theme Selector) */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  🛠️ Hızlı Araçlar & Kişiselleştirme
                </h3>

                <div className="flex flex-col sm:flex-row gap-2.5">
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
                        <div className="text-[10px] text-zinc-400">İsteğe bağlı Lichess token'ını yönet</div>
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
            </div>
          )}

          {/* ========================================================
              SUB-TAB 2: CONTACT & FEEDBACK
             ======================================================== */}
          {activeSubTab === 'contact' && (
            <div className="space-y-4 animate-fade-in">
              {/* Thank You Card */}
              <div className="bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Heart className="w-4 h-4 text-amber-400" />
                  <span>Apertura Topluluğuna Teşekkür Ederiz</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Apertura'yı tercih ettiğiniz, açılış repertuvarınızı bizimle inşa ettiğiniz ve satranç yolculuğumuza ortak olduğunuz için içtenlikle teşekkür ederiz.
                </p>
              </div>

              {/* When to Contact Card */}
              <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Hangi Durumlarda Bizimle İletişime Geçebilirsiniz?</span>
                </h4>
                
                <div className="space-y-2.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold text-sm leading-none">•</span>
                    <div>
                      <strong className="text-zinc-100">💡 Yeni Özellik & Açılış Varyant Önerileri:</strong> Eklenmesini istediğiniz bir açılış hattı, yeni bir antrenman modu veya görsel tema fikirleriniz.
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold text-sm leading-none">•</span>
                    <div>
                      <strong className="text-zinc-100">🐛 Hata Bildirimi & Teknik Destek:</strong> Uygulama içinde karşılaştığınız herhangi bir yazılımsal aksaklık, mobil uyumluluk veya hesaplama sorunu.
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold text-sm leading-none">•</span>
                    <div>
                      <strong className="text-zinc-100">🤝 İş Birliği & Satranç Kulüpleri:</strong> Satranç akademileri, antrenörler veya turnuva organizasyonları ile entegrasyon ve ortaklıklar.
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold text-sm leading-none">•</span>
                    <div>
                      <strong className="text-zinc-100">💬 Genel Görüş & Gelişim Deneyimi:</strong> Apertura ile yaptığınız çalışmaların reytinginize ve oyununuza olan etkilerini duymaktan mutluluk duyarız!
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Email Action Card */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Doğrudan Geliştirici E-Postası:</div>
                    <div className="font-mono font-bold text-xs sm:text-sm text-zinc-100 select-all">
                      kemalsfs5234@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 transition cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Kopyalandı!' : 'Kopyala'}</span>
                  </button>

                  <a
                    href="mailto:kemalsfs5234@gmail.com?subject=Apertura%20Chess%20Geri%20Bildirim"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold transition shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>E-Posta Gönder</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              SUB-TAB 3: LEGAL & OPEN SOURCE LICENSES
             ======================================================== */}
          {activeSubTab === 'legal' && (
            <div className="space-y-4 animate-fade-in text-xs text-zinc-300">
              <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Gizlilik & Yerel Veri Güvenliği</span>
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Repertuvarlarınız, içe aktardığınız oyunlar ve ayarlarınız bu cihazın tarayıcı depolamasında (IndexedDB / LocalStorage) tutulur. Bu depolama uygulama tarafından şifrelenmez; tarayıcı verilerini temizlemek kayıtlarınızı silebilir. Lichess verileri ve bulut değerlendirmesi için ilgili dış servislere istek gönderilir.
                </p>
              </div>

              <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 text-sm">
                  <Scale className="w-4 h-4 text-amber-400" />
                  <span>Açık Kaynak Lisansları & Atıflar</span>
                </h4>
                <div className="space-y-2 text-[11px] text-zinc-400">
                  <div>
                    <strong className="text-zinc-200">Stockfish Chess Engine:</strong> GNU GPL v3 lisanslı açık kaynak satranç motoru. Lichess Cloud Eval ayrı bir çevrimiçi hizmettir.
                  </div>
                  <div>
                    <strong className="text-zinc-200">Lichess Open Opening Database & API:</strong> Kamuya açık açılış verileri ve FIDE ECO teorisi atıfları.
                  </div>
                  <div>
                    <strong className="text-zinc-200">Chessground & Chess.js:</strong> MIT lisanslı interaktif satranç tahtası ve kural kütüphaneleri.
                  </div>
                </div>
              </div>
            </div>
          )}

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
              <span className="font-mono text-amber-400/80">v2.0.0</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
