# DEEP NOTES

> ECU에 대한 심층적인 학습 내용과 발견을 기록합니다.

---

## Layer 1: Surface Understanding

### What I First Learned

- ECU는 차량의 전자 제어장치로, 센서 → 연산 → 액추에이터 제어를 수행
- 현대 차량에는 70~150개의 ECU가 탑재
- CAN이 가장 보편적인 차량 통신 프로토콜
- ECU들은 네트워크로 연결되어 협조 제어

### Initial Questions

- 왜 하나의 중앙 컴퓨터가 아닌 분산된 ECU 구조를 사용할까?
- CAN의 속도(1Mbps)가 왜 충분한가?
- 자율주행 시대에 ECU 아키텍처는 어떻게 변할까?

---

## Layer 2: Deeper Mechanics

### Why It Works This Way

**분산 아키텍처 채택 이유:**
1. **Fault Isolation**: 하나의 ECU 고장이 전체 시스템에 영향 안 줌
2. **독립 개발**: 공급업체별 독립적 개발/검증 가능
3. **점진적 진화**: 새 기능 추가 시 해당 ECU만 변경
4. **실시간성**: 각 ECU가 dedicated processor로 실시간 보장

**CAN 1Mbps가 충분한 이유:**
- 대부분 제어 데이터는 8바이트 이하
- 10ms 주기 메시지 = 초당 100회 = 충분한 실시간성
- 우선순위 기반 중재로 중요 메시지 지연 최소화

### Hidden Assumptions

- **120Ω 종단 저항**: CAN 버스 양 끝에 반드시 필요 (반사파 방지)
- **Twisted Pair**: CAN_H/CAN_L은 꼬인 쌍선이어야 함 (노이즈 상쇄)
- **공통 접지**: 모든 ECU는 같은 접지 기준점 공유 필요
- **Wake-up 메커니즘**: Sleep 상태의 ECU를 깨우는 별도 로직 필요

### Non-Obvious Implications

- **Bus Load**: CAN 버스 사용률 30% 초과 시 지연 급증 (설계 시 고려)
- **Message Latency**: 낮은 ID(높은 우선순위)가 항상 먼저 전송
- **Error Confinement**: 에러 카운터가 256 넘으면 Bus Off → 자동 복구 필요
- **Network Management**: ECU Sleep/Wake 상태 관리가 연비에 큰 영향

---

## Layer 3: Edge Cases

### When It Breaks

- **EMC 환경**: 강한 전자기장에서 CAN 통신 오류 발생
- **전압 변동**: 시동 크랭킹 시 전압 강하로 ECU 리셋 가능
- **극한 온도**: -40°C 이하, +125°C 이상에서 동작 보장 어려움
- **Babbling Idiot**: 고장난 ECU가 계속 메시지 전송 → 버스 점유

### Corner Cases

- **Bootloader Mode**: 플래싱 중 전원 차단 시 ECU 벽돌화
- **Variant Coding**: 잘못된 설정으로 기능 비활성화
- **CAN ID 충돌**: 두 ECU가 같은 ID 사용 시 데이터 손상
- **Time Sync**: ECU 간 시간 동기화 오류로 로그 분석 어려움

### Common Pitfalls

| Pitfall | Symptom | Root Cause |
|---------|---------|------------|
| 간헐적 통신 오류 | U코드 DTC | 커넥터 접촉 불량, 노이즈 |
| ECU 미인식 | 진단 불가 | 전원/접지 불량, CAN 단선 |
| 기능 미작동 | 특정 기능 OFF | 코딩 오류, SW 버전 불일치 |
| 부팅 실패 | ECU 무응답 | Flash 손상, Watchdog 미feed |

---

## Layer 4: Expert Insights

### Advanced Patterns

**1. Signal-Based vs Service-Based Communication**
```
Signal-Based (전통):
  ECU A → CAN ID 0x123 [Speed, Accel, Status] → Broadcast

Service-Based (SOME/IP):
  Client ECU → Request Service → Server ECU → Response
```

