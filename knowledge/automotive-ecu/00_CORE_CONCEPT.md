# CORE CONCEPT

> 차량용 전자제어기(ECU)의 핵심 정의를 기록합니다.

---

## Concept

**Name**: ECU (Electronic Control Unit) - 차량용 전자제어기

---

## Why It Matters

현대 자동차는 100개 이상의 ECU가 탑재되어 있으며, 이들이 엔진 효율, 안전, 편의, 자율주행까지 모든 기능을 제어한다. ECU 없이는 현대 자동차가 작동할 수 없다.

---

## One-Sentence Definition

ECU는 센서에서 데이터를 받아 연산/판단 후 액추에이터를 제어하는 차량의 전자 두뇌이다.

---

## First Principles

1. **Input → Process → Output**: 모든 ECU는 센서 입력을 받아 알고리즘으로 처리하고 액추에이터를 제어한다
2. **Real-Time Control**: 밀리초(ms) 단위의 실시간 제어가 핵심이다
3. **Network Communication**: ECU들은 독립적으로 작동하지 않고 네트워크로 연결되어 협조 제어한다

---

## Key Terms

| Term | Definition |
|------|------------|
| ECU | Electronic Control Unit - 전자제어장치 |
| Sensor | 물리량(온도, 압력, 속도 등)을 전기신호로 변환 |
| Actuator | 전기신호를 물리적 동작(모터, 밸브 등)으로 변환 |
| CAN | Controller Area Network - 차량 내 표준 통신 프로토콜 |
| Gateway | 서로 다른 네트워크 간 데이터를 변환/중계하는 ECU |
| OBD | On-Board Diagnostics - 차량 자가 진단 시스템 |
| Calibration | ECU 제어 로직의 파라미터 튜닝 |

---

## Prerequisites

- [x] 기초 전기/전자 개념 (전압, 전류, 신호)
- [x] 디지털 통신 기본 원리
- [ ] 마이크로컨트롤러(MCU) 기초
- [ ] 제어 이론 기초 (PID 등)
- [ ] 차량 시스템 기초 (파워트레인, 샤시, 바디)

---

## Related Concepts

- Embedded Systems (임베디드 시스템)
- Automotive Networks (CAN, LIN, Ethernet, FlexRay)
- AUTOSAR (AUTomotive Open System ARchitecture)
- Functional Safety (ISO 26262)
- Cybersecurity (UN R155, ISO 21434)
- V2X (Vehicle to Everything)
- ADAS/자율주행

---

## Learning Goal

- [x] 자기 말로 설명할 수 있다
- [ ] 실제 문제에 적용할 수 있다
- [ ] 다른 사람에게 가르칠 수 있다

---

*Last updated: 2025-02-03*
