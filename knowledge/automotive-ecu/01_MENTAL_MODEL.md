# MENTAL MODEL

> ECU의 구조와 인과관계를 시각화합니다.

---

## Visual Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        차량 전자 아키텍처                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      ┌─────────────┐                            │
│                      │  Gateway    │ ← 네트워크 중심            │
│                      │    ECU      │                            │
│                      └──────┬──────┘                            │
│           ┌─────────────────┼─────────────────┐                 │
│           │                 │                 │                 │
│     ┌─────┴─────┐    ┌─────┴─────┐    ┌─────┴─────┐           │
│     │Powertrain │    │  Chassis  │    │   Body    │           │
│     │    CAN    │    │    CAN    │    │ CAN/LIN   │           │
│     └─────┬─────┘    └─────┬─────┘    └─────┬─────┘           │
│           │                │                │                   │
│      ECM, TCU         ABS, MDPS        BCM, 도어               │
│      BMS, MCU         ACU, EPB         시트, 미러               │
│                                                                 │
│           ┌─────────────────┼─────────────────┐                 │
│     ┌─────┴─────┐                      ┌─────┴─────┐           │
│     │   ADAS    │                      │   IVI     │           │
│     │ Ethernet  │                      │ Ethernet  │           │
│     └─────┬─────┘                      └─────┬─────┘           │
│           │                                  │                  │
│     카메라, 레이더                        AVN, 클러스터           │
│     라이다, 초음파                        텔레매틱스              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Cause-Effect Chain

### ECU 기본 동작 원리

```
[Physical World]
      ↓
[Sensor] → 물리량 → 전기신호 변환
      ↓
[Signal Conditioning] → 노이즈 제거, 증폭
      ↓
[ADC] → 아날로그 → 디지털 변환
      ↓
[MCU/CPU] → 알고리즘 연산, 판단
      ↓
[Output Driver] → 신호 증폭
      ↓
[Actuator] → 전기신호 → 물리적 동작
      ↓
[Physical World]
```

### 엔진 ECU (ECM) 제어 예시

```
[O2 센서] 배기가스 산소 농도 측정
      ↓
[ECM] 공연비 계산 (목표: 14.7:1)
      ↓
[연료 인젝터] 분사량 조절
      ↓
[결과] 최적 연소 → 연비↑ 배기가스↓
```

---

## Component Breakdown

### ECU 하드웨어 구성

| Component | Role | Dependency |
|-----------|------|------------|
| MCU/CPU | 연산/제어 로직 실행 | 전원, 클럭 |
| Flash Memory | 프로그램 저장 | MCU |
| RAM | 실행 중 데이터 저장 | MCU |
| EEPROM | 설정값/학습값 저장 | MCU |
| CAN Transceiver | CAN 통신 물리층 | MCU, CAN Bus |
| Power Supply | 전원 안정화 (12V→5V/3.3V) | 배터리 |
| Input Circuit | 센서 신호 조절 | 센서, MCU |
| Output Driver | 액추에이터 구동 | MCU, 액추에이터 |

### 주요 ECU별 역할

| ECU | 역할 | 주요 제어 |
|-----|------|----------|
| ECM | 엔진 제어 | 연료분사, 점화, 공기량 |
| TCU | 변속기 제어 | 변속 타이밍, 클러치 |
| ABS/ESC | 제동/자세 제어 | 휠 속도, 브레이크 압력 |
| BCM | 바디 제어 | 조명, 와이퍼, 도어 |
| ADAS ECU | 운전자 보조 | 센서 퓨전, 제어 명령 |

---

## Information Flow

### 차량 네트워크 데이터 흐름

```
[센서 ECU]                           [액추에이터 ECU]
     │                                      ↑
     ↓                                      │
[CAN Message: ID + Data]                    │
     │                                      │
     ↓                                      │
[CAN Bus] ─────────────────────────────────→│
     │                                      │
     ↓                                      │
[Gateway ECU] ──→ [다른 도메인 ECU]        │
     │                                      │
     ↓                                      │
[로깅/진단] ──→ [OBD Port] ──→ [진단기]
```

### CAN 메시지 흐름 예시 (차속 정보)

```
[ABS ECU]
    │
    ├─ 차속 계산 (휠 속도 센서 4개 평균)
    │
    ↓
[CAN 메시지 전송]
ID: 0x123, Data: [속도, 가속도, 상태]
    │
    ↓ (브로드캐스트)
    │
    ├──→ [ECM] 연료 분사량 조절
    ├──→ [TCU] 변속 판단
    ├──→ [ADAS] 크루즈 컨트롤
    ├──→ [CLU] 계기판 속도 표시
    └──→ [AVN] 내비게이션 ETA 계산
```

---

## State Transitions

### ECU 상태 전이

| State | Trigger | Next State |
|-------|---------|------------|
| Off | IGN ON | Initialization |
| Initialization | Self-test 완료 | Normal |
| Normal | Fault 검출 | Degraded |
| Degraded | Fault 해소 | Normal |
| Normal | IGN OFF | Shutdown |
| Shutdown | 저장 완료 | Sleep |
| Sleep | Wake-up 신호 | Initialization |

### CAN 통신 에러 상태

| State | Condition | Behavior |
|-------|-----------|----------|
| Error Active | TEC < 128, REC < 128 | 정상 통신 |
| Error Passive | TEC ≥ 128 또는 REC ≥ 128 | 수동 에러 플래그 |
| Bus Off | TEC ≥ 256 | 통신 중단 |
| Recovery | 128 x 11 recessive bits | Error Active 복귀 |

---

## Boundary Conditions

**Applies when:**
- 차량 시동 ON 상태 (IGN ON)
- 정상 전압 범위 (9V~16V)
- 정상 온도 범위 (-40°C ~ 85°C)
- 네트워크 연결 정상

**Does NOT apply when:**
- 배터리 방전 (저전압)
- 극한 온도 환경
- EMC/ESD 영향
- 네트워크 단선/단락

---

## Mental Shortcuts

1. **Rule of Thumb**:
   - 고속 = CAN/Ethernet (파워트레인, ADAS)
   - 저속 = LIN (바디 편의장치)
   - 대용량 = Ethernet (카메라, OTA)

2. **Quick Check**:
   - ECU 문제? → 먼저 CAN 통신 확인
   - 통신 정상? → 센서/액추에이터 확인
   - 둘 다 정상? → 소프트웨어/캘리브레이션 확인

3. **Red Flag**:
   - 여러 ECU 동시 고장 → 전원 또는 접지 문제
   - 간헐적 고장 → 커넥터 접촉 불량 또는 EMC
   - 특정 조건에서만 고장 → 소프트웨어 버그 가능성

---

*Last updated: 2025-02-03*
