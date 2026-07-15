import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateProjectMetrics } from '../src/lib/projectMetrics.mjs';

test('실제 구현 사례의 자동 테스트만 합산한다', () => {
  const metrics = calculateProjectMetrics([
    { implementationType: 'real', automatedTestCount: 125 },
    { implementationType: 'real', automatedTestCount: 5 },
    { implementationType: 'design', automatedTestCount: 999 },
  ]);
  assert.equal(metrics.automatedTestCount, 130);
});

test('테스트 수가 없는 프로젝트를 0으로 처리한다', () => {
  const metrics = calculateProjectMetrics([
    { implementationType: 'real' },
    { implementationType: 'design' },
  ]);
  assert.equal(metrics.automatedTestCount, 0);
});

test('실제 구현과 설계 예시 수를 구분한다', () => {
  const metrics = calculateProjectMetrics([
    { implementationType: 'real', automatedTestCount: 5 },
    { implementationType: 'real', automatedTestCount: 33 },
    { implementationType: 'design' },
    { implementationType: 'design' },
  ]);
  assert.deepEqual(metrics, { realProjectCount: 2, designProjectCount: 2, automatedTestCount: 38 });
});
