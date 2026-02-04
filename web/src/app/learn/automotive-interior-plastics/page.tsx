'use client';

import Link from 'next/link';
import { useState } from 'react';

// Interior Plastics Knowledge content
const knowledgeFiles = [
  {
    id: '00',
    title: '핵심 개념',
    subtitle: 'Core Concept',
    icon: '🎯',
    completed: true,
    content: `
## Concept

**Name**: 자동차 내장재 플라스틱 (Automotive Interior Plastics)

---

## Why It Matters

| 관점 | 중요도 | 설명 |
|------|--------|------|
| **원가** | 40% | 내장재 원가의 상당 부분이 플라스틱 재료비 |
| **감성품질** | 30% | 고객이 직접 보고 만지는 표면의 대부분 |
| **경량화** | 15% | 연비/전비 향상을 위한 핵심 전략 |
| **안전** | 15% | 충돌 시 탑승자 보호, 에어백 전개 |

---

## One-Sentence Definition

> 자동차 내장재 플라스틱이란, **차량 실내에서 탑승자가 보고 만지는 모든 부품에 사용되는 고분자 소재로, 기능성(내열/내구)과 감성품질(외관/촉감)을 동시에 만족해야 하는 소재**이다.

---

## First Principles

1. **용도가 재질을 결정한다**
   - 노출 부품 vs 비노출 부품
   - 고온 vs 상온 환경
   - 하드터치 vs 소프트터치

2. **비용-성능 트레이드오프**
   - 고성능 = 고비용
   - PP < ABS < PC < PA

3. **가공 방법이 재질을 제약한다**
   - 사출 → 대부분의 플라스틱
   - 압출 → 시트, 프로파일
   - 블로우 → 덕트류

---

## Key Terms

| Term | Definition |
|------|------------|
| **PP** | 폴리프로필렌 - 가장 많이 사용되는 범용 플라스틱 |
| **ABS** | 아크릴로니트릴-부타디엔-스티렌 공중합체 |
| **PC** | 폴리카보네이트 - 투명성, 고내충격 |
| **PC/ABS** | PC+ABS 블렌드 - 균형 잡힌 물성 |
| **POM** | 폴리옥시메틸렌(아세탈) - 기어/클립용 |
| **PA** | 폴리아미드(나일론) - 고강도/내마모 |
| **TPO** | 열가소성 올레핀 엘라스토머 |
| **TPE** | 열가소성 엘라스토머 |
| **VOC** | 휘발성유기화합물 - 냄새/유해물질 |
| **Fogging** | 휘발성분의 유리 응축 현상 |
| **HDT** | 열변형온도 - 내열성 지표 |
| **MFI** | 용융흐름지수 - 유동성 지표 |
| **Izod** | 충격강도 측정법 |
| **Filler** | 충전재 (탈크, 유리섬유 등) |
| **IMD** | In-Mold Decoration - 금형 내 장식 |

---

## Prerequisites

- ✅ 고분자 기초 (열가소성 vs 열경화성)
- ✅ 물성 용어 (인장강도, 굴곡강도 등)
- ⬜ 사출성형 공정 기초
- ⬜ 자동차 내장 부품 구조
    `,
  },
  {
    id: '01',
    title: '멘탈 모델',
    subtitle: 'Mental Model',
    icon: '🧠',
    completed: true,
    content: `
## Visual Structure: 재질 분류 체계

\`\`\`
                    내장재 플라스틱
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
    │  범용   │    │  엔프라  │    │  특수   │
    │ (저가)  │    │ (고성능) │    │ (기능)  │
    └────┬────┘    └────┬────┘    └────┬────┘
         │               │               │
    PP, ABS         PC, POM         TPO, TPE
                   PA, PC/ABS       PU, 실리콘
\`\`\`

---

## 부품-재질 매핑

\`\`\`
┌─────────────────────────────────────────────────┐
│            차량 실내 부품별 재질                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  [IP 상단]           [IP 하단]                  │
│   PP-LGF              PP-TD                     │
│   TPO 스킨            ABS                       │
│                                                 │
│  [클러스터]          [센터 페시아]               │
│   PC (렌즈)           ABS (도장)                │
│   ABS (하우징)        PC/ABS                    │
│                                                 │
│  [도어 트림]         [콘솔]                      │
│   PP-TD (기재)        ABS, PP                   │
│   TPO (표피)          POM (컵홀더 기어)          │
│                                                 │
│  [필러 트림]         [에어백 커버]               │
│   PP                  TPO                       │
│   ABS                                           │
│                                                 │
└─────────────────────────────────────────────────┘
\`\`\`

---

## 물성 비교 매트릭스

\`\`\`
          강도    내열    비용    외관    가공성
  PP       ●●○○○  ●●○○○  ●●●●●  ●●○○○  ●●●●●
  ABS      ●●●○○  ●●●○○  ●●●○○  ●●●●○  ●●●●○
  PC       ●●●●○  ●●●●●  ●○○○○  ●●●●●  ●●○○○
  PC/ABS   ●●●●○  ●●●●○  ●●○○○  ●●●●○  ●●●○○
  POM      ●●●○○  ●●●○○  ●●●○○  ●●●○○  ●●●●●
  PA       ●●●●●  ●●●●●  ●●○○○  ●●●○○  ●●●○○

● = Good / ○ = Bad
\`\`\`

---

## Mental Shortcuts

1. **"도장하면 ABS, 안하면 PP"**
   - 외관 부품 = ABS, PC/ABS
   - 비노출 부품 = PP

2. **"뜨거우면 엔프라, 아니면 범용"**
   - IP 상단, 에어백 근처 = PC/ABS, PA
   - 도어, 필러 = PP

3. **"움직이면 POM"**
   - 기어, 클립, 메커니즘 = POM, PA

4. **"부드러우면 TPO/TPE"**
   - 소프트터치, 에어백 커버 = TPO, TPE
    `,
  },
  {
    id: '02',
    title: '심층 노트',
    subtitle: 'Deep Notes',
    icon: '📚',
    completed: true,
    content: `
## Layer 1: 범용 플라스틱

### PP (Polypropylene) - 내장재의 왕

| 특성 | 값 | 비고 |
|------|-----|------|
| 인장강도 | 30-40 MPa | GF 추가 시 80+ |
| 굴곡탄성률 | 1.5-2.0 GPa | TD 추가 시 3.0+ |
| HDT | 100-110°C | LGF 시 150°C |
| 비중 | 0.9-1.1 | 최경량 |
| 가격 | ★☆☆☆☆ | 최저가 |

**PP 변형:**
- **PP-TD**: 탈크 충전 (10-30%), 강성↑, 도어트림
- **PP-GF**: 단섬유 유리 (20-40%), 강도↑
- **PP-LGF**: 장섬유 유리 (30-50%), IP 기재

---

### ABS - 외관의 대명사

| 특성 | 값 | 비고 |
|------|-----|------|
| 인장강도 | 45-55 MPa | |
| 굴곡탄성률 | 2.3-2.8 GPa | |
| HDT | 95-105°C | |
| 비중 | 1.04-1.07 | |
| 가격 | ★★☆☆☆ | PP 대비 1.5배 |

**3요소의 역할:**
\`\`\`
A (Acrylonitrile) → 내열성, 내약품성
B (Butadiene)     → 충격강도, 유연성
S (Styrene)       → 광택, 가공성, 강성
\`\`\`

---

## Layer 2: 엔지니어링 플라스틱

### PC (Polycarbonate)

| 특성 | 값 | 비고 |
|------|-----|------|
| 인장강도 | 60-70 MPa | |
| 충격강도 | 600-900 J/m | 최고 수준 |
| HDT | 130-140°C | |
| 투과율 | 89-91% | |
| 비중 | 1.20 | |
| 가격 | ★★★★☆ | PP 대비 3배 |

**적용**: 클러스터 렌즈, 라이트가이드, 선루프

---

### PC/ABS - 균형의 미학

| 특성 | 값 | 비고 |
|------|-----|------|
| 인장강도 | 50-60 MPa | |
| 충격강도 | 400-600 J/m | |
| HDT | 110-125°C | |
| 비중 | 1.10-1.15 | |

**PC:ABS 비율에 따른 변화:**
\`\`\`
PC 많으면 → 내열↑, 강도↑, 비용↑
ABS 많으면 → 가공성↑, 비용↓, 도금 가능
\`\`\`

---

### POM (Polyoxymethylene)

**특징**: 마찰계수 최저, 치수안정성 최고

| 적용 부품 | 이유 |
|-----------|------|
| 기어 | 저마찰, 내마모 |
| 클립/파스너 | 스냅핏, 반복 체결 |
| 컵홀더 기어 | 정밀 메커니즘 |
| 시트 레일 | 저마찰 슬라이딩 |

---

### PA (Polyamide)

| 구분 | PA6 | PA66 | PA6-GF30 |
|------|-----|------|----------|
| 인장강도 | 80 MPa | 85 MPa | 180 MPa |
| HDT | 65°C | 75°C | 210°C |
| 흡습 | 높음 | 높음 | 중간 |

**주의**: 흡습 시 물성 저하 → 건조 필수 (3-4hr, 80°C)

---

## Layer 3: 특수 소재

### TPO (Thermoplastic Olefin)

\`\`\`
TPO = PP + EPDM (에틸렌-프로필렌 고무)

장점:
- 올레핀계 → 재활용 유리
- 소프트터치 감성
- 내후성 우수

적용:
- IP/도어 스킨
- 에어백 커버
- 범퍼 커버 (외장)
\`\`\`

---

## 물성 종합 비교표

| 재질 | 인장강도 | HDT | 충격강도 | 비중 | 상대가격 |
|------|----------|-----|----------|------|----------|
| PP | 35 | 100 | 50 | 0.90 | 1.0 |
| PP-TD20 | 30 | 110 | 40 | 1.05 | 1.1 |
| PP-GF30 | 70 | 140 | 80 | 1.13 | 1.3 |
| ABS | 50 | 100 | 200 | 1.05 | 1.5 |
| PC | 65 | 135 | 700 | 1.20 | 3.0 |
| PC/ABS | 55 | 115 | 500 | 1.12 | 2.0 |
| POM | 65 | 110 | 75 | 1.41 | 2.2 |
| PA6-GF30 | 180 | 210 | 120 | 1.35 | 2.8 |
| TPO | 15 | 90 | - | 0.95 | 1.8 |

*단위: 인장강도(MPa), HDT(°C), 충격강도(J/m)*

---

## 품질 요구사항

### VOC (Volatile Organic Compounds)

| 항목 | 기준 | 시험법 |
|------|------|--------|
| 폼알데히드 | < 10 μg/m³ | VDA 275 |
| 톨루엔 | < 1100 μg/m³ | VDA 278 |
| 총VOC | < 50 mg/m² | ISO 12219 |

### 내광성 (Light Fastness)

- **시험**: 제논 아크 램프, 83°C BPT
- **평가**: 그레이스케일 4등급 이상 (변색 최소)
- **시간**: 300-600시간 (OEM별 상이)
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
[내장재 플라스틱 선정] ≈ [요리 재료 선택]
\`\`\`

### Why This Analogy Works

| 플라스틱 선정 | 요리 재료 선택 |
|---------------|----------------|
| 재질 (PP, ABS, PC) | 재료 (고기, 생선, 채소) |
| 컴파운딩 (탈크, 유리섬유) | 양념/조미료 |
| 가공 방법 (사출, 압출) | 조리법 (굽기, 삶기, 튀기기) |
| 표면처리 (도장, IMD) | 플레이팅/장식 |
| 품질 기준 (VOC, 내열) | 맛/위생 기준 |
| 원가 | 식자재 가격 |

### 구체적 비유

\`\`\`
PP = 두부
├── 저렴함
├── 담백함 (무특징)
├── 다른 재료와 잘 어울림 (블렌딩)
└── 그 자체로는 밋밋 (강화재 필요)

ABS = 삼겹살
├── 적당한 가격에 좋은 품질
├── 다재다능 (구이, 찜, 볶음)
├── 그 자체로 맛있음 (외관 우수)
└── 기름기 주의 (도금 조건)

PC = 한우 등심
├── 프리미엄 가격
├── 뛰어난 품질 (투명, 강함)
├── 섬세한 조리 필요 (건조, 온도 관리)
└── 특별한 요리에 적합 (광학 부품)
\`\`\`

---

## Cross-Domain Connections

| Domain | Similar Concept | Connection |
|--------|-----------------|------------|
| **주방용품** | PP=밀폐용기, PC=물병 | 같은 소재, 유사 요구사항 |
| **가전제품** | TV 베젤, 냉장고 내장 | 유사 외관품질/내구성 기준 |
| **의료기기** | 멸균/생체적합성 플라스틱 | 더 엄격한 품질 기준 |
| **항공기** | 고성능 엔프라, 복합재 | 극한 요구사항의 확장 |

---

## Pattern Recognition

### Pattern 1: Cost-Performance Trade-off

\`\`\`
    가격
     ↑
     │         ● PC
     │     ● PA-GF
     │   ● PC/ABS
     │ ● POM
     │● ABS
     │
●PP ─┼──────────────────→ 성능
     │

모든 산업에서 반복되는 패턴:
- 범용품 → 중급품 → 고급품
- 자동차, 가전, 의류 모두 동일
\`\`\`

### Pattern 2: 기능 분화 (Specialization)

\`\`\`
     범용 소재 (PP)
           │
     ┌─────┼─────┐
     │     │     │
     ▼     ▼     ▼
  고강도  저비용  소프트
  PP-GF   PP    TPO

→ 기본 소재에서 특화된 변종이 파생
\`\`\`

---

## Metaphors

### Technical Metaphor
> "내장재 플라스틱 선정은 **교향곡 악기 편성**과 같다. 각 파트(부품)에 맞는 악기(재질)를 배치하고, 전체 조화(원가/품질 밸런스)를 이뤄야 한다."

### Everyday Metaphor
> "차량 내장재는 **집 인테리어**와 같다. 바닥(플로어)에는 튼튼한 재료, 벽(도어트림)에는 보기 좋은 마감, 테이블(콘솔)에는 실용적인 소재."

### Teaching Metaphor
> "플라스틱을 고르는 건 **운동선수 선발**과 비슷해요. PP는 유연한 마라토너(범용), ABS는 균형 잡힌 10종경기 선수(외관), PC는 파워 역도선수(강도), POM은 정밀 사격수(정밀 기계)."
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

### Use Case 1: 인스트루먼트 패널 소재 선정

**Context**: 신차 개발 프로젝트에서 IP 기재 소재 선정

**Requirements**:
- 내열: IP 상단 110°C 노출
- 강성: 에어백 전개 반력 지지
- 비용: 양산 원가 목표 충족
- 경량: 연비 목표 달성

**How it's applied**:
\`\`\`
Step 1: 후보 재질 선정
├── PP-TD30: 내열 부족 (HDT 110°C)
├── PP-LGF30: 내열 OK (HDT 150°C) ★
├── PP-GF30: 표면 품질 이슈
└── PC/ABS: 비용 초과

Step 2: PP-LGF30 상세 검토
├── 물성: 인장 80MPa, 굴곡탄성률 5.5GPa ✓
├── 내열: HDT 150°C > 요구 110°C ✓
├── 비중: 1.12 (ABS 대비 경량) ✓
└── 비용: ABS 대비 90% ✓

Step 3: 표면 처리 결정
├── 스킨 일체 성형: TPO 슬러시 스킨
└── 무도장 그레인 패턴
\`\`\`

**Result**: PP-LGF30 기재 + TPO 스킨 일체 성형

---

### Use Case 2: 도어 트림 구성

\`\`\`
┌─────────────────────────────────────────┐
│           도어 트림 단면                 │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 표피 (TPO 또는 PVC/ABS 시트)     │   │
│  ├─────────────────────────────────┤   │
│  │ 폼층 (PP 폼 또는 PU 폼)         │   │ ← 소프트 터치
│  ├─────────────────────────────────┤   │
│  │ 기재 (PP-TD20)                  │   │ ← 구조 지지
│  └─────────────────────────────────┘   │
│                                         │
│  ★ 암레스트: 소프트 터치 필수 (폼 두께↑) │
│  ★ 맵포켓: 강성 필요 (폼 없이 기재만)    │
│                                         │
└─────────────────────────────────────────┘
\`\`\`

**Material Selection**:
| 부위 | 재질 | 이유 |
|------|------|------|
| 기재 | PP-TD20 | 저비용, 충분한 강성 |
| 표피 | TPO | 소프트터치, 재활용 용이 |
| 스위치 베젤 | PC/ABS | 도금, 외관 품질 |

---

## Practice Problems

### Level 1: Basic (기초)

**Problem**: 글로브박스 내부에 가장 적합한 재질은?

**Answer**: PP 또는 PP-TD10
- 비노출 부위 → 외관 품질 낮아도 됨
- 내열 낮아도 됨 (IP 하단)
- 저비용 우선

---

### Level 2: Intermediate (중급)

**Problem**: 클러스터 렌즈 소재로 PMMA vs PC 어떤 것?

**Answer**: PC (폴리카보네이트)

| 특성 | PMMA | PC |
|------|------|-----|
| 투명도 | 92% | 89% |
| 내충격 | 낮음 | 매우 높음 ★ |
| 내스크래치 | 좋음 | 나쁨 |
| 내열 | 85°C | 135°C ★ |

**이유**: 클러스터는 충격 안전성 + 고온 환경 필수

---

### Level 3: Advanced (고급)

**Problem**: PP-TD20 (3,000원/kg) vs PC/ABS (5,500원/kg), 부품 500g, 도장비 600원일 때?

**Answer**:
\`\`\`
재료비:
- PP-TD20: 0.5kg × 3,000원 = 1,500원
- PC/ABS: 0.5kg × 5,500원 = 2,750원

도장 포함 총비용:
- PP-TD20: 도장 불가 → 무도장 (1,500원)
- PC/ABS + 도장: 2,750 + 600 = 3,350원

결론:
- 외관 중요 → PC/ABS + 도장
- 비용 최우선 → PP-TD20 무도장
- 절충안 → PP 기재 + IMD 필름 (약 2,200원)
\`\`\`

---

## Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| PP에 바로 도장 | 밀착 불량 (무극성) | 화염처리+프라이머 또는 무도장 |
| PA 건조 생략 | 가수분해, 물성 저하 | 반드시 3-4시간 건조 |
| 재생재 무제한 | VOC/냄새/물성 저하 | 20% 이하 제한 |
| PC 건조 생략 | 실버 마크 발생 | 3-4시간 120°C 건조 |
| POM 도장 시도 | 밀착 불가 | 무도장, 성형색 사용 |
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

1. **바이오 플라스틱이 기존 석유계 플라스틱을 대체할 수 있는가?**
   - Why: 탄소중립 목표, EU 규제 강화
   - Directions: Bio-PP, Bio-PA 물성 비교
   - Status: 🔄 Investigating

2. **재활용 플라스틱의 품질 한계는 어디까지인가?**
   - Why: 재활용률 규제 (EU: 25% by 2025)
   - Directions: PCR 물성, 외관 품질, VOC 이슈
   - Status: 🔄 Investigating

3. **전기차 내장재는 기존과 어떻게 달라지는가?**
   - Why: 배터리 공간 → 내장 레이아웃 변화
   - Status: ⏸️ Backlog

---

### Medium Priority 🟡

1. **IMD/IML 기술이 도장을 완전히 대체할 수 있는가?**
   - Why: 도장 공정 환경 규제

2. **3D 프린팅이 내장재 양산에 적용될 수 있는가?**
   - Why: 맞춤형 생산, 소량 다품종

---

## Resolved Questions ✅

### Q: PP에 왜 도장이 어려운가?
**Answer**: PP는 비극성(non-polar) 소재로 표면 에너지가 낮아 도료가 부착되지 않음

**Solution**:
- 화염 처리 (Flame Treatment): 표면 산화로 극성 부여
- 플라즈마 처리: 표면 활성화
- 프라이머: 염소화 PP 프라이머 사용
- 대안: 도장 대신 IMD/IML 또는 성형색 사용

### Q: ABS와 PC/ABS 중 어떤 것을 선택해야 하는가?
**Answer**:
- ABS: 일반 외관 부품, 도금 부품, 비용 중시
- PC/ABS: 고내열/고강도 필요, 에어백 근처
- **결정 기준: HDT 요구 100°C 이상이면 PC/ABS**

### Q: 내장재에서 가장 많이 쓰이는 재질은?
**Answer**: PP (Polypropylene) 계열이 40-50% 차지
- PP-TD: 도어트림, 필러, 콘솔
- PP-LGF: IP 기재
- 이유: 최저 비용, 최경량, 재활용 용이

---

## Socratic Questions

### Clarifying Questions
- "엔지니어링 플라스틱"의 정확한 기준은 무엇인가?
- "감성 품질"을 어떻게 정량화할 수 있는가?

### Assumption Questions
- PP가 영원히 최다 사용 소재일 것인가?
- 플라스틱 = 저급이라는 인식은 바뀔 것인가?

### Implication Questions
- 모든 내장재가 재활용 의무화되면 소재 선택은 어떻게 바뀌는가?
- 자율주행으로 운전석 개념이 사라지면 내장재 설계는?
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

| Level | Score Range | Status |
|-------|-------------|--------|
| Novice | 0-20% | ✅ Passed |
| Beginner | 21-40% | ✅ Passed |
| Intermediate | 41-60% | ✅ Passed |
| Advanced | 61-80% | 🔄 Current |
| Expert | 81-100% | ⬜ |

---

## Gate Verification

### Gate 1: Self-Explanation (자기 설명) ✅ PASS
> "노트 없이 이 개념을 설명할 수 있는가?"

- ✅ Core definition: 내장재 플라스틱 = 실내 부품 고분자 소재
- ✅ Why it matters: 원가/감성품질/안전/경량화
- ✅ 주요 재질 5종 특성 (PP, ABS, PC, POM, PA)
- ✅ 재질별 적용 부품
- ✅ 품질 요구사항 (VOC, 내열, 내광)

**Score**: 5 / 5 = **100%** ✅

---

### Gate 2: Application (실전 적용) ✅ PASS
> "실제 문제에 적용할 수 있는가?"

- ✅ 부품 요구사항 분석
- ✅ 적합 재질 선정 가능
- ✅ 물성 데이터 해석
- ✅ 비용-성능 트레이드오프 이해
- ⬜ 실제 프로젝트 적용 경험

**Score**: 4 / 5 = **80%** ✅

---

### Gate 3: Teaching (교육 가능) 🟡 PARTIAL
> "다른 사람에게 가르칠 수 있는가?"

- ✅ 비전공자에게 개념 설명 가능
- ✅ 요리/운동 비유 활용 가능
- ✅ 체계적 문서 작성 완료
- ⬜ 실제 교육 진행 경험

**Score**: 3 / 4 = **75%** 🟡

---

## Overall Gate Score

| Gate | Score | Weight | Weighted |
|------|-------|--------|----------|
| Self-Explanation | 100% | 30% | 30.0% |
| Application | 80% | 40% | 32.0% |
| Teaching | 75% | 30% | 22.5% |
| **Total** | | | **84.5%** |

→ 목표 70% 달성, **Advanced** 레벨 도달

---

## Key Insights

1. **PP가 왕이다** - 40-50% 점유, 저비용/경량/재활용 3박자
2. **외관 = ABS계열** - 도장/도금 필요하면 ABS, PC/ABS
3. **내열이 핵심** - HDT가 적용 가능 여부 결정
4. **복합화가 답** - 단일 소재 한계 → 블렌딩, 강화재
5. **친환경 전환 중** - 바이오, 재활용, 올레핀 단일화 트렌드

---

## Next Milestone

**Target Level**: Expert (85%)
**Required Actions**:
- [ ] 사출성형 공정 상세 학습
- [ ] IMD/IML 기술 심화
- [ ] 바이오플라스틱 현황 조사
- [ ] 실제 부품 소재 분석 실습
    `,
  },
];

export default function AutomotiveInteriorPlasticsPage() {
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
          <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-amber-400">
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
          <blockquote key={index} className="border-l-4 border-amber-500 pl-4 my-4 text-zinc-400 italic">
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
              <span className="text-xl">🪑</span>
              <span className="font-semibold">내장재 플라스틱</span>
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
                focusMode ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-zinc-400'
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
                <span className="text-sm font-semibold text-amber-400">70%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>

            <nav className="space-y-1">
              {knowledgeFiles.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setActiveStep(file.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeStep === file.id
                      ? 'bg-amber-600 text-white'
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
                  <span>재질 8종 이상 설명</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>물성 데이터 수치 포함</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>부품별 적용 예시</span>
                </label>
                <label className="flex items-center gap-2 text-zinc-300">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span>품질 요구사항 (VOC)</span>
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
                      className="px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-xl transition-all ml-auto"
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
