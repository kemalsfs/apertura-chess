import 'fake-indexeddb/auto';
import Dexie from 'dexie';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { db } from '../db/db';
import { parseAndSavePgnFile, syncChessComGames, syncLichessGames } from './gameSync';

const first = `[Event "First"]
[White "Kemal"]
[Black "Opponent"]
[Date "2024.02.29"]
[Result "1-0"]

1. e4 e5 2. Nf3 Nc6 1-0`;

const second = `[Site "Second"]
[White "Opponent"]
[Black "Kemal"]
[Result "0-1"]

1. d4 d5 0-1`;

describe('PGN file import', () => {
  beforeEach(async () => {
    db.close();
    await Dexie.delete('AperturaChessDB');
    await db.open();
  });

  afterEach(async () => {
    vi.unstubAllGlobals();
    db.close();
    await Dexie.delete('AperturaChessDB');
  });

  it('imports legal games with or without Event tags and reports invalid games', async () => {
    const messages: string[] = [];
    const invalid = `[Event "Broken"]\n\n1. e4 e5 2. Qh5 Nc6 3. Qxa8 1-0`;
    const games = await parseAndSavePgnFile(`${first}\n\n${invalid}\n\n${second}`, 'Kemal', message => messages.push(message));

    expect(games).toHaveLength(2);
    expect(games[0]).toMatchObject({
      platform: 'pgn_file', userColor: 'white', result: 'win',
      opponentUsername: 'Opponent', moves: ['e4', 'e5', 'Nf3', 'Nc6'],
      date: Date.UTC(2024, 1, 29),
    });
    expect(games[1]).toMatchObject({ userColor: 'black', result: 'win', moves: ['d4', 'd5'] });
    expect(await db.games.count()).toBe(2);
    expect(messages.at(-1)).toContain('1 geçersiz maç');
  });

  it('rejects a file with only empty or illegal games without saving any row', async () => {
    await expect(parseAndSavePgnFile('[Event "Empty"]\n[Result "*"]')).rejects.toThrow('Geçerli maç bulunamadı');
    await expect(parseAndSavePgnFile('[Event "Illegal"]\n\n1. e4 e5 2. Qh5 Nc6 3. Qxa8 1-0')).rejects.toThrow('Invalid move');
    expect(await db.games.count()).toBe(0);
  });

  it('uses a stable content ID and skips duplicates without replacing saved edits', async () => {
    const original = await parseAndSavePgnFile(first);
    await db.games.update(original[0].id, { openingName: 'Kullanıcının etiketi' });
    const equivalent = `[Result "1-0"]\n[Date "2024.02.29"]\n[Black "Opponent"]\n[White "Kemal"]\n[Event "First"]\n\n1. e4 {comment} e5 2. Nf3 Nc6 1-0`;
    expect(await parseAndSavePgnFile(`${equivalent}\n\n${first}`)).toEqual([]);
    expect(await db.games.count()).toBe(1);
    expect((await db.games.get(original[0].id))?.openingName).toBe('Kullanıcının etiketi');
  });

  it('does not treat a header-shaped line inside a PGN comment as another game', async () => {
    const withComment = `[Event "Comment"]\n[Result "1-0"]\n\n1. e4 {note\n[Event "Not a game"]\n} e5 1-0`;
    const games = await parseAndSavePgnFile(withComment);
    expect(games).toHaveLength(1);
    expect(games[0].moves).toEqual(['e4', 'e5']);
  });

  it('recognizes old time-based IDs while preserving the historical row', async () => {
    const original = (await parseAndSavePgnFile(first))[0];
    await db.games.delete(original.id);
    await db.games.add({ ...original, id: 'pgn_legacy_0', openingName: 'Eski not' });
    expect(await parseAndSavePgnFile(first)).toEqual([]);
    expect(await db.games.count()).toBe(1);
    expect((await db.games.get('pgn_legacy_0'))?.openingName).toBe('Eski not');
  });

  it('skips a broken Chess.com PGN without dropping the remaining archive games', async () => {
    const game = (pgn: string, uuid: string) => ({
      pgn, uuid, url: `https://www.chess.com/game/live/${uuid}`,
      white: { username: 'Kemal', result: 'win', rating: 1500 },
      black: { username: 'Opponent', result: 'resigned', rating: 1400 },
      end_time: 1700000000,
    });
    vi.stubGlobal('fetch', vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ archives: ['https://archive.test/month'] }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ games: [
        game('1. e4 e5 2. Qh5 Nc6 3. Qxa8', 'bad'),
        game(first, 'good'),
      ] }) }));
    const messages: string[] = [];
    const games = await syncChessComGames('Kemal', message => messages.push(message));
    expect(games.map(item => item.id)).toEqual(['chesscom_good']);
    expect(await db.games.count()).toBe(1);
    expect(messages.at(-1)).toContain('1 geçersiz maç');
  });

  it('validates Lichess SAN or PGN before storing a game', async () => {
    const game = (id: string, moves: string) => ({
      id, moves, createdAt: 1700000000000, status: 'resign', winner: 'white',
      players: { white: { user: { name: 'Kemal' }, rating: 1500 }, black: { user: { name: 'Opponent' }, rating: 1400 } },
    });
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      text: async () => [game('bad', 'e4 e5 Qh5 Nc6 Qxa8'), game('good', 'e4 e5 Nf3 Nc6')].map(item => JSON.stringify(item)).join('\n'),
    }));
    const messages: string[] = [];
    const games = await syncLichessGames('Kemal', message => messages.push(message));
    expect(games.map(item => item.id)).toEqual(['lichess_good']);
    expect(games[0].moves).toEqual(['e4', 'e5', 'Nf3', 'Nc6']);
    expect(await db.games.count()).toBe(1);
    expect(messages.at(-1)).toContain('1 geçersiz maç');
  });
});
