# APPLICATION

> ECU 관련 실전 적용 예시와 연습 문제를 기록합니다.

---

## Real-World Use Cases

### Use Case 1: 엔진 제어 (ECM)
**Context**: 주행 중 가속 페달 조작 시
**How it's applied**:
1. 가속 페달 센서 → 페달 위치 신호 (0~5V)
2. ECM → 요구 토크 계산
3. 스로틀 밸브 제어 (공기량)
4. 연료 인젝터 제어 (연료량)
5. 점화 타이밍 조절
**Result**: 최적 연소로 원하는 토크 출력, 연비/배기가스 최적화

### Use Case 2: 차체 자세 제어 (ESC)
**Context**: 급선회 중 오버스티어 발생 시
**How it's applied**:
1. 조향각 센서 + 요레이트 센서 → 차량 거동 파악
2. ESC ECU → 목표 vs 실제 요레이트 비교
3. 불일치 감지 시 개별 휠 브레이크 작동
4. 엔진 토크 저감 요청 (CAN 메시지)
**Result**: 차량 안정성 유지, 스핀/전복 방지

### Use Case 3: 자동 긴급 제동 (AEB)
**Context**: 전방 보행자 갑자기 출현
**How it's applied**:
1. 전방 카메라 + 레이더 → 보행자 검출
2. ADAS ECU → 충돌 시간(TTC) 계산
3. TTC < 임계값 → 경고 (HMI)
4. 운전자 미반응 → 자동 브레이크 (ESC에 요청)
**Result**: 충돌 회피 또는 충격 완화

---

## Practice Problems

### Level 1: Basic (기초)

**Problem 1.1**: CAN 메시지 ID 우선순위
> CAN 버스에 ID 0x100, 0x200, 0x050 메시지가 동시에 전송을 시도하면, 어떤 순서로 전송되는가?

<details>
<summary>Solution</summary>

```
정답: 0x050 → 0x100 → 0x200

이유: CAN은 ID 값이 낮을수록 우선순위가 높다.
이진수로 비교 시 dominant(0)이 recessive(1)를 이긴다.

0x050 = 0000 0101 0000 (가장 먼저 0 나옴)
0x100 = 0001 0000 0000
0x200 = 0010 0000 0000
```

</details>

**Problem 1.2**: ECU 전원 문제
> 차량 시동 시 계기판, 오디오가 작동하지 않지만 시동은 걸린다. 어디를 확인해야 하나?

<details>
<summary>Solution</summary>

```
1. 퓨즈 박스 확인 (계기판/오디오 관련 퓨즈)
2. 해당 ECU의 전원 라인 (B+, IGN) 전압 확인
3. 접지 연결 상태 확인
4. CAN 통신 상태 확인 (Gateway 연결)

시동이 걸린다 = ECM, 연료펌프 정상
→ 바디계 ECU 전원 문제 가능성 높음
```

</details>

---

### Level 2: Intermediate (중급)

**Problem 2.1**: CAN 통신 오류 진단
> 진단기로 확인 시 "U0100 - ECM과 통신 불가" 고장코드 발생. 다른 ECU는 정상 통신됨. 원인 추정과 진단 순서는?

<details>
<summary>Solution</summary>

```
원인 추정:
1. ECM 전원 불량
2. ECM CAN 회로 고장
3. ECM 내부 고장
4. ECM 커넥터 탈거/접촉불량

진단 순서:
1. ECM 커넥터 연결 상태 육안 확인
2. ECM 전원(B+, IGN) 전압 측정 → 12V 정상?
3. ECM 접지 저항 측정 → 0.5Ω 이하?
4. CAN_H, CAN_L 전압 측정 (정상: 2.5V 기준 ±1V)
5. 다른 ECU에서 CAN 분리 후 ECM만 연결 테스트
6. ECM 교체 테스트
```

</details>

**Problem 2.2**: CAN 프레임 해석
> 다음 CAN 메시지를 해석하시오:
> ID: 0x123, Data: [32, 00, 8C, 01, 00, 00, 00, 00]

<details>
<summary>Solution</summary>

```
해석 (예시 - 차속 메시지라 가정):

Byte 0 (0x32): 50 (10진수) → 차속 50 km/h (Factor 1)
Byte 1 (0x00): 예비
Byte 2-3 (0x8C, 0x01):
  Little Endian → 0x018C = 396
  Factor 0.1, Offset 0 → 엔진 RPM 396 x 10 = 3960 RPM
Byte 4-7: 예비 또는 다른 신호

※ 실제 해석은 DBC 파일(신호 정의) 필요
```

</details>

---

### Level 3: Advanced (고급)

**Problem 3.1**: 네트워크 설계
> 신규 차량 프로젝트에서 다음 ECU들의 네트워크를 설계하시오:
> - ECM, TCU, BMS (파워트레인)
> - ABS, MDPS, ACU (샤시)
> - BCM, 도어모듈 4개, 시트모듈 2개 (바디)
> - 전방카메라, 레이더 2개 (ADAS)
> - AVN, 클러스터 (인포테인먼트)

<details>
<summary>Solution</summary>

