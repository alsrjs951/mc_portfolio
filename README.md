# EPA Development Portfolio

Minecraft 플러그인과 Skript 개발 의뢰를 위한 정적 포트폴리오입니다.

## 콘텐츠 교체

`src/content/projects`의 Markdown 파일을 실제 프로젝트 정보로 교체하세요. 각 샘플의 `sample` 값을 `false`로 바꾸면 "교체용 샘플" 표시가 사라집니다. 프로젝트 상세 페이지의 스크린샷 영역은 실제 이미지가 준비되면 이미지 데이터 필드를 추가해 교체하면 됩니다.

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
