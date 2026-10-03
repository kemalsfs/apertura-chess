import { Chess } from 'chess.js';
import type { ImportedGame } from '../../types/analytics';
import { normalizeFen, STARTING_FEN } from '../../utils/chessHelpers';
import { db } from '../../db/db';

export interface AnalyzedMoveForSave {
  fen: string;
  prevFen: string;
  normFen: string;
  san: string;
  uci: string;
  from: string;
  to: string;
  turn: 'w' | 'b';
  moveNumber: number;
}
export async function saveAnalyzedMoveToDefaultRepertoire(
  game: ImportedGame,
  prefix: AnalyzedMoveForSave[]
): Promise<void> {
  if (prefix.length === 0) throw new Error('Eklenecek hamle bulunamadı.');
  if (normalizeFen(prefix[0].prevFen) !== normalizeFen(STARTING_FEN)) {
    throw new Error('Standart başlangıç dışındaki maçlar varsayılan repertuvara eklenemiyor.');
  }

  // Verify the complete path before touching the database.
  const replay = new Chess();
  for (const step of prefix) {
    if (normalizeFen(step.prevFen) !== normalizeFen(replay.fen()) ||
        step.turn !== replay.turn() || step.moveNumber !== replay.moveNumber()) {
      throw new Error('Maç hamleleri başlangıçtan itibaren kesintisiz değil; kayıt yapılmadı.');
    }
    try {
      const move = replay.move(step.san);
      if (`${move.from}${move.to}${move.promotion ?? ''}` !== step.uci ||
          step.from !== move.from || step.to !== move.to ||
          normalizeFen(replay.fen()) !== step.normFen ||
          normalizeFen(step.fen) !== step.normFen) {
        throw new Error('Maç hamleleri beklenen konumla eşleşmiyor.');
      }
    } catch {
      throw new Error('Maç hamleleri doğrulanamadı; kayıt yapılmadı.');
    }
  }

  await db.transaction('rw', db.repertoires, db.nodes, async () => {
    const defaults = (await db.repertoires.where('color').equals(game.userColor).toArray())
      .filter(repertoire => repertoire.isDefault);
    if (defaults.length !== 1) {
      throw new Error('Bu renk için tek bir varsayılan repertuvar bulunamadı. Önce varsayılan ağacı seçin.');
    }
    const repertoireId = defaults[0].id;
    const defaultNodes = await db.nodes.where('repertoireId').equals(repertoireId).toArray();
    let parentNode = defaultNodes.find(node =>
      node.normalizedFen === normalizeFen(STARTING_FEN) && node.parentId === null
    );

    for (const step of prefix) {
      const parentId = parentNode?.id ?? null;
      let node = defaultNodes.find(candidate =>
        candidate.normalizedFen === step.normFen &&
        candidate.parentId === parentId && candidate.uci === step.uci
      );

      if (!node) {
        node = {
          id: crypto.randomUUID(),
          repertoireId,
          fen: step.fen,
          normalizedFen: step.normFen,
          san: step.san,
          uci: step.uci,
          from: step.from,
          to: step.to,
          turn: step.turn === 'w' ? 'b' : 'w',
          moveNumber: step.moveNumber,
          parentId,
          childrenIds: [],
          createdAt: Date.now(),
          comment: `Maçtan eklendi: vs ${game.opponentUsername}`,
        };
        await db.nodes.add(node);
        defaultNodes.push(node);
      }

      if (parentNode && !parentNode.childrenIds?.includes(node.id)) {
        parentNode.childrenIds = [...(parentNode.childrenIds || []), node.id];
        await db.nodes.update(parentNode.id, { childrenIds: parentNode.childrenIds });
      }
      parentNode = node;
    }
  });
}

