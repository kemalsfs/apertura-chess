import React, { useState, useEffect } from 'react';
import { Download, X, Share2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PwaInstallPrompt: React.FC<{ isBlocked?: boolean }> = ({ isBlocked = false }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS] = useState(() => {
    if (typeof window === 'undefined') return false;
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent) && /safari/.test(userAgent) && !/crios|fxios|edgios/.test(userAgent);
  });
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

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
    // Listen for Android/Chrome beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // If iOS, show after 2 seconds
    if (isIOS) {
      const timer = setTimeout(() => setShowPrompt(true), 2000);
      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
        clearTimeout(timer);
      };
    }

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, [isIOS]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      setShowPrompt(false);
      if (choiceResult.outcome === 'accepted') {
        localStorage.setItem('apertura_pwa_prompt_dismissed', 'true');
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('apertura_pwa_prompt_dismissed', 'true');
  };

  if (!showPrompt || isBlocked) return null;

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
                Desteklenen cihazlarda Apertura'yı ana ekranınızdan açın. Çevrimiçi veriler için bağlantı gerekir.
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
        ) : deferredPrompt ? (
          <div className="flex items-center gap-2">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                Uygulamayı Yükle
              </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
