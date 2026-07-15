# EPA Development Portfolio

Minecraft 플러그인과 Skript 개발 의뢰를 위한 정적 포트폴리오입니다.

## 콘텐츠 교체

`src/content/projects`의 Markdown 파일에서 프로젝트 내용을 관리합니다. `implementationType`은 실제 구현(`real`)과 설계 예시(`design`)를 구분하며, 실제 사례의 `automatedTestCount`는 홈페이지 자동 테스트 합계에 반영됩니다. 공개 가능한 이미지나 영상은 `media`, 검증 결과는 `results`에 추가할 수 있습니다.

문의 양식, 문의·지원 정책과 개발자 소개는 `src/data/siteConfig.mjs`에서 한 번에 수정합니다.

## 로컬 실행

```sh
npm install
npm run dev
```

## 검증

```sh
npm run check
npm run build
```

## Cloudflare Workers

- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `SITE_URL=https://사용할-도메인`

기본 공개 주소는 `https://epa-development.alsrjs951.workers.dev`입니다. 개인 도메인을 연결하면 `SITE_URL`과 `public/robots.txt`의 Sitemap 주소를 함께 변경하세요.
