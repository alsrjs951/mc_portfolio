/**
 * @typedef {'real' | 'design'} ImplementationType
 * @typedef {{ implementationType: ImplementationType, automatedTestCount?: number }} ProjectLike
 */

/**
 * 홈페이지 신뢰 지표를 프로젝트 데이터 한 곳에서 계산합니다.
 * @param {ProjectLike[]} projects
 */
export function calculateProjectMetrics(projects) {
  return projects.reduce(
    (metrics, project) => {
      if (project.implementationType === 'real') {
        metrics.realProjectCount += 1;
        metrics.automatedTestCount += project.automatedTestCount ?? 0;
      } else {
        metrics.designProjectCount += 1;
      }
      return metrics;
    },
    { realProjectCount: 0, designProjectCount: 0, automatedTestCount: 0 },
  );
}
