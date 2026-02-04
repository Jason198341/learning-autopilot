'use client';

import Link from 'next/link';
import { useState } from 'react';

// ECU Knowledge content
const knowledgeFiles = [
  {
    id: '00',
    title: '핵심 개념',
    subtitle: 'Core Concept',
    icon: '🎯',
    completed: true,
    content: `
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

- ✅ 기초 전기/전자 개념 (전압, 전류, 신호)
- ✅ 디지털 통신 기본 원리
- ⬜ 마이크로컨트롤러(MCU) 기초
- ⬜ 제어 이론 기초 (PID 등)
    `,
  },
  {
    id: '01',
    title: '멘탈 모델',
    subtitle: 'Mental Model',
    icon: '🧠',
    completed: true,
    content: `
## Visual Structure: 차량 전자 아키텍처

\`\`\`
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
└─────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Cause-Effect Chain: ECU 기본 동작 원리

\`\`\`
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
\`\`\`

---

## Component Breakdown: 주요 ECU별 역할

| ECU | 역할 | 주요 제어 |
|-----|------|----------|
| ECM | 엔진 제어 | 연료분사, 점화, 공기량 |
| TCU | 변속기 제어 | 변속 타이밍, 클러치 |
| ABS/ESC | 제동/자세 제어 | 휠 속도, 브레이크 압력 |
| BCM | 바디 제어 | 조명, 와이퍼, 도어 |
| ADAS ECU | 운전자 보조 | 센서 퓨전, 제어 명령 |

---

## Mental Shortcuts

1. **Rule of Thumb**: "고속 = CAN/Ethernet (파워트레인), 저속 = LIN (바디)"
2. **Quick Check**: "ECU 문제? → 먼저 CAN 통신 확인 → 센서/액추에이터"
3. **Red Flag**: "여러 ECU 동시 고장 → 전원 또는 접지 문제 의심"
    `,
  },
  {
    id: '02',
    title: '심층 노트',
    subtitle: 'Deep Notes',
    icon: '📚',
    completed: true,
    content: `
## Layer 1: Surface Understanding

### What I First Learned
- ECU는 차량의 전자 제어장치로, 센서 → 연산 → 액추에이터 제어를 수행
- 현대 차량에는 70~150개의 ECU가 탑재
- CAN이 가장 보편적인 차량 통신 프로토콜

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

---

## Layer 3: Edge Cases

### When It Breaks
- **EMC 환경**: 강한 전자기장에서 CAN 통신 오류 발생
- **전압 변동**: 시동 크랭킹 시 전압 강하로 ECU 리셋 가능
- **Babbling Idiot**: 고장난 ECU가 계속 메시지 전송 → 버스 점유

### Common Pitfalls

| Pitfall | Symptom | Root Cause |
|---------|---------|------------|
| 간헐적 통신 오류 | U코드 DTC | 커넥터 접촉 불량, 노이즈 |
| ECU 미인식 | 진단 불가 | 전원/접지 불량, CAN 단선 |
| 기능 미작동 | 특정 기능 OFF | 코딩 오류, SW 버전 불일치 |

---

## Layer 4: Expert Insights

### Advanced Patterns

**Domain Controller 아키텍처 (미래 트렌드)**
\`\`\`
기존: ECU 100개+ (기능당 1개)
     ↓
미래: Domain Controller 3~5개 + Zone ECU
     - Vehicle Computer (중앙)
     - ADAS Controller
     - Cockpit Controller
     - Body Controller
\`\`\`

### Best Practices
1. **통신 매트릭스 관리**: 모든 CAN 메시지 ID/신호 문서화
2. **버전 관리**: SW/HW/캘리브레이션 버전 추적
3. **End-of-Line 테스트**: 출고 전 모든 ECU 통신 검증
    `,
  },
  {
    id: '03',
    title: '유추 연결',
    subtitle: 'Analogy Map',
    icon: '🔗',
    completed: true,
    content: `
## Primary Analogy

**This concept is like...**

\`\`\`
[차량 ECU 시스템] ≈ [인체 신경계]
\`\`\`

### Why This Analogy Works

| 차량 ECU | 인체 신경계 |
|----------|-------------|
| Gateway ECU | 척수 (신호 중계) |
| 각 ECU | 말초 신경절 |
| CAN Bus | 신경 다발 |
| 센서 | 감각 수용기 |
| 액추에이터 | 근육/분비선 |

---

## Cross-Domain Connections

| Domain | Similar Concept | Connection |
|--------|-----------------|------------|
| **IT** | 마이크로서비스 | 분산 아키텍처, 독립 배포, API 통신 |
| **생물학** | 신경계 | 센서→판단→반응, 분산 제어 |
| **건축** | 빌딩 자동화(BMS) | 센서 네트워크, 중앙 관제 |
| **항공** | 항공전자(Avionics) | AFDX ≈ 차량 Ethernet |

---

## Pattern Recognition

### Pattern 1: Hub-and-Spoke Network
\`\`\`
       ┌─── Node
       │
[Hub]──┼─── Node  →  Gateway ECU → Domain ECU들
       │
       └─── Node
\`\`\`

### Pattern 2: Publish-Subscribe
\`\`\`
Publisher → Topic → Subscriber 1
                 → Subscriber 2

→ CAN 브로드캐스트 → 필요한 ECU가 수신
\`\`\`

---

## Metaphors

### Technical Metaphor
> "ECU 네트워크는 오케스트라와 같다. 각 ECU(악기)는 독립적으로 연주하지만, CAN(악보)을 통해 동기화되어 하나의 음악(차량 기능)을 만든다."

### Everyday Metaphor
> "차량 ECU는 아파트 관리 시스템과 같다. 각 세대(ECU)는 자체 조명/난방을 제어하지만, 관리사무소(Gateway)를 통해 전체를 관리한다."
    `,
  },
  {
    id: '04',
    title: '실전 적용',
    subtitle: 'Application',
    icon: '⚡',
    completed: true,
    content: `
## Real-World Use Cases

### Use Case 1: 엔진 제어 (ECM)
**Context**: 주행 중 가속 페달 조작 시
**How it's applied**:
1. 가속 페달 센서 → 페달 위치 신호 (0~5V)
2. ECM → 요구 토크 계산
3. 스로틀 밸브 제어 (공기량)
4. 연료 인젝터 제어 (연료량)
5. 점화 타이밍 조절
**Result**: 최적 연소로 원하는 토크 출력

### Use Case 2: 차체 자세 제어 (ESC)
**Context**: 급선회 중 오버스티어 발생 시
**How it's applied**:
1. 조향각 센서 + 요레이트 센서 → 차량 거동 파악
2. ESC ECU → 목표 vs 실제 요레이트 비교
3. 불일치 감지 시 개별 휠 브레이크 작동
4. 엔진 토크 저감 요청 (CAN 메시지)
**Result**: 차량 안정성 유지, 스핀/전복 방지

---

## Practice Problems

### Level 1: Basic (기초)

**Q: CAN 메시지 ID 우선순위**
> ID 0x100, 0x200, 0x050 메시지가 동시 전송 시 순서는?

**Answer**: 0x050 → 0x100 → 0x200 (ID 값이 낮을수록 우선순위 높음)

### Level 2: Intermediate (중급)

**Q: CAN 통신 오류 진단**
> "U0100 - ECM과 통신 불가" 코드 발생. 진단 순서는?

**Answer**:
1. ECM 커넥터 연결 상태 확인
2. ECM 전원(B+, IGN) 전압 측정
3. CAN_H, CAN_L 전압 측정 (정상: 2.5V 기준 ±1V)
4. 다른 ECU 분리 후 ECM만 테스트
5. ECM 교체 테스트

---

## Code Examples

### CAN 메시지 송신 (Arduino + MCP2515)

\`\`\`cpp
#include <mcp_can.h>
MCP_CAN CAN(10);

void setup() {
  CAN.begin(MCP_ANY, CAN_500KBPS, MCP_8MHZ);
  CAN.setMode(MCP_NORMAL);
}

void loop() {
  unsigned char data[8] = {0x32, 0x00, 0x00, 0x00};
  CAN.sendMsgBuf(0x123, 0, 8, data);  // 차속 50km/h
  delay(10);
}
\`\`\`

---

## Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| 종단 저항 미설치 | 신호 반사로 통신 불안정 | 버스 양 끝에 120Ω 설치 |
| Byte Order 무시 | 데이터 해석 오류 | Little/Big Endian 확인 |
| Bus Load 미고려 | 30% 초과 시 지연 | 설계 시 Bus Load 계산 |
    `,
  },
  {
    id: '05',
    title: '탐구 질문',
    subtitle: 'Questions',
    icon: '❓',
    completed: true,
    content: `
## Open Questions

### High Priority 🔴

1. **자율주행 시대에 ECU 아키텍처는 어떻게 변화할까?**
   - Why: 현재 분산 아키텍처 → 중앙집중식 전환 중
   - Directions: Tesla FSD, NVIDIA DRIVE 플랫폼 분석
   - Status: 🔄 Investigating

2. **CAN 보안은 어떻게 강화할 수 있을까?**
   - Why: 기존 CAN은 인증/암호화 없음 → 해킹 취약
   - Directions: SecOC, CAN-FD with MAC, IDS
   - Status: 🔄 Investigating

---

## Resolved Questions ✅

### Q: CAN에서 메시지 충돌은 어떻게 해결되나?
**Answer**: Non-destructive Bitwise Arbitration
- 모든 노드가 동시에 송신 시작
- Dominant(0) 비트가 Recessive(1)를 덮어씀
- ID가 낮은 노드가 중재에서 승리
- 충돌이 발생해도 데이터 손상 없이 우선순위 결정

### Q: 왜 CAN은 2선 차동 신호를 사용하나?
**Answer**: 노이즈 내성
- CAN_H와 CAN_L에 동일한 노이즈 유입 시 차이값 불변
- 차량 환경의 강한 EMI에서도 안정적 통신

---

## Socratic Questions

- "실시간 제어"의 정확한 시간 요구사항은?
- 분산 아키텍처가 항상 최선인가?
- 모든 ECU가 인터넷에 연결되면 어떤 위험이 생기는가?
    `,
  },
  {
    id: '06',
    title: '숙련도 평가',
    subtitle: 'Mastery Score',
    icon: '📊',
    completed: true,
    content: `
## Current Mastery Level

\`\`\`
████████████░░░░░░░░  60% - Intermediate
\`\`\`

---

## Gate Verification

### Gate 1: Self-Explanation (자기 설명) ✅ PASS
> "노트 없이 이 개념을 설명할 수 있는가?"

- ✅ Core definition: ECU = 센서→연산→액추에이터 제어
- ✅ Why it matters: 모든 차량 기능 제어
- ✅ Key mechanisms: CAN 통신, 실시간 제어, 분산 아키텍처
- ✅ Common pitfalls: 종단저항, Bus Load

**Score**: 4 / 4 = **100%** ✅

---

### Gate 2: Application (실전 적용) 🟡 PARTIAL
> "실제 문제에 적용할 수 있는가?"

- ✅ Recognized where to apply
- ✅ Successfully applied basic case
- ⬜ Handled edge case (실차 경험 부족)
- ⬜ Debugged when it failed

**Score**: 2 / 4 = **50%** 🟡

---

### Gate 3: Teaching (교육 가능) 🟡 PARTIAL
> "다른 사람에게 가르칠 수 있는가?"

- ✅ Explained to beginner
- ✅ Created helpful analogy
- ⬜ Actual teaching experience

**Score**: 2 / 3 = **67%** 🟡

---

## Overall: 60%

| Gate | Weight | Score |
|------|--------|-------|
| Gate 1 | 30% | 100% |
| Gate 2 | 40% | 50% |
| Gate 3 | 30% | 67% |

---

## Key Insights

1. **분산 아키텍처의 가치** - Fault isolation, 독립 개발 가능
2. **CAN의 장수 비결** - 단순, 신뢰성, 충분한 성능
3. **미래는 통합** - Domain Controller, SDV로 전환 중
4. **보안의 중요성** - 커넥티드카 시대 필수 고려사항

---

## Next Milestone

**Target**: Advanced (70%)
**Required Actions**:
- [ ] CAN 분석 도구 실습
- [ ] 실제 차량 OBD 데이터 분석
- [ ] CAN 시뮬레이터 프로젝트
    `,
  },
];

