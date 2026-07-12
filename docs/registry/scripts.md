---
status: active
scope: general
last_verified: 2026-07-12
owner: gaozhe
---

# Script Registry

Index of all scripts in this project. Each entry documents purpose, usage, inputs, and outputs.

## Format

```markdown
### path/to/script.sh
**Purpose**: One-line description.
**Usage**: `command to run`
**Inputs**: What it reads
**Outputs**: What it produces
**Notes**: Any caveats
```

---

<!-- Populate this file during workspace initialization (see playbook:init-workspace).
     Agent should scan for scripts and add entries here. -->

## Shell Scripts (`scripts/`)

<!-- Example:
### scripts/train.sh
**Purpose**: Launch training with default hyperparameters.
**Usage**: `bash scripts/train.sh [config.yaml]`
**Inputs**: Config file (optional, defaults to `configs/default.yaml`)
**Outputs**: Checkpoints in `outputs/checkpoints/`, logs in `outputs/logs/`
-->

## Python Scripts

<!-- Example:
### evaluate.py
**Purpose**: Run evaluation on test set and print metrics.
**Usage**: `python evaluate.py --checkpoint outputs/checkpoints/best.pt`
**Outputs**: `outputs/eval_results.json`
-->

## npm Scripts

### npm run dev
**Purpose**: Start the Astro development server.
**Usage**: `npm run dev`
**Inputs**: `src/`, `public/`, `astro.config.mjs`, `package.json`
**Outputs**: Local dev server at `http://localhost:4321`.
**Notes**: Requires `npm install` first.

### npm run build
**Purpose**: Build the static site for production.
**Usage**: `npm run build`
**Inputs**: Astro source and content files.
**Outputs**: `dist/`
**Notes**: Smoke test command for website changes.

### npm run preview
**Purpose**: Preview the production build locally.
**Usage**: `npm run preview`
**Inputs**: `dist/`
**Outputs**: Local preview server.
