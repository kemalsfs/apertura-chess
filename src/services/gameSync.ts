import { db } from '../db/db';
import type { ImportedGame, GameResult } from '../types/analytics';
import { Chess } from 'chess.js';

function extractMovesFromPgn(pgn: string): string[] {
  const chess = new Chess();
  chess.loadPgn(pgn);
  const moves = chess.history();
  if (moves.length === 0) throw new Error('PGN dosyasında yasal hamle yok');
  return moves;
}

function validateSanMoves(movetext: string): string[] {
  const chess = new Chess();
  for (const san of movetext.trim().split(/\s+/).filter(Boolean)) chess.move(san);
  const moves = chess.history();
  if (moves.length === 0) throw new Error('Yasal hamle bulunamadı');
  return moves;
}

function splitPgnGames(text: string): string[] {
  const games: string[] = [];
  let lines: string[] = [];
  let hasMovetext = false;
  let inBraceComment = false;
  const tags = new Set<string>();

  for (const line of text.replace(/^\uFEFF/, '').split(/\r?\n/)) {
    const tag = inBraceComment ? null : line.match(/^\s*\[([A-Za-z][\w]*)\s+"(?:\\.|[^"\\])*"\]\s*$/);
    if (tag && lines.some(part => part.trim()) && (hasMovetext || tags.has(tag[1].toLowerCase()))) {
      games.push(lines.join('\n').trim());
      lines = [];
      hasMovetext = false;
      tags.clear();
    }
    lines.push(line);
    if (tag) tags.add(tag[1].toLowerCase());
    else if (line.trim()) hasMovetext = true;
    for (const char of line) {
      if (!inBraceComment && char === ';') break;
      if (char === '{') inBraceComment = true;
      else if (char === '}') inBraceComment = false;
    }
  }
  if (lines.some(part => part.trim())) games.push(lines.join('\n').trim());
  return games;
}

function parsedPgn(pgn: string): { chess: Chess; moves: string[]; canonical: string } {
  const chess = new Chess();
  chess.loadPgn(pgn);
  const moves = chess.history();
  if (moves.length === 0) throw new Error('Yasal hamle bulunamadı');
  const headers = chess.header();
  const result = headers.Result || pgn.match(/(?:^|\s)(1-0|0-1|1\/2-1\/2|\*)\s*$/)?.[1] || '*';
  const canonical = JSON.stringify({
    headers: Object.entries(headers).sort(([a], [b]) => a.localeCompare(b)),
    moves,
    result,
  });
  return { chess, moves, canonical };
}

async function canonicalGameId(canonical: string): Promise<string> {
  const data = new TextEncoder().encode(canonical);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return `pgn_${Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('')}`;
}

function pgnDate(headers: Record<string, string | null>): number {
  const date = headers.UTCDate || headers.Date;
  const match = date?.match(/^(\d{4})\.(\d{2})\.(\d{2})$/);
  if (!match) return 0;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const timestamp = Date.UTC(year, month - 1, day);
  const check = new Date(timestamp);
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) return 0;
  const time = headers.UTCTime?.match(/^(\d{2}):(\d{2}):(\d{2})$/);
  if (!time) return timestamp;
  const hours = Number(time[1]);
  const minutes = Number(time[2]);
  const seconds = Number(time[3]);
  return hours < 24 && minutes < 60 && seconds < 60
    ? timestamp + ((hours * 60 + minutes) * 60 + seconds) * 1000
    : timestamp;
}

// Helper to extract PGN header tag
function getPgnHeader(pgn: string, tag: string): string | undefined {
  const match = pgn.match(new RegExp(`\\[${tag}\\s+"(.*?)"\\]`, 'i'));
  return match ? match[1] : undefined;
}

/**
 * Synchronizes games from Chess.com Public API for a username.
 */
