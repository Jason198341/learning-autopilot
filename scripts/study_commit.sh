#!/bin/bash
# =============================================================================
# study_commit.sh - 학습 단계별 커밋 스크립트
# =============================================================================
# 사용법: ./scripts/study_commit.sh [step_number] [description]
# 예시: ./scripts/study_commit.sh 01 "core concept understanding"
# =============================================================================

set -e

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# 함수
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# 프로젝트 루트
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_ROOT"

# Step 정의
declare -A STEPS
STEPS[01]="Core Understanding"
STEPS[02]="Structure Building"
STEPS[03]="Knowledge Expansion"
STEPS[04]="Cross-Domain Linking"
STEPS[05]="Application Design"
STEPS[06]="QA Gate"
STEPS[07]="Document Update"
STEPS[08]="Commit & Review"

# 인자 파싱
STEP="${1:-}"
DESCRIPTION="${2:-}"

if [ -z "$STEP" ]; then
    echo ""
    echo "사용법: ./scripts/study_commit.sh [step_number] [description]"
    echo ""
    echo "Available Steps:"
    for key in $(echo "${!STEPS[@]}" | tr ' ' '\n' | sort); do
        echo "  $key: ${STEPS[$key]}"
    done
    echo ""
    exit 1
fi

# Step 유효성 검사
if [ -z "${STEPS[$STEP]:-}" ]; then
    log_error "유효하지 않은 Step: $STEP"
    echo "유효한 Step: ${!STEPS[*]}"
    exit 1
fi

STEP_NAME="${STEPS[$STEP]}"

# Description 기본값
if [ -z "$DESCRIPTION" ]; then
    DESCRIPTION="$STEP_NAME"
fi

DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M)

echo ""
echo "============================================"
echo "  Study Commit - Step $STEP"
echo "============================================"
echo ""

# 변경사항 확인
log_info "변경사항 확인 중..."
CHANGES=$(git status --porcelain | wc -l)

if [ "$CHANGES" -eq 0 ]; then
    log_warning "커밋할 변경사항이 없습니다."
    exit 0
fi

# 변경 파일 표시
echo ""
echo "변경된 파일:"
git status --short
echo ""

# Gate 검증 (Step 06인 경우)
if [ "$STEP" == "06" ]; then
    echo -e "${CYAN}=== QA Gate 검증 ===${NC}"
    echo ""
    echo "다음 항목을 확인하세요:"
    echo "  [ ] 자기 말로 설명 가능한가?"
    echo "  [ ] 실전 적용 가능한가?"
    echo "  [ ] 다른 사람에게 가르칠 수 있는가?"
    echo ""
    read -p "Gate 통과? (y/n): " GATE_PASS
    if [ "$GATE_PASS" != "y" ]; then
        log_warning "Gate 미통과 - 이전 Step 반복 필요"
        exit 1
    fi
    log_success "Gate 통과!"
fi

# STUDY_LOG 업데이트
log_info "STUDY_LOG 업데이트 중..."
cat >> logs/STUDY_LOG.md << EOF

---

## Session $DATE $TIME

**Step**: $STEP ($STEP_NAME)

### Progress
- $DESCRIPTION

### Commit
\`git commit -m "Step $STEP: $DESCRIPTION"\`
EOF

# 커밋 실행
log_info "커밋 생성 중..."
git add -A
git commit -m "Step $STEP: $DESCRIPTION

Step: $STEP_NAME
Date: $DATE $TIME"

# 성공 메시지
echo ""
log_success "커밋 완료!"
echo ""
echo "  Step: $STEP - $STEP_NAME"
echo "  Message: $DESCRIPTION"
echo "  Time: $DATE $TIME"
echo ""

# 다음 Step 안내
NEXT_STEP=$(printf "%02d" $((10#$STEP + 1)))
if [ -n "${STEPS[$NEXT_STEP]:-}" ]; then
    echo "다음 단계: Step $NEXT_STEP - ${STEPS[$NEXT_STEP]}"
fi
echo ""
