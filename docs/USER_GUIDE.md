# User Guide - Learning Autopilot

> 학습 자동화 시스템 사용 가이드

---

## 시작하기

### 1. 환경 준비

```bash
# Git Bash 또는 터미널에서
cd ~/learning-autopilot

# 스크립트 실행 권한 부여 (Git Bash)
chmod +x scripts/*.sh
```

### 2. 새 학습 시작

```bash
./scripts/init_learning.sh "Transformer Attention Mechanism"
```

### 3. Claude Code에서 학습 실행

Claude Code를 열고 `prompts/AUTOPILOT.md`의 프롬프트 복사 후 실행.

---

## 폴더 구조 이해

```
learning-autopilot/
├── knowledge/          # 📚 지식 문서 (핵심!)
│   ├── 00_CORE_CONCEPT.md    → 개념 정의
│   ├── 01_MENTAL_MODEL.md    → 구조 & 인과관계
│   ├── 02_DEEP_NOTES.md      → 심층 노트
│   ├── 03_ANALOGY_MAP.md     → 유추 & 연결
│   ├── 04_APPLICATION.md     → 실전 적용
│   ├── 05_QUESTIONS.md       → 미해결 질문
│   └── 06_MASTERY_SCORE.md   → 숙련도 점수
├── logs/               # 📝 학습 기록
│   ├── STUDY_LOG.md          → 세션별 기록
│   └── ERROR_LOG.md          → 막힌 점 기록
├── prompts/            # 🤖 AI 프롬프트
│   ├── AUTOPILOT.md          → 메인 학습 프롬프트
│   ├── NEXT_SESSION.md       → 이어서 학습
│   └── QUICK_STUDY.md        → 빠른 학습
├── scripts/            # ⚙️ 자동화 스크립트
└── CLAUDE.md           # 📋 AI 행동 규칙
```

---

## 학습 루프 (8 Steps)

| Step | 이름 | 설명 | 업데이트 파일 |
|------|------|------|--------------|
| 01 | Core Understanding | 개념 재정의 | 00_CORE_CONCEPT.md |
| 02 | Structure Building | 멘탈 모델 구축 | 01_MENTAL_MODEL.md |
| 03 | Knowledge Expansion | 심층 탐구 | 02_DEEP_NOTES.md |
| 04 | Cross-Domain Linking | 유추 & 연결 | 03_ANALOGY_MAP.md |
| 05 | Application Design | 실전 문제 | 04_APPLICATION.md |
| 06 | QA Gate | 이해도 검증 | 06_MASTERY_SCORE.md |
| 07 | Document Update | 파일 업데이트 | All files |
| 08 | Commit | Git 커밋 | - |

---

## 주요 명령어

### 스크립트

```bash
# 새 학습 초기화
./scripts/init_learning.sh "개념 이름"

# 학습 단계 커밋
./scripts/study_commit.sh 01 "core concept defined"

# 진행 상황 확인
./scripts/progress_check.sh

# 지식 내보내기
./scripts/export_knowledge.sh
```

### Git 명령

```bash
# 진행 기록 보기
git log --oneline

# 특정 시점으로 돌아가기
git checkout [commit-hash]

# 변경사항 확인
git diff
```

---

## 학습 프롬프트 사용법

### 풀 학습 (30분+)
1. `prompts/AUTOPILOT.md` 내용 복사
2. `[개념 이름]`과 `[Goal Level]` 수정
3. Claude Code에 붙여넣기
4. 각 Step 완료 후 "continue" 입력

### 빠른 학습 (15분)
1. `prompts/QUICK_STUDY.md`의 "15-Minute Deep Dive" 사용
2. 핵심만 빠르게 습득

### 이어서 학습
1. `prompts/NEXT_SESSION.md`의 "Session Resume" 사용
2. 이전 세션에서 이어서 진행

---

## Gate 검증 기준

Step 06에서 3가지 Gate를 통과해야 합니다:

### Gate 1: 자기 설명
> "노트 없이 이 개념을 설명할 수 있는가?"

체크리스트:
- [ ] 핵심 정의를 말할 수 있다
- [ ] 왜 중요한지 설명할 수 있다
- [ ] 작동 원리를 설명할 수 있다
- [ ] 흔한 실수를 알고 있다

### Gate 2: 실전 적용
> "실제 문제에 적용할 수 있는가?"

체크리스트:
- [ ] 어디에 적용할지 인식했다
- [ ] 기본 케이스를 풀었다
- [ ] 엣지 케이스를 처리했다
- [ ] 실패 시 디버깅했다

### Gate 3: 교육 가능
> "다른 사람에게 가르칠 수 있는가?"

체크리스트:
- [ ] 초보자에게 설명했다
- [ ] 후속 질문에 답했다
- [ ] 유용한 비유를 만들었다
- [ ] 학습자의 오해를 식별했다

**어느 Gate라도 실패하면**: 해당 Step으로 돌아가서 반복

---

## 팁 & 트릭

### 효과적인 학습을 위해

1. **작은 개념부터 시작**
   - 처음에는 단순한 개념으로 시스템 익히기
   - 익숙해지면 복잡한 개념 도전

2. **Gate를 진지하게**
   - Gate는 "대충 넘기는" 관문이 아님
   - 진짜로 설명/적용/가르칠 수 있을 때만 통과

3. **ERROR_LOG 활용**
   - 막힌 점은 반드시 기록
   - 주기적으로 패턴 분석
   - 반복되는 오류는 근본 원인 해결

4. **간격 반복**
   - 06_MASTERY_SCORE.md의 Spaced Repetition 활용
   - 1일 → 3일 → 1주 → 2주 → 1달 간격으로 복습

### 시간이 없을 때

- `QUICK_STUDY.md`의 5분/15분 프롬프트 사용
- 완전한 루프보다 핵심만 빠르게
- 나중에 풀 세션으로 보완

### 세션 중단 시

- 반드시 현재 상태 커밋
- STUDY_LOG에 중단 지점 기록
- 다음 세션에서 NEXT_SESSION 프롬프트 사용

---

## 문제 해결

### 스크립트가 실행되지 않음

```bash
# Windows Git Bash에서
chmod +x scripts/*.sh

# 또는 직접 실행
bash scripts/init_learning.sh
```

### Git 커밋 실패

```bash
# 사용자 설정 확인
git config user.name
git config user.email

# 설정 안 되어 있으면
git config user.name "Your Name"
git config user.email "your@email.com"
```

### 파일 인코딩 문제

- UTF-8 인코딩 사용 권장
- Windows에서 한글 깨짐 시: VS Code에서 UTF-8로 저장

---

## 주간 리뷰 체크리스트

매주 확인:

- [ ] `git log --oneline | wc -l` - 커밋 수 확인
- [ ] `06_MASTERY_SCORE.md` - 숙련도 추적
- [ ] `ERROR_LOG.md` - 반복 오류 패턴 분석
- [ ] 미해결 `05_QUESTIONS.md` 검토

---

*Last updated: 2026-02-03*
