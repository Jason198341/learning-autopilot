'use client';

import Link from 'next/link';
import { useState } from 'react';

// Knowledge content - directly embedded for simplicity
const knowledgeFiles = [
  {
    id: '00',
    title: '핵심 개념',
    subtitle: 'Core Concept',
    icon: '🎯',
    completed: true,
    content: `
## Concept

**Name**: 자동차 차체 아키텍처 부품 구성과 역할

---

## Why It Matters

차체(Body-in-White)는 자동차의 뼈대로, 승객 안전, 주행 성능, 생산 비용의 70%를 결정한다.
차체 아키텍처를 이해해야 부품 공용화, 경량화, 충돌 안전 설계가 가능하다.

---

## One-Sentence Definition

자동차 차체 아키텍처는 **구조적 강성과 충돌 안전을 확보하면서 각 부품이 하중을 분산하고 전달하는 뼈대 시스템**이다.

---

## First Principles

1. **하중 경로 (Load Path)**: 모든 힘은 명확한 경로를 따라 전달되어야 한다
2. **강성 vs 경량 트레이드오프**: 구조는 충분히 강하면서 최대한 가벼워야 한다
3. **충돌 에너지 흡수**: 크러시 존은 에너지를 흡수하고, 캐빈은 형태를 유지해야 한다

---

## Key Terms

| Term | Definition |
|------|------------|
| BIW (Body-in-White) | 도장 전 용접 완료된 차체 골격 |
| Platform | 여러 차종이 공유하는 기본 하부 구조 |
| Monocoque | 차체와 프레임이 일체화된 구조 (승용차 표준) |
| Pillar (A/B/C/D) | 루프를 지지하는 수직 기둥 (앞→뒤 순서) |
| Rocker Panel (Side Sill) | 도어 아래 측면 강성 부재 |
| Cross Member | 차체 좌우를 연결하는 횡방향 보강재 |
| Subframe | 서스펜션/파워트레인 장착용 부분 프레임 |
| UHSS | Ultra High Strength Steel (초고장력강, 1000MPa+) |
| Crush Zone | 충돌 시 찌그러지며 에너지 흡수하는 영역 |

---

## Prerequisites

- ✅ 기초 재료역학 (응력, 변형, 강성 개념)
- ✅ 자동차 기본 구조 (엔진룸, 캐빈, 트렁크 위치)
- ⬜ 용접/접합 기술 기초 (옵션)
    `,
  },
  {
    id: '01',
    title: '멘탈 모델',
    subtitle: 'Mental Model',
    icon: '🧠',
    completed: true,
    content: `
## Visual Structure: 차체 아키텍처 전체 구성

\`\`\`
                    ┌─────────────────────────────────────┐
                    │           ROOF PANEL                │
                    │      (루프 패널 - 상부 덮개)          │
                    └─────────────────────────────────────┘
                           │    │    │    │
          ┌────────────────┤    │    │    ├────────────────┐
          │                │    │    │    │                │
     ┌────┴────┐      ┌────┴────┴────┴────┴────┐      ┌────┴────┐
     │ A-PILLAR│      │      ROOF RAIL         │      │ C-PILLAR│
     │ (전방)   │      │   (루프 레일 - 좌우)    │      │ (후방)   │
     └────┬────┘      └────────────────────────┘      └────┬────┘
          │                                                 │
          │    ┌─────────────────────────────────────┐     │
          │    │         PASSENGER CABIN              │     │
          │    │        (승객실 - 생존공간)            │     │
          │    │    ★ 충돌 시 형태 유지 필수 ★        │     │
          │    └─────────────────────────────────────┘     │
          │                      │                          │
     ┌────┴────┐           ┌────┴────┐              ┌──────┴──────┐
     │ B-PILLAR│           │  FLOOR  │              │  D-PILLAR   │
     │(중앙기둥)│           │  PANEL  │              │(SUV/왜건용) │
     └────┬────┘           │ (바닥판) │              └─────────────┘
          │                └────┬────┘
          │                     │
┌─────────┴─────────────────────┴─────────────────────────────────┐
│                        ROCKER PANEL (Side Sill)                 │
│              (로커 패널 - 도어 아래 측면 강성 뼈대)                │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Cause-Effect Chain: 정면 충돌 시 하중 경로

\`\`\`
[충돌 발생]
      ↓
[범퍼 빔] - 1차 접촉, 하중 분산
      ↓
[프론트 레일] - CRUSH ZONE에서 에너지 흡수 (찌그러짐)
      ↓
[대시 패널] - 캐빈과 엔진룸 경계, 하중 차단
      ↓
[플로어 패널 + 로커 패널] - 남은 하중을 차체 전체로 분산
      ↓
[캐빈 형태 유지] - 승객 생존 공간 확보 ✓
\`\`\`

---

## Component Breakdown: 주요 부품별 역할

| Component | Role | 재질 특성 |
|-----------|------|----------|
| Front Rail | 정면충돌 에너지 흡수 | 고장력강 (찌그러지며 흡수) |
| A-Pillar | 전방 시야 확보 + 루프 지지 | UHSS (얇고 강하게) |
| B-Pillar | 측면충돌 방어 핵심 | 핫스탬핑 UHSS (1500MPa+) |
| Rocker Panel | 측면 강성 + 하중 전달 | 고장력강 |
| Roof Rail | 전복 시 캐빈 보호 | 고장력강 |
| Floor Pan | 하중 분산 + NVH | 일반강 + 방음재 |
| Subframe | 서스/엔진 장착점 | 알루미늄 or 강철 |

---

## Mental Shortcuts

1. **Rule of Thumb**: "Pillar는 앞에서부터 A-B-C-D, 숫자가 클수록 뒤쪽"
2. **Quick Check**: "B-Pillar가 가장 두껍고 강해야 한다 (측면충돌 방어)"
3. **Red Flag**: "프론트 레일이 똑바르면 위험 - 크러시 존이 없다는 뜻"
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
- 차체는 BIW(Body-in-White)라 불리는 용접된 골격 구조
- A/B/C/D Pillar가 루프를 지지하고 승객실을 보호
- 앞뒤에 Crush Zone이 있어 충돌 에너지 흡수

---

## Layer 2: Deeper Mechanics

### Why It Works This Way

**1. 의도된 변형 (Controlled Deformation)**
\`\`\`
강한 부분만 있으면? → 에너지가 승객에게 직접 전달
약한 부분만 있으면? → 캐빈이 찌그러져 승객 압사

해결책: "앞뒤는 찌그러지고, 가운데는 버틴다"
        ↓
[Crush Zone] ← 에너지 흡수 → [Rigid Cabin] ← 형태 유지
\`\`\`

**2. 재질별 강도 분포 전략**
| 위치 | 강도(MPa) | 역할 |
|------|-----------|------|
| Front Rail | 400-600 | 찌그러지며 흡수 |
| A-Pillar | 800-1000 | 강성 유지 + 시야 확보 |
| B-Pillar | 1200-1500 | 측면충돌 최후 방어선 |
| Rocker Panel | 600-800 | 하중 전달 통로 |
| Floor Pan | 200-300 | NVH + 일반 지지 |

**3. 핫스탬핑 (Hot Stamping) 기술**
- 강판을 900°C로 가열 → 프레스 성형 → 급냉
- 결과: 1500MPa 초고강도 + 복잡한 형상 가능
- B-Pillar, A-Pillar 등 핵심 부위에 적용

---

## Layer 3: Edge Cases

### When It Breaks
- **스몰 오버랩 충돌**: 차량 모서리만 충돌 → 기존 설계의 약점
- **다중 충돌**: 1차 충돌 후 크러시 존 소진 → 2차 충돌에 취약
- **고속 충돌**: 설계 기준(64km/h) 초과 시 캐빈도 변형 시작

### Common Pitfalls
1. "강철이 많으면 안전하다" → 틀림, 전략적 배치가 핵심
2. "알루미늄은 약하다" → 틀림, 두께와 설계로 보완 가능
3. "SUV가 무조건 안전" → 틀림, 전복 위험↑, 상대 차량 피해↑
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
자동차 차체 ≈ 인체 골격 시스템
\`\`\`

### Why This Analogy Works
| 차체 | 인체 | 공통점 |
|------|------|--------|
| BIW (뼈대) | 골격 | 전체 구조 지지 |
| B-Pillar | 척추 | 핵심 지지 + 보호 |
| Rocker Panel | 갈비뼈 | 측면 보호 |
| Crush Zone | 관절 연골 | 충격 흡수 |
| Floor Pan | 골반 | 하중 분산 기반 |

---

## Cross-Domain Connections

| Domain | Similar Concept | Connection |
|--------|-----------------|------------|
| **건축** | 내진 설계 | 충격을 흡수하는 층 vs 버티는 층 분리 |
| **생물학** | 갑각류 외골격 | 외부 껍질이 구조+보호 동시 수행 |
| **항공** | 항공기 동체 | 모노코크 구조의 원조 |
| **포장** | 에어캡/완충재 | 외부는 찌그러지고, 내부 제품 보호 |

---

## Pattern Recognition

### Pattern 1: 계층적 방어 (Defense in Depth)
\`\`\`
차체:      범퍼 → 크러시존 → 캐빈
사이버보안: 방화벽 → IDS → 암호화
군사:      전초기지 → 방어선 → 본진
\`\`\`

### Pattern 2: 의도된 실패점 (Designed Failure Point)
\`\`\`
차체:      프론트 레일이 먼저 찌그러짐
전기:      퓨즈가 먼저 끊어짐
등산:      로프 약한 부분이 먼저 끊어짐
\`\`\`

---

## Metaphors

> **달걀 포장처럼** - 바깥 박스는 찌그러져도 되지만, 안의 달걀(승객)은 무사해야 한다.

> **권투 선수의 글러브처럼** - 펀치(충돌)의 힘을 분산시켜 손(승객)을 보호한다.
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

### Use Case 1: 신차 개발 시 차체 구조 검토
**Context**: 신규 SUV 개발 프로젝트에서 차체 설계 검토 회의 참석
**How it's applied**:
- B-Pillar 두께와 재질(핫스탬핑 1500MPa) 확인
- 스몰 오버랩 충돌 대비 추가 보강재 유무 확인
- EV 파생 모델 대비 배터리 보호 구조 검토

### Use Case 2: 사고 차량 수리 견적
**Context**: 정면충돌 사고 차량의 수리 범위 판단
**How it's applied**:
- 프론트 레일 손상 여부 확인 (크러시 존 작동 여부)
- A-Pillar/대시패널 변형 확인 (캐빈 침범 여부)

---

## Practice Problems

### Level 1: Basic (기초)

**Q: Pillar 식별**
> A, B, C Pillar를 앞에서 뒤 순서로 나열하고 각각의 주요 역할은?

**Answer:**
- A-Pillar (전방): 시야 확보 + 루프 지지
- B-Pillar (중앙): 측면충돌 방어 핵심 (가장 강함)
- C-Pillar (후방): 루프 지지 + 후방 충돌 전달

### Level 2: Intermediate (중급)

**Q: 하중 경로 분석**
> 64km/h 정면충돌 시 하중이 전달되는 순서는?

**Answer:**
1. 범퍼 빔 → 2. 프론트 레일 (크러시) → 3. 대시 패널 → 4. 플로어/로커 → 5. 캐빈 유지

### Level 3: Advanced (고급)

**Q: EV 트레이드오프**
> 전기차에서 배터리를 바닥에 배치할 때 발생하는 구조적 트레이드오프 3가지는?

**Answer:**
1. 측면충돌 보호 vs 배터리 용량
2. 바닥 높이 vs 실내 공간
3. 강성 vs 중량 (경량화)
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

1. **기가캐스팅이 기존 용접 구조 대비 충돌 안전성에서 어떤 차이가 있는가?**
   - Why: Tesla가 채택한 기술인데, 수리 불가 이슈가 있음
   - Status: 🔄 Investigating

2. **전기차 배터리 화재 시 차체 구조가 어떻게 대응하는가?**
   - Why: 배터리가 바닥 전체를 차지하면 측면충돌 시 위험
   - Status: 🔄 Investigating

### Medium Priority 🟡

- 자율주행 차량은 충돌 패턴이 어떻게 달라질까?
- 다중충돌(연쇄충돌) 시 차체는 어떻게 대응하는가?

---

## Resolved Questions ✅

### Q: 왜 B-Pillar가 가장 강해야 하는가?
**Answer**: 측면충돌 시 승객과 충돌 지점 사이에 크러시 존이 거의 없음. B-Pillar가 최후의 방어선.

### Q: 핫스탬핑은 왜 강한가?
**Answer**: 900°C 가열 후 급냉으로 마르텐사이트 조직 형성 → 1500MPa 달성

---

## Socratic Questions

- "하중 경로"란 정확히 무엇인가? → 힘이 전달되는 구조적 연결선
- "강성"과 "강도"의 차이는? → 강성=변형 저항, 강도=파괴 저항
- 모든 충돌이 정면/측면/후면 중 하나라는 가정은 현실적인가?
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
████████████████░░░░  80% - Advanced
\`\`\`

---

## Gate Verification

### Gate 1: Self-Explanation (자기 설명) ✅ PASS
> "노트 없이 이 개념을 설명할 수 있는가?"

- ✅ Core definition - BIW는 도장 전 용접된 차체 골격
- ✅ Why it matters - 안전, 성능, 비용의 70% 결정
- ✅ Key mechanisms - 크러시 존 흡수 + 캐빈 강성 유지
- ✅ Common pitfalls - "두꺼우면 안전" 오해

**Score**: 4 / 4 = **100%** ✅

---

### Gate 2: Application (실전 적용) ✅ PASS
> "실제 문제에 적용할 수 있는가?"

- ✅ Recognized where to apply
- ✅ Successfully applied basic case
- ✅ Handled edge case
- ✅ Debugged when it failed

**Score**: 4 / 4 = **100%** ✅

---

### Gate 3: Teaching (교육 가능) 🟡 PARTIAL
> "다른 사람에게 가르칠 수 있는가?"

- ✅ Explained to beginner
- ✅ Created helpful analogy
- ⬜ Actual teaching experience needed

**Score**: 3 / 4 = **75%** 🟡

---

## Overall: PASS (80%)

| Gate | Weight | Score |
|------|--------|-------|
| Gate 1 | 30% | 100% |
| Gate 2 | 40% | 100% |
| Gate 3 | 30% | 75% |

---

## Key Insights

1. **"두꺼우면 안전"은 틀렸다** - 전략적 강약 배치가 핵심
2. **B-Pillar가 가장 강한 이유** - 측면충돌 시 크러시 존이 없음
3. **크러시 존의 역설** - 찌그러져야 안전하다
4. **EV가 바꾸는 모든 것** - 배터리가 구조재 역할까지
    `,
  },
];

export default function AutomotiveBodyPage() {
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
          <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-indigo-400">
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
          <blockquote key={index} className="border-l-4 border-indigo-500 pl-4 my-4 text-zinc-400 italic">
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
        const isUnchecked = content.startsWith('⬜') || content.startsWith('☐');

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
              <span className="text-xl">🚗</span>
              <span className="font-semibold">자동차 차체 아키텍처</span>
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
                focusMode ? 'bg-indigo-600 text-white' : 'bg-zinc-800 text-zinc-400'
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
                <span className="text-sm font-semibold text-indigo-400">80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '80%' }} />
              </div>
            </div>

            <nav className="space-y-1">
              {knowledgeFiles.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setActiveStep(file.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeStep === file.id
                      ? 'bg-indigo-600 text-white'
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
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>QA Gate 통과</span>
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
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all ml-auto"
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
