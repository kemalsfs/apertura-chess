import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../src/services/srsScheduler.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const scheduler = {};
new Function('exports', 'require', compiled)(scheduler, () => ({ ECO_BOOK: {} }));

function node(id, srs) {
  return {
    id, repertoireId: 'test', parentId: null, childrenIds: [],
    san: 'e4', normalizedFen: 'test', srs,
  };
}

test('short lines only enter a drill when a player move remains', () => {
  const one = [node('one')];
  const two = [node('one'), node('two')];
  const three = [...two, node('three')];
  assert.equal(scheduler.firstPlayerStepIndex('white'), 2);
  assert.equal(scheduler.isTrainableLine(one, 'white'), false);
  assert.equal(scheduler.isTrainableLine(two, 'white'), false);
  assert.equal(scheduler.isTrainableLine(three, 'white'), true);
  assert.equal(scheduler.isTrainableLine(one, 'black'), false);
  assert.equal(scheduler.firstPlayerStepIndex('black'), 1);
  assert.equal(scheduler.isTrainableLine(two, 'black'), true);
});

test('cyclic child references cannot recurse indefinitely during drill extraction', () => {
  const root = { ...node('root'), childrenIds: ['root'] };
  assert.deepEqual(scheduler.extractRepertoireLines(new Map([[root.id, root]])), []);
});

test('empty due and weak filters stay empty', () => {
  const future = Date.now() + 86_400_000;
  const strongLine = [node('reviewed', {
    reviewsCount: 5, streak: 3, dueDate: future, lastReviewed: Date.now(),
    correctAnswers: 5, wrongAnswers: 0,
  })];
  assert.deepEqual(scheduler.filterRepertoireLines([strongLine], 'due'), []);
  assert.deepEqual(scheduler.filterRepertoireLines([strongLine], 'weak'), []);
  assert.deepEqual(scheduler.filterRepertoireLines([strongLine], 'all'), [strongLine]);
});

test('legacy reviews are not converted to a guessed success percentage', () => {
  const legacy = [node('legacy', { reviewsCount: 10, streak: 5, dueDate: 0, lastReviewed: 1 })];
  assert.equal(scheduler.getLineMetadata(legacy).successRate, null);
  assert.equal(scheduler.getLineMetadata(legacy).measuredAnswersCount, 0);
  assert.equal(scheduler.getLineMetadata([]).successRate, null);
});

test('new correct and wrong answers accumulate and yield a measured rate', () => {
  globalThis.localStorage = { getItem: () => null, setItem: () => {} };
  const correct = scheduler.calculateNextSRS(undefined, true);
  const wrong = scheduler.calculateNextSRS(correct, false);
  assert.equal(wrong.reviewsCount, 2);
  assert.equal(wrong.correctAnswers, 1);
  assert.equal(wrong.wrongAnswers, 1);
  assert.equal(scheduler.getLineMetadata([node('tracked', wrong)]).successRate, 50);
  assert.equal(scheduler.getLineMetadata([node('tracked', wrong)]).measuredAnswersCount, 2);
});
