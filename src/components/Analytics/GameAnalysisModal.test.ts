import 'fake-indexeddb/auto';
import Dexie from 'dexie';
import { Chess } from 'chess.js';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ImportedGame } from '../../types/analytics';
import type { RepertoireNode } from '../../types/chess';
import { normalizeFen } from '../../utils/chessHelpers';
import { db } from '../../db/db';
import { saveAnalyzedMoveToDefaultRepertoire } from './GameAnalysisModal';

const game: ImportedGame = {
  id: 'game', platform: 'pgn_file', userColor: 'black',
  opponentUsername: 'Rival', result: 'win', termination: '',
  moves: ['e4', 'e5'], pgn: '1. e4 e5', date: 1,
};

function makePrefix(...sans: string[]) {
  const chess = new Chess();
  return sans.map(san => {
    const prevFen = chess.fen();
    const turn = chess.turn();
    const moveNumber = chess.moveNumber();
    const move = chess.move(san);
    const fen = chess.fen();
    return {
      prevFen, fen, normFen: normalizeFen(fen), san: move.san,
      uci: `${move.from}${move.to}${move.promotion ?? ''}`,
      from: move.from, to: move.to, turn, moveNumber,
    };
  });
}

describe('analysis move saving', () => {
  beforeEach(async () => {
    db.close();
    await Dexie.delete('AperturaChessDB');
    await db.open();
    await db.repertoires.bulkAdd([
      { id: 'default-white', name: 'Beyaz', color: 'white', isDefault: true, createdAt: 1, updatedAt: 1 },
      { id: 'default-black', name: 'Siyah', color: 'black', isDefault: true, createdAt: 1, updatedAt: 1 },
    ]);
  });

  afterEach(async () => {
    vi.unstubAllGlobals();
    db.close();
    await Dexie.delete('AperturaChessDB');
  });

  it('attaches to the fresh default tree and never links a node in another repertoire', async () => {
    const prefix = makePrefix('e4', 'e5');
    const parent: RepertoireNode = {
      id: 'default-parent', repertoireId: 'default-black', fen: prefix[0].fen,
      normalizedFen: prefix[0].normFen, san: 'e4', uci: 'e2e4',
      from: 'e2', to: 'e4', turn: 'b', moveNumber: 1,
      parentId: null, childrenIds: [], createdAt: 1,
    };
    await db.nodes.bulkAdd([
      parent,
      { ...parent, id: 'custom-parent', repertoireId: 'custom-black' },
    ]);

    await saveAnalyzedMoveToDefaultRepertoire(game, prefix);
    const saved = await db.nodes.where('repertoireId').equals('default-black').toArray();
    const child = saved.find(node => node.id !== parent.id);
    expect(saved).toHaveLength(2);
    expect(child).toMatchObject({
      repertoireId: 'default-black', parentId: parent.id, san: 'e5',
    });
    expect((await db.nodes.get(parent.id))?.childrenIds).toEqual([child?.id]);
    expect((await db.nodes.get('custom-parent'))?.childrenIds).toEqual([]);

    await saveAnalyzedMoveToDefaultRepertoire(game, prefix);
    expect(await db.nodes.where('repertoireId').equals('default-black').count()).toBe(2);
  });

  it('adds the opponent move and selected black move to an empty default tree', async () => {
    const prefix = makePrefix('e4', 'e5');
    await db.nodes.add({
      id: 'custom-parent', repertoireId: 'custom-black', fen: prefix[0].fen,
      normalizedFen: prefix[0].normFen, san: 'e4', uci: 'e2e4',
      from: 'e2', to: 'e4', turn: 'b', moveNumber: 1,
      parentId: null, childrenIds: [], createdAt: 1,
    });

    await saveAnalyzedMoveToDefaultRepertoire(game, prefix);
    const saved = await db.nodes.where('repertoireId').equals('default-black').toArray();
    const root = saved.find(node => node.uci === 'e2e4');
    const child = saved.find(node => node.uci === 'e7e5');
    expect(saved).toHaveLength(2);
    expect(root?.parentId).toBeNull();
    expect(child?.parentId).toBe(root?.id);
    expect(root?.childrenIds).toEqual([child?.id]);
    expect((await db.nodes.get('custom-parent'))?.childrenIds).toEqual([]);

    await saveAnalyzedMoveToDefaultRepertoire(game, prefix);
    expect(await db.nodes.where('repertoireId').equals('default-black').count()).toBe(2);
    expect((await db.nodes.get('custom-parent'))?.childrenIds).toEqual([]);
  });

  it('allows a new root only when the previous position is the standard start', async () => {
    await saveAnalyzedMoveToDefaultRepertoire({ ...game, userColor: 'white' }, makePrefix('e4'));
    expect(await db.nodes.where('repertoireId').equals('default-white').first())
      .toMatchObject({ san: 'e4', parentId: null });
  });

  it('saves into the actual white default after the original default tree was deleted', async () => {
    await db.repertoires.delete('default-white');
    await db.repertoires.add({
      id: 'my-white', name: 'Benim beyaz ağacım', color: 'white',
      isDefault: true, createdAt: 2, updatedAt: 2,
    });

    await saveAnalyzedMoveToDefaultRepertoire({ ...game, userColor: 'white' }, makePrefix('e4'));
    expect((await db.nodes.where('repertoireId').equals('my-white').first())?.san).toBe('e4');
    expect(await db.nodes.where('repertoireId').equals('default-white').count()).toBe(0);
  });

  it('refuses to create an orphan when the color has no default tree', async () => {
    await db.repertoires.delete('default-white');
    await expect(saveAnalyzedMoveToDefaultRepertoire(
      { ...game, userColor: 'white' }, makePrefix('e4')
    )).rejects.toThrow('varsayılan repertuvar bulunamadı');
    expect(await db.nodes.count()).toBe(0);
  });

  it('rejects a nonstandard PGN starting position without changing the database', async () => {
    const prefix = makePrefix('e4', 'e5');
    prefix[0].prevFen = '8/8/8/8/8/8/8/K6k w - - 0 1';
    const before = await db.nodes.toArray();

    await expect(saveAnalyzedMoveToDefaultRepertoire(game, prefix))
      .rejects.toThrow('Standart başlangıç dışındaki maçlar');
    expect(await db.nodes.toArray()).toEqual(before);
  });

  it('rolls back the whole path if a later insert fails', async () => {
    const prefix = makePrefix('e4', 'e5');
    vi.stubGlobal('crypto', { randomUUID: () => 'same-id' });

    await expect(saveAnalyzedMoveToDefaultRepertoire(game, prefix)).rejects.toThrow();
    expect(await db.nodes.count()).toBe(0);
  });
});