export async function syncChessComGames(
  username: string,
  onProgress?: (msg: string) => void
): Promise<ImportedGame[]> {
  const cleanUsername = username.trim().toLowerCase();
  if (!cleanUsername) throw new Error('Geçerli bir Chess.com kullanıcı adı girin');

  onProgress?.('Arşiv listesi alınıyor...');

  const archivesRes = await fetch(
    `https://api.chess.com/pub/player/${encodeURIComponent(cleanUsername)}/games/archives`,
    {
      headers: {
        'User-Agent': 'AperturaChess/2.0 (contact: kemalos@app.dev)',
      },
    }
  );

  if (!archivesRes.ok) {
    if (archivesRes.status === 404) {
      throw new Error(`Chess.com üzerinde '${cleanUsername}' kullanıcısı bulunamadı.`);
    }
    throw new Error(`Chess.com API Hatası: HTTP ${archivesRes.status}`);
  }

  const archivesData = await archivesRes.json();
  const archives: string[] = archivesData.archives || [];

  if (archives.length === 0) {
    onProgress?.('Kullanıcıya ait maç bulunamadı.');
    return [];
  }

  // Fetch latest 3 months of archives
  const recentArchives = archives.slice(-3);
  const importedGames: ImportedGame[] = [];
  let rejectedGames = 0;

  for (let i = 0; i < recentArchives.length; i++) {
    const archiveUrl = recentArchives[i];
    const monthTag = archiveUrl.split('/').slice(-2).join('/');
    onProgress?.(`${monthTag} dönemi maçları indiriliyor (${i + 1}/${recentArchives.length})...`);

    try {
      const monthRes = await fetch(archiveUrl, {
        headers: {
          'User-Agent': 'AperturaChess/2.0 (contact: kemalos@app.dev)',
        },
      });

      if (!monthRes.ok) continue;

      const monthData = await monthRes.json();
      const rawGames: any[] = monthData.games || [];

      for (const g of rawGames) {
        if (!g.pgn) continue;

        const isWhite = g.white.username.toLowerCase() === cleanUsername;
        const userColor = isWhite ? 'white' : 'black';
        const opponent = isWhite ? g.black : g.white;
        const userSide = isWhite ? g.white : g.black;

        let result: GameResult = 'draw';
        if (userSide.result === 'win') {
          result = 'win';
        } else if (opponent.result === 'win') {
          result = 'loss';
        }

        let moves: string[];
        try {
          moves = extractMovesFromPgn(g.pgn);
        } catch {
          rejectedGames++;
          continue;
        }
        const eco = getPgnHeader(g.pgn, 'ECO');
        const openingUrl = getPgnHeader(g.pgn, 'ECOUrl');
        const openingName = openingUrl
          ? openingUrl.split('/').pop()?.replace(/-/g, ' ')
          : getPgnHeader(g.pgn, 'Opening');

        const gameId = `chesscom_${g.uuid || g.url.split('/').pop()}`;

        importedGames.push({
          id: gameId,
          platform: 'chesscom',
          userColor,
          opponentUsername: opponent.username,
          opponentRating: opponent.rating,
          userRating: userSide.rating,
          result,
          termination: userSide.result || 'normal',
          eco,
          openingName,
          moves,
          pgn: g.pgn,
          date: (g.end_time || Date.now() / 1000) * 1000,
          url: g.url,
        });
      }
    } catch (err) {
      console.warn(`Error fetching archive ${archiveUrl}:`, err);
    }
  }

  // Save to Dexie
  if (importedGames.length > 0) {
    onProgress?.(`${importedGames.length} maç yerel veritabanına kaydediliyor...`);
    await db.games.bulkPut(importedGames);
  }

  onProgress?.(`İşlem tamamlandı! Toplam ${importedGames.length} maç yüklendi, ${rejectedGames} geçersiz maç atlandı.`);
  return importedGames;
}

/**
 * Synchronizes games from Lichess API for a username.
 */
export async function syncLichessGames(
  username: string,
  onProgress?: (msg: string) => void
): Promise<ImportedGame[]> {
  const cleanUsername = username.trim().toLowerCase();
  if (!cleanUsername) throw new Error('Geçerli bir Lichess kullanıcı adı girin');

  onProgress?.('Lichess maçları indiriliyor...');

  const url = `https://lichess.org/api/games/user/${encodeURIComponent(cleanUsername)}?max=150&moves=true&pgnInJson=true&opening=true`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/x-ndjson',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Lichess üzerinde '${cleanUsername}' kullanıcısı bulunamadı.`);
    }
    throw new Error(`Lichess API Hatası: HTTP ${response.status}`);
  }

  const text = await response.text();
  const lines = text.trim().split('\n').filter(l => l.length > 0);
  const importedGames: ImportedGame[] = [];
  let rejectedGames = 0;

  for (const line of lines) {
    try {
      const g = JSON.parse(line);
      const isWhite = g.players.white.user?.name.toLowerCase() === cleanUsername;
      const userColor = isWhite ? 'white' : 'black';
      const opponent = isWhite ? g.players.black : g.players.white;
      const userSide = isWhite ? g.players.white : g.players.black;

      let result: GameResult = 'draw';
      if (g.winner === (isWhite ? 'white' : 'black')) {
        result = 'win';
      } else if (g.winner) {
        result = 'loss';
      }

      const moves = g.pgn ? extractMovesFromPgn(g.pgn) : validateSanMoves(g.moves || '');

      importedGames.push({
        id: `lichess_${g.id}`,
        platform: 'lichess',
        userColor,
        opponentUsername: opponent.user?.name || 'Anonim',
        opponentRating: opponent.rating,
        userRating: userSide.rating,
        result,
        termination: g.status || 'normal',
        eco: g.opening?.eco,
        openingName: g.opening?.name,
        moves,
        pgn: g.pgn || '',
        date: g.createdAt || Date.now(),
        url: `https://lichess.org/${g.id}`,
      });
    } catch {
      rejectedGames++;
    }
  }

  if (importedGames.length > 0) {
    onProgress?.(`${importedGames.length} Lichess maçı yerel veritabanına kaydediliyor...`);
    await db.games.bulkPut(importedGames);
  }

  onProgress?.(`İşlem tamamlandı! Toplam ${importedGames.length} maç yüklendi, ${rejectedGames} geçersiz maç atlandı.`);
  return importedGames;
}

