export const inquiryTemplate = `안녕하세요. 마인크래프트 [버전] 서버에서 [만들고 싶은 기능] 개발을 문의드립니다.

- 원하는 기능과 사용 방식:
- 현재 서버 환경이나 주요 플러그인 (아는 경우):
- 희망 일정과 예산 (정해진 경우):
- 참고할 이미지, 영상 또는 서버 (있는 경우):

아직 정하지 못한 내용은 상담하면서 함께 정리하고 싶습니다.`;

export const discordInviteUrl = 'https://discord.gg/jRs2zQs27S';

export const contactPolicy = {
  responseTime: '문의 내용을 확인한 뒤 작업 가능 여부와 예상 답변 일정을 안내합니다.',
  quotationProcess: '요구사항과 예외 상황을 확인한 후 개발 범위, 일정, 비용을 정리합니다.',
  supportScope: '오류 수정과 추가 기능 개발의 범위는 프로젝트별 합의 내용에 따라 결정됩니다.',
  maintenancePolicy: '납품 이후 지원 기간과 유지보수 방식은 작업 시작 전에 안내합니다.',
  urgentSupportPolicy: '긴급 대응 가능 여부는 현재 작업 일정과 오류의 영향 범위를 확인한 후 안내합니다.',
};

export const developerProfile = {
  displayName: 'EPA Development',
  role: 'Minecraft 서버 시스템 · 플러그인 개발',
  introduction: '마인크래프트 서버에서 오래 운영할 수 있는 시스템과 플러그인을 설계하고 개발합니다.',
  specialties: ['서버 콘텐츠 시스템', '경제·데이터 연동', '운영 자동화', '예외·복구 설계'],
  workingPrinciples: [
    '요구사항과 제외 범위를 먼저 정리하고 합의한 뒤 개발합니다.',
    '데이터 일관성, 서버 재시작과 동시 실행 같은 운영 상황을 함께 검토합니다.',
    '설치 파일과 설정·사용 방법 등 실제 운영에 필요한 내용을 전달합니다.',
  ],
  technologies: ['Java 21', 'Paper API', 'Skript', 'MySQL', 'JUnit 5'],
  contactMethods: [{ label: 'Discord 서버', value: discordInviteUrl }],
};
