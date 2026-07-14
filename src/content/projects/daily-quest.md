---
title: "데일리 퀘스트"
type: "skript"
featured: true
sample: true
summary: "운영자가 쉽게 수정할 수 있는 일일 목표와 보상 콘텐츠 예시입니다."
problem: "이벤트마다 코드를 크게 수정하면 운영 속도가 느려지고, 리셋 시각이나 중복 보상 처리에서 실수가 생기기 쉽습니다."
solution: "목표 정의와 보상을 설정 영역에 모으고 플레이어별 진행 상태를 분리합니다. 반복 이벤트는 하나의 리셋 흐름에서만 처리하도록 구성합니다."
features:
  - "일일 목표 자동 배정과 진행도 표시"
  - "완료 보상 중복 수령 방지"
  - "관리자용 초기화와 상태 확인 명령어"
  - "운영자가 수정하기 쉬운 설정 중심 구조"
stack: ["Skript", "SkBee", "YAML"]
minecraftVersions: ["1.20+", "1.21+"]
serverType: "Paper / Spigot"
dependencies: ["Skript", "SkBee"]
codeLanguage: "skript"
code: |
  function claimDailyQuest(p: player):
      set {_id} to uuid of {_p}
      if {quest::claimed::%{_id}%} is true:
          send "&c이미 보상을 받았습니다." to {_p}
          stop
      set {quest::claimed::%{_id}%} to true
      give {_p} 3 diamond
decision: "보상 지급보다 먼저 수령 상태를 기록하는 형태로 중복 실행 위험을 줄인 단순 예시입니다. 실제 환경에서는 저장 방식과 오류 복구 정책을 함께 결정합니다."
order: 5
---

> 이 코드는 설명용 예시이며, 실제 작업의 공개 범위에 맞게 교체해야 합니다.
