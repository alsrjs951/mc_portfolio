---
title: "서버 코어 시스템"
type: "plugin"
featured: true
implementationType: "design"
summary: "권한, 재화와 플레이어 데이터를 일관된 기준으로 관리하는 서버 공통 기반 시스템입니다."
problem: "여러 콘텐츠가 각자 데이터를 관리하면 명령어와 권한 규칙이 달라지고, 서버 확장 과정에서 중복 코드와 데이터 불일치가 생길 수 있습니다."
solution: "공통 서비스 계층과 명확한 API 경계를 두고, 비동기 데이터 처리와 캐시 정책을 분리합니다. 서버 규모와 기존 구성에 맞춰 저장 구조와 장애 복구 기준을 결정합니다."
features:
  - "플레이어 프로필과 재화 데이터 통합 관리"
  - "권한 기반 관리자 명령어와 감사 가능한 처리 흐름"
  - "비동기 저장과 종료 시 안전한 데이터 반영"
  - "다른 콘텐츠가 사용할 수 있는 내부 API 구조"
stack: ["Java", "Paper API", "MySQL"]
minecraftVersions: ["1.20+", "1.21+"]
serverType: "Paper"
dependencies: ["Vault (선택)"]
thumbnail: "/images/server-core-concept.jpg"
order: 3
---
