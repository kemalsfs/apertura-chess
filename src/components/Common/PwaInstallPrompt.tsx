import React, { useState, useEffect } from 'react';
import { Download, X, Share2, Smartphone } from 'lucide-react';

export const PwaInstallPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // If inside native Capacitor Android app or already in standalone PWA, do NOT show
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    const isCapacitor = (window as any).Capacitor?.isNativePlatform?.();

    if (isStandalone || isCapacitor) {
      return;
    }

    // Check if dismissed previously
    const dismissed = localStorage.getItem('apertura_pwa_prompt_dismissed');
    if (dismissed) {
      return;
    }

    // Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Listen for Android/Chrome beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // If iOS, show after 2 seconds
    if (isIosDevice) {
      const timer = setTimeout(() => setShowPrompt(true), 2000);
      return () => clearTimeout(timer);
    }

    // Default timer for desktop / other browsers
    const defaultTimer = setTimeout(() => setShowPrompt(true), 3000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      clearTimeout(defaultTimer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('apertura_pwa_prompt_dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-zinc-900/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 shadow-2xl text-zinc-100 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xl shrink-0">
              ♟
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                Apertura'yı Yükle
                <span className="text-[10px] bg-amber-500/20 text-amber-300 font-mono px-1.5 py-0.5 rounded border border-amber-500/30">
                  Uygulama
                </span>
              </h4>
              <p className="text-xs text-zinc-400">
                Tarayıcı çubuğu olmadan tam ekran, çevrimdışı ve hızlı deneyim.
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-zinc-500 hover:text-zinc-300 p-1 rounded-lg hover:bg-zinc-800 transition"
            title="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isIOS ? (
          <div className="bg-zinc-800/80 rounded-xl p-2.5 text-xs text-zinc-300 flex items-center gap-2.5 border border-zinc-700/50">
            <Share2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Safari'de alttaki <strong>Paylaş</strong> simgesine dokunun ve <strong>Ana Ekrana Ekle</strong>'yi seçin.
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                Ana Ekrana Ekle
              </button>
            )}
            <div className="flex-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-[11px] py-1.5 px-2.5 rounded-xl flex items-center justify-center gap-1 text-center font-medium">
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Play: Çok Yakında</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
