import React, { useState } from 'react';
import { 
  Zap, 
  KeyRound, 
  Dumbbell, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Award
} from 'lucide-react';
import { getLichessToken, setLichessToken } from '../../services/lichessExplorer';
import { useModalFocus } from '../../hooks/useModalFocus';

export const FIRST_TIME_TOUR_KEY = 'apertura_tour_seen_v2';

interface FirstTimeTourModalProps {
  onComplete: () => void;
}

export const FirstTimeTourModal: React.FC<FirstTimeTourModalProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tokenInput, setTokenInput] = useState(() => getLichessToken() ?? '');
  const [isTokenSaved, setIsTokenSaved] = useState(false);

  const handleSaveToken = () => {
    if (tokenInput.trim()) {
      setLichessToken(tokenInput.trim());
      setIsTokenSaved(true);
      setTimeout(() => setIsTokenSaved(false), 2500);
    }
  };

  const handleFinish = () => {
    localStorage.setItem(FIRST_TIME_TOUR_KEY, 'true');
    onComplete();
  };

  const totalSteps = 4;
  const dialogRef = useModalFocus(true, handleFinish);

  return (
    <div ref={dialogRef} tabIndex={-1} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in overflow-x-hidden" role="dialog" aria-modal="true" aria-label="Apertura tanıtım turu">
      <div className="bg-zinc-900 border border-amber-500/30 rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Progress & Skip */}
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/70">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === currentStep
                    ? 'w-6 bg-amber-400'
                    : step < currentStep
                    ? 'w-3 bg-amber-500/50'
                    : 'w-3 bg-zinc-700'
                }`}
              />
            ))}
            <span className="text-[10px] text-zinc-500 font-mono ml-1.5">
              {currentStep}/{totalSteps}
            </span>
          </div>

          <button
            onClick={handleFinish}
            className="text-xs text-zinc-400 hover:text-zinc-200 transition cursor-pointer px-2 py-1"
          >
            Turu Geç
          </button>
        </div>

        {/* Step Content */}
        <div className="p-5 sm:p-6 space-y-4 text-zinc-200 overflow-y-auto">
          
          {/* STEP 1: WELCOME & VISION */}
          {currentStep === 1 && (
            <div className="space-y-3.5 animate-fade-in text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-2xl mx-auto sm:mx-0 shadow-inner">
                ♟
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-zinc-100">
                  Apertura'ya Hoş Geldiniz!
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  Kişisel Satranç Düşünce Ortağınız ve Repertuvar Motorunuz
                </p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Açılış hamlelerini keşfedin, repertuvarınıza kaydedin ve Lichess istatistikleriyle motor değerlendirmelerini birlikte inceleyin.
              </p>
              <div className="p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                <div className="font-semibold text-zinc-200">✨ Bu kısa turda neler keşfedeceksiniz:</div>
                <div>• Duality hamle karşılaştırması</div>
                <div>• Lichess açılış verileri ve mevcutsa bulut değerlendirmesi</div>
                <div>• Aralıklı tekrar (SRS) ile varyant çalışması</div>
              </div>
            </div>
          )}

          {/* STEP 2: DUALITY & TACTICAL TRAPS */}
          {currentStep === 2 && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-zinc-100">
                  ⚡ Duality Hamle Karşılaştırması
                </h3>
                <p className="text-xs text-zinc-400">
                  Oynanma sıklığı ve motor değerlendirmesi
                </p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Satranç masasındaki <strong>Duality Paneli</strong>, Lichess'te sık oynanan hamleleri mevcut motor önerileriyle karşılaştırmanıza yardımcı olur. Sonuçlar seçilen konum için kullanılabilen verilere bağlıdır.
              </p>
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-400">
                  <span>⚡ İnceleme İşareti:</span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  Popüler bir hamle motorun önerisinden ayrışıyorsa panel bu farkı incelemeniz için işaretleyebilir. Bu işaret tek başına bir tuzak kanıtı değildir.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: LICHESS TOKEN & CLOUD EVAL */}
          {currentStep === 3 && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <KeyRound className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-zinc-100">
                  🔑 Canlı Açılış Verileri için Lichess Token'ı
                </h3>
                <p className="text-xs text-zinc-400">
                  Salt okunur (0-scope) token ile bağlanın
                </p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Canlı Lichess Opening Explorer verileri için salt okunur (0-scope) token gerekir. Token olmadan servis 401 hatası verebilir ve canlı açılış verileri gösterilemeyebilir. Bulut değerlendirmesi ayrı bir hizmettir; her konumda bulunmayabilir ve gerektiğinde yerel motor kullanılabilir.
              </p>

              {/* 1-Click Token Action */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-zinc-200">1. Adım: Ücretsiz Token Alın</span>
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
                <p className="text-[10px] text-zinc-400">
                  Bu kullanım için hiçbir izin kutusunu işaretlemeyin (0-scope). Token bu cihazın tarayıcı depolamasında tutulur.
                </p>

                <div className="space-y-1 pt-1">
                  <label className="text-[10px] font-bold text-zinc-300">
                    2. Adım: Kodu Buraya Yapıştırın:
                  </label>
                  <div className="flex gap-1.5">
                    <input
                      type="password"
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value)}
                      placeholder="lip_XXXXXXXXXXXXXXXXXXXXXXXX"
                      className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-2.5 py-1.5 text-xs font-mono text-zinc-100 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      onClick={handleSaveToken}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl shadow-xs transition cursor-pointer shrink-0"
                    >
                      {isTokenSaved ? 'Kaydedildi!' : 'Kaydet'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: DRILL & READY */}
          {currentStep === 4 && (
            <div className="space-y-3.5 animate-fade-in text-center sm:text-left">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto sm:mx-0">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-zinc-100">
                  ⚔️ Hazırsınız! Repertuvarınızı Fethedin
                </h3>
                <p className="text-xs text-zinc-400">
                  Aralıklı Tekrar & Kumanda Hub
                </p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Repertuvarınıza eklediğiniz varyantları <strong>Hızlı Drill</strong> modunda 3 kademeli ipucu ve çok turlu eleme sistemiyle test edin; <strong>Kumanda Hub</strong> üzerinden açılış hakimiyetinizi takip edin.
              </p>
              <div className="p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sol üstteki <strong>Apertura</strong> logosuna dilediğiniz an tıklayarak hızlı menüyü ve rehberi tekrar açabilirsiniz.</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-zinc-800 flex items-center justify-between bg-zinc-950/80 shrink-0">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              currentStep === 1
                ? 'opacity-0 pointer-events-none'
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Geri</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={() => setCurrentStep((prev) => Math.min(totalSteps, prev + 1))}
              className="flex items-center gap-1 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              <span>Devam Et</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="flex items-center gap-1 px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Apertura'ya Başla</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