/**
 * Parses raw PGN file text into ImportedGame array.
 */
export async function parseAndSavePgnFile(
  pgnText: string,
  targetUsername?: string,
  onProgress?: (msg: string) => void
): Promise<ImportedGame[]> {
  onProgress?.('PGN dosyası ayrıştırılıyor...');

  const rawGames = splitPgnGames(pgnText);
  const candidates: { game: ImportedGame; canonical: string }[] = [];
  const rejected: string[] = [];

  for (let i = 0; i < rawGames.length; i++) {
    const pgn = rawGames[i];
    let parsed: ReturnType<typeof parsedPgn>;
    try {
      parsed = parsedPgn(pgn);
    } catch (error) {
      rejected.push(`${i + 1}. maç: ${error instanceof Error ? error.message : 'geçersiz PGN'}`);
      continue;
    }
    const headers = parsed.chess.header();
    const whitePlayer = headers.White || 'Beyaz';
    const blackPlayer = headers.Black || 'Siyah';
    const resultHeader = headers.Result || pgn.match(/(?:^|\s)(1-0|0-1|1\/2-1\/2|\*)\s*$/)?.[1] || '*';
    const eco = headers.ECO;
    const openingName = headers.Opening;

    let userColor: 'white' | 'black' = 'white';
    if (targetUsername) {
      if (blackPlayer.toLowerCase().includes(targetUsername.toLowerCase())) {
        userColor = 'black';
      }
    }

    let result: GameResult = 'draw';
    if (resultHeader === '1-0') {
      result = userColor === 'white' ? 'win' : 'loss';
    } else if (resultHeader === '0-1') {
      result = userColor === 'black' ? 'win' : 'loss';
    }

    const id = await canonicalGameId(parsed.canonical);

    candidates.push({
      canonical: parsed.canonical,
      game: {
        id,
        platform: 'pgn_file',
        userColor,
        opponentUsername: userColor === 'white' ? blackPlayer : whitePlayer,
        result,
        termination: resultHeader,
        eco: eco || undefined,
        openingName: openingName || undefined,
        moves: parsed.moves,
        pgn,
        date: pgnDate(headers),
      },
    });
  }

  if (candidates.length === 0) {
    throw new Error(rejected.length > 0
      ? `Geçerli maç bulunamadı. ${rejected.slice(0, 3).join('; ')}`
      : 'PGN dosyasında maç bulunamadı.');
  }

  onProgress?.(`${candidates.length} geçerli maç kontrol ediliyor...`);
  const importedGames: ImportedGame[] = [];
  let duplicateCount = 0;
  await db.transaction('rw', db.games, async () => {
    const existing = await db.games.where('platform').equals('pgn_file').toArray();
    const knownIds = new Set(existing.map(game => game.id));
    const knownContent = new Set<string>();
    for (const game of existing) {
      try {
        knownContent.add(parsedPgn(game.pgn).canonical);
      } catch {
        // Keep historical rows even if their PGN was not valid.
      }
    }
    for (const candidate of candidates) {
      if (knownIds.has(candidate.game.id) || knownContent.has(candidate.canonical)) {
        duplicateCount++;
        continue;
      }
      importedGames.push(candidate.game);
      knownIds.add(candidate.game.id);
      knownContent.add(candidate.canonical);
    }
    if (importedGames.length > 0) await db.games.bulkAdd(importedGames);
  });

  onProgress?.(`${importedGames.length} maç aktarıldı, ${duplicateCount} kopya ve ${rejected.length} geçersiz maç atlandı.${rejected.length ? ` ${rejected.slice(0, 2).join('; ')}` : ''}`);
  return importedGames;
}
