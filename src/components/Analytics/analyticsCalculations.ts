import type { ImportedGame, RepertoireMatchResult } from '../../types/analytics';
import type { Repertoire, RepertoireNode } from '../../types/chess';
import { calculateOverallAnalytics, matchGameWithRepertoire } from '../../services/repertoireMatcher';

export interface RepertoireTree {
  repertoire: Repertoire;
  nodes: Map<string, RepertoireNode>;
}

/** Compare each real tree independently so duplicate opening moves do not hide a sibling tree. */
export function selectBestRepertoireMatch(
  game: ImportedGame,
  trees: RepertoireTree[]
): { matchResult: RepertoireMatchResult; tree?: RepertoireTree } {
  let best: { matchResult: RepertoireMatchResult; tree?: RepertoireTree } = {
    matchResult: { matchedCount: 0, whoDeviated: 'none' },
  };

  for (const tree of trees) {
    if (tree.repertoire.color !== game.userColor || tree.nodes.size === 0) continue;
    const matchResult = matchGameWithRepertoire(game, tree.nodes);
    const complete = matchResult.whoDeviated === 'none' && matchResult.matchedCount > 0;
    const bestComplete = best.matchResult.whoDeviated === 'none' && best.matchResult.matchedCount > 0;

    // A line ending in the repertoire is covered, even if another tree continues and deviates.
    // For equal coverage, prefer the longest line; the sorted tree order breaks remaining ties.
    if (!best.tree || (complete && !bestComplete) ||
        (complete === bestComplete && matchResult.matchedCount > best.matchResult.matchedCount)) {
      best = { matchResult, tree };
    }
  }

  return best;
}

export function calculateAnalyticsForTrees(games: ImportedGame[], trees: RepertoireTree[]) {
  // Results and win rates are independent of repertoire matching. Rebuild every
  // deviation count from the best matching real tree for each individual game.
  const base = calculateOverallAnalytics(games, new Map(), new Map());
  const statsByKey = new Map(base.openingStats.map(stat => [
    `${stat.color}_${stat.eco}_${stat.name}`, stat,
  ]));
  const processedGames = games.map(game => {
    const { matchResult } = selectBestRepertoireMatch(game, trees);
    const ecoKey = game.eco || (game.openingName ? game.openingName.slice(0, 3) : 'Genel');
    const openingName = game.openingName || (game.eco ? `ECO ${game.eco}` : 'Bilinmeyen Açılış');
    const stat = statsByKey.get(`${game.userColor}_${ecoKey}_${openingName}`);
    if (stat && matchResult.whoDeviated === 'user') stat.userDeviations++;
    else if (stat && matchResult.whoDeviated === 'opponent') stat.opponentDeviations++;
    return { ...game, matchResult };
  });
  return { overall: base.overall, openingStats: base.openingStats, processedGames };
}
