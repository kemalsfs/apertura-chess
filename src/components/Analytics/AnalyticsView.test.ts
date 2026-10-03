import { describe, expect, it } from 'vitest';
import type { ImportedGame } from '../../types/analytics';
import type { Repertoire, RepertoireNode } from '../../types/chess';
import { calculateAnalyticsForTrees, selectBestRepertoireMatch } from './analyticsCalculations';

function repertoire(id: string, color: 'white' | 'black', isDefault = false): Repertoire {
  return { id, name: id, color, isDefault, createdAt: 1, updatedAt: 1 };
}

function node(id: string, repertoireId: string, san: string, parentId: string | null,
  childrenIds: string[] = []): RepertoireNode {
  return {
    id, repertoireId, san, parentId, childrenIds, fen: '', normalizedFen: '',
    uci: '', from: '', to: '', turn: 'b', moveNumber: 1, createdAt: 1,
  };
}

function game(id: string, userColor: 'white' | 'black', moves: string[],
  result: 'win' | 'loss' | 'draw' = 'win'): ImportedGame {
  return {
    id, platform: 'chesscom', userColor, moves, result, date: 1,
    opponentUsername: 'opponent', termination: '', pgn: '', eco: 'B20',
    openingName: 'Sicilian Defence',
  };
}

const whiteDefault = {
  repertoire: repertoire('default-white', 'white', true),
  nodes: new Map([
    ['d-e4', node('d-e4', 'default-white', 'e4', null, ['d-e5'])],
    ['d-e5', node('d-e5', 'default-white', 'e5', 'd-e4')],
  ]),
};
const whiteCustom = {
  repertoire: repertoire('custom-white', 'white'),
  nodes: new Map([
    ['c-e4', node('c-e4', 'custom-white', 'e4', null, ['c-c5'])],
    ['c-c5', node('c-c5', 'custom-white', 'c5', 'c-e4', ['c-nf3'])],
    ['c-nf3', node('c-nf3', 'custom-white', 'Nf3', 'c-c5')],
  ]),
};
const blackCustom = {
  repertoire: repertoire('custom-black', 'black'),
  nodes: new Map([
    ['b-e4', node('b-e4', 'custom-black', 'e4', null, ['b-c5'])],
    ['b-c5', node('b-c5', 'custom-black', 'c5', 'b-e4')],
  ]),
};

describe('analytics across repertoire trees', () => {
  it('uses the matching custom tree when another tree shares the first move', () => {
    const selected = selectBestRepertoireMatch(
      game('g1', 'white', ['e4', 'c5', 'Nf3']),
      [whiteDefault, whiteCustom, blackCustom]
    );
    expect(selected.tree?.repertoire.id).toBe('custom-white');
    expect(selected.matchResult).toEqual({ matchedCount: 3, whoDeviated: 'none' });
  });

  it('does not call a covered line a deviation because another tree continues farther', () => {
    const selected = selectBestRepertoireMatch(
      game('g2', 'white', ['e4', 'e5', 'Nf3']),
      [whiteCustom, whiteDefault]
    );
    expect(selected.tree?.repertoire.id).toBe('default-white');
    expect(selected.matchResult).toEqual({ matchedCount: 2, whoDeviated: 'none' });
  });

  it('keeps opening deviation totals and game results consistent with per-game matches', () => {
    const games = [
      game('custom-line', 'white', ['e4', 'c5', 'Nf3']),
      game('user-deviation', 'white', ['e4', 'c5', 'Bc4'], 'loss'),
      game('black-line', 'black', ['e4', 'c5']),
      game('opponent-deviation', 'black', ['d4', 'd5'], 'draw'),
    ];
    const result = calculateAnalyticsForTrees(games, [whiteDefault, whiteCustom, blackCustom]);
    expect(result.overall).toMatchObject({ totalGames: 4, wins: 2, losses: 1, draws: 1 });
    expect(result.processedGames.map(g => g.matchResult?.whoDeviated))
      .toEqual(['none', 'user', 'none', 'opponent']);
    expect(result.openingStats.find(s => s.color === 'white'))
      .toMatchObject({ totalGames: 2, wins: 1, losses: 1, userDeviations: 1, opponentDeviations: 0 });
    expect(result.openingStats.find(s => s.color === 'black'))
      .toMatchObject({ totalGames: 2, wins: 1, draws: 1, userDeviations: 0, opponentDeviations: 1 });
  });
});
