---
status: active
created: 2026-07-12
---

# 搭建个人科研主页骨架

## User Goal

> 搞一个科研的个人主页面，并且以后也在这里维护。

（主页技术栈尚未确定。）

## For Agent: Execution Protocol

1. Read and follow `docs/agent/always.md`.
2. 基于 User Goal 填写 Agent Refined Plan / Required Agent Resources / Acceptance Criteria。
3. 需要找 Rules / Skills / Playbooks 时查 `docs/registry/agent_system.md`，按需加载。
4. User Goal 是最高准则：不删改、不扩大范围、有歧义或高成本先问用户。
5. 实现并验证后填写 Execution Report。
6. 用户批准前 status 保持 `active`（不提前 archive、不把结果说成最终结论）。

## Agent Refined Plan

### Understanding

用户需要一个长期维护的个人科研主页仓库。workspace 文档结构已初始化完成。下一步是选定主页技术栈，并搭出一个可在本地预览、可部署的骨架页面。

### Scope

#### In Scope
- 与用户确认主页技术栈（纯 HTML/CSS、Jekyll、或其它）。
- 搭建主页骨架：基本页面 / 区块（如 首页、关于、论文、联系方式，以用户确认为准）。
- 本地可预览，且可部署到静态托管（如 GitHub Pages）。

#### Out of Scope
- 具体内容填充（论文列表、简历细节）——骨架定后再做。
- 域名 / 正式上线——先在本地跑通。

### Steps

1. 与用户确认技术栈与所需页面区块。
2. 按所选技术栈创建项目骨架文件。
3. 本地预览验证（smoke test）。
4. 更新 `CLAUDE.md` 的命令与 Key paths；如有新脚本/资源，登记到 `registry/`。
5. 选定技术栈的决定写一条 ADR。

## Required Agent Resources

### Rules
- `rule:safety` → `docs/agent/rules/safety.md`

### Skills
- 暂无

### Playbooks
- 暂无

## Acceptance Criteria

- [ ] 主页技术栈已确定并记录（建议写一条 ADR）。
- [ ] 主页能在本地打开 / 构建 / 预览。
- [ ] `CLAUDE.md` 的命令与 Key paths 已更新为真实值。

---

## Execution Report

<!-- 待执行后填写 -->
