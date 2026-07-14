---
title: "인스턴스 던전"
type: "plugin"
featured: true
sample: true
summary: "파티별 독립 공간에서 전투 단계, 보상과 종료 처리를 관리하는 인스턴스 콘텐츠입니다."
problem: "여러 파티가 동시에 같은 던전을 이용하면 몬스터, 보상, 진행 단계가 서로 영향을 줄 수 있으며 이탈과 재접속 같은 예외도 처리해야 합니다."
solution: "던전 한 판을 독립된 세션 객체로 모델링하고 상태 전이를 제한합니다. 참가자, 월드 자원, 타이머를 세션 생명주기에 묶어 종료 시 일괄 정리합니다."
features:
  - "파티별 독립 던전 세션과 단계 관리"
  - "입장, 사망, 이탈, 재접속 예외 처리"
  - "보스 패턴과 웨이브 스케줄링"
  - "세션 종료 시 엔티티와 작업 안전 정리"
stack: ["Kotlin", "Paper API", "Gradle"]
minecraftVersions: ["1.21+"]
serverType: "Paper"
dependencies: []
thumbnail: "/images/dungeon-instance-concept.jpg"
order: 4
---