**2. Domain Controller 아키텍처**
```
기존: ECU 100개+ (기능당 1개)
     ↓
미래: Domain Controller 3~5개 + Zone ECU
     - Vehicle Computer (중앙)
     - ADAS Controller
     - Cockpit Controller
     - Body Controller
```

**3. Software Defined Vehicle (SDV)**
- 하드웨어와 소프트웨어 분리
- OTA로 기능 추가/업데이트
- Subscription 기반 기능 활성화

### Optimization Techniques

- **Message Packing**: 여러 신호를 하나의 CAN 메시지에 묶기
- **Event-Triggered**: 변화 시에만 전송 (주기 전송 대신)
- **PDU Multiplexing**: 하나의 ID로 여러 종류 데이터 전송
- **Partial Networking**: 필요한 ECU만 Wake-up

### Best Practices

1. **통신 매트릭스 관리**: 모든 CAN 메시지 ID/신호 문서화
2. **버전 관리**: SW/HW/캘리브레이션 버전 추적
3. **End-of-Line 테스트**: 출고 전 모든 ECU 통신 검증
4. **보안 업데이트**: 정기적 보안 패치 적용

---

## Counter-Intuitive Findings

| Expectation | Reality | Why |
|-------------|---------|-----|
| 빠른 통신이 항상 좋다 | CAN 1Mbps로 충분 | 제어 데이터는 작고, 주기적 전송으로 충분 |
| 중앙 집중이 효율적 | 분산 아키텍처 선호 | Fault isolation, 독립 개발, 실시간성 |
| 이더넷이 CAN 대체 | 공존할 것 | CAN은 저비용/고신뢰, Ethernet은 고속 |
| 많은 ECU = 고급차 | 통합 추세 | Domain Controller로 ECU 수 감소 중 |

---

## Historical Context

### Origin

- **1970년대**: 최초 엔진 ECU (연료분사 제어) - GM
- **1983년**: Bosch가 CAN 프로토콜 개발 시작
- **1986년**: CAN 프로토콜 공식 발표 (SAE)
- **1991년**: Mercedes S-Class에 CAN 최초 양산 적용

### Evolution

- **1990년대**: OBD-II 표준화, 에어백/ABS ECU 보급
- **2000년대**: ESP 의무화, 네비게이션 대중화
- **2010년대**: ADAS 등장 (LKAS, ACC), 차량용 Ethernet 도입
- **2020년대**: 자율주행, OTA, SDV, 중앙집중식 아키텍처

### Current State

- 전기차/자율주행으로 ECU 복잡도 급증
- Domain Controller + Zone Architecture로 전환 중
- AUTOSAR Adaptive Platform 채택
- 사이버보안 규제 강화 (UN R155, R156)

---

## Debates & Controversies

### Different Schools of Thought

**아키텍처 논쟁:**
- **분산 유지파**: 검증된 구조, Fault Isolation 중요
- **중앙집중파**: 복잡도 감소, SW 업데이트 용이

**통신 프로토콜:**
- **CAN-FD 확대파**: 기존 인프라 활용, 점진적 전환
- **Ethernet 전면 전환파**: 미래 대비, 고속/대용량 필수

### My Position

- 단기: CAN + CAN-FD + Ethernet 혼용 (용도별)
- 중기: Domain Controller 아키텍처로 전환
- 장기: SDV (Software Defined Vehicle) 실현

---

## Sources & References

- [x] Bosch CAN Specification 2.0
- [x] ISO 11898 (CAN Physical/Data Link Layer)
- [x] ISO 14229 (UDS - Unified Diagnostic Services)
- [x] AUTOSAR Classic/Adaptive Platform
- [ ] ISO 26262 (Functional Safety)
- [ ] ISO 21434 (Cybersecurity Engineering)

---

*Last updated: 2025-02-03*
