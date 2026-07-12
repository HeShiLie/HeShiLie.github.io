---
status: active
date: 2026-07-12
scope: homepage
---

# ADR: Use Astro for the Personal Academic Homepage

## Context

The homepage should be a personal academic site maintained in this repository and deployed to a GitHub Pages `github.io` domain. The user provided `rubzip/academic-portfolio-astro` as the desired template and asked to use `external/resume/resume_chinese.tex` as the content source of truth.

## Decision

Use Astro with the `academic-portfolio-astro` template as the homepage stack.

## Rationale

Astro produces a static site suitable for GitHub Pages, keeps academic content in Markdown collections, and matches the requested template. This is heavier than a single HTML file, but the user explicitly selected an Astro academic portfolio template and the content model fits long-term maintenance of publications, projects, and CV entries.

## Consequences

- Site source lives in `src/`, static assets in `public/`, and configuration in `astro.config.mjs` / `src/config/`.
- Local development requires Node.js and `npm install`.
- Production build output is `dist/`, suitable for GitHub Pages deployment through GitHub Actions.
- Future content updates should prefer editing Markdown files under `src/content/` and keeping them consistent with `external/resume/resume_chinese.tex`.
