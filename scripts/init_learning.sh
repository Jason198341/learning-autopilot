#!/bin/bash
# =============================================================================
# init_learning.sh - Learning Autopilot 초기화 스크립트
# =============================================================================
# 사용법: ./scripts/init_learning.sh [concept_name]
# 예시: ./scripts/init_learning.sh "Transformer Attention"
# =============================================================================

set -e

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 함수: 출력 헬퍼
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# 프로젝트 루트 확인
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

echo ""
echo "============================================"
echo "  Learning Autopilot - Initialization"
echo "============================================"
echo ""

# 개념 이름 입력
CONCEPT_NAME="${1:-}"
if [ -z "$CONCEPT_NAME" ]; then
    read -p "학습할 개념을 입력하세요: " CONCEPT_NAME
fi

if [ -z "$CONCEPT_NAME" ]; then
    log_error "개념 이름이 필요합니다."
    exit 1
fi

log_info "개념: $CONCEPT_NAME"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M)

# Git 상태 확인
if [ ! -d ".git" ]; then
    log_info "Git 저장소 초기화..."
    git init
    log_success "Git 저장소 생성됨"
fi

# 폴더 구조 확인
log_info "폴더 구조 확인 중..."
for dir in knowledge logs prompts scripts docs; do
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        log_success "$dir/ 생성됨"
    fi
done

# knowledge 파일들 초기화 (개념 이름 삽입)
log_info "Knowledge 파일 업데이트 중..."

# 00_CORE_CONCEPT.md 업데이트
if [ -f "knowledge/00_CORE_CONCEPT.md" ]; then
    sed -i "s/\*\*Name\*\*:/\*\*Name\*\*: $CONCEPT_NAME/" knowledge/00_CORE_CONCEPT.md
    sed -i "s/Last updated: YYYY-MM-DD/Last updated: $DATE/" knowledge/00_CORE_CONCEPT.md
    log_success "00_CORE_CONCEPT.md 업데이트됨"
fi

# 모든 knowledge 파일의 날짜 업데이트
for file in knowledge/*.md; do
    if [ -f "$file" ]; then
        sed -i "s/Last updated: YYYY-MM-DD/Last updated: $DATE/" "$file"
    fi
done

# STUDY_LOG에 첫 세션 추가
log_info "학습 로그 초기화..."
cat >> logs/STUDY_LOG.md << EOF

---

## Session $DATE $TIME

**Concept**: $CONCEPT_NAME
**Duration**: -
**Step**: 01 (Core Understanding)

### What I Learned
- [학습 시작]

### Key Insights
-

### Struggles
-

### Next Session Focus
- Step 01: Core Concept 정의 완료

### Commit
\`git commit -m "Step 01: init $CONCEPT_NAME"\`
EOF
log_success "STUDY_LOG.md 업데이트됨"

# 초기 커밋
log_info "초기 커밋 생성..."
git add -A
git commit -m "Init: Start learning '$CONCEPT_NAME'" --allow-empty 2>/dev/null || true
log_success "초기 커밋 완료"

# 요약 출력
echo ""
echo "============================================"
echo "  Initialization Complete!"
echo "============================================"
echo ""
log_success "개념: $CONCEPT_NAME"
log_success "시작 시간: $DATE $TIME"
echo ""
echo "다음 단계:"
echo "  1. knowledge/00_CORE_CONCEPT.md 작성"
echo "  2. Claude Code에서 AUTOPILOT 프롬프트 실행"
echo "  3. ./scripts/study_commit.sh 01 \"description\" 로 진행 기록"
echo ""
