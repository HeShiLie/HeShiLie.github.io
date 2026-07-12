---
status: completed
created: 2026-07-12
---

# 搭建个人科研主页骨架

## User Goal

> Written by the user. Can be informal, any language, incomplete.
> Agent must NOT delete, overwrite, or alter this section.

搞一个个人网站（用github给的io那个域名，我懒得买新域名了），以后也在这个子仓维护

https://github.com/rubzip/academic-portfolio-astro?utm_source=chatgpt.com

以这个子仓为模版；以 `external/resume/resume_chinese.tex` 我的简历为准

## For Agent: Execution Protocol

1. Read and follow `docs/agent/always.md`.

2. Based on **User Goal**, fill in:
   - `Agent Refined Plan`
   - `Required Agent Resources`
   - `Acceptance Criteria`

3. To find available Rules, Skills, or Playbooks, check:
   - `docs/registry/agent_system.md`
   - Do not load everything — only what's relevant.

4. When refining:
   - User Goal is the highest source of truth.
   - Do not omit any explicit user requirement.
   - Do not expand scope beyond what was asked.
   - Non-blocking side issues: note them, don't pursue them.
   - If there's ambiguity, danger, or high cost: ask the user first.

5. After implementation and verification, fill in the **Execution Report**.

6. Before user approval:
   - Set status to `awaiting_approval`, not `completed`.
   - Do not archive the plan.
   - Do not describe experimental results as final conclusions.

7. After user approval, complete this **archival checklist** (do not skip):
   - [ ] Update status to `completed`, move to `plans/completed/`.
   - [ ] Update `docs/working_logs/active.md`.
   - [ ] **Register new assets**: new scripts → `registry/scripts.md`; new data/outputs → `registry/outputs.md` or `registry/datasets.md`.
   - [ ] **Register new agent resources**: new rules/skills/playbooks → `registry/agent_system.md`.
   - [ ] If document structure changed, update `docs/README.md`.
   - [ ] If an experiment was run, write a run log to `working_logs/runs/`.

## Agent Refined Plan

### Understanding

用户要用 GitHub Pages 的 `github.io` 域名维护个人科研主页，并明确给出 `rubzip/academic-portfolio-astro` 作为模板。主页内容应先以 `external/resume/resume_chinese.tex` 为准，搭出可本地预览、可 GitHub Pages 部署的骨架。

### Scope

#### In Scope

- 引入 Astro 学术主页模板并改造成 Gaozhe 的个人科研主页。
- 基于简历内容填写 About、Publications、Projects、CV。
- 配置 GitHub Pages 构建 workflow。
- 写 ADR 记录技术栈选择。
- 本地构建和 HTTP smoke test。

#### Out of Scope

- 正式 push / 线上部署（后续按用户要求单独处理）。
- 购买或配置自定义域名。
- 填充尚未确认的 Google Scholar / ORCID / LinkedIn 链接。
- 将主页内容扩展到博客、教学、报告等暂无内容的栏目。

### Steps

1. 拉取并检查 `academic-portfolio-astro` 模板。
2. 复制 Astro 骨架到仓库根目录，避免覆盖 workspace 文档。
3. 用简历内容替换模板示例内容。
4. 收窄导航和路由到 About / Publications / Projects / CV。
5. 配置 GitHub Pages workflow、README、CLAUDE、registry 和 ADR。
6. 安装依赖、构建、启动本地 dev server，并做 HTTP smoke test。

## Required Agent Resources

### Rules

- `rule:safety` → `docs/agent/rules/safety.md`

### Skills

- 暂无

### Playbooks

- 暂无

## Acceptance Criteria

- [x] Astro homepage skeleton exists under `src/`, `public/`, and project config files.
- [x] About / Publications / Projects / CV content reflects `external/resume/resume_chinese.tex`.
- [x] `npm run build` succeeds.
- [x] Local dev server is running and key pages return expected content.
- [x] GitHub Pages workflow exists.

---

## Execution Report

### Summary

- 已基于 `rubzip/academic-portfolio-astro` 搭建 Astro 个人科研主页骨架。
- 已替换模板示例内容，主页开放 About / Publications / Projects / CV。
- 已配置 GitHub Pages workflow，目标 user-site URL 为 `https://HeShiLie.github.io/`。
- 已补充 ADR、README、CLAUDE、registry 和 active work 状态。
- 用户已确认继续发布；归档本初始化计划，GitHub push 作为后续发布动作处理。

### Changed Files

| File | Change |
|------|--------|
| `src/`, `public/`, `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json` | 新增 Astro 站点骨架 |
| `.github/workflows/deploy.yml` | 新增 GitHub Pages 部署 workflow |
| `src/content/` | 用简历内容填充 About / Publications / Projects / CV |
| `README.md`, `CLAUDE.md` | 更新技术栈和本地命令 |
| `docs/adr/2026-07-12-use-astro-for-homepage.md` | 记录 Astro 技术栈选择 |
| `docs/registry/scripts.md`, `docs/registry/outputs.md`, `docs/registry/agent_system.md` | 登记 npm scripts、build 输出、ADR |
| `docs/working_logs/active.md` | 更新当前工作状态 |

### Commands

```bash
# Key commands executed
git clone --depth 1 https://github.com/rubzip/academic-portfolio-astro.git /tmp/academic-portfolio-astro
rsync -a /tmp/academic-portfolio-astro/src /tmp/academic-portfolio-astro/public /tmp/academic-portfolio-astro/package.json /tmp/academic-portfolio-astro/package-lock.json /tmp/academic-portfolio-astro/astro.config.mjs /tmp/academic-portfolio-astro/tsconfig.json /tmp/academic-portfolio-astro/LICENSE ./
npm install
npm run build
npm run dev -- --host 127.0.0.1
curl -I http://127.0.0.1:4321/
curl -s http://127.0.0.1:4321/ | rg -n "Zhe Gao|Nanjing University|multimodal|Publications|Projects|CV"
curl -s http://127.0.0.1:4321/publications/ | rg -n "VideoTIR|WorldRoamBench|FERM|Carrier|SmartSAM|LiCa"
curl -s http://127.0.0.1:4321/cv/ | rg -n "Nanjing University|Zhejiang Lab|Gaode|Skills|Honors"
```

### Verification Results

```text
# Output and conclusions
npm run build: succeeded, 15 static pages built under dist/.
Generated routes: /, /publications/, publication detail pages, /projects/, project detail pages, /cv/, /404.html.
HTTP smoke test: http://127.0.0.1:4321/ returned 200 OK.
Content smoke test: homepage contains Zhe Gao / Nanjing University / multimodal; publications page contains VideoTIR, WorldRoamBench, FERM, Carrier, SmartSAM, LiCa; CV page contains Nanjing University, Zhejiang Lab, Gaode, Skills, Honors.
Dev server: running at http://127.0.0.1:4321/.
```

### Outputs

- `dist/` from `npm run build`（ignored generated output）
- Local dev server at `http://127.0.0.1:4321/`

### Remaining Issues

- GitHub user-site URL and social link have been updated to the user's GitHub account `HeShiLie`.
- No Google Scholar / ORCID / LinkedIn links were added because they were not available in the resume.

### Follow-up

- 创建并推送 `HeShiLie/HeShiLie.github.io`。当前本机 `gh` token 已失效，需要重新认证后继续。
