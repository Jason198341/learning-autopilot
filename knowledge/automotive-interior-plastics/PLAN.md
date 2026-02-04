# 내장재 플라스틱 지식 베이스 계획서

> 작성일: 2025-02-04
> 상태: 계획 수립 완료

---

## 1. 개요

### 1.1 학습 주제
**자동차 내장재 플라스틱 (Automotive Interior Plastics)**
- 차량 실내에 사용되는 플라스틱 소재의 종류, 특성, 적용

### 1.2 학습 목표
- [ ] 주요 플라스틱 재질별 특성을 설명할 수 있다
- [ ] 부품별 적합한 소재를 선정할 수 있다
- [ ] 품질 요구사항(VOC, 내열, 내광 등)을 이해한다
- [ ] 가공 방법과 표면처리 기술을 파악한다

### 1.3 범위
| 포함 | 제외 |
|------|------|
| 인스트루먼트 패널 (IP) | 외장 플라스틱 (범퍼 등) |
| 도어 트림 | 엔진룸 부품 |
| 센터 콘솔/페시아 | 구조용 플라스틱 |
| 필러 트림 | 전장 부품 하우징 |
| 시트 부품 (백보드 등) | |

---

## 2. 콘텐츠 구조 (7개 파일)

### 2.1 00_CORE_CONCEPT.md
**핵심 개념 정의**
- [ ] One-Sentence Definition
- [ ] Why It Matters (원가 비중, 감성품질, 안전)
- [ ] First Principles (3가지)
- [ ] Key Terms (15개 이상)
  - PP, ABS, PC, PC/ABS, POM, PA, TPO, TPE
  - VOC, Fogging, 내광성, 내열성, 스크래치
- [ ] Prerequisites
- [ ] Related Concepts

### 2.2 01_MENTAL_MODEL.md
**시각적 구조화**
- [ ] 재질 분류 체계도 (범용 vs 엔지니어링 vs 특수)
- [ ] 부품-재질 매핑 다이어그램
- [ ] 물성 비교 레이더 차트 (강도, 내열, 비용 등)
- [ ] 가공 프로세스 흐름도
- [ ] Mental Shortcuts

### 2.3 02_DEEP_NOTES.md
**재질별 심층 분석** ★ 핵심 섹션
- [ ] **PP (Polypropylene)**
  - 물성 데이터 (인장강도, 굴곡강도, HDT, 비중)
  - 장단점, 적용 부품, 개질 방법 (탈크, 유리섬유)
- [ ] **ABS (Acrylonitrile Butadiene Styrene)**
  - 물성 데이터, 도장성, 도금성
  - PC/ABS 블렌드 특성
- [ ] **PC (Polycarbonate)**
  - 투명성, 내충격성, 내열성
  - 적용 (클러스터 렌즈, 라이트가이드)
- [ ] **POM (Polyoxymethylene)**
  - 기어, 클립, 메커니즘 부품
- [ ] **PA (Polyamide/Nylon)**
  - 고강도, 내마모성, 흡습성 주의
- [ ] **TPO/TPE**
  - 소프트 터치, 에어백 커버
- [ ] **PU (Polyurethane)**
  - 폼, 스킨, 코팅
- [ ] 물성 비교표 (전체 재질)

### 2.4 03_ANALOGY_MAP.md
**유추 및 연결**
- [ ] 주방용품 비유 (PP=밀폐용기, PC=물병)
- [ ] 다른 산업과의 연결 (가전, 의료기기)
- [ ] 재질 선정 = 요리 레시피 비유
- [ ] Pattern Recognition

### 2.5 04_APPLICATION.md
**실전 적용**
- [ ] Use Case 1: IP 소재 선정
- [ ] Use Case 2: 도어 트림 구성
- [ ] Use Case 3: 소프트 터치 구현 방법
- [ ] 연습 문제 (기초/중급/고급)
- [ ] 재질 선정 체크리스트
- [ ] Common Mistakes

### 2.6 05_QUESTIONS.md
**탐구 질문**
- [ ] 친환경 소재 트렌드 (바이오 플라스틱, 재활용)
- [ ] 전기차 내장재 변화
- [ ] VOC 규제 강화 대응
- [ ] Resolved Questions

### 2.7 06_MASTERY_SCORE.md
**숙련도 평가**
- [ ] Gate 1: 자기 설명 (재질 5종 특성)
- [ ] Gate 2: 실전 적용 (소재 선정 문제)
- [ ] Gate 3: 교육 가능 (비유 설명)
- [ ] 다음 마일스톤

---

## 3. 품질 기준 (Quality Checklist)

### 3.1 콘텐츠 품질
| 항목 | 기준 | 확인 |
|------|------|------|
| 재질 종류 | 최소 8종 이상 상세 설명 | ⬜ |
| 물성 데이터 | 수치 포함 (인장강도, HDT 등) | ⬜ |
| 적용 부품 | 각 재질별 3개 이상 예시 | ⬜ |
| 가공 방법 | 사출, 압출, 블로우 등 설명 | ⬜ |
| 표면처리 | 도장, IMD, 그레이닝 등 | ⬜ |
| 품질 요구 | VOC, Fogging, 내광성 | ⬜ |
| 비교표 | 전 재질 물성 비교표 | ⬜ |
| 다이어그램 | 최소 3개 ASCII 다이어그램 | ⬜ |

### 3.2 형식 품질
| 항목 | 기준 | 확인 |
|------|------|------|
| 파일 수 | 7개 (00~06) | ⬜ |
| 템플릿 준수 | 기존 양식과 동일 구조 | ⬜ |
| 마크다운 문법 | 테이블, 코드블록, 리스트 정상 | ⬜ |
| 일관성 | 용어, 단위 통일 | ⬜ |

### 3.3 통합 품질
| 항목 | 기준 | 확인 |
|------|------|------|
| 웹페이지 생성 | page.tsx 파일 생성 | ⬜ |
| 메인 페이지 | 카테고리 추가 | ⬜ |
| 빌드 성공 | npm run build 통과 | ⬜ |
| Git 커밋 | 변경사항 푸시 | ⬜ |

---

## 4. 작업 순서

```
Step 1: knowledge/*.md 파일 7개 생성
        ↓
Step 2: 품질 체크 (콘텐츠)
        ↓
Step 3: web/src/app/learn/automotive-interior-plastics/page.tsx 생성
        ↓
Step 4: web/src/app/page.tsx 카테고리 추가
        ↓
Step 5: npm run build
        ↓
Step 6: docs/ 폴더 업데이트
        ↓
Step 7: Git commit & push
        ↓
Step 8: 최종 품질 체크 (계획서 대비)
```

---

## 5. 예상 결과물

### 5.1 파일 목록
```
knowledge/automotive-interior-plastics/
├── 00_CORE_CONCEPT.md
├── 01_MENTAL_MODEL.md
├── 02_DEEP_NOTES.md      ★ 재질 상세 (핵심)
├── 03_ANALOGY_MAP.md
├── 04_APPLICATION.md
├── 05_QUESTIONS.md
├── 06_MASTERY_SCORE.md
└── PLAN.md (본 문서)

web/src/app/learn/automotive-interior-plastics/
└── page.tsx
```

### 5.2 메인 페이지 카테고리
```
Knowledge Vault
├── 🚗 자동차 차체 아키텍처 (80%)
├── 🔌 차량용 전자제어기 ECU (60%)
└── 🪑 내장재 플라스틱 (NEW)    ← 추가
```

---

## 6. 승인

- 계획 작성: ✅ 완료
- 실행 시작: 대기 중

---

*Plan Version: 1.0*
*Created: 2025-02-04*
