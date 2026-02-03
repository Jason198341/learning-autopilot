#!/bin/bash
# =============================================================================
# progress_check.sh - 학습 진행 상황 확인 스크립트
# =============================================================================
# 사용법: ./scripts/progress_check.sh
# =============================================================================

set -e

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m'

# 프로젝트 루트
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_ROOT"

echo ""
echo -e "${CYAN}============================================${NC}"
echo -e "${CYAN}  Learning Autopilot - Progress Report${NC}"
echo -e "${CYAN}============================================${NC}"
echo ""

# Git 통계
echo -e "${MAGENTA}[Git Statistics]${NC}"
echo "───────────────────────────────────────────"

TOTAL_COMMITS=$(git rev-list --count HEAD 2>/dev/null || echo "0")
echo "  Total Commits: $TOTAL_COMMITS"

FIRST_COMMIT_DATE=$(git log --reverse --format="%ai" | head -1 | cut -d' ' -f1 2>/dev/null || echo "N/A")
echo "  Started: $FIRST_COMMIT_DATE"

LAST_COMMIT_DATE=$(git log -1 --format="%ai" | cut -d' ' -f1 2>/dev/null || echo "N/A")
echo "  Last Update: $LAST_COMMIT_DATE"

echo ""

# 최근 커밋
echo -e "${MAGENTA}[Recent Commits]${NC}"
echo "───────────────────────────────────────────"
git log --oneline -5 2>/dev/null || echo "  No commits yet"
echo ""

# Knowledge 파일 상태
echo -e "${MAGENTA}[Knowledge Files]${NC}"
echo "───────────────────────────────────────────"

check_file_status() {
    local file=$1
    local name=$2
    if [ -f "$file" ]; then
        local lines=$(wc -l < "$file")
        local modified=$(git log -1 --format="%ar" -- "$file" 2>/dev/null || echo "never")
        if [ "$lines" -gt 50 ]; then
            echo -e "  ${GREEN}✓${NC} $name ($lines lines, $modified)"
        elif [ "$lines" -gt 20 ]; then
            echo -e "  ${YELLOW}◐${NC} $name ($lines lines, $modified)"
        else
            echo -e "  ${RED}○${NC} $name (template only)"
        fi
    else
        echo -e "  ${RED}✗${NC} $name (missing)"
    fi
}

check_file_status "knowledge/00_CORE_CONCEPT.md" "Core Concept"
check_file_status "knowledge/01_MENTAL_MODEL.md" "Mental Model"
check_file_status "knowledge/02_DEEP_NOTES.md" "Deep Notes"
check_file_status "knowledge/03_ANALOGY_MAP.md" "Analogy Map"
check_file_status "knowledge/04_APPLICATION.md" "Application"
check_file_status "knowledge/05_QUESTIONS.md" "Questions"
check_file_status "knowledge/06_MASTERY_SCORE.md" "Mastery Score"
echo ""

# 로그 상태
echo -e "${MAGENTA}[Logs]${NC}"
echo "───────────────────────────────────────────"
check_file_status "logs/STUDY_LOG.md" "Study Log"
check_file_status "logs/ERROR_LOG.md" "Error Log"
echo ""

# Step별 진행 상황
echo -e "${MAGENTA}[Step Progress]${NC}"
echo "───────────────────────────────────────────"

# 커밋 메시지에서 Step 추출
declare -A STEP_DONE
for step in 01 02 03 04 05 06 07 08; do
    if git log --oneline --grep="Step $step:" 2>/dev/null | grep -q .; then
        STEP_DONE[$step]="done"
    fi
done

STEPS=("01:Core Understanding" "02:Structure Building" "03:Knowledge Expansion" "04:Cross-Domain Linking" "05:Application Design" "06:QA Gate" "07:Document Update" "08:Commit & Review")

for step_info in "${STEPS[@]}"; do
    IFS=':' read -r num name <<< "$step_info"
    if [ "${STEP_DONE[$num]:-}" == "done" ]; then
        echo -e "  ${GREEN}[✓]${NC} Step $num: $name"
    else
        echo -e "  ${YELLOW}[ ]${NC} Step $num: $name"
    fi
done
echo ""

# Mastery Score 추출 시도
echo -e "${MAGENTA}[Mastery Summary]${NC}"
echo "───────────────────────────────────────────"
if [ -f "knowledge/06_MASTERY_SCORE.md" ]; then
    # Gate 점수 추출 시도
    GATE1=$(grep -A5 "Gate 1:" knowledge/06_MASTERY_SCORE.md | grep "Score:" | head -1 || echo "")
    GATE2=$(grep -A5 "Gate 2:" knowledge/06_MASTERY_SCORE.md | grep "Score:" | head -1 || echo "")
    GATE3=$(grep -A5 "Gate 3:" knowledge/06_MASTERY_SCORE.md | grep "Score:" | head -1 || echo "")

    if [ -n "$GATE1" ] || [ -n "$GATE2" ] || [ -n "$GATE3" ]; then
        [ -n "$GATE1" ] && echo "  Gate 1 (Explanation): $GATE1"
        [ -n "$GATE2" ] && echo "  Gate 2 (Application): $GATE2"
        [ -n "$GATE3" ] && echo "  Gate 3 (Teaching): $GATE3"
    else
        echo "  Score not yet calculated"
    fi
else
    echo "  Mastery score file not found"
fi
echo ""

# 다음 할 일
echo -e "${MAGENTA}[Next Actions]${NC}"
echo "───────────────────────────────────────────"

# 완료되지 않은 첫 번째 Step 찾기
for step_info in "${STEPS[@]}"; do
    IFS=':' read -r num name <<< "$step_info"
    if [ "${STEP_DONE[$num]:-}" != "done" ]; then
        echo "  → Continue with Step $num: $name"
        break
    fi
done

echo ""
echo "Commands:"
echo "  Study commit: ./scripts/study_commit.sh [step] [description]"
echo "  Export:       ./scripts/export_knowledge.sh"
echo ""