```
네트워크 아키텍처 설계:

1. Powertrain CAN (500Kbps)
   - ECM, TCU, BMS
   - 고속, 실시간 제어 필요

2. Chassis CAN (500Kbps)
   - ABS, MDPS, ACU
   - 안전 관련, 고신뢰성 필요

3. Body CAN (250Kbps)
   - BCM (Master)
   - 조명, 와이퍼 등

4. Body LIN (각 채널 20Kbps)
   - LIN1: 운전석 도어, 시트
   - LIN2: 조수석 도어, 시트
   - LIN3: 후석 도어 2개
   - BCM이 LIN Master

5. ADAS Ethernet (100BASE-T1)
   - 전방카메라, 레이더 → ADAS ECU
   - 고속 데이터 전송 필요

6. IVI Ethernet (1000BASE-T1)
   - AVN, 클러스터
   - 고해상도 그래픽, 스트리밍

7. Gateway ECU
   - 모든 네트워크 연결
   - 보안, 라우팅, 진단 처리

┌─────────────────────────────────────┐
│            Gateway ECU              │
├───┬───┬───┬───┬───┬─────────────────┤
│PT │CH │BD │LIN│ADAS│      IVI       │
│CAN│CAN│CAN│   │ETH │      ETH       │
└───┴───┴───┴───┴───┴─────────────────┘
```

</details>

---

## Mini Projects

### Project 1: CAN 신호 모니터링
**Goal**: 실제 차량의 CAN 데이터를 캡처하고 분석
**Steps**:
1. OBD-II CAN 어댑터 준비 (ELM327 또는 전문 장비)
2. CAN 분석 SW 설치 (CANalyzer, BusMaster, SavvyCAN)
3. 차량 OBD 포트 연결
4. IGN ON 상태에서 CAN 트래픽 캡처
5. 반복되는 메시지 ID 식별
6. 가속/제동 시 변화하는 데이터 추적
**Success Criteria**:
- [ ] 차속 관련 CAN ID 식별
- [ ] RPM 관련 CAN ID 식별
- [ ] 데이터 변화 패턴 문서화

### Project 2: ECU 시뮬레이터 제작
**Goal**: Arduino/Raspberry Pi로 간단한 ECU 시뮬레이터 제작
**Steps**:
1. MCP2515 CAN 모듈 연결
2. 기본 CAN 송수신 코드 작성
3. 차속/RPM 신호 시뮬레이션
4. 다른 노드와 통신 테스트
**Success Criteria**:
- [ ] CAN 메시지 송신 성공
- [ ] CAN 메시지 수신 및 파싱
- [ ] 주기적 메시지 전송 (10ms 주기)

---

## Code Examples

### Example 1: CAN 메시지 송신 (Arduino + MCP2515)

```cpp
// Language: C++ (Arduino)
// Description: CAN 메시지 전송 예제

#include <SPI.h>
#include <mcp_can.h>

MCP_CAN CAN(10);  // CS pin

void setup() {
  Serial.begin(115200);

  // CAN 초기화 (500Kbps)
  while (CAN.begin(MCP_ANY, CAN_500KBPS, MCP_8MHZ) != CAN_OK) {
    Serial.println("CAN init failed, retrying...");
    delay(100);
  }
  Serial.println("CAN init OK!");
  CAN.setMode(MCP_NORMAL);
}

void loop() {
  // 차속 메시지 시뮬레이션 (ID: 0x123)
  unsigned char data[8] = {0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
  // data[0] = 50 km/h

  CAN.sendMsgBuf(0x123, 0, 8, data);  // ID, extended, length, data

  delay(10);  // 10ms 주기
}
```

### Example 2: CAN 메시지 수신 및 파싱 (Python + python-can)

```python
# Language: Python
# Description: CAN 메시지 수신 및 해석

import can

def parse_speed_message(data):
    """차속 메시지 파싱 (예시)"""
    speed = data[0]  # Byte 0: 차속 (km/h)
    rpm = (data[3] << 8 | data[2]) * 0.25  # Byte 2-3: RPM
    return speed, rpm

def main():
    # CAN 인터페이스 설정 (SocketCAN)
    bus = can.interface.Bus(channel='can0', bustype='socketcan')

    print("CAN 수신 대기 중...")

    while True:
        msg = bus.recv(timeout=1.0)
        if msg is None:
            continue

        # 차속 메시지 필터링
        if msg.arbitration_id == 0x123:
            speed, rpm = parse_speed_message(msg.data)
            print(f"차속: {speed} km/h, RPM: {rpm}")

        # 모든 메시지 로깅
        print(f"ID: 0x{msg.arbitration_id:03X}, Data: {msg.data.hex()}")

if __name__ == "__main__":
    main()
```

---

## Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| 종단 저항 미설치 | 신호 반사로 통신 불안정 | 버스 양 끝에 120Ω 설치 |
| Byte Order 무시 | 데이터 해석 오류 | Little/Big Endian 확인 |
| Bus Load 미고려 | 30% 초과 시 지연 발생 | 설계 단계에서 Bus Load 계산 |
| 우선순위 설계 오류 | 중요 메시지 지연 | Safety-critical에 낮은 ID 할당 |
| CAN 분기 길이 과다 | 스터브 길이 > 30cm 시 문제 | 스터브 최소화 |

---

## Application Checklist

Before applying this concept, verify:
- [x] CAN 통신 기본 원리 이해
- [ ] 차량별 통신 매트릭스(DBC) 확보
- [ ] 테스트 장비 준비 (어댑터, 분석기)
- [ ] 안전 주의사항 숙지 (차량 작업 시)
- [ ] 관련 법규 확인 (OBD 접근 제한 등)

---

## My Applications

### Application 1: CAN 데이터 분석
**Date**: (예정)
**Context**: 개인 차량 OBD 포트에서 CAN 데이터 캡처
**What I did**:
**Outcome**:
**Lessons learned**:

---

*Last updated: 2025-02-03*
