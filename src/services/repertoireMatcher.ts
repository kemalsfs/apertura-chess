import type { RepertoireNode } from '../types/chess';
import type {
  ImportedGame,
  RepertoireMatchResult,
  OpeningPerformanceStat,
  OverallAnalytics,
} from '../types/analytics';

/**
 * Matches an individual game's move sequence against the Repertoire DAG.
 */
export function matchGameWithRepertoire(
  game: ImportedGame,
  repertoireNodes: Map<string, RepertoireNode>
): RepertoireMatchResult {
  if (repertoireNodes.size === 0 || game.moves.length === 0) {
    return {
      matchedCount: 0,
      whoDeviated: 'none',
    };
  }

  // Find root candidates (parentId === null)
  let currentChildren = Array.from(repertoireNodes.values()).filter(n => n.parentId === null);
  let matchedCount = 0;

  for (let i = 0; i < game.moves.length; i++) {
    const moveSan = game.moves[i];
    const isWhiteTurn = i % 2 === 0;
    const isUserTurn = game.userColor === 'white' ? isWhiteTurn : !isWhiteTurn;

    // Look for matching node in current children
    const matchedChild = currentChildren.find(
      c => c.san.toLowerCase() === moveSan.toLowerCase()
    );

    if (matchedChild) {
      matchedCount++;
      // Get next children
      currentChildren = (matchedChild.childrenIds || [])
        .map(id => repertoireNodes.get(id))
        .filter((n): n is RepertoireNode => n !== undefined);

      if (currentChildren.length === 0) {
        // Reached the leaf of our repertoire
        return {
          matchedCount,
          whoDeviated: 'none',
        };
      }
    } else {
      // Deviation occurred!
      const expectedSan =
        currentChildren.length > 0 ? currentChildren.map(c => c.san).join(', ') : undefined;

      return {
        matchedCount,
        whoDeviated: isUserTurn ? 'user' : 'opponent',
        deviationStepIndex: i,
        deviationSan: moveSan,
        expectedSan,
      };
    }
  }

  return {
    matchedCount,
    whoDeviated: 'none',
  };
}

/**
 * Calculates comprehensive opening analytics and performance matrix across all games.
 */
export function calculateOverallAnalytics(
  games: ImportedGame[],
  whiteNodes: Map<string, RepertoireNode>,
  blackNodes: Map<string, RepertoireNode>
): {
  overall: OverallAnalytics;
  openingStats: OpeningPerformanceStat[];
  processedGames: ImportedGame[];
} {
  const totalGames = games.length;

  if (totalGames === 0) {
    return {
      overall: {
        totalGames: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        winRate: 0,
        whiteGames: 0,
        whiteWinRate: 0,
        blackGames: 0,
        blackWinRate: 0,
      },
      openingStats: [],
      processedGames: [],
    };
  }

  let totalWins = 0;
  let totalDraws = 0;
  let totalLosses = 0;

  let whiteGames = 0;
  let whiteWins = 0;

  let blackGames = 0;
  let blackWins = 0;

  const openingGroups = new Map<string, OpeningPerformanceStat>();
  const processedGames: ImportedGame[] = [];

  for (const game of games) {
    const nodes = game.userColor === 'white' ? whiteNodes : blackNodes;
    const matchResult = matchGameWithRepertoire(game, nodes);
    const enrichedGame = { ...game, matchResult };
    processedGames.push(enrichedGame);

    if (game.result === 'win') totalWins++;
    else if (game.result === 'draw') totalDraws++;
    else totalLosses++;

    if (game.userColor === 'white') {
      whiteGames++;
      if (game.result === 'win') whiteWins++;
    } else {
      blackGames++;
      if (game.result === 'win') blackWins++;
    }

    // Group by Opening / ECO
    const ecoKey = game.eco || (game.openingName ? game.openingName.slice(0, 3) : 'Genel');
    const openingName = game.openingName || (game.eco ? `ECO ${game.eco}` : 'Bilinmeyen Açılış');
    const groupKey = `${game.userColor}_${ecoKey}_${openingName}`;

    let stat = openingGroups.get(groupKey);
    if (!stat) {
      stat = {
        eco: ecoKey,
        name: openingName,
        color: game.userColor,
        totalGames: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        winRate: 0,
        userDeviations: 0,
        opponentDeviations: 0,
      };
      openingGroups.set(groupKey, stat);
    }

    stat.totalGames++;
    if (game.result === 'win') stat.wins++;
    else if (game.result === 'draw') stat.draws++;
    else stat.losses++;

    if (matchResult.whoDeviated === 'user') stat.userDeviations++;
    else if (matchResult.whoDeviated === 'opponent') stat.opponentDeviations++;

    stat.winRate = Math.round((stat.wins / stat.totalGames) * 100);
  }

  const openingStats = Array.from(openingGroups.values()).sort(
    (a, b) => b.totalGames - a.totalGames
  );

  // Find best and weakest openings (min 2 games)
  const qualifiedOpenings = openingStats.filter(s => s.totalGames >= 2);
  const sortedByWinRate = [...qualifiedOpenings].sort((a, b) => b.winRate - a.winRate);

  const bestOpening = sortedByWinRate.length > 0 ? sortedByWinRate[0] : undefined;
  const weakestOpening =
    sortedByWinRate.length > 0 ? sortedByWinRate[sortedByWinRate.length - 1] : undefined;

  const overall: OverallAnalytics = {
    totalGames,
    wins: totalWins,
    draws: totalDraws,
    losses: totalLosses,
    winRate: Math.round((totalWins / totalGames) * 100),
    whiteGames,
    whiteWinRate: whiteGames > 0 ? Math.round((whiteWins / whiteGames) * 100) : 0,
    blackGames,
    blackWinRate: blackGames > 0 ? Math.round((blackWins / blackGames) * 100) : 0,
    bestOpening,
    weakestOpening,
  };

  return {
    overall,
    openingStats,
    processedGames,
  };
}