export default function AutomotiveECUPage() {
  const [activeStep, setActiveStep] = useState('00');
  const [focusMode, setFocusMode] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  const activeContent = knowledgeFiles.find((f) => f.id === activeStep);

  // Simple markdown to JSX converter
  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let inTable = false;
    let tableRows: string[][] = [];

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto my-4 text-sm">
              <code className="text-zinc-300">{codeContent}</code>
            </pre>
          );
          codeContent = '';
        }
        inCodeBlock = !inCodeBlock;
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Tables
      if (line.startsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        const cells = line.split('|').filter(c => c.trim() !== '');
        if (!line.includes('---')) {
          tableRows.push(cells.map(c => c.trim()));
        }
        return;
      } else if (inTable) {
        elements.push(
          <div key={index} className="overflow-x-auto my-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {tableRows[0]?.map((cell, i) => (
                    <th key={i} className="border border-zinc-700 bg-zinc-800 px-4 py-2 text-left font-semibold">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-zinc-700 px-4 py-2 text-zinc-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableRows = [];
      }

      // Headers
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-xl font-bold mt-8 mb-4 pb-2 border-b border-zinc-800 text-white">
            {line.replace('## ', '')}
          </h2>
        );
        return;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-emerald-400">
            {line.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Horizontal rule
      if (line.startsWith('---')) {
        elements.push(<hr key={index} className="border-zinc-800 my-6" />);
        return;
      }

      // Blockquotes
      if (line.startsWith('>')) {
        elements.push(
          <blockquote key={index} className="border-l-4 border-emerald-500 pl-4 my-4 text-zinc-400 italic">
            {line.replace('> ', '')}
          </blockquote>
        );
        return;
      }

      // Bold text
      if (line.includes('**')) {
        const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
        elements.push(
          <p key={index} className="mb-2 text-zinc-300" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
        return;
      }

      // List items
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const content = line.replace(/^[-*] /, '');
        const isChecked = content.startsWith('✅') || content.startsWith('✓');

        elements.push(
          <li key={index} className={`ml-6 mb-1 text-zinc-300 ${isChecked ? 'text-green-400' : ''}`}>
            {content}
          </li>
        );
        return;
      }

      // Numbered list
      if (/^\d+\. /.test(line)) {
        elements.push(
          <li key={index} className="ml-6 mb-1 text-zinc-300 list-decimal">
            {line.replace(/^\d+\. /, '')}
          </li>
        );
        return;
      }

      // Regular paragraph
      if (line.trim()) {
        elements.push(
          <p key={index} className="mb-2 text-zinc-300">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className={`min-h-screen ${focusMode ? 'bg-black' : 'bg-zinc-950'}`}>
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
              ← 홈
            </Link>
            <div className="h-4 w-px bg-zinc-700" />
            <div className="flex items-center gap-2">
              <span className="text-xl">🔌</span>
              <span className="font-semibold">차량용 전자제어기 (ECU)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowChecklist(!showChecklist)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                showChecklist ? 'bg-green-600 text-white' : 'bg-zinc-800 text-zinc-400'
              }`}
            >
              ✅ 품질검사
            </button>
            <button
              onClick={() => setFocusMode(!focusMode)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                focusMode ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-zinc-400'
              }`}
            >
              {focusMode ? '🎯 ON' : '🎯 집중'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Steps */}
        <aside className={`w-72 border-r border-zinc-800 h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto ${focusMode ? 'hidden' : ''}`}>
          <div className="p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-500">학습 진행률</span>
                <span className="text-sm font-semibold text-emerald-400">60%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>

            <nav className="space-y-1">
              {knowledgeFiles.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setActiveStep(file.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeStep === file.id
                      ? 'bg-emerald-600 text-white'
                      : 'hover:bg-zinc-800 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{file.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{file.title}</div>
                      <div className="text-xs opacity-60">{file.subtitle}</div>
                    </div>
                    {file.completed && (
                      <span className="ml-auto text-green-400">✓</span>
                    )}
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 ${focusMode ? 'max-w-3xl mx-auto' : ''}`}>
          {/* Quality Checklist Panel */}
          {showChecklist && (
            <div className="bg-zinc-900 border-b border-zinc-800 p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span>✅</span> 품질 검사 체크리스트
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>핵심 개념 정의 완료</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>멘탈 모델 구축 완료</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>심층 노트 작성 완료</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>유추 연결 완료</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>실전 문제 풀이 완료</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" />
                  <span>QA Gate 통과 (실습 필요)</span>
                </label>
              </div>
            </div>
          )}

          {/* Content */}
          <article className={`p-8 ${focusMode ? 'focus-mode' : ''} animate-fadeIn`}>
            {activeContent && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{activeContent.icon}</span>
                  <div>
                    <h1 className="text-2xl font-bold text-white">{activeContent.title}</h1>
                    <p className="text-zinc-500">{activeContent.subtitle}</p>
                  </div>
                </div>

                <div className="prose">
                  {renderMarkdown(activeContent.content)}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-12 pt-8 border-t border-zinc-800">
                  {activeStep !== '00' && (
                    <button
                      onClick={() => {
                        const prevIndex = knowledgeFiles.findIndex(f => f.id === activeStep) - 1;
                        if (prevIndex >= 0) setActiveStep(knowledgeFiles[prevIndex].id);
                      }}
                      className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all"
                    >
                      ← 이전 단계
                    </button>
                  )}
                  {activeStep !== '06' && (
                    <button
                      onClick={() => {
                        const nextIndex = knowledgeFiles.findIndex(f => f.id === activeStep) + 1;
                        if (nextIndex < knowledgeFiles.length) setActiveStep(knowledgeFiles[nextIndex].id);
                      }}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all ml-auto"
                    >
                      다음 단계 →
                    </button>
                  )}
                </div>
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
