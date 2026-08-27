import Dexie, { type Table } from 'dexie';
import type { Repertoire, RepertoireNode } from '../types/chess';
import type { CachedExplorerItem } from '../types/explorer';
import type { ImportedGame } from '../types/analytics';

export class AperturaChessDatabase extends Dexie {
  repertoires!: Table<Repertoire, string>;
  nodes!: Table<RepertoireNode, string>;
  explorerCache!: Table<CachedExplorerItem, string>;
  games!: Table<ImportedGame, string>;

  constructor() {
    super('AperturaChessDB');
    this.version(3).stores({
      repertoires: 'id, name, color, isDefault, createdAt, updatedAt',
      nodes: 'id, repertoireId, normalizedFen, parentId, san, [repertoireId+normalizedFen]',
      explorerCache: 'id, fen, source, timestamp',
      games: 'id, platform, userColor, result, eco, date, [platform+userColor]',
    });
  }
}

export const db = new AperturaChessDatabase();

// Seed initial default repertoires if empty, migrating from old TheoriaChessDB if present
export async function initializeDatabase(): Promise<void> {
  const count = await db.repertoires.count();
  if (count === 0) {
    // Check if legacy TheoriaChessDB exists and migrate data seamlessly
    try {
      if (typeof window !== 'undefined' && window.indexedDB) {
        const legacyDb = new Dexie('TheoriaChessDB');
        legacyDb.version(3).stores({
          repertoires: 'id, name, color, isDefault, createdAt, updatedAt',
          nodes: 'id, repertoireId, normalizedFen, parentId, san, [repertoireId+normalizedFen]',
          explorerCache: 'id, fen, source, timestamp',
          games: 'id, platform, userColor, result, eco, date, [platform+userColor]',
        });
        const legacyCount = await legacyDb.table('repertoires').count();
        if (legacyCount > 0) {
          const oldRepertoires = await legacyDb.table('repertoires').toArray();
          const oldNodes = await legacyDb.table('nodes').toArray();
          const oldGames = await legacyDb.table('games').toArray();
          if (oldRepertoires.length > 0) await db.repertoires.bulkAdd(oldRepertoires);
          if (oldNodes.length > 0) await db.nodes.bulkAdd(oldNodes);
          if (oldGames.length > 0) await db.games.bulkAdd(oldGames);
          console.log('✅ Successfully migrated existing data from TheoriaChessDB to AperturaChessDB.');
          return;
        }
      }
    } catch (e) {
      console.warn('Legacy DB check/migration skipped:', e);
    }

    const now = Date.now();
    await db.repertoires.bulkAdd([
      {
        id: 'default-white',
        name: 'Beyaz Repertuvarı',
        color: 'white',
        description: '1. e4 ve 1. d4 ana varyantlarım',
        createdAt: now,
        updatedAt: now,
        isDefault: true,
      },
      {
        id: 'default-black',
        name: 'Siyah Repertuvarı',
        color: 'black',
        description: '1. e4 ve 1. d4 hamlelerine karşı yanıtlarım',
        createdAt: now,
        updatedAt: now,
        isDefault: true,
      },
    ]);
  }
}