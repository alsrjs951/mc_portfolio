---
title: "유저 경매장"
type: "plugin"
featured: false
sample: true
summary: "등록과 검색부터 구매, 만료, 정산과 보관함까지 연결하는 플레이어 간 거래 시스템입니다."
problem: "동시에 같은 상품을 구매하거나 서버가 재시작되는 상황에서도 아이템과 재화가 중복되거나 사라지지 않아야 합니다."
solution: "거래 상태를 명확히 정의하고 구매 확정을 하나의 원자적 흐름으로 처리합니다. 인벤토리 지급 실패 시 보관함을 통해 다시 받을 수 있게 설계합니다."
features:
  - "카테고리, 가격, 판매자 기반 검색"
  - "동시 구매 방지와 거래 상태 검증"
  - "만료 상품 및 판매 대금 보관함"
  - "관리자 거래 조회와 문제 대응 흐름"
stack: ["Java", "Paper API", "SQLite"]
minecraftVersions: ["1.20+"]
serverType: "Paper"
dependencies: ["Vault"]
thumbnail: "/images/auction-house-concept.jpg"
codeLanguage: "java"
code: |
  return transaction.execute(listingId, listing -> {
      if (!listing.isAvailable()) throw new SoldException();
      economy.withdraw(buyer, listing.price());
      listing.markSoldTo(buyer.getUniqueId());
      mailbox.deliver(buyer, listing.item());
  });
decision: "검증, 결제, 상태 변경, 지급의 경계를 분명히 나누면 부분 실패를 추적하고 안전하게 복구할 수 있습니다."
order: 6
---
