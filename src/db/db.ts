import Dexie, { type Table } from 'dexie';
import type { Repertoire, RepertoireNode } from '../types/chess';
import type { CachedExplorerItem } from '../types/explorer';
import type { ImportedGame } from '../types/analytics';

interface MigrationRecord {
  key: string;
  completedAt: number;
  repertoireCount: number;
  nodeCount: number;
  gameCount: number;
}

const LEGACY_DATABASE = 'TheoriaChessDB';
const LEGACY_MIGRATION_KEY = 'theoria-import-v1';

export class AperturaChessDatabase extends Dexie {
  repertoires!: Table<Repertoire, string>;
  nodes!: Table<RepertoireNode, string>;
  explorerCache!: Table<CachedExplorerItem, string>;
  games!: Table<ImportedGame, string>;
  migrationRecords!: Table<MigrationRecord, string>;

  constructor() {
    super('AperturaChessDB');
    this.version(3).stores({
      repertoires: 'id, name, color, isDefault, createdAt, updatedAt',
      nodes: 'id, repertoireId, normalizedFen, parentId, san, [repertoireId+normalizedFen]',
      explorerCache: 'id, fen, source, timestamp',
      games: 'id, platform, userColor, result, eco, date, [platform+userColor]',
    });
    this.version(4).stores({
      migrationRecords: 'key',
    });
  }
}

export const db = new AperturaChessDatabase();

// The original database is never modified or removed. A previous interrupted
// import may have written some rows, so copy missing IDs even when this database
// already has repertoires. The marker commits with all three tables atomically.
export async function initializeDatabase(): Promise<void> {
  if (!(await db.migrationRecords.get(LEGACY_MIGRATION_KEY)) && await Dexie.exists(LEGACY_DATABASE)) {
    const legacyDb = new Dexie(LEGACY_DATABASE);
    try {
      // Dynamic mode reads the existing schema without upgrading the source DB.
      await legacyDb.open();
      const tableNames = new Set(legacyDb.tables.map(table => table.name));
      if (tableNames.has('repertoires')) {
        const oldRepertoires = await legacyDb.table<Repertoire, string>('repertoires').toArray();
        const oldNodes = tableNames.has('nodes')
          ? await legacyDb.table<RepertoireNode, string>('nodes').toArray()
          : [];
        const oldGames = tableNames.has('games')
          ? await legacyDb.table<ImportedGame, string>('games').toArray()
          : [];

        if (oldRepertoires.length > 0) {
          await db.transaction('rw', db.repertoires, db.nodes, db.games, db.migrationRecords, async () => {
            const [repertoiresPresent, nodesPresent, gamesPresent] = await Promise.all([
              db.repertoires.bulkGet(oldRepertoires.map(row => row.id)),
              db.nodes.bulkGet(oldNodes.map(row => row.id)),
              db.games.bulkGet(oldGames.map(row => row.id)),
            ]);
            const missingRepertoires = oldRepertoires.filter((_, index) => !repertoiresPresent[index]);
            const missingNodes = oldNodes.filter((_, index) => !nodesPresent[index]);
            const missingGames = oldGames.filter((_, index) => !gamesPresent[index]);

            if (missingRepertoires.length) await db.repertoires.bulkAdd(missingRepertoires);
            if (missingNodes.length) await db.nodes.bulkAdd(missingNodes);
            if (missingGames.length) await db.games.bulkAdd(missingGames);

            await db.migrationRecords.put({
              key: LEGACY_MIGRATION_KEY,
              completedAt: Date.now(),
              repertoireCount: oldRepertoires.length,
              nodeCount: oldNodes.length,
              gameCount: oldGames.length,
            });
          });
        }
      }
    } finally {
      legacyDb.close();
    }
  }

  if (await db.repertoires.count() === 0) {
    const now = Date.now();
    await db.transaction('rw', db.repertoires, async () => {
      if (await db.repertoires.count() > 0) return;
      await db.repertoires.bulkAdd([
        {
          id: 'default-white', name: 'Beyaz Repertuvarı', color: 'white',
          description: '1. e4 ve 1. d4 ana varyantlarım', createdAt: now, updatedAt: now, isDefault: true,
        },
        {
          id: 'default-black', name: 'Siyah Repertuvarı', color: 'black',
          description: '1. e4 ve 1. d4 hamlelerine karşı yanıtlarım', createdAt: now, updatedAt: now, isDefault: true,
        },
      ]);
    });
  }

  // Keep the existing title normalization without allowing a partial update.
  await db.transaction('rw', db.repertoires, async () => {
    const allReps = await db.repertoires.toArray();
    for (const rep of allReps) {
      if (rep.name.includes('Repertoar')) {
        await db.repertoires.update(rep.id, { name: rep.name.replace(/Repertoar/g, 'Repertuvar') });
      }
    }
  });
}
