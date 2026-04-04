# AI Engineer CV Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the Godel-tailored CV into a general `AI Engineer` profile with strong quality, testing, and reliability differentiation.

**Architecture:** Update the source CV HTML first, then mirror the approved copy into the dedicated deploy entrypoint because Vercel serves the page from `deploy/godel-ai-practitioner-cv/`. Keep layout and interaction structure intact while rewriting metadata, hero messaging, career framing, sidebar profile blocks, and development signals. Adjust the deploy Playwright test so it asserts the new public contract.

**Tech Stack:** Static HTML/CSS/JS, Playwright, `http-server`

---

### Task 1: Capture the approved repositioning

**Files:**
- Create: `docs/superpowers/specs/2026-04-04-ai-engineer-cv-repositioning-design.md`
- Create: `docs/superpowers/plans/2026-04-04-ai-engineer-cv-repositioning.md`

- [ ] **Step 1: Write the design document**

Describe the approved target profile, de-branding rules, section rewrites, and new learning signals.

- [ ] **Step 2: Write the implementation plan**

List the exact files to update plus the expected verification command.

- [ ] **Step 3: Review both docs locally**

Run: `sed -n '1,220p' docs/superpowers/specs/2026-04-04-ai-engineer-cv-repositioning-design.md && sed -n '1,260p' docs/superpowers/plans/2026-04-04-ai-engineer-cv-repositioning.md`
Expected: both documents reflect the approved `AI Engineer` positioning and mention `AIDEAS` plus `n8n`.

### Task 2: Rewrite the source CV copy

**Files:**
- Modify: `godel-ai-practitioner-cv.html`

- [ ] **Step 1: Rewrite top metadata and hero**

Replace the title, meta description, brand subtitle, hero eyebrow, hero heading, and hero lead so the page no longer targets Godel and instead presents an AI engineer with a strong reliability and quality background.

- [ ] **Step 2: Rewrite the capability panel**

Update the "Mission Control" items to describe operating model, AI engineering usage, quality/reliability lens, and delivery environments.

- [ ] **Step 3: Reframe the experience section**

Keep the dates and companies, but rewrite summaries and tags to emphasize AI-enabled engineering, delivery ownership, release confidence, and product building.

- [ ] **Step 4: Reframe the sidebar and development blocks**

Rename the focus section to `AI Engineering Profile`, rewrite its data points, and add a development item for planned `AIDEAS` training in May 2026 plus ongoing `n8n` learning.

- [ ] **Step 5: Rewrite proof points and initiatives**

Keep the Paily and LinkedIn cards, but turn them into evidence blocks for engineering ownership and technical communication. Update initiatives to highlight knowledge sharing, AI-enabled delivery practices, and self-driven learning.

### Task 3: Sync the deploy entrypoint

**Files:**
- Modify: `deploy/godel-ai-practitioner-cv/index.html`

- [ ] **Step 1: Mirror the approved source copy into the deploy file**

Ensure the deploy entrypoint matches the source page for all changed user-facing text.

- [ ] **Step 2: Spot-check for leftover brand-specific language**

Run: `rg -n "Godel|AI Practitioner for Godel|Tailored for Godel" godel-ai-practitioner-cv.html deploy/godel-ai-practitioner-cv/index.html`
Expected: no matches.

### Task 4: Update verification to the new public contract

**Files:**
- Modify: `test/tests/vercel-deploy.spec.ts`

- [ ] **Step 1: Update the deploy assertions**

Assert the new title, brand subtitle, and hero heading that represent the public AI engineer positioning.

- [ ] **Step 2: Run the targeted test**

Run: `cd test && npx playwright test tests/vercel-deploy.spec.ts --project=chromium`
Expected: PASS.

- [ ] **Step 3: Review the final diff**

Run: `git diff -- docs/superpowers/specs/2026-04-04-ai-engineer-cv-repositioning-design.md docs/superpowers/plans/2026-04-04-ai-engineer-cv-repositioning.md godel-ai-practitioner-cv.html deploy/godel-ai-practitioner-cv/index.html test/tests/vercel-deploy.spec.ts`
Expected: only approved CV repositioning, docs, and test updates are present.
