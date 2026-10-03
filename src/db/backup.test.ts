import 'fake-indexeddb/auto';
import Dexie from 'dexie';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { Repertoire, RepertoireNode } from '../types/chess';
import { createUserBackup, mergeUserBackup, parseUserBackup, type AperturaBackup } from './backup';
import { db } from './db';
import { extractRepertoireLines } from '../services/srsScheduler';

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
    expect(result).toEqual({ addedRepertoires: 0, addedNodes: 1, addedGames: 0, skippedExisting: 1, repairedLinks: 0 });
    expect((await db.repertoires.get(repertoire.id))?.name).toBe('Yeni yerel ad');
    expect(await db.nodes.get(node.id)).toMatchObject(node);
  });

  it('restores a deleted child under an existing parent and keeps local child links', async () => {
    const child: RepertoireNode = {
      ...node, id: 'e5', fen: 'fen-e5', normalizedFen: 'fen-e5',
      san: 'e5', uci: 'e7e5', from: 'e7', to: 'e5', turn: 'w', parentId: node.id,
    };
    const localSibling: RepertoireNode = {
      ...child, id: 'c5', fen: 'fen-c5', normalizedFen: 'fen-c5',
      san: 'c5', uci: 'c7c5', from: 'c7', to: 'c5',
    };
    await db.repertoires.add(repertoire);
    await db.nodes.bulkAdd([{ ...node, childrenIds: [localSibling.id], comment: 'Yerel not' }, localSibling]);
    const backup = parseUserBackup(JSON.stringify({
      ...fixture, nodes: [{ ...node, childrenIds: [child.id] }, child],
    }));

    const result = await mergeUserBackup(backup);
    expect(result).toMatchObject({ addedNodes: 1, repairedLinks: 1 });
    expect(await db.nodes.get(node.id)).toMatchObject({
      childrenIds: [localSibling.id, child.id], comment: 'Yerel not',
    });
    expect((await db.nodes.get(child.id))?.parentId).toBe(node.id);
    const restoredNodes = await db.nodes.where('repertoireId').equals(repertoire.id).toArray();
    const lines = extractRepertoireLines(new Map(restoredNodes.map((entry) => [entry.id, entry])));
    expect(lines.some((line) => line.map((entry) => entry.id).join('/') === 'e4/e5')).toBe(true);

    const again = await mergeUserBackup(backup);
    expect(again.repairedLinks).toBe(0);
    expect((await db.nodes.get(node.id))?.childrenIds).toEqual([localSibling.id, child.id]);
  });

  it('rejects malformed or duplicate data before writing', async () => {
    expect(() => parseUserBackup('{')).toThrow('geçerli JSON');
    expect(() => parseUserBackup(JSON.stringify({ ...fixture, nodes: [node, node] }))).toThrow('yinelenen');
    expect(await db.nodes.count()).toBe(0);
  });

  it('rejects cyclic parent or child references before writing', async () => {
    expect(() => parseUserBackup(JSON.stringify({
      ...fixture, nodes: [{ ...node, childrenIds: [node.id] }],
    }))).toThrow('döngülü');
    const second = { ...node, id: 'second', parentId: node.id, childrenIds: [] };
    expect(() => parseUserBackup(JSON.stringify({
      ...fixture, nodes: [{ ...node, parentId: second.id }, second],
    }))).toThrow('döngülü');
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
