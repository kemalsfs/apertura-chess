import type { ImportedGame } from '../types/analytics';
import type { Repertoire, RepertoireNode } from '../types/chess';
import { db } from './db';

export interface AperturaBackup {
  format: 'apertura-chess-user-data';
  version: 1;
  exportedAt: string;
  repertoires: Repertoire[];
  nodes: RepertoireNode[];
  games: ImportedGame[];
}

export interface RestoreResult {
  addedRepertoires: number;
  addedNodes: number;
  addedGames: number;
  skippedExisting: number;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function validateUniqueIds(rows: { id: string }[], label: string): void {
  if (new Set(rows.map(row => row.id)).size !== rows.length) {
    throw new Error(`${label} yedeğinde yinelenen kimlik var.`);
  }
}

/** Explorer cache and API token are intentionally omitted; neither is user data. */
export async function createUserBackup(): Promise<AperturaBackup> {
  return db.transaction('r', db.repertoires, db.nodes, db.games, async () => {
    const [repertoires, nodes, games] = await Promise.all([
      db.repertoires.toArray(),
      db.nodes.toArray(),
      db.games.toArray(),
    ]);
    return {
      format: 'apertura-chess-user-data',
      version: 1,
      exportedAt: new Date().toISOString(),
      repertoires,
      nodes,
      games,
    };
  });
}

export function parseUserBackup(json: string): AperturaBackup {
  let raw: unknown;
  try {
    raw = JSON.parse(json);
  } catch {
    throw new Error('Yedek dosyası geçerli JSON değil.');
  }
  if (!isObject(raw) || raw.format !== 'apertura-chess-user-data' || raw.version !== 1) {
    throw new Error('Bu dosya desteklenen Apertura kullanıcı yedeği değil.');
  }
  if (!isString(raw.exportedAt) || !Array.isArray(raw.repertoires)
      || !Array.isArray(raw.nodes) || !Array.isArray(raw.games)) {
    throw new Error('Yedek başlığı veya veri listeleri eksik.');
  }

  for (const rep of raw.repertoires) {
    if (!isObject(rep) || !isString(rep.id) || !isString(rep.name)
        || !['white', 'black'].includes(String(rep.color))
        || !isNumber(rep.createdAt) || !isNumber(rep.updatedAt)) {
      throw new Error('Yedekte geçersiz repertuvar kaydı var.');
    }
  }
  for (const node of raw.nodes) {
    if (!isObject(node) || !isString(node.id) || !isString(node.repertoireId)
        || !isString(node.fen) || !isString(node.normalizedFen) || !isString(node.san)
        || !isString(node.uci) || !isString(node.from) || !isString(node.to)
        || !['w', 'b'].includes(String(node.turn)) || !isNumber(node.moveNumber)
        || !(node.parentId === null || isString(node.parentId))
        || !Array.isArray(node.childrenIds) || !node.childrenIds.every(isString)
        || !isNumber(node.createdAt)) {
      throw new Error('Yedekte geçersiz açılış hamlesi var.');
    }
  }
  for (const game of raw.games) {
    if (!isObject(game) || !isString(game.id)
        || !['chesscom', 'lichess', 'pgn_file'].includes(String(game.platform))
        || !['white', 'black'].includes(String(game.userColor))
        || !['win', 'loss', 'draw'].includes(String(game.result))
        || !Array.isArray(game.moves) || !game.moves.every(move => typeof move === 'string')
        || typeof game.pgn !== 'string' || !isNumber(game.date)) {
      throw new Error('Yedekte geçersiz maç kaydı var.');
    }
  }

  const backup = raw as unknown as AperturaBackup;
  validateUniqueIds(backup.repertoires, 'Repertuvar');
  validateUniqueIds(backup.nodes, 'Hamle');
  validateUniqueIds(backup.games, 'Maç');
  const repIds = new Set(backup.repertoires.map(rep => rep.id));
  if (backup.nodes.some(node => !repIds.has(node.repertoireId))) {
    throw new Error('Yedekte ağacı bulunmayan hamle var.');
  }
  return backup;
}

/** Merge is intentionally non-destructive: existing IDs win, no rows are deleted. */
export async function mergeUserBackup(backup: AperturaBackup): Promise<RestoreResult> {
  return db.transaction('rw', db.repertoires, db.nodes, db.games, async () => {
    const [presentRepertoires, presentNodes, presentGames] = await Promise.all([
      db.repertoires.bulkGet(backup.repertoires.map(row => row.id)),
      db.nodes.bulkGet(backup.nodes.map(row => row.id)),
      db.games.bulkGet(backup.games.map(row => row.id)),
    ]);
    const missingRepertoires = backup.repertoires.filter((_, i) => !presentRepertoires[i]);
    const missingNodes = backup.nodes.filter((_, i) => !presentNodes[i]);
    const missingGames = backup.games.filter((_, i) => !presentGames[i]);
    if (missingRepertoires.length) await db.repertoires.bulkAdd(missingRepertoires);
    if (missingNodes.length) await db.nodes.bulkAdd(missingNodes);
    if (missingGames.length) await db.games.bulkAdd(missingGames);
    return {
      addedRepertoires: missingRepertoires.length,
      addedNodes: missingNodes.length,
      addedGames: missingGames.length,
      skippedExisting: backup.repertoires.length + backup.nodes.length + backup.games.length
        - missingRepertoires.length - missingNodes.length - missingGames.length,
    };
  });
}

export function downloadUserBackup(backup: AperturaBackup): void {
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `apertura-yedek-${backup.exportedAt.slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
