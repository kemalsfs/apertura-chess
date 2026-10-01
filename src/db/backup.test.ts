import 'fake-indexeddb/auto';
import Dexie from 'dexie';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { Repertoire, RepertoireNode } from '../types/chess';
import { createUserBackup, mergeUserBackup, parseUserBackup, type AperturaBackup } from './backup';
import { db } from './db';

const repertoire: Repertoire = {
  id: 'white-tree', name: 'Beyaz ağacım', color: 'white', createdAt: 1, updatedAt: 1,
};
const node: RepertoireNode = {
  id: 'e4', repertoireId: repertoire.id, fen: 'fen-e4', normalizedFen: 'fen-e4',
  san: 'e4', uci: 'e2e4', from: 'e2', to: 'e4', turn: 'b', moveNumber: 1,
  parentId: null, childrenIds: [], createdAt: 1,
};

const fixture: AperturaBackup = {
  format: 'apertura-chess-user-data', version: 1, exportedAt: '2026-10-01T00:00:00.000Z',
  repertoires: [repertoire], nodes: [node], games: [],
};

describe('user backup and non-destructive restore', () => {
  beforeEach(async () => {
    db.close();
    await Dexie.delete('AperturaChessDB');
    await db.open();
  });

  afterEach(async () => {
    db.close();
    await Dexie.delete('AperturaChessDB');
  });

  it('exports a restorable snapshot of user tables', async () => {
    await db.repertoires.add(repertoire);
    await db.nodes.add(node);
    const exported = await createUserBackup();
    expect(exported.repertoires).toEqual([repertoire]);
    expect(exported.nodes).toEqual([node]);
    expect(exported.games).toEqual([]);
    expect(parseUserBackup(JSON.stringify(exported))).toEqual(exported);
  });

  it('restores missing rows and preserves existing rows with matching IDs', async () => {
    await db.repertoires.add({ ...repertoire, name: 'Yeni yerel ad' });
    const result = await mergeUserBackup(parseUserBackup(JSON.stringify(fixture)));
    expect(result).toEqual({ addedRepertoires: 0, addedNodes: 1, addedGames: 0, skippedExisting: 1 });
    expect((await db.repertoires.get(repertoire.id))?.name).toBe('Yeni yerel ad');
    expect(await db.nodes.get(node.id)).toMatchObject(node);
  });

  it('rejects malformed or duplicate data before writing', async () => {
    expect(() => parseUserBackup('{')).toThrow('geçerli JSON');
    expect(() => parseUserBackup(JSON.stringify({ ...fixture, nodes: [node, node] }))).toThrow('yinelenen');
    expect(await db.nodes.count()).toBe(0);
  });

  it('rolls back the entire restore when a later table write fails', async () => {
    const failNodeCreation = () => { throw new Error('simulated node write failure'); };
    db.nodes.hook('creating', failNodeCreation);
    try {
      await expect(mergeUserBackup(fixture)).rejects.toThrow('simulated node write failure');
    } finally {
      db.nodes.hook.creating.unsubscribe(failNodeCreation);
    }
    expect(await db.repertoires.count()).toBe(0);
    expect(await db.nodes.count()).toBe(0);
  });
});
