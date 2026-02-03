# QUESTIONS

> ECU 관련 미해결 질문과 탐구 방향을 기록합니다.

---

## Open Questions

### High Priority 🔴

1. **Q**: 자율주행 시대에 ECU 아키텍처는 어떻게 변화할까?
   - Why I'm asking: 현재 분산 아키텍처 → 중앙집중식 전환 중
   - Possible directions:
     - Tesla의 FSD 컴퓨터 구조 연구
     - NVIDIA DRIVE 플랫폼 분석
     - 기존 OEM들의 전환 전략 조사
   - Status: [x] Investigating / [ ] Blocked / [ ] Need help

2. **Q**: CAN 보안은 어떻게 강화할 수 있을까?
   - Why I'm asking: 기존 CAN은 인증/암호화 없음 → 해킹 취약
   - Possible directions:
     - SecOC (Secure Onboard Communication) 구현
     - CAN-FD with MAC
     - IDS (Intrusion Detection System)
   - Status: [x] Investigating / [ ] Blocked / [ ] Need help

3. **Q**: OTA(Over-The-Air) 업데이트의 기술적 구현은?
   - Why I'm asking: 테슬라처럼 원격 소프트웨어 업데이트 방법
   - Possible directions:
     - A/B 파티션 전략
     - Delta 업데이트
     - Rollback 메커니즘
   - Status: [ ] Investigating / [x] Blocked / [ ] Need help
   - Blocked by: 실제 OTA 시스템 접근 어려움

---

### Medium Priority 🟡

1. **Q**: AUTOSAR Classic vs Adaptive의 차이점과 사용 시나리오는?
   - Why I'm asking: 최신 차량에서 두 플랫폼 혼용 중
   - Status: [x] Backlog

2. **Q**: 전기차에서 고전압 시스템과 저전압 ECU의 절연 방법은?
   - Why I'm asking: 400V/800V 배터리와 12V 시스템 공존
   - Status: [x] Backlog

3. **Q**: V2X 통신과 기존 ECU 네트워크의 연결 방식은?
   - Why I'm asking: C-V2X, DSRC 등 외부 통신 연동
   - Status: [ ] Backlog

4. **Q**: 기능안전(ISO 26262) ASIL 등급별 요구사항 차이는?
   - Why I'm asking: 안전 관련 ECU 개발 시 필수 지식
   - Status: [ ] Backlog

---

### Low Priority / Curiosity 🟢

1. **Q**: 차량용 반도체 부족 사태의 근본 원인은?
   - Status: [x] Someday/Maybe

2. **Q**: FlexRay가 왜 널리 채택되지 못했을까?
   - Status: [x] Someday/Maybe

3. **Q**: 중국 전기차의 ECU 아키텍처 특징은?
   - Status: [ ] Someday/Maybe

---

## Resolved Questions

### Q: CAN에서 메시지 충돌은 어떻게 해결되나?
**Date resolved**: 2025-02-03
**Answer**: Non-destructive Bitwise Arbitration
- 모든 노드가 동시에 송신 시작
- 각 비트를 송신하면서 버스 상태 모니터링
- Dominant(0) 비트가 Recessive(1)를 덮어씀
- ID가 낮은(우선순위 높은) 노드가 중재에서 승리
- 패배한 노드는 자동으로 수신 모드로 전환, 재전송 대기
**Source**: Bosch CAN Specification 2.0
**Key insight**: 충돌이 발생해도 데이터 손상 없이 우선순위가 결정됨

### Q: 왜 CAN은 2선 차동 신호를 사용하나?
**Date resolved**: 2025-02-03
**Answer**: 노이즈 내성을 위해
- CAN_H와 CAN_L에 동일한 노이즈가 유입되면 차이값은 변하지 않음
- 차량 환경의 강한 EMI에서도 안정적 통신 가능
- 단선 시에도 일부 동작 가능 (degraded mode)
**Source**: ISO 11898
**Key insight**: 차동 신호는 common-mode noise rejection 제공

---

## Questions for Experts

### For domain expert (차량 전장 엔지니어):
- 실제 양산 개발에서 CAN 통신 매트릭스 관리 방법은?
- ECU 소프트웨어 버전 관리 및 호환성 검증 프로세스는?
- Tier1 공급업체와 OEM 간 인터페이스 정의 방식은?

### For practitioner (정비/튜닝):
- OBD 스캐너로 접근 불가능한 ECU 데이터 접근 방법?
- ECU 리매핑/튜닝 시 안전하게 백업하는 방법?
- 애프터마켓 ECU 장착 시 주의사항?

### For researcher (학계):
- 차량 내 실시간 네트워크의 worst-case latency 분석 방법?
- 사이버 공격 탐지를 위한 머신러닝 모델 적용 연구?
- SDN(Software Defined Networking) 개념의 차량 적용 가능성?

---

## Socratic Questions

### Clarifying Questions
- ECU란 정확히 무엇을 의미하는가? (범용 컴퓨터와의 차이점)
- "실시간 제어"가 의미하는 정확한 시간 요구사항은?

### Assumption Questions
- 분산 아키텍처가 항상 최선인가? 중앙집중의 장점은?
- CAN이 30년간 표준인 이유가 정말 기술적 우수성 때문인가?

### Evidence Questions
- ECU 수 증가가 실제로 차량 복잡성/비용 증가의 주원인인가?
- 자율주행에 정말 기존 CAN으로는 부족한가?

### Implication Questions
- 모든 ECU가 인터넷에 연결되면 어떤 위험이 생기는가?
- 소프트웨어 정의 차량(SDV)이 보편화되면 정비 산업은?

### Perspective Questions
- 해커 관점에서 차량 ECU 네트워크를 어떻게 볼까?
- 보험사 관점에서 자율주행 ECU 고장 책임은?

---

## Research Threads

### Thread 1: SDV (Software Defined Vehicle) 아키텍처
**Starting point**: Tesla, 현대모비스의 최신 전장 아키텍처
**Next steps**:
1. 기존 분산 아키텍처 vs Zone Architecture 비교
2. 고성능 중앙 컴퓨팅 플랫폼 조사
3. OTA 업데이트 구현 방식 연구
**Resources needed**:
- 기술 백서, 특허 문서
- SAE/IEEE 논문

### Thread 2: 차량 사이버보안
**Starting point**: UN R155, ISO 21434 규제 요구사항
**Next steps**:
1. SecOC 구현 방법 상세 학습
2. 차량 IDS/IPS 솔루션 조사
3. 실제 해킹 사례 분석 (Jeep Cherokee 등)
**Resources needed**:
- 사이버보안 표준 문서
- 해킹 컨퍼런스 발표 자료 (DEF CON)

---

## Question Log

| Date | Question | Context | Status |
|------|----------|---------|--------|
| 2025-02-03 | CAN 충돌 해결 방식 | 학습 중 | ✅ Resolved |
| 2025-02-03 | 차동 신호 사용 이유 | 학습 중 | ✅ Resolved |
| 2025-02-03 | 자율주행 아키텍처 | 미래 동향 | 🔄 Investigating |
| 2025-02-03 | CAN 보안 강화 | 보안 섹션 | 🔄 Investigating |
| 2025-02-03 | OTA 구현 | 실무 관심 | ⏸️ Blocked |

---

*Last updated: 2025-02-03*
