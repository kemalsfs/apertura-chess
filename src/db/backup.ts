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
  repairedLinks: number;
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
  const nodeById = new Map(backup.nodes.map(node => [node.id, node]));
  for (const node of backup.nodes) {
    const seenParents = new Set<string>();
    let parent: RepertoireNode | undefined = node;
    while (parent?.parentId) {
      if (!nodeById.has(parent.parentId)) {
        throw new Error('Yedekte ebeveyni bulunmayan hamle var.');
      }
      if (seenParents.has(parent.parentId)) {
        throw new Error('Yedekte döngülü hamle ağacı var.');
      }
      seenParents.add(parent.parentId);
      parent = nodeById.get(parent.parentId);
      if (parent?.repertoireId !== node.repertoireId) {
        throw new Error('Yedekte farklı ağaçlara bağlanan hamle var.');
      }
    }
  }
  // A stale childrenIds list can also make traversal recurse forever even when
  // parentId itself is acyclic. Check that directed graph independently.
  const visiting = new Set<string>();
  const visited = new Set<string>();
  function visit(id: string): void {
    if (visiting.has(id)) throw new Error('Yedekte döngülü hamle ağacı var.');
    if (visited.has(id)) return;
    visiting.add(id);
    for (const childId of nodeById.get(id)?.childrenIds ?? []) {
      if (nodeById.has(childId)) visit(childId);
    }
    visiting.delete(id);
    visited.add(id);
  }
  for (const node of backup.nodes) visit(node.id);
  return backup;
}

/** Existing IDs win; missing parent-child links are repaired without deleting rows. */
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

    // A restored child may have an already-present parent whose local childrenIds
    // no longer lists it. Without this edge, the node exists but is invisible in
    // the repertoire tree and drills. Preserve every existing child reference.
    let repairedLinks = 0;
    const restoredNodes = await db.nodes.bulkGet(backup.nodes.map(row => row.id));
    for (const child of restoredNodes) {
      if (!child?.parentId) continue;
      const parent = await db.nodes.get(child.parentId);
      if (!parent || parent.repertoireId !== child.repertoireId) {
        throw new Error('Yedekte ebeveyni eksik veya farklı ağaçta olan hamle var.');
      }
      if (!parent.childrenIds.includes(child.id)) {
        await db.nodes.update(parent.id, {
          childrenIds: [...parent.childrenIds, child.id],
        });
        parent.childrenIds.push(child.id);
        repairedLinks++;
      }
    }
    return {
      addedRepertoires: missingRepertoires.length,
      addedNodes: missingNodes.length,
      addedGames: missingGames.length,
      skippedExisting: backup.repertoires.length + backup.nodes.length + backup.games.length
        - missingRepertoires.length - missingNodes.length - missingGames.length,
      repairedLinks,
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
