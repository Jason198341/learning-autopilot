# UNIVERSAL LEARNING AUTOPILOT - 빌드 프로세스

## 프로젝트 개요

**목표**: 개념 1개 입력 → 사고 확장 → 다층 이해 → 실전 적용 → 기록 → 검증 → 반복 진화

**핵심 가치**: 읽고 잊는 학습이 아닌, 구조화·검증·확장되는 지식 축적 시스템

---

## 빌드 단계 개요

```
Phase 0: 프로젝트 초기화 & 환경 설정
    ↓
Phase 1: 핵심 문서 구조 생성
    ↓
Phase 2: 스크립트 & 자동화 도구
    ↓
Phase 3: Claude 통합 설정
    ↓
Phase 4: 웹 인터페이스 (선택)
    ↓
Phase 5: 테스트 & 검증
    ↓
Phase 6: 배포 & 문서화
```

---

## Phase 0: 프로젝트 초기화

### 입력 프롬프트

```
새로운 학습 자동화 프로젝트를 초기화해줘.

## 프로젝트 정보
- 이름: learning-autopilot
- 목적: 개념 학습 → 구조화 → 검증 → 축적 자동화 시스템
- 기술 스택: Bash 스크립트, Markdown, Git, (선택) Next.js

## 요청사항
1. Git 레포지토리 초기화
2. 폴더 구조 생성:
   - knowledge/ (지식 문서)
   - logs/ (학습 로그)
   - prompts/ (프롬프트 템플릿)
   - scripts/ (자동화 스크립트)
   - docs/ (프로젝트 문서)
3. .gitignore 생성
4. README.md 생성

## 제약조건
- 크로스 플랫폼 호환 (Windows/Mac/Linux)
- UTF-8 인코딩
- 업계 표준 Git 컨벤션
```

### 품질 검사 체크리스트

| # | 검사 항목 | 기준 | Pass/Fail |
|---|-----------|------|-----------|
| 0.1 | Git 초기화 | `git status` 정상 동작 | [ ] |
| 0.2 | 폴더 구조 | 5개 폴더 존재 (knowledge, logs, prompts, scripts, docs) | [ ] |
| 0.3 | .gitignore | 기본 제외 파일 포함 | [ ] |
| 0.4 | README.md | 프로젝트 설명 포함 | [ ] |
| 0.5 | 첫 커밋 | "phase 0: project initialization" 커밋 완료 | [ ] |

### 산출물
- [ ] `.gitignore`
- [ ] `README.md`
- [ ] 폴더 구조

---

## Phase 1: 핵심 문서 구조 생성

### 입력 프롬프트

```
학습 지식 문서 템플릿을 생성해줘.

## 필요한 문서 (knowledge/ 폴더)
1. 00_CORE_CONCEPT.md - 핵심 개념 정의
2. 01_MENTAL_MODEL.md - 멘탈 모델 구조
3. 02_DEEP_NOTES.md - 심층 노트
4. 03_ANALOGY_MAP.md - 유추 맵핑
5. 04_APPLICATION.md - 실전 적용
6. 05_QUESTIONS.md - 미해결 질문
7. 06_MASTERY_SCORE.md - 숙련도 점수

## 각 문서 요구사항
- 명확한 섹션 구분
- 작성 가이드 주석 포함
- 빈 템플릿 형태

## 로그 문서 (logs/ 폴더)
1. STUDY_LOG.md - 학습 일지
2. ERROR_LOG.md - 오류/막힌 점 기록

## 제약조건
- Markdown 표준 문법
- 한글/영어 혼용 가능
- 날짜 형식: YYYY-MM-DD
```

### 품질 검사 체크리스트

| # | 검사 항목 | 기준 | Pass/Fail |
|---|-----------|------|-----------|
| 1.1 | 핵심 문서 7개 | knowledge/ 내 7개 파일 존재 | [ ] |
| 1.2 | 로그 문서 2개 | logs/ 내 2개 파일 존재 | [ ] |
| 1.3 | 템플릿 형식 | 각 파일에 섹션 헤더 존재 | [ ] |
| 1.4 | Markdown 유효성 | 마크다운 렌더링 정상 | [ ] |
| 1.5 | 커밋 | "phase 1: knowledge document templates" | [ ] |

### 산출물
- [ ] `knowledge/00_CORE_CONCEPT.md`
- [ ] `knowledge/01_MENTAL_MODEL.md`
- [ ] `knowledge/02_DEEP_NOTES.md`
- [ ] `knowledge/03_ANALOGY_MAP.md`
- [ ] `knowledge/04_APPLICATION.md`
- [ ] `knowledge/05_QUESTIONS.md`
- [ ] `knowledge/06_MASTERY_SCORE.md`
- [ ] `logs/STUDY_LOG.md`
- [ ] `logs/ERROR_LOG.md`

---

## Phase 2: 스크립트 & 자동화 도구

### 입력 프롬프트

