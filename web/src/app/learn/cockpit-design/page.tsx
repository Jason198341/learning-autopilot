'use client';

import Link from 'next/link';
import { useState } from 'react';

// Cockpit Design Knowledge content
const knowledgeFiles = [
  {
    id: '00',
    title: '핵심 개념',
    subtitle: 'Core Concept',
    icon: '🎯',
    completed: true,
    content: `
## 🎯 칵핏이 뭐예요?

### 이름의 유래
**Cockpit**은 원래 **비행기 조종석**을 뜻하는 말이에요.

\`\`\`
비행기 조종석 (Cockpit)
       ↓
"조종사가 비행기와 대화하는 공간"
       ↓
자동차에도 같은 개념 적용
       ↓
자동차 칵핏 = 운전자가 차와 대화하는 공간
\`\`\`

> 💡 쉽게 말하면: **운전석에 앉았을 때 눈앞에 보이는 모든 것**이 칵핏이에요!

---

## One-Sentence Definition

> **자동차 칵핏**이란, 운전자가 차량 정보를 확인하고(보고), 차량을 조작하며(만지고), 편안함을 느끼는(느끼는) **인간-차량 인터페이스의 총체**이다.

---

## Why It Matters

| 관점 | 왜 중요? |
|------|----------|
| **안전** | 잘못된 조작 → 사고 |
| **편의** | 불편하면 피로 |
| **감성** | 차의 첫인상 결정 |
| **가치** | 구매 결정에 큰 영향 |

---

## Key Terms

| 용어 | 쉬운 설명 |
|------|----------|
| **IP** | 앞유리 아래 전체 판 |
| **클러스터** | 핸들 뒤 동그란 계기판 |
| **센터 페시아** | 내비/에어컨 있는 곳 |
| **콘솔** | 기어봉/팔걸이 있는 곳 |
| **H-Point** | 앉았을 때 엉덩이 위치 |
| **아이포인트** | 눈이 있는 높이 |
| **리치** | 팔 뻗어서 닿는 거리 |
| **HMI** | 사람과 기계가 대화하는 방법 |
    `,
  },
  {
    id: '01',
    title: '멘탈 모델',
    subtitle: 'Mental Model',
    icon: '🧠',
    completed: true,
    content: `
## 🖼️ 칵핏 = 운전자의 사무실

\`\`\`
일반 사무실                     자동차 칵핏
═══════════                    ═══════════

모니터 ────────────────→  클러스터/HUD
키보드/마우스 ─────────→  스티어링/페달
책상 위 물건 ──────────→  센터페시아/콘솔
서랍/수납 ─────────────→  글로브박스/콘솔박스
\`\`\`

---

## 📐 칵핏의 3개 영역

| 영역 | 역할 | 예시 |
|------|------|------|
| **정보 영역** | 운전에 필요한 정보를 본다 | 클러스터, HUD |
| **조작 영역** | 차를 직접 조종한다 | 스티어링, 페달 |
| **편의 영역** | 운전을 편하게 한다 | 에어컨, 오디오 |

---

## 👁️ 운전자의 눈은 어디를 볼까?

\`\`\`
전방 도로: 70%  ← 대부분 여기!
클러스터: 10%  ← 속도 확인
좌측 미러: 8%
센터 디스플레이: 5%
우측 미러: 5%
룸미러: 2%
\`\`\`

> 🚨 **2초 룰**: 전방에서 눈을 떼는 시간 = 최대 2초!

---

## Mental Shortcuts

1. **"3초 룰"**: 처음 보는 기능 3초 안에 이해 못하면 나쁜 설계
2. **"할머니 테스트"**: 할머니도 조작 가능하면 좋은 설계
3. **"왼손 오른손"**: 자주 쓰는 것 → 왼손(핸들 가까이)
    `,
  },
  {
    id: '02',
    title: '심층 노트',
    subtitle: 'Deep Notes',
    icon: '📚',
    completed: true,
    content: `
## 🧬 인간공학 기초

### H-Point가 뭐예요?

> **H-Point** = Hip Point = 엉덩이 기준점
> 모든 칵핏 설계의 **시작점**!

\`\`\`
H-Point를 정하면:
→ 눈 위치 (아이포인트) 가 정해지고
→ 손 위치 (리치) 가 정해지고
→ 발 위치 (페달 거리) 가 정해집니다!
\`\`\`

### 95%ile? 5%ile?

\`\`\`
5%ile = 작은 여성 대표
95%ile = 큰 남성 대표

이 범위로 90%의 사람을 커버!
\`\`\`

| 항목 | 5%ile 여성 | 95%ile 남성 |
|------|-----------|-------------|
| 키 | 152cm | 180cm |
| 팔 뻗는 거리 | 62cm | 78cm |

---

## 📊 IP 설계 노하우

### 글레어(반사) 방지

| 방법 | 설명 |
|------|------|
| 각도 조절 | IP 상단 10~15° 기울임 |
| 무광 표면 | 광택 없는 재질 |
| 어두운 색 | 검정/짙은 회색 |

---

## 📐 설계 기준값 종합표

| 항목 | 기준값 |
|------|--------|
| 아이포인트-클러스터 | 15~25° |
| 클러스터 거리 | 700mm |
| 스티어링 직경 | 370mm |
| 그립 직경 | 38mm |
| 암레스트 높이 | H-Point+240mm |
    `,
  },
  {
    id: '03',
    title: '유추 연결',
    subtitle: 'Analogy Map',
    icon: '🔗',
    completed: true,
    content: `
## 🎯 Primary Analogy

\`\`\`
[자동차 칵핏] ≈ [비행기 조종석]
\`\`\`

| 비행기 조종석 | 자동차 칵핏 |
|-------------|-----------|
| 계기판 | 클러스터 |
| 조종간 | 스티어링 휠 |
| 스로틀 레버 | 가속 페달 |
| HUD | 자동차 HUD |

---

## 🖥️ 클러스터 = 스마트폰 홈화면

\`\`\`
스마트폰                 클러스터
· 상태바         →     · 상태 표시 (연료, 온도)
· 핵심 정보       →     · 속도계
· 자주 쓰는 앱    →     · 미디어/전화/내비
\`\`\`

---

## 🪑 IP = 책상 위 배치

| 책상 | IP |
|------|-----|
| 모니터 (정면) | 클러스터 |
| 키보드 (손 닿는 곳) | 스티어링 |
| 자주 쓰는 물건 | 에어컨/오디오 |
| 서랍 | 글로브박스 |

---

## 👔 인간공학 = 맞춤 양복

\`\`\`
기성복 (S, M, L)   →   양산차
맞춤복 (개인 치수)  →   전동 조절 고급차
\`\`\`
    `,
  },
  {
    id: '04',
    title: '실전 적용',
    subtitle: 'Application',
    icon: '⚡',
    completed: true,
    content: `
## 🚙 Use Case 1: SUV vs 세단 IP 차이

| 항목 | 세단 | SUV |
|------|------|-----|
| IP 높이 | 낮음 | 높음 |
| 클러스터 각도 | 위로 향함 | 정면 |
| 콘솔 폭 | 좁음 | 넓음 |

---

## 🔋 Use Case 2: 전기차 칵핏 변화

\`\`\`
내연기관차              전기차
· RPM 타코미터    →   · 없음/최소화
· 기어봉 (큼)     →   · 버튼/다이얼
· 연료 게이지     →   · 배터리 %
\`\`\`

---

## Practice Problem

**Q: 클러스터는 왜 핸들 뒤에 있을까요?**

**A:**
1. 시선 이동 최소화 (전방과 가장 가까움)
2. 가림 방지 (핸들 위로 보임)
3. 조작 분리 (클러스터=보기, 핸들=만지기)

---

## ⚠️ Common Mistakes

| 실수 | 올바른 접근 |
|------|------------|
| "예쁘니까 이 위치" | 인간공학 먼저 |
| "평균 치수로 설계" | 5~95%ile 검증 |
| "버튼 많으면 좋지" | 심플하게 통합 |
| "큰 화면이 좋지" | 적정 크기 |
    `,
  },
  {
    id: '05',
    title: '탐구 질문',
    subtitle: 'Questions',
    icon: '❓',
    completed: true,
    content: `
## 🔴 Open Questions

### 1. 자율주행 시대 칵핏 변화?

\`\`\`
현재 (레벨 2)              미래 (레벨 5)
핸들 필수           →     핸들 옵션?
전방 주시           →     자유로운 시선
계기판 중요         →     엔터테인먼트 중요
\`\`\`

### 2. 터치 vs 물리버튼?

| 물리 버튼 | 터치스크린 |
|----------|-----------|
| 안 보고 조작 ✓ | 무한한 기능 ✓ |
| 촉감 피드백 ✓ | 업데이트 가능 ✓ |
| 기능 제한 ✗ | 시선 분산 ✗ |

---

## ✅ Resolved Questions

### Q: 왜 운전석이 왼쪽/오른쪽?

\`\`\`
좌측통행 (영국, 일본) → 운전석 오른쪽
우측통행 (한국, 미국) → 운전석 왼쪽

이유: 마주오는 차를 잘 보려고!
\`\`\`

### Q: 에어백이 왜 그렇게 빨리?

\`\`\`
충돌 → 30ms(0.03초) 만에 완전 전개!
시속 50km 충돌 = 0.1초 만에 부딪힘
→ 더 빨라야 의미 있음
\`\`\`
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
██████████████░░░░░░  70% - Advanced
\`\`\`

---

## Gate Verification

### Gate 1: Self-Explanation ✅ PASS

- ✅ 칵핏의 정의와 어원
- ✅ 3개 영역 구분
- ✅ H-Point의 의미
- ✅ 5%ile~95%ile 개념

**Score**: 100%

### Gate 2: Application ✅ PASS

- ✅ SUV vs 세단 차이 설명
- ✅ 버튼 배치 좋은/나쁜 구분
- ⬜ 실제 설계 경험

**Score**: 80%

### Gate 3: Teaching 🟡 PARTIAL

- ✅ 비유로 설명 가능
- ✅ 체계적 문서 작성
- ⬜ 실제 교육 경험

**Score**: 75%

---

## 💡 Key Insights

\`\`\`
1. "운전자가 중심이다"
   → 디자인보다 사용성이 우선

2. "H-Point가 모든 것의 시작"
   → 엉덩이 위치 → 눈, 손, 발 결정

3. "자주 쓰는 건 가까이"
   → 모든 배치의 기본 원칙

4. "90%의 사람을 만족시켜라"
   → 5%ile ~ 95%ile 설계
\`\`\`

---

## Next Milestone

**Target**: Expert (90%)
**Actions**:
- [ ] 5개 차종 칵핏 비교 분석
- [ ] HMI/UX 책 1권 읽기
- [ ] 자율주행 칵핏 컨셉 분석
    `,
  },
];

export default function CockpitDesignPage() {
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
          <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-purple-400">
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
          <blockquote key={index} className="border-l-4 border-purple-500 pl-4 my-4 text-zinc-400 italic">
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
        const isChecked = content.startsWith('✅') || content.startsWith('✓') || content.startsWith('[x]');

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
              <span className="font-semibold">칵핏 설계 노하우</span>
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
                focusMode ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400'
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
                <span className="text-sm font-semibold text-purple-400">70%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>

            <nav className="space-y-1">
              {knowledgeFiles.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setActiveStep(file.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeStep === file.id
                      ? 'bg-purple-600 text-white'
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
                  <span>인간공학 수치 포함</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>신입생도 이해 가능</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>비유/아날로지 활용</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>다이어그램 포함</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>실전 문제 풀이</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" />
                  <span>실습 경험 (추가 필요)</span>
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
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl transition-all ml-auto"
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
