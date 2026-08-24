import React, { useState } from 'react';
import {
  syncChessComGames,
  syncLichessGames,
  parseAndSavePgnFile,
} from '../../services/gameSync';
import { X, Globe, Upload, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface GameImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const GameImportModal: React.FC<GameImportModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [platform, setPlatform] = useState<'chesscom' | 'lichess' | 'pgn'>('chesscom');
  const [username, setUsername] = useState('');
  const [pgnText, setPgnText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progressMsg, setProgressMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImport = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    setProgressMsg('Bağlantı kuruluyor...');

    try {
      if (platform === 'chesscom') {
        if (!username.trim()) throw new Error('Lütfen Chess.com kullanıcı adınızı girin');
        await syncChessComGames(username, setProgressMsg);
      } else if (platform === 'lichess') {
        if (!username.trim()) throw new Error('Lütfen Lichess kullanıcı adınızı girin');
        await syncLichessGames(username, setProgressMsg);
      } else if (platform === 'pgn') {
        if (!pgnText.trim()) throw new Error('Lütfen PGN metni yapıştırın veya dosya yükleyin');
        await parseAndSavePgnFile(pgnText, username, setProgressMsg);
      }

      setTimeout(() => {
        setIsLoading(false);
        onSuccess();
        onClose();
      }, 1000);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMsg(err.message || 'Maçlar içe aktarılırken bir hata oluştu.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const text = event.target?.result as string;
        setPgnText(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl max-w-md w-full flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-400" />
            <h2 className="text-base font-bold text-zinc-100">Maçları İçe Aktar</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Platform Tabs */}
        <div className="grid grid-cols-3 gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
          <button
            onClick={() => setPlatform('chesscom')}
            className={`py-2 text-xs font-semibold rounded-lg transition cursor-pointer ${
              platform === 'chesscom'
                ? 'bg-zinc-800 text-emerald-400 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Chess.com
          </button>
          <button
            onClick={() => setPlatform('lichess')}
            className={`py-2 text-xs font-semibold rounded-lg transition cursor-pointer ${
              platform === 'lichess'
                ? 'bg-zinc-800 text-emerald-400 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Lichess
          </button>
          <button
            onClick={() => setPlatform('pgn')}
            className={`py-2 text-xs font-semibold rounded-lg transition cursor-pointer ${
              platform === 'pgn'
                ? 'bg-zinc-800 text-emerald-400 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            PGN Dosyası
          </button>
        </div>

        {/* Input Forms */}
        {platform !== 'pgn' ? (
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-zinc-300">
              {platform === 'chesscom' ? 'Chess.com' : 'Lichess'} Kullanıcı Adı:
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Örn: Hikaru, MagnusCarlsen veya senin kullanıcı adın"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <label className="text-xs font-medium text-zinc-300">
              PGN Dosyası Seç veya Metin Yapıştır:
            </label>
            <label className="flex items-center justify-center gap-2 p-4 bg-zinc-950 border border-dashed border-zinc-700 hover:border-emerald-500 rounded-xl text-xs text-zinc-400 hover:text-emerald-300 transition cursor-pointer">
              <Upload className="w-4 h-4" />
              <span>.pgn Dosyası Yükle</span>
              <input type="file" accept=".pgn" onChange={handleFileUpload} className="hidden" />
            </label>
            <textarea
              value={pgnText}
              onChange={e => setPgnText(e.target.value)}
              placeholder="Veya PGN metnini buraya yapıştırın [Event ...]"
              rows={3}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 resize-none font-mono"
            />
          </div>
        )}

        {/* Progress & Error Messages */}
        {isLoading && progressMsg && (
          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-xl">
            <Loader2 className="w-4 h-4 animate-spin shrink-0" />
            <span>{progressMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/40 border border-red-500/30 p-2.5 rounded-xl">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Submit Action */}
        <button
          onClick={handleImport}
          disabled={isLoading}
          className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer shadow-md"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>İndiriliyor...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Maçları Senkronize Et</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};