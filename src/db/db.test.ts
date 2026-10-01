import 'fake-indexeddb/auto';
import Dexie from 'dexie';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { ImportedGame } from '../types/analytics';
import type { Repertoire, RepertoireNode } from '../types/chess';
import { db, initializeDatabase } from './db';

const legacySchema = {
  repertoires: 'id, name, color, isDefault, createdAt, updatedAt',
  nodes: 'id, repertoireId, normalizedFen, parentId, san, [repertoireId+normalizedFen]',
  explorerCache: 'id, fen, source, timestamp',
  games: 'id, platform, userColor, result, eco, date, [platform+userColor]',
};

const repertoire: Repertoire = {
  id: 'legacy-white', name: 'Eski repertuvar', color: 'white',
  isDefault: true, createdAt: 1, updatedAt: 1,
};

const node: RepertoireNode = {
  id: 'legacy-e4', repertoireId: repertoire.id, fen: 'fen-e4', normalizedFen: 'fen-e4',
  san: 'e4', uci: 'e2e4', from: 'e2', to: 'e4', turn: 'b', moveNumber: 1,
  parentId: null, childrenIds: [], createdAt: 1,
};

const game: ImportedGame = {
  id: 'legacy-game', platform: 'pgn_file', userColor: 'white',
  opponentUsername: 'Opponent', result: 'win', termination: '',
  moves: ['e4'], pgn: '1. e4', date: 1,
};

async function createLegacyDatabase(): Promise<Dexie> {
  const legacy = new Dexie('TheoriaChessDB');
  legacy.version(3).stores(legacySchema);
  await legacy.open();
  await legacy.table('repertoires').add(repertoire);
  await legacy.table('nodes').add(node);
  await legacy.table('games').add(game);
  return legacy;
}

describe('legacy database migration', () => {
  beforeEach(async () => {
    db.close();
    await Dexie.delete('AperturaChessDB');
    await Dexie.delete('TheoriaChessDB');
    await db.open();
  });

  afterEach(async () => {
    db.close();
    await Dexie.delete('AperturaChessDB');
    await Dexie.delete('TheoriaChessDB');
  });

  it('copies all user tables atomically and leaves the source database intact', async () => {
    const legacy = await createLegacyDatabase();
    legacy.close();

    await initializeDatabase();
    expect(await db.repertoires.get(repertoire.id)).toMatchObject(repertoire);
    expect(await db.nodes.get(node.id)).toMatchObject(node);
    expect(await db.games.get(game.id)).toMatchObject(game);
    expect(await db.migrationRecords.get('theoria-import-v1')).toMatchObject({
      repertoireCount: 1, nodeCount: 1, gameCount: 1,
    });

    const original = await new Dexie('TheoriaChessDB').open();
    expect(await original.table('nodes').count()).toBe(1);
    original.close();
  });

  it('recovers missing rows from an earlier partial import without replacing existing rows', async () => {
    const legacy = await createLegacyDatabase();
    legacy.close();
    await db.repertoires.add({ ...repertoire, name: 'Kullanıcının güncel adı' });

    await initializeDatabase();
    expect((await db.repertoires.get(repertoire.id))?.name).toBe('Kullanıcının güncel adı');
    expect(await db.nodes.get(node.id)).toBeDefined();
    expect(await db.games.get(game.id)).toBeDefined();
    await initializeDatabase();
    expect(await db.repertoires.count()).toBe(1);
    expect(await db.nodes.count()).toBe(1);
  });

  it('upgrades an existing Apertura version 3 database without changing user rows', async () => {
    db.close();
    await Dexie.delete('AperturaChessDB');
    const previous = new Dexie('AperturaChessDB');
    previous.version(3).stores(legacySchema);
    await previous.table('repertoires').add(repertoire);
    await previous.table('nodes').add(node);
    previous.close();

    await db.open();
    await initializeDatabase();
    expect(await db.repertoires.get(repertoire.id)).toMatchObject(repertoire);
    expect(await db.nodes.get(node.id)).toMatchObject(node);
    expect(await db.migrationRecords.count()).toBe(0);
  });

  it('rolls back every import table and the marker when a write fails', async () => {
    const legacy = await createLegacyDatabase();
    legacy.close();
    const failGameCreation = () => { throw new Error('simulated game write failure'); };
    db.games.hook('creating', failGameCreation);
    try {
      await expect(initializeDatabase()).rejects.toThrow('simulated game write failure');
    } finally {
      db.games.hook.creating.unsubscribe(failGameCreation);
    }
    expect(await db.repertoires.get(repertoire.id)).toBeUndefined();
    expect(await db.games.get(game.id)).toBeUndefined();
    expect(await db.nodes.count()).toBe(0);
    expect(await db.migrationRecords.get('theoria-import-v1')).toBeUndefined();
    const original = await new Dexie('TheoriaChessDB').open();
    expect(await original.table('nodes').count()).toBe(1);
    original.close();
  });
});
