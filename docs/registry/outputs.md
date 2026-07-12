---
status: active
scope: general
last_verified: 2026-07-12
owner: gaozhe
---

# Output Registry

Index of all output directories and artifacts produced by this project.

## Format

```markdown
### Output Name
**Path**: `path/to/outputs/`
**Produced by**: Which script generates this
**Format**: File types and structure
**Notes**: Retention policy, dependencies, etc.
```

---

<!-- Populate during workspace initialization.
     Agent should discover output directories and add entries here. -->

### Chinese Resume PDF
**Path**: `external/resume/resume_chinese.pdf`
**Produced by**: `xelatex -interaction=nonstopmode -halt-on-error resume_chinese.tex` run from `external/resume/`
**Format**: PDF, A4, currently 2 pages
**Notes**: Generated artifact is ignored by `external/resume/.gitignore`; source of truth is `external/resume/resume_chinese.tex`.

<!-- Example:
### Model Checkpoints
**Path**: `outputs/checkpoints/`
**Produced by**: `scripts/train.sh`
**Format**: `.pt` files, named `epoch_{N}.pt`
**Notes**: Keep only latest 3; older ones can be deleted

### Evaluation Results
**Path**: `outputs/eval/`
**Produced by**: `evaluate.py`
**Format**: JSON files with metrics per checkpoint
-->
