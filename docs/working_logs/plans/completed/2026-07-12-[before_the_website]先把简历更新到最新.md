---
status: completed
created: 2026-07-12
completed: 2026-07-12
---
## User Goal

> Written by the user. Can be informal, any language, incomplete.
> Agent must NOT delete, overwrite, or alter this section.

我的目标是先更新一波简历，现在这版简历存在一些问题：
- "代表性论文"：
  - 首先这个“代表性论文”起名就得换成 "Publications"
  - 内容得大改，看计划书后面我的增添内容
- "研究方向与岗位匹配"
  - "研究方向与岗位匹配"这个名字直接叫“Research Interests”就行了
  - 格式得大改，写成那种一段话的，别列bullets：
  - 先说当前研究的方向主要集中在“多模态的理解与生成”（此处我用词可能不严谨）
- 实习经历：
  - 不用细写了，一段一句话就行
  - 新添一段 2025.12-今的：
    - 投ICLR的这几篇都是在这里搞的
    - 我还参与了Abotworld的项目，你搜一下这个项目的，应该最近开源了
- 技能：
  - 就两段话就行，
    - 第一段说我熟练掌握后训练框架VeRL，语言模型和视觉生成模型都很了解
    - 第二段体现受过完整的数学专业教育

### "Publications" 部分怎么改
- “Macro-from-Micro ”这篇就别放了，不是一作
- VideoTIR 放最上面
- WorldRoamBench (https://arxiv.org/abs/2606.31672, 这个我是共同一作，其实挺恶心的，一作二作是高德这边的正职，我是实习生但工作一点都没少干，首先就是physics的设计与评测，还负责了pose推理（ViPE，megasam在amd上适配等工程问题），还负责了所有的绘图，我的工作量绝对值得拿共一前2的，但是这些牢骚话不要在简历中体现)
  - 这篇准备投ICLR
- 格式上：其他我一作的就不用备注了，WorldRoamBench 备注下
- SmartSAM 改投IJCV了
- C3DG也中了IEEE TGRS
- 另外两篇新增的在投的：
  - Carrier Physically-Aware Vision-Language Camera Pose Correction for Embodied World Models：
    - Zhe Gao, Kewei Shi, Ting-Bing Xu, Zhicheng Liu, Mu Xu, Qi Fan
    - 准备投ICLR（eccv 333 放弃rebuttal了）
  - FERM: Flow Editing Models Are Training-Free Reward Models
    - Zhe Gao, Jiacheng Sui, Ting-Bing Xu, Zhicheng Liu, Mu Xu, Qi Fan
- 注意除了IEEE TGRS那两篇外，我的所有一作文章的通信都是qi fan老师（我的博导）；TGRS那两篇通信是我的硕导 bin pan 老师
- AbotWorld 这个技术报告也有我的名字，你可以放在“Carrier Physically-Aware Vision-Language Camera Pose Correction for Embodied World Models”前
- 排序上：
  - VideoTIR
  - WorldRoamBench
  - AbotWorld
  - FERM: Flow Editing Models Are Training-Free Reward Models
  - Carrier Physically-Aware Vision-Language Camera Pose Correction for Embodied World Models
  - SmartSAM
  - TGRS那两篇

bib参考如下
```
@misc{xu2026worldroambenchopenworldbenchmarklonghorizon,
      title={WorldRoamBench: An Open-World Benchmark for Long-Horizon Stability of Interactive World Models}, 
      author={Ting-Bing Xu and Jiacheng Sui and Zhe Gao and Kewei Shi and Wenjin Yang and Zhicheng Liu and Zhaoxu Sun and Mingchao Sun and Hongyu Pan and Fan Jiang and Mu Xu and Qi Fan and Yang Gao and Yong Li and Baoquan Chen},
      year={2026},
      eprint={2606.31672},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2606.31672}, 
}
```

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

   - [x] Update status to `completed`, move to `plans/completed/`.
   - [x] Update `docs/working_logs/active.md`.
   - [x] **Register new assets**: new scripts → `registry/scripts.md`; new data/outputs → `registry/outputs.md` or `registry/datasets.md`.
   - [x] **Register new agent resources**: new rules/skills/playbooks → `registry/agent_system.md`.
   - [x] If document structure changed, update `docs/README.md`.
   - [x] If an experiment was run, write a run log to `working_logs/runs/`.

## Agent Refined Plan

### Understanding

更新 `external/resume/resume_chinese.tex` 中的中文简历内容，使其反映用户最新科研方向、论文/技术报告排序、实习经历与技能表述。任务重点是内容更新与 PDF 可编译验证，不改变简历模板结构。

### Scope

#### In Scope

- 更新章节名：`研究方向与岗位匹配` → `Research Interests`，`代表性论文` → `Publications`。
- 将 Research Interests 改为段落式表述。
- 按用户指定顺序更新 Publications，移除 Macro-from-Micro，新增 WorldRoamBench、AbotWorld、FERM、Carrier，并更新 SmartSAM / C3DG 状态。
- 精简实习经历为每段一句话，并新增 2025.12 至今实习。
- 将技能改为两段话，覆盖 VeRL/语言模型/视觉生成模型与数学专业训练。
- 重新编译生成 `resume_chinese.pdf` 并做基本文本核验。

#### Out of Scope

- 不改英文简历 `resume.tex`，除非用户另行要求。
- 不调整模板样式、照片、联系方式和教育背景。
- 不伪造 AbotWorld 公开作者列表；未核准的作者顺序不写入。

### Steps

1. 读取安全规则、简历源文件和相关 registry。
2. 检索 AbotWorld/ABotWorld 公开信息，确定保守写法。
3. 修改 `resume_chinese.tex` 对应章节。
4. 使用 XeLaTeX 编译 `resume_chinese.pdf`。
5. 使用文本抽取和日志检查做 smoke test。
6. 更新本计划 Execution Report，并将状态置为 `awaiting_approval`。

## Required Agent Resources

### Rules

- `rule:safety` → `docs/agent/rules/safety.md`

### Skills

- 暂无

### Playbooks

- 暂无

## Acceptance Criteria

- [x] `resume_chinese.tex` 已按用户要求更新 Research Interests / Publications / 实习经历 / 技能。
- [x] `resume_chinese.pdf` 已重新编译生成。
- [x] 验证结果确认关键新增/修改内容出现在 PDF 文本中。

---

## Execution Report

### Summary

- 已更新中文简历：Research Interests 改为段落式表述；Publications 改名并按指定顺序重排，移除 Macro-from-Micro，新增 WorldRoamBench / ABotWorld / FERM / Carrier，更新 SmartSAM 和 C3DG 状态；WorldRoamBench、FERM 与 Carrier 均标为 preparing for ICLR 2027 submission；WorldRoamBench 条目已补充贡献说明；实习经历压缩为每段一句并新增 2025.12 至今经历；技能改为两段话。
- 已重新生成本地 PDF 并完成 smoke test；修正了实习经历跨页断开的排版问题。用户已批准归档。

### Changed Files

| File | Change |
| ---- | ------ |
| `external/resume/resume_chinese.tex` | 更新中文简历内容 |
| `external/resume/resume_chinese.pdf` | 本地重新编译生成，文件被 `external/resume/.gitignore` 忽略 |
| `docs/registry/outputs.md` | 登记简历 PDF 输出 |
| `docs/working_logs/active.md` | 更新当前工作状态 |
| `docs/working_logs/plans/completed/2026-07-12-[before_the_website]先把简历更新到最新.md` | 补全计划和执行报告，置为 `completed` 并归档 |

### Commands

```bash
# Key commands executed
sed -n '1,260p' 'docs/working_logs/plans/active/2026-07-12-[before_the_website]先把简历更新到最新.md'
sed -n '1,220p' docs/agent/rules/safety.md
sed -n '1,260p' external/resume/resume_chinese.tex
web search: "AbotWorld" / "ABotWorld" / "Zhe Gao ABot"
xelatex -interaction=nonstopmode -halt-on-error resume_chinese.tex
xelatex -interaction=nonstopmode -halt-on-error resume_chinese.tex
pdfinfo resume_chinese.pdf | sed -n '1,40p'
pdftotext resume_chinese.pdf - | rg -n "Research Interests|Publications|WorldRoamBench|ABotWorld|FERM|Carrier|SmartSAM|C\\^3DG|LiCa|VeRL|完整的数学|Macro-from-Micro|代表性论文|研究方向与岗位匹配"
rg -n "(^!|Overfull|Underfull|Undefined control sequence|LaTeX Warning|Package .*Warning|No file)" resume_chinese.log
pdftoppm -png -singlefile -f 1 -r 144 resume_chinese.pdf /tmp/resume_chinese_page1
pdftoppm -png -singlefile -f 2 -r 144 resume_chinese.pdf /tmp/resume_chinese_page2_after
pdftotext resume_chinese.pdf - | rg -n "ICLR 2027|ICLR submission, 2026|FERM|Carrier|WorldRoamBench"
pdftotext resume_chinese.pdf - | rg -n "贡献：物理评测设计|Contribution: physics evaluation|生成视频的位姿推理|论文制图"
```

### Verification Results

```text
# Output and conclusions
xelatex: succeeded, output written on resume_chinese.pdf (2 pages).
pdfinfo: Pages: 2, A4.
pdftotext key checks: found Research Interests, Publications, WorldRoamBench, ABotWorld, FERM, Carrier, SmartSAM, LiCa, VeRL, 完整的数学.
pdftotext key checks: did not match removed old headings 代表性论文 / 研究方向与岗位匹配 or removed Macro-from-Micro entry.
ICLR status check: WorldRoamBench / FERM / Carrier all use `preparing for ICLR 2027 submission`; old `ICLR submission, 2026` is absent.
WorldRoamBench contribution check: found `贡献：物理评测设计、生成视频的位姿推理、论文制图。`; old English contribution sentence is absent.
log scan: no fatal error, no overfull/underfull boxes. Remaining warnings are pre-existing template warnings: obsolete xcolor option, notePlus package case warning, missing bbl because no bibliography is printed.
visual check: page 1 ends after Publications; page 2 starts cleanly at 实习经历.
```

### Outputs

- `external/resume/resume_chinese.pdf`（本地生成，git ignored）

### Remaining Issues

- ABotWorld 公开检索未稳定确认含 Zhe Gao 的作者列表，因此简历中采用保守写法 `ABotWorld Team, including Zhe Gao`，未伪造完整作者顺序。
- 新增 2025.12 至今实习机构按上下文写为 `高德, 北京`，建议用户验收时确认地点/机构是否需要调整。

### Suggested Next Step

- 回到主页技术栈确认，并继续搭建个人科研主页骨架。
