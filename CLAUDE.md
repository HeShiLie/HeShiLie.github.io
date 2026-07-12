# Gaozhe Homepage

Gaozhe 的个人科研主页，长期在此仓库维护。

## Read first
- Documentation map: `docs/README.md`
- Agent rules (always loaded): `docs/agent/always.md`
- Current work status: `docs/working_logs/active.md`
- Agent system index: `docs/registry/agent_system.md`
- Script registry: `docs/registry/scripts.md`
- Dataset registry: `docs/registry/datasets.md`
- Output registry: `docs/registry/outputs.md`

## Golden rules
1. Do NOT run expensive/long jobs without explicit user confirmation.
2. Before modifying core files, check `docs/agent/rules/` for a relevant domain rule.
3. Every change must include a smoke test (here: 在浏览器打开页面 / 本地构建并预览) and the observed result.
4. Do NOT delete or overwrite files without confirmation — investigate first.
5. Keep `docs/working_logs/active.md` updated when work state changes.
6. Notes (`docs/notes/`) are hypotheses, not facts — do not promote without user approval.
7. Significant technical decisions (e.g. 选定主页技术栈) must be recorded as ADRs in `docs/adr/`.

## Quick reference
```bash
# TODO: 主页技术栈待定。确定后在此补充 build / serve / deploy 命令。
# 候选方向：
#   open index.html              # 纯 HTML/CSS
#   bundle exec jekyll serve     # Jekyll (GitHub Pages 原生)
```

## Key paths
| Item | Path |
|------|------|
| Homepage source | `.` （根目录，具体结构随技术栈而定） |
| Workspace docs | `docs/` |
| Current work state | `docs/working_logs/active.md` |
