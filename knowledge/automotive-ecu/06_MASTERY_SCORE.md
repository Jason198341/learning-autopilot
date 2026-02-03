# MASTERY SCORE

> ECU 학습 숙련도를 자가 평가하고 추적합니다.

---

## Current Mastery Level

```
████████████░░░░░░░░  60% - Intermediate
```

| Level | Score Range | Status |
|-------|-------------|--------|
| Novice | 0-20% | ✅ Passed |
| Beginner | 21-40% | ✅ Passed |
| Intermediate | 41-60% | 🔄 Current |
| Advanced | 61-80% | ⬜ |
| Expert | 81-100% | ⬜ |

---

## Gate Verification

### Gate 1: Self-Explanation (자기 설명)
> "노트 없이 이 개념을 설명할 수 있는가?"

- [x] Core definition: ECU = 센서→연산→액추에이터 제어하는 차량의 전자 두뇌
- [x] Why it matters: 현대 차량의 모든 기능(안전, 연비, 편의)을 제어
- [x] Key mechanisms: CAN 통신, 실시간 제어, 분산 아키텍처
- [x] Common pitfalls: 종단저항, Bus Load, 우선순위 설계

**Score**: 4 / 4 = **100%** ✅

---

### Gate 2: Application (실전 적용)
> "실제 문제에 적용할 수 있는가?"

- [x] Recognized where to apply: 차량 통신 문제 진단 시 CAN 분석 필요성 인식
- [x] Successfully applied basic case: CAN 메시지 ID/데이터 해석 가능
- [ ] Handled edge case: 실제 간헐적 통신 오류 진단 경험 없음
- [ ] Debugged when it failed: 실차 디버깅 경험 부족

**Score**: 2 / 4 = **50%**

---

### Gate 3: Teaching (교육 가능)
> "다른 사람에게 가르칠 수 있는가?"

- [x] Explained to beginner: ECU 개념을 비유로 설명 가능
- [x] Answered follow-up questions: 기본적인 질문에 답변 가능
- [x] Created helpful analogy: 신경계, 마이크로서비스 비유 개발
- [ ] Identified learner's misconceptions: 실제 교육 경험 없음

**Score**: 3 / 4 = **75%**

---

## Overall Gate Score

| Gate | Score | Weight | Weighted |
|------|-------|--------|----------|
| Self-Explanation | 100% | 30% | 30% |
| Application | 50% | 40% | 20% |
| Teaching | 75% | 30% | 22.5% |
| **Total** | | | **72.5%** |

→ **Application** 영역 보강 필요

---

## Skill Breakdown

| Sub-skill | Level (1-5) | Evidence |
|-----------|-------------|----------|
| ECU 기본 개념 | 4 | 정의, 구조, 역할 설명 가능 |
| CAN 통신 원리 | 4 | 프레임 구조, 중재 방식 이해 |
| CAN 메시지 분석 | 3 | 기본 파싱 가능, DBC 없이 해석 어려움 |
| 네트워크 설계 | 3 | 기본 토폴로지 설계 가능 |
| 진단/디버깅 | 2 | 이론적 이해, 실습 부족 |
| 보안 | 2 | 위협 이해, 대책 구현 경험 없음 |
| AUTOSAR | 1 | 개념만 인지 |

---

## Progress History

| Date | Score | Delta | Notes |
|------|-------|-------|-------|
| 2025-02-03 | 60% | - | 초기 학습 완료 |
| | | | |

---

## Weak Points

### Identified Gaps

1. **실습 경험 부족**: 실제 CAN 분석 장비 사용 경험 없음
2. **AUTOSAR 지식**: 소프트웨어 아키텍처 측면 학습 부족
3. **보안 구현**: SecOC 등 실제 구현 방법 모름
4. **최신 트렌드**: SDV, Zone Architecture 심층 이해 부족

### Improvement Plan

1. **단기 (1-2주)**
   - [ ] CAN 분석 도구 설치 및 기본 사용법 익히기
   - [ ] OBD-II 어댑터로 실차 데이터 캡처 시도

2. **중기 (1-2개월)**
   - [ ] Arduino + MCP2515로 CAN 시뮬레이터 제작
   - [ ] AUTOSAR Classic 기본 교육 수강

3. **장기 (3-6개월)**
   - [ ] 차량 사이버보안 관련 자격증 취득
   - [ ] 실제 ECU 개발 프로젝트 참여

---

## Strong Points

### What I do well

1. **개념적 이해**: 전체 아키텍처와 원리를 체계적으로 이해
2. **비유 능력**: 복잡한 개념을 쉬운 비유로 설명
3. **문서화**: 학습 내용을 구조화하여 정리
4. **연결 능력**: 다른 IT 분야 지식과 연결하여 이해

---

## Next Milestone

**Target Level**: Advanced (70%)
**Target Date**: 2025-03-03
**Required Actions**:
- [ ] CAN 분석 도구 실습 (CANalyzer 또는 BusMaster)
- [ ] 실제 차량 OBD 데이터 캡처 및 분석
- [ ] CAN 시뮬레이터 미니 프로젝트 완료
- [ ] 진단 프로토콜(UDS) 기초 학습

---

## Confidence Calibration

| Area | My Confidence | Actual Performance | Gap |
|------|---------------|-------------------|-----|
| 개념 설명 | 90% | 90% | 0 |
| 메시지 해석 | 70% | 60% | -10% |
| 문제 진단 | 50% | 30% | -20% |
| 설계 능력 | 60% | 50% | -10% |

**Am I overconfident or underconfident?**
- 이론적 영역: 적절히 보정됨
- 실습 영역: **과신 경향** → 실습을 통한 검증 필요

---

## Spaced Repetition Schedule

| Review # | Scheduled | Completed | Score |
|----------|-----------|-----------|-------|
| 1 (1 day) | 2025-02-04 | | |
| 2 (3 days) | 2025-02-06 | | |
| 3 (1 week) | 2025-02-10 | | |
| 4 (2 weeks) | 2025-02-17 | | |
| 5 (1 month) | 2025-03-03 | | |

---

## Learning Resources

### Completed
- [x] 기본 개념 정리 (이 문서 세트)
- [x] CAN 프로토콜 스펙 요약

### In Progress
- [ ] Vector 무료 교육 자료
- [ ] YouTube: CAN Bus Explained

### Planned
- [ ] AUTOSAR 공식 문서
- [ ] ISO 26262 기본 교육
- [ ] 차량 사이버보안 세미나

---

*Last updated: 2025-02-03*
