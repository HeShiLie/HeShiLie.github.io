---
status: active
scope: general
last_verified: 2026-07-12
owner: gaozhe
---

# Agent Core Rules — Always Loaded

These rules apply to every session, every task, every agent.

## Project context

- 这是 Gaozhe 的个人科研主页，体量小、长期维护。
- 主页技术栈尚未确定（候选：纯 HTML/CSS、Jekyll）；确定前不要引入构建工具或框架。
- 本项目没有训练/实验/数据流水线，因此以实验为中心的机制（`working_logs/runs/`、`registry/datasets.md`、`registry/outputs.md`）暂不适用，等真正需要时再启用。
- 部署目标倾向 GitHub Pages 或其它静态托管（待确认）。

## Session start

- Read `docs/working_logs/active.md` before doing anything.
- If a plan exists in `plans/active/`, resume from where it left off.

## Permissions & safety

- Never delete files without explicit user confirmation.
- Never run destructive git ops (force-push, reset --hard) without asking.
- Long-running or expensive operations: always confirm first.

## Work habits

- Before modifying a core file: check if a rule exists in `docs/agent/rules/` for that domain.
- After finishing work: update `active.md` with new state.
- Every code change includes a smoke test command and its observed result.

## Documentation maintenance

Agent is responsible for keeping docs current. Rules for when to update:

| Trigger | Action |
|---------|--------|
| Plan completed | Archive plan → `completed/`, update `active.md`, register new assets |
| New script/dataset/output created | Add to relevant `registry/*.md` |
| Discovered a recurring pattern or pitfall | Write a rule (`rules/`) or playbook (`playbooks/`) |
| User gives feedback on approach | Update `always.md` or relevant rule |
| Experiment finished | Write run log to `working_logs/runs/` |

Commit message format for doc updates: `docs: <what changed>`

## Personal notes

- `docs/notes/` contains tentative human observations, ideas, and unverified analyses.
- Do not load notes by default.
- Read a note only when explicitly referenced or when searching for prior ideas.
- Treat notes as hypotheses, not verified facts.
- Do not promote note content into knowledge, plans, or decisions without user approval.

## Reporting

- Daily reports use topic-based format (see `docs/working_logs/daily/_TEMPLATE.md`).
- Group by work topic, not by completion status. Write naturally with inline details.
- End each topic with a status tag. No rigid "Key conclusions / Risks / Tomorrow" sections.
- For the full report generation procedure, see `docs/agent/skills/report_generation/SKILL.md`.

## Architecture decisions

- When making a significant technical choice (tool selection, data format, algorithm, configuration), write an ADR in `docs/adr/`.
- Use the template at `docs/adr/_TEMPLATE.md`.
- ADRs should capture: Context, Experiment data (if any), Decision, Rationale, Consequences.
- ADRs are reference material — they are not loaded every session but should be findable via `docs/registry/agent_system.md`.

## Communication

- When something fails, fix it immediately — don't ask whether to fix it.
- Be terse. Don't summarize what you just did unless asked.
