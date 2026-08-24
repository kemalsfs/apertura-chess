import Dexie, { type Table } from 'dexie';
import type { Repertoire, RepertoireNode } from '../types/chess';
import type { CachedExplorerItem } from '../types/explorer';
import type { ImportedGame } from '../types/analytics';

export class TheoriaChessDatabase extends Dexie {
  repertoires!: Table<Repertoire, string>;
  nodes!: Table<RepertoireNode, string>;
  explorerCache!: Table<CachedExplorerItem, string>;
  games!: Table<ImportedGame, string>;

  constructor() {
    super('TheoriaChessDB');
    this.version(3).stores({
      repertoires: 'id, name, color, isDefault, createdAt, updatedAt',
      nodes: 'id, repertoireId, normalizedFen, parentId, san, [repertoireId+normalizedFen]',
      explorerCache: 'id, fen, source, timestamp',
      games: 'id, platform, userColor, result, eco, date, [platform+userColor]',
    });
  }
}

export const db = new TheoriaChessDatabase();

// Seed initial default repertoires if empty
export async function initializeDatabase(): Promise<void> {
  const count = await db.repertoires.count();
  if (count === 0) {
    const now = Date.now();
    await db.repertoires.bulkAdd([
      {
        id: 'default-white',
        name: 'Beyaz Repertoarı',
        color: 'white',
        description: '1. e4 ve 1. d4 ana varyantlarım',
        createdAt: now,
        updatedAt: now,
        isDefault: true,
      },
      {
        id: 'default-black',
        name: 'Siyah Repertoarı',
        color: 'black',
        description: '1. e4 ve 1. d4 hamlelerine karşı yanıtlarım',
        createdAt: now,
        updatedAt: now,
        isDefault: true,
      },
    ]);
  }
}