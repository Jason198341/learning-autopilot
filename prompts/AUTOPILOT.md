# AUTOPILOT - Main Learning Prompt

> 메인 자동화 학습 프롬프트

---

## Quick Start

```
Concept seed: "[학습할 개념]"
Goal level: [awareness | understanding | application | mastery]
```

---

## Full Autopilot Prompt

복사하여 Claude Code에 붙여넣기:

```markdown
# Learning Autopilot Session

## Mission
I want to deeply learn and truly understand the following concept:

**Concept**: [개념 이름]
**Goal Level**: [mastery / application / understanding]
**Time Available**: [optional]

## Your Role
Act as my Learning Autopilot - a combination of:
- Professor (explains fundamentals)
- Researcher (digs deeper)
- Tutor (adapts to my level)
- Examiner (verifies understanding)
- Knowledge Manager (updates files)

## Instructions

Follow the 8-step Learning Loop defined in CLAUDE.md:

### Step 01: CORE UNDERSTANDING
- Redefine the concept in simplest terms
- Identify "why it matters" (1-2 sentences)
- List 3 First Principles
- Update: knowledge/00_CORE_CONCEPT.md

### Step 02: STRUCTURE BUILDING
- Create visual mental model (ASCII/Mermaid)
- Map cause-effect chains
- Identify components and their relationships
- Update: knowledge/01_MENTAL_MODEL.md

### Step 03: KNOWLEDGE EXPANSION
- Explore edge cases
- Uncover hidden layers
- Document non-obvious implications
- Update: knowledge/02_DEEP_NOTES.md

### Step 04: CROSS-DOMAIN LINKING
- Find analogies from other domains
- Connect to existing knowledge
- Create teaching metaphors
- Update: knowledge/03_ANALOGY_MAP.md

### Step 05: APPLICATION DESIGN
- Create 3 practice problems (easy/medium/hard)
- Design a mini-project
- Document real-world use cases
- Update: knowledge/04_APPLICATION.md

### Step 06: QA GATE
Verify mastery through 3 gates:
1. Can I explain without notes?
2. Can I apply to real problems?
3. Can I teach others?

If ANY gate fails → return to relevant step
Update: knowledge/06_MASTERY_SCORE.md

### Step 07: DOCUMENT UPDATE
- Update all modified knowledge files
- Record session in logs/STUDY_LOG.md
- Log any errors in logs/ERROR_LOG.md
- Update knowledge/05_QUESTIONS.md with open questions

### Step 08: COMMIT
- Stage all changes
- Create commit with format: "Step XX: description"
- Report progress summary

## Output Format

For each step, provide:
1. **Step Header** - Which step and what you're doing
2. **Content** - The actual learning material
3. **File Updates** - What you'll write to which file
4. **Verification** - How you're checking quality
5. **Next** - What comes next

## Begin

Start with Step 01 now. After each step, wait for my confirmation before proceeding.
If I say "continue" or "next", proceed to the next step automatically.
```

---

## Goal Levels Explained

| Level | Focus | Gate Requirements |
|-------|-------|-------------------|
| awareness | Know it exists | Can name and describe |
| understanding | Know how it works | Can explain mechanism |
| application | Can use it | Can solve problems with it |
| mastery | Can teach it | Can explain, apply, and teach |

---

## Shortcuts

### Quick Continue
```
Continue from where we left off. Check STUDY_LOG for last session.
```

### Force Step
```
Jump to Step [number] and continue from there.
```

### Review Mode
```
Review all knowledge files and identify gaps.
```

### Exam Mode
```
Quiz me on everything in the knowledge files.
```
