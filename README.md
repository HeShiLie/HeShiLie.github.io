# Gaozhe Homepage

个人科研主页，长期在此仓库维护。

本仓库同时是一个 [AI-native workspace](docs/README.md)：`docs/` 下的结构用于记录项目状态、计划与决策，方便 AI agent（Claude Code 等）跨会话协作而不丢上下文。

## 入口

- Agent 入口（Claude Code）：[`CLAUDE.md`](CLAUDE.md)
- Agent 入口（通用）：[`AGENTS.md`](AGENTS.md)
- 文档地图：[`docs/README.md`](docs/README.md)
- 当前工作状态：[`docs/working_logs/active.md`](docs/working_logs/active.md)

## 状态

- 主页技术栈：Astro + Tailwind CSS，基于 `rubzip/academic-portfolio-astro` 模板改造。
- 当前内容源来自 `external/resume/resume_chinese.tex`。
- 部署目标：GitHub Pages user site（`https://HeShiLie.github.io/`）。

## 本地开发

```bash
npm install
npm run dev
npm run build
```

本地开发服务器默认运行在 `http://localhost:4321`。

## 工作方式

每个会话开始时，agent 会先读 `docs/agent/always.md` 与 `docs/working_logs/active.md`，再开始工作。详见 [`docs/README.md`](docs/README.md)。