```
학습 자동화 스크립트를 생성해줘.

## 필요한 스크립트

### 1. scripts/init_learning.sh
- 새로운 학습 세션 초기화
- knowledge/* 템플릿 리셋 (선택적)
- 학습 시작 시간 기록

### 2. scripts/study_commit.sh
- 학습 단계별 자동 커밋
- 사용법: ./scripts/study_commit.sh 01 "core concept"
- 커밋 메시지: "study step 01: core concept"

### 3. scripts/progress_check.sh
- 현재 학습 진행 상황 출력
- 숙련도 점수 요약
- 미해결 질문 수

### 4. scripts/export_knowledge.sh
- 전체 knowledge/* 를 단일 PDF/HTML로 내보내기 (선택)

## 제약조건
- Bash 스크립트 (Windows: Git Bash 호환)
- set -euo pipefail 사용 (엄격 모드)
- 실행 권한 설정 (chmod +x)
- 에러 핸들링 포함
```

### 품질 검사 체크리스트

| # | 검사 항목 | 기준 | Pass/Fail |
|---|-----------|------|-----------|
| 2.1 | 스크립트 4개 | scripts/ 내 4개 파일 존재 | [ ] |
| 2.2 | 실행 권한 | `ls -la scripts/` 에서 x 권한 확인 | [ ] |
| 2.3 | Bash 문법 | `bash -n scripts/*.sh` 에러 없음 | [ ] |
| 2.4 | init 테스트 | `./scripts/init_learning.sh` 정상 실행 | [ ] |
| 2.5 | commit 테스트 | `./scripts/study_commit.sh 00 "test"` 정상 | [ ] |
| 2.6 | progress 테스트 | `./scripts/progress_check.sh` 출력 확인 | [ ] |
| 2.7 | 커밋 | "phase 2: automation scripts" | [ ] |

### 산출물
- [ ] `scripts/init_learning.sh`
- [ ] `scripts/study_commit.sh`
- [ ] `scripts/progress_check.sh`
- [ ] `scripts/export_knowledge.sh`

---

## Phase 3: Claude 통합 설정

### 입력 프롬프트

```
Claude Code 통합을 위한 설정 파일을 생성해줘.

## 1. CLAUDE.md (루트)
Claude Code의 행동 규칙 정의:
- 학습 미션 정의
- 절대 규칙 (Gate 실패 시 진행 금지 등)
- 파일 업데이트 규칙
- 커밋 규칙
- 불확실 시 행동 규칙

## 2. prompts/AUTOPILOT.md
메인 학습 자동화 프롬프트:
- 역할 정의
- 미션 정의
- 하드 룰
- 학습 루프 (Step 01~10)
- 출력 형식

## 3. prompts/NEXT_SESSION.md
다음 학습 세션 프롬프트 저장용

## 4. prompts/QUICK_STUDY.md
빠른 개념 학습용 간소화 프롬프트

## 제약조건
- 프롬프트는 복사-붙여넣기 가능하게
- 영어/한글 혼용 (핵심 키워드는 영어)
- Gate 검증 로직 필수 포함
```

### 품질 검사 체크리스트

| # | 검사 항목 | 기준 | Pass/Fail |
|---|-----------|------|-----------|
| 3.1 | CLAUDE.md | 루트에 존재, Hard Rules 포함 | [ ] |
| 3.2 | AUTOPILOT.md | 학습 루프 10단계 정의 | [ ] |
| 3.3 | Gate 검증 | Gate Pass/Fail 로직 명시 | [ ] |
| 3.4 | 커밋 규칙 | study_commit.sh 연동 명시 | [ ] |
| 3.5 | 프롬프트 테스트 | 실제 Claude에서 동작 확인 | [ ] |
| 3.6 | 커밋 | "phase 3: claude integration" | [ ] |

### 산출물
- [ ] `CLAUDE.md`
- [ ] `prompts/AUTOPILOT.md`
- [ ] `prompts/NEXT_SESSION.md`
- [ ] `prompts/QUICK_STUDY.md`

---

## Phase 4: 웹 인터페이스 (선택)

### 입력 프롬프트

```
학습 대시보드 웹 인터페이스를 생성해줘.

## 기술 스택
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- 로컬 파일 시스템 연동 (API Routes)

## 페이지 구성
1. / (대시보드)
   - 현재 학습 중인 개념
   - 숙련도 점수 차트
   - 최근 학습 로그

2. /concept (개념 입력)
   - 새 개념 입력 폼
   - 목표 레벨 선택

3. /knowledge (지식 뷰어)
   - knowledge/* 파일 렌더링
   - 실시간 편집 (선택)

4. /history (학습 히스토리)
   - Git 커밋 히스토리
   - 학습 타임라인

## 제약조건
- 반응형 디자인
- 다크 모드 지원
- 로컬 실행 우선 (배포는 선택)
```

### 품질 검사 체크리스트

| # | 검사 항목 | 기준 | Pass/Fail |
|---|-----------|------|-----------|
| 4.1 | Next.js 설정 | `npm run dev` 정상 실행 | [ ] |
| 4.2 | 4개 페이지 | /, /concept, /knowledge, /history | [ ] |
| 4.3 | API 연동 | knowledge 파일 읽기 API | [ ] |
| 4.4 | 반응형 | 모바일/데스크톱 레이아웃 | [ ] |
| 4.5 | 빌드 | `npm run build` 성공 | [ ] |
| 4.6 | 커밋 | "phase 4: web interface" | [ ] |

