# NEXT SESSION

> 다음 세션을 위한 빠른 시작 프롬프트

---

## Session Resume Prompt

복사하여 Claude Code에 붙여넣기:

```markdown
# Resume Learning Session

## Context
Continue my Learning Autopilot session. Check:
1. logs/STUDY_LOG.md - Last session details
2. knowledge/05_QUESTIONS.md - Open questions
3. knowledge/06_MASTERY_SCORE.md - Current mastery level

## Instructions

1. **Summarize Previous Progress**
   - What step was I on?
   - What did I learn?
   - What questions remain?

2. **Identify Today's Focus**
   - What's the next logical step?
   - Are there any unresolved issues?

3. **Continue the Loop**
   - Pick up from the correct step
   - Follow CLAUDE.md rules
   - Update files as we go

## Output

Start by giving me a 3-sentence summary of where we are, then ask if I'm ready to continue.
```

---

## Quick Commands

### Check Progress
```
Run ./scripts/progress_check.sh and summarize my learning status.
```

### Today's Plan
```
Based on my progress, create a focused plan for this session (30 min).
```

### Fill Gaps
```
Review all knowledge files. Find gaps and create a plan to fill them.
```

### Weak Point Practice
```
Look at logs/ERROR_LOG.md. Create practice problems for my weak areas.
```

---

## Session Planning Template

```markdown
## Session Plan - [DATE]

**Available Time**: [X] minutes
**Focus Area**: [concept/step]

### Goals
- [ ]
- [ ]

### Steps to Complete
1.
2.

### Success Criteria
- [ ] Files updated
- [ ] Committed to git
- [ ] Questions logged
```

---

## Interruption Recovery

만약 세션이 갑자기 중단되었다면:

```markdown
# Session Recovery

I had to stop my learning session abruptly. Please:

1. Check logs/STUDY_LOG.md for the last entry
2. Check git log for the last commit
3. Identify what was in progress
4. Create a recovery plan
5. Save current state to STUDY_LOG

Do NOT proceed with new learning until the state is recovered.
```
