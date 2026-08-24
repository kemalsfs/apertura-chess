import { db } from '../db/db';
import type { ImportedGame, GameResult } from '../types/analytics';
import { Chess } from 'chess.js';

// Helper to extract moves SAN array from a PGN
function extractMovesFromPgn(pgn: string): string[] {
  try {
    const chess = new Chess();
    chess.loadPgn(pgn);
    return chess.history();
  } catch {
    // Basic regex fallback if loadPgn encounters non-standard tokens
    const cleanMoves = pgn
      .replace(/\[.*?\]/g, '') // remove headers
      .replace(/\{.*?\}/g, '') // remove comments
      .replace(/\d+\.\.\./g, '')
      .replace(/\d+\./g, '')
      .replace(/1-0|0-1|1\/2-1\/2|\*/g, '')
      .trim()
      .split(/\s+/)
      .filter(m => m.length > 0);
    return cleanMoves;
  }
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
        'User-Agent': 'TheoriaChess/1.0 (contact: kemalos@app.dev)',
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

  for (let i = 0; i < recentArchives.length; i++) {
    const archiveUrl = recentArchives[i];
    const monthTag = archiveUrl.split('/').slice(-2).join('/');
    onProgress?.(`${monthTag} dönemi maçları indiriliyor (${i + 1}/${recentArchives.length})...`);

    try {
      const monthRes = await fetch(archiveUrl, {
        headers: {
          'User-Agent': 'TheoriaChess/1.0 (contact: kemalos@app.dev)',
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

        const moves = extractMovesFromPgn(g.pgn);
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

  onProgress?.(`İşlem tamamlandı! Toplam ${importedGames.length} maç yüklendi.`);
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

      const moves = g.moves ? g.moves.split(' ') : [];

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
      // Ignore unparseable line
    }
  }

  if (importedGames.length > 0) {
    onProgress?.(`${importedGames.length} Lichess maçı yerel veritabanına kaydediliyor...`);
    await db.games.bulkPut(importedGames);
  }

  onProgress?.(`İşlem tamamlandı! Toplam ${importedGames.length} maç yüklendi.`);
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

  // Split multiple games in PGN by [Event
  const rawGames = pgnText.split(/(?=\[Event\s+)/i).filter(g => g.trim().length > 0);
  const importedGames: ImportedGame[] = [];

  for (let i = 0; i < rawGames.length; i++) {
    const pgn = rawGames[i];
    const whitePlayer = getPgnHeader(pgn, 'White') || 'Beyaz';
    const blackPlayer = getPgnHeader(pgn, 'Black') || 'Siyah';
    const resultHeader = getPgnHeader(pgn, 'Result') || '*';
    const eco = getPgnHeader(pgn, 'ECO');
    const openingName = getPgnHeader(pgn, 'Opening');

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

    const moves = extractMovesFromPgn(pgn);
    const id = `pgn_${Date.now()}_${i}`;

    importedGames.push({
      id,
      platform: 'pgn_file',
      userColor,
      opponentUsername: userColor === 'white' ? blackPlayer : whitePlayer,
      result,
      termination: resultHeader,
      eco,
      openingName,
      moves,
      pgn,
      date: Date.now() - i * 1000 * 60,
    });
  }

  if (importedGames.length > 0) {
    onProgress?.(`${importedGames.length} maç veritabanına aktarılıyor...`);
    await db.games.bulkPut(importedGames);
  }

  return importedGames;
}