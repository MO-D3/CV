# Godel Vercel Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish only the Godel-targeted CV on Vercel from this repository.

**Architecture:** Keep the repository intact, but create a dedicated deploy root that contains only the public Godel CV entrypoint. Configure Vercel to import the GitHub repository and point the project Root Directory at that deploy folder so Vercel ignores the rest of the repo during deployment.

**Tech Stack:** Static HTML, GitHub, Vercel, Playwright

---

### Task 1: Prove the deploy target contract

**Files:**
- Create: `test/tests/vercel-deploy.spec.ts`
- Test: `test/playwright.config.ts`

- [ ] **Step 1: Write the failing test**

```ts
test('serves the dedicated Godel CV entrypoint', async ({ page }) => {
  await page.goto('/deploy/godel-ai-practitioner-cv/');
  await expect(page).toHaveTitle(/Godel Technologies/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd test && npx playwright test tests/vercel-deploy.spec.ts --project=chromium`
Expected: FAIL because the deploy directory does not exist yet.

- [ ] **Step 3: Add the deploy entrypoint**

Create `deploy/godel-ai-practitioner-cv/index.html` from the approved Godel CV source file.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd test && npx playwright test tests/vercel-deploy.spec.ts --project=chromium`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add test/tests/vercel-deploy.spec.ts deploy/godel-ai-practitioner-cv/index.html
git commit -m "feat: add dedicated Vercel deploy target for Godel CV"
```

### Task 2: Document the deployment shape

**Files:**
- Create: `docs/superpowers/specs/2026-03-28-godel-vercel-deployment-design.md`
- Create: `docs/superpowers/plans/2026-03-28-godel-vercel-deployment.md`

- [ ] **Step 1: Write the deployment design**

Capture the chosen deploy-folder approach and the exact Vercel settings.

- [ ] **Step 2: Save the implementation plan**

Document the test-first flow, root directory, and publish steps.

- [ ] **Step 3: Commit**

```bash
git add docs/superpowers/specs/2026-03-28-godel-vercel-deployment-design.md \
  docs/superpowers/plans/2026-03-28-godel-vercel-deployment.md
git commit -m "docs: capture Godel Vercel deployment plan"
```

### Task 3: Publish to main

**Files:**
- Modify: Git history on `main`

- [ ] **Step 1: Verify the repository state**

Run: `git status --short`
Expected: only intentional CV and deployment files are present.

- [ ] **Step 2: Commit the final release content**

```bash
git add -A
git commit -m "feat: publish Godel CV deployment target"
```

- [ ] **Step 3: Move the work onto `main`**

```bash
git checkout main
git pull --ff-only origin main
git merge --ff-only eng-default-hamburger || git merge --no-ff eng-default-hamburger
```

- [ ] **Step 4: Push**

```bash
git push origin main
```

- [ ] **Step 5: Import into Vercel**

In Vercel:

1. Create an account and choose GitHub sign-in.
2. Import `MO-D3/CV`.
3. Set project name to `michal-olesiak-online-cv-godel`.
4. Set Root Directory to `deploy/godel-ai-practitioner-cv`.
5. Choose `Other` as Framework Preset.
6. Leave Build Command empty and deploy.
