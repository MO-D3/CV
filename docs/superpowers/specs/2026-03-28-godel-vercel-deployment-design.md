# Godel CV Vercel Deployment Design

## Goal

Publish only the Godel-targeted CV as the public Vercel site while preserving the broader repository contents for local work and future variants.

## Decision

Use a dedicated deployment directory at `deploy/godel-ai-practitioner-cv/` and store the public entrypoint there as `index.html`.

This keeps the public artifact isolated from:

- the broader root `index.html` CV
- Playwright test fixtures and snapshots
- any future variants that should remain in the repository but not be deployed

## Alternatives Considered

### 1. Replace the repository root `index.html`

Rejected because importing the repository root would still publish unrelated repository files.

### 2. Add a Vercel rewrite from `/` to `godel-ai-practitioner-cv.html`

Rejected because the public deployment would still include the rest of the repository tree.

### 3. Dedicated deploy folder

Chosen because Vercel can be configured to use `deploy/godel-ai-practitioner-cv` as the project root, which means only files in that directory are deployed.

## Vercel Configuration

- Project name: `michal-olesiak-online-cv-godel`
- Git provider: GitHub
- Repository: `MO-D3/CV`
- Root Directory: `deploy/godel-ai-practitioner-cv`
- Framework Preset: `Other`
- Build Command: empty
- Output Directory: empty

## Verification

- Local Playwright coverage should prove that `deploy/godel-ai-practitioner-cv/` serves the Godel page.
- After the first Vercel import, production should render the title `Michał Olesiak | AI Practitioner | Godel Technologies`.

## Rollback

If the deployment path is incorrect, change the Vercel Root Directory back before redeploying. No application code outside the deploy folder needs to be removed to undo the setup.