### 산출물
- [ ] `web/` Next.js 프로젝트
- [ ] API Routes
- [ ] 컴포넌트

---

## Phase 5: 테스트 & 검증

### 입력 프롬프트

```
전체 시스템 테스트를 수행해줘.

## 테스트 시나리오

### E2E 테스트 1: 기본 학습 플로우
1. init_learning.sh 실행
2. "JavaScript Closure" 개념 입력
3. Step 01~03 진행
4. Gate 검증
5. 커밋 확인

### E2E 테스트 2: Gate 실패 시나리오
1. 의도적으로 낮은 점수 입력
2. Gate FAIL 확인
3. 재학습 루프 확인

### E2E 테스트 3: 파일 무결성
1. 모든 knowledge/* 파일 존재 확인
2. 필수 섹션 존재 확인
3. 인코딩 확인

## 검증 항목
- 스크립트 동작
- 프롬프트 응답 품질
- Git 히스토리 정합성
```

### 품질 검사 체크리스트

| # | 검사 항목 | 기준 | Pass/Fail |
|---|-----------|------|-----------|
| 5.1 | 기본 플로우 | E2E 테스트 1 통과 | [ ] |
| 5.2 | Gate 실패 | E2E 테스트 2 통과 | [ ] |
| 5.3 | 파일 무결성 | E2E 테스트 3 통과 | [ ] |
| 5.4 | 스크립트 | 모든 스크립트 정상 동작 | [ ] |
| 5.5 | 프롬프트 | Claude 응답 품질 확인 | [ ] |
| 5.6 | 커밋 | "phase 5: testing complete" | [ ] |

### 산출물
- [ ] 테스트 결과 리포트
- [ ] 버그/이슈 목록

---

## Phase 6: 배포 & 문서화

### 입력 프롬프트

```
최종 문서화 및 배포 준비를 해줘.

## 문서화
1. README.md 완성
   - 프로젝트 소개
   - 빠른 시작 가이드
   - 사용 예시
   - 폴더 구조 설명

2. docs/USER_GUIDE.md
   - 상세 사용법
   - 프롬프트 사용법
   - 커스터마이징 가이드

3. docs/CONTRIBUTING.md
   - 기여 가이드
   - 코드 컨벤션

## 배포 (선택)
- GitHub 공개 레포
- GitHub Pages (웹 인터페이스)

## 최종 점검
- LICENSE 파일
- 버전 태그 (v1.0.0)
```

### 품질 검사 체크리스트

| # | 검사 항목 | 기준 | Pass/Fail |
|---|-----------|------|-----------|
| 6.1 | README | 빠른 시작 가이드 포함 | [ ] |
| 6.2 | USER_GUIDE | 상세 사용법 포함 | [ ] |
| 6.3 | LICENSE | 라이선스 파일 존재 | [ ] |
| 6.4 | 버전 태그 | `git tag v1.0.0` | [ ] |
| 6.5 | GitHub 푸쉬 | 원격 레포 연결 & 푸쉬 | [ ] |
| 6.6 | 최종 커밋 | "phase 6: v1.0.0 release" | [ ] |

### 산출물
- [ ] 완성된 `README.md`
- [ ] `docs/USER_GUIDE.md`
- [ ] `LICENSE`
- [ ] Git 태그 v1.0.0

---

## 전체 체크리스트 요약

### Phase 0: 프로젝트 초기화
- [ ] 0.1 Git 초기화
- [ ] 0.2 폴더 구조
- [ ] 0.3 .gitignore
- [ ] 0.4 README.md
- [ ] 0.5 첫 커밋

### Phase 1: 핵심 문서
- [ ] 1.1 knowledge 문서 7개
- [ ] 1.2 logs 문서 2개
- [ ] 1.3 템플릿 형식
- [ ] 1.4 Markdown 유효성
- [ ] 1.5 커밋

### Phase 2: 스크립트
- [ ] 2.1 스크립트 4개
- [ ] 2.2 실행 권한
- [ ] 2.3 Bash 문법
- [ ] 2.4~2.6 테스트
- [ ] 2.7 커밋

### Phase 3: Claude 통합
- [ ] 3.1 CLAUDE.md
- [ ] 3.2 AUTOPILOT.md
- [ ] 3.3 Gate 검증
- [ ] 3.4 커밋 규칙
- [ ] 3.5 프롬프트 테스트
- [ ] 3.6 커밋

### Phase 4: 웹 인터페이스 (선택)
- [ ] 4.1~4.6

### Phase 5: 테스트
- [ ] 5.1~5.6

### Phase 6: 배포
- [ ] 6.1~6.6

---

## 버전 히스토리

| 버전 | 날짜 | 내용 |
|------|------|------|
| 0.1.0 | 2026-02-03 | 초기 프로세스 문서 작성 |

