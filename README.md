# Learning Autopilot

> **개념 1개 입력 → 사고 확장 → 다층 이해 → 실전 적용 → 기록 → 검증 → 반복 진화**

AI 기반 자율 학습 시스템. 어떤 개념이든 체계적으로 분해하고, 깊이 이해하고, 실전 적용까지 자동화합니다.

## 문제 정의

```
"공부가 얕은 이유는 머리가 아니라
지식이 구조화·검증·확장되는 시스템이 없기 때문이다."
```

**기존 학습의 문제점:**
- 읽고 잊음 → 개념 연결 안 됨 → 실전 적용 불가 → 실력 축적 실패

**이 시스템의 해결책:**
- AI가 "교수 + 연구자 + 튜터 + 시험관 + 기록관리자" 동시 수행
- 모든 학습 결과를 파일로 축적 + Git 버전 관리

---

## 빠른 시작

### 1. 저장소 클론

```bash
git clone https://github.com/[username]/learning-autopilot.git
cd learning-autopilot
```

### 2. 학습 초기화

```bash
./scripts/init_learning.sh
```

### 3. Claude Code에서 학습 시작

Claude Code를 열고 `prompts/AUTOPILOT.md` 내용을 복사하여 실행:

```
Concept seed: "Transformer Attention Mechanism"
Goal level: mastery
```

### 4. 자동 학습 루프

AI가 자동으로:
1. 개념 구조 분해
2. 직관 모델 생성
3. 실제 적용 예시
4. 시험 문제 생성
5. 이해도 점수 계산
6. 파일 기록 & 커밋

---

## 폴더 구조

```
learning-autopilot/
├── knowledge/              # 지식 문서
│   ├── 00_CORE_CONCEPT.md    # 핵심 개념 정의
│   ├── 01_MENTAL_MODEL.md    # 멘탈 모델
│   ├── 02_DEEP_NOTES.md      # 심층 노트
│   ├── 03_ANALOGY_MAP.md     # 유추 맵핑
│   ├── 04_APPLICATION.md     # 실전 적용
│   ├── 05_QUESTIONS.md       # 미해결 질문
│   └── 06_MASTERY_SCORE.md   # 숙련도 점수
├── logs/                   # 학습 로그
│   ├── STUDY_LOG.md          # 학습 일지
│   └── ERROR_LOG.md          # 막힌 점 기록
├── prompts/                # 프롬프트 템플릿
│   ├── AUTOPILOT.md          # 메인 자동화 프롬프트
│   ├── NEXT_SESSION.md       # 다음 세션 프롬프트
│   └── QUICK_STUDY.md        # 빠른 학습 프롬프트
├── scripts/                # 자동화 스크립트
│   ├── init_learning.sh      # 학습 초기화
│   ├── study_commit.sh       # 단계별 커밋
│   ├── progress_check.sh     # 진행 상황 확인
│   └── export_knowledge.sh   # 지식 내보내기
├── docs/                   # 프로젝트 문서
│   ├── BUILD_PROCESS.md      # 빌드 프로세스
│   └── USER_GUIDE.md         # 사용자 가이드
├── CLAUDE.md               # Claude 행동 규칙
└── README.md               # 이 파일
```

---

## 학습 루프

```
Step 01: CORE UNDERSTANDING
    ↓ 개념을 가장 단순한 형태로 재정의
Step 02: STRUCTURE BUILDING
    ↓ 멘탈 모델 & 인과관계 맵핑
Step 03: KNOWLEDGE EXPANSION
    ↓ 엣지 케이스, 숨은 레이어, 고급 함의
Step 04: CROSS-DOMAIN LINKING
    ↓ 유추, 다른 분야와 연결
Step 05: APPLICATION DESIGN
    ↓ 실전 연습문제 & 시나리오
Step 06: QA GATE
    ↓ 이해도 검증 (설명/적용/교육 가능?)
Step 07: DOCUMENT UPDATE
    ↓ 모든 knowledge/* 파일 업데이트
Step 08: COMMIT
    ↓ Git 커밋으로 진행 기록
```

---

## Gate 검증 기준

학습이 다음 단계로 진행하려면 Gate를 통과해야 합니다:

| 검증 항목 | 기준 |
|-----------|------|
| 자기 말로 설명 | 개념을 노트 없이 설명 가능 |
| 실전 적용 | 실제 문제에 적용 가능 |
| 타인 교육 | 다른 사람에게 가르칠 수 있음 |

**Gate FAIL 시**: 해당 Step 반복 (진행 금지)

---

## 스크립트 사용법

### 학습 초기화
```bash
./scripts/init_learning.sh
```

### 학습 단계 커밋
```bash
./scripts/study_commit.sh 01 "core concept understanding"
```

### 진행 상황 확인
```bash
./scripts/progress_check.sh
```

### 지식 내보내기
```bash
./scripts/export_knowledge.sh
```

---

## 1주 리뷰 체크리스트

매주 확인할 3가지:

1. **학습 누적량**: `git log --oneline | wc -l`
2. **평균 숙련도**: `knowledge/06_MASTERY_SCORE.md` 확인
3. **반복 오류**: `logs/ERROR_LOG.md` 패턴 분석

---

## 라이선스

MIT License

---

## 기여

이슈와 PR을 환영합니다. `docs/CONTRIBUTING.md` 참고.
