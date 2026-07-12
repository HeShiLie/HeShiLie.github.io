---
status: active
scope: general
last_verified: 2026-07-12
owner: gaozhe
---

# Agent System Registry

This file indexes all agent resources. It is the lookup table — details live in each linked file.

## Entry Points

| Name | Purpose | Path |
|------|---------|------|
| Claude entry | Claude Code entry point | `CLAUDE.md` |
| Generic agent entry | Other agents (Codex, etc.) | `AGENTS.md` |
| Core rules | Every session | `docs/agent/always.md` |
| Active work | Current state | `docs/working_logs/active.md` |

## Rules

Hard constraints that must always (or conditionally) be followed.

| ID | Rule | Applies when | Path |
|----|------|--------------|------|
| `rule:safety` | Safety & permissions | Always | `docs/agent/rules/safety.md` |

<!-- Add more rules as they are created:
| `rule:coding-style` | Coding conventions | Writing code | `docs/agent/rules/coding_style.md` |
| `rule:cluster` | Cluster job rules | Submitting jobs | `docs/agent/rules/cluster_jobs.md` |
-->

## Skills

Standard procedures that can be executed step-by-step.

| ID | Skill | Trigger | Path |
|----|-------|---------|------|
| `skill:report` | Daily / weekly report | User asks for report or summary | `docs/agent/skills/report_generation/SKILL.md` |

<!-- Add more skills as they are created:
| `skill:run-inference` | Run model inference | New data needs processing | `docs/agent/skills/run_inference/SKILL.md` |
| `skill:submit-job` | Submit cluster job | User requests cluster run | `docs/agent/skills/submit_job/SKILL.md` |
-->

## Playbooks

Complex workflows and troubleshooting guides.

| ID | Playbook | Use when | Path |
|----|----------|----------|------|
| `playbook:init-workspace` | Initialize workspace | First session or user asks | `docs/agent/playbooks/init_workspace.md` |

<!-- Add playbooks as they are created:
| `playbook:debug-inference` | Debug failures | Inference fails or hangs | `docs/agent/playbooks/debug_inference.md` |
-->

## Knowledge

Reference material loaded on demand.

| ID | Topic | Path |
|----|-------|------|
| `adr:homepage-astro` | Astro chosen for personal academic homepage | `docs/adr/2026-07-12-use-astro-for-homepage.md` |

<!-- Add knowledge as it is created:
| `knowledge:pipeline` | System architecture | `docs/knowledge/pipeline.md` |
-->

## Usage in plans

When referencing agent resources in a plan, write both ID and path:

```md
## Required Agent Resources

Rules:
- `rule:safety` → `docs/agent/rules/safety.md`

Skills:
- `skill:run-inference` → `docs/agent/skills/run_inference/SKILL.md`

Playbooks (if needed):
- `playbook:debug-inference` → `docs/agent/playbooks/debug_inference.md`
```

## When to read this file

- When planning a new task (discover available capabilities)
- When unsure if a workflow already exists
- When adding or maintaining rules/skills/playbooks
- When a plan only gives an ID without a path
