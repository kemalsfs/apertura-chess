import React, { useRef, useState } from 'react';
import { Download, Upload, X } from 'lucide-react';
import {
  createUserBackup, downloadUserBackup, mergeUserBackup, parseUserBackup,
  type AperturaBackup,
} from '../../db/backup';

interface DataBackupDialogProps {
  onClose: () => void;
}

export const DataBackupDialog: React.FC<DataBackupDialogProps> = ({ onClose }) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [pendingBackup, setPendingBackup] = useState<AperturaBackup | null>(null);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  const handleDownload = async () => {
    setBusy(true);
    setStatus('');
    try {
      const backup = await createUserBackup();
      downloadUserBackup(backup);
      setStatus(`Yedek hazırlandı: ${backup.repertoires.length} ağaç, ${backup.nodes.length} hamle, ${backup.games.length} maç. İndirilenler klasörünü kontrol et.`);
    } catch (error) {
      setStatus(`Yedek hazırlanamadı: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
    } finally {
      setBusy(false);
    }
  };

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setPendingBackup(null);
    setStatus('');
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const backup = parseUserBackup(await file.text());
      setPendingBackup(backup);
    } catch (error) {
      setStatus(`Dosya alınamadı: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
    } finally {
      event.target.value = '';
    }
  };

  const handleRestore = async () => {
    if (!pendingBackup) return;
    setBusy(true);
    setStatus('');
    try {
      const result = await mergeUserBackup(pendingBackup);
      setPendingBackup(null);
      setStatus(`${result.addedRepertoires} ağaç, ${result.addedNodes} hamle, ${result.addedGames} maç eklendi. ${result.skippedExisting} mevcut kayıt korundu.`);
      if (result.addedRepertoires + result.addedNodes + result.addedGames > 0) {
        setTimeout(() => window.location.reload(), 1800);
      }
    } catch (error) {
      setStatus(`Geri yükleme başarısız: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}. Mevcut veriler korundu.`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="presentation">
      <div className="w-full max-w-md space-y-4 rounded-2xl border border-zinc-700 bg-zinc-900 p-5 shadow-2xl"
        role="dialog" aria-modal="true" aria-labelledby="data-backup-title">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 id="data-backup-title" className="text-base font-bold text-zinc-100">Verilerini yedekle</h2>
            <p className="mt-1 text-xs text-zinc-400">Repertuvar ağaçları, hamleler ve içe aktarılan maçlar JSON dosyasına alınır. API anahtarın dosyaya eklenmez.</p>
          </div>
          <button onClick={onClose} disabled={busy} aria-label="Pencereyi kapat"
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 disabled:opacity-50">
            <X className="h-4 w-4" />
          </button>
        </div>

        <button onClick={handleDownload} disabled={busy}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-3 py-2.5 text-xs font-bold text-zinc-950 hover:bg-amber-400 disabled:opacity-50">
          <Download className="h-4 w-4" /> JSON yedeğini indir
        </button>

        <div className="border-t border-zinc-700 pt-4">
          <p className="mb-2 text-xs text-zinc-400">Yedeği içeri aktarırken yalnız eksik kayıtlar eklenir. Mevcut kayıtlar silinmez veya değiştirilmez.</p>
          <input ref={fileInput} type="file" accept=".json,application/json" onChange={handleFile}
            className="sr-only" aria-label="Apertura JSON yedeği seç" />
          <button onClick={() => fileInput.current?.click()} disabled={busy}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-600 px-3 py-2.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-800 disabled:opacity-50">
            <Upload className="h-4 w-4" /> Yedek dosyası seç
          </button>
        </div>

        {pendingBackup && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-zinc-200">
            <p>Seçilen yedek: {pendingBackup.repertoires.length} ağaç, {pendingBackup.nodes.length} hamle, {pendingBackup.games.length} maç.</p>
            <p className="mt-1 text-zinc-400">Aynı kimlikteki mevcut kayıtlar korunur. İşlem atomiktir; hata olursa yeni kayıtlar eklenmez.</p>
            <button onClick={handleRestore} disabled={busy}
              className="mt-3 w-full rounded-lg bg-amber-500 px-3 py-2 font-bold text-zinc-950 hover:bg-amber-400 disabled:opacity-50">
              Eksik kayıtları geri yükle
            </button>
          </div>
        )}
        {status && <p role="status" className="text-xs text-zinc-200">{status}</p>}
      </div>
    </div>
  );
};
