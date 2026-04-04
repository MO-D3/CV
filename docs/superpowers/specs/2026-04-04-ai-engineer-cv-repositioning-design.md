# AI Engineer CV Repositioning Design

## Goal

Reposition `godel-ai-practitioner-cv.html` from a company-tailored "AI Practitioner for Godel" page into a more general-purpose `AI Engineer` CV for larger, structured product organizations. The new version should keep the existing visual style and most existing proof points, but it should present Michał primarily as an AI engineer with a strong secondary edge in quality, testing, and reliability.

## User-Approved Direction

- Base file: `godel-ai-practitioner-cv.html`
- Primary profile: `AI Engineer`
- Secondary strength: `quality / testing / reliability`
- Target market: larger companies with mature engineering practices, but not narrow enterprise-only positioning
- Branding change: remove company-specific positioning to Godel and de-brand most content
- Learning signal to add:
  - planned `AIDEAS` training in May 2026
  - `n8n` learning in personal time

## Design Principles

### 1. Keep the proof points, change the interpretation

The current page already contains useful evidence: hands-on use of coding agents, product building, lifecycle coverage, regulated delivery, framework setup, and testing depth. Those facts should remain, but they must be framed as AI engineering and delivery capability rather than as a pitch to one employer.

### 2. Move from "AI-first hype" to "AI engineer with reliability discipline"

The page should not read like a generic "AI enthusiast" profile. It should instead position Michał as someone who:

- builds software and workflows with AI as part of normal engineering execution
- treats testing and reliability as part of engineering, not as a separate downstream phase
- can operate in both product and regulated contexts
- combines delivery depth with strong quality judgment

### 3. Keep quality as differentiation, not as the whole identity

The strongest truthful repositioning is not to hide the quality background, but to convert it into a hiring advantage. The page should communicate:

- primary identity: AI engineer
- differentiator: unusually strong testing, release confidence, and reliability mindset

## Content Changes

### Top metadata and brand cluster

Replace Godel-specific title, description, and brand copy with general AI engineer wording. The short brand subtitle should become role-based rather than employer-based.

### Hero section

Rewrite the hero to communicate:

- AI engineer as the headline identity
- practical use of AI across planning, coding, review, testing, and workflow automation
- evidence from both product building and structured delivery environments

### Mission Control panel

Keep the structure, but change the content from employer-fit messaging to recruiter-facing capability messaging:

- operating model
- AI engineering usage
- quality and reliability lens
- delivery environments

### Career section

Keep the timeline and dates. Reframe each role:

- HSBC roles should emphasize framework creation, delivery enablement, release confidence, lifecycle coverage, and AI-enabled engineering practices
- Paily should be the strongest AI engineer proof point: full-stack product build, workflow automation, iterative product shaping, and reliability engineering
- earlier roles should remain as concise foundations

### Focus/profile sidebar

Rename the section to `AI Engineering Profile` and make each row recruiter-readable:

- primary profile
- secondary strength
- working style
- environment
- engineering toolkit

### Education and development

Keep formal education. Add an explicit development block for active learning:

- `AIDEAS` training planned for May 2026
- `n8n` workflow automation learning in personal time

These items must be clearly labeled as planned / ongoing learning, not completed credentials.

### Proof points / portals

Keep Paily and LinkedIn, but rewrite them as evidence blocks:

- Paily = engineering ownership and AI-supported product delivery
- LinkedIn = technical communication and visible engagement with AI and engineering topics

### Initiatives

Use the initiatives section to reinforce leadership and signal practical AI adoption:

- internal upskilling
- knowledge sharing
- AI-enabled quality and delivery practices
- self-directed learning

## Files In Scope

- `godel-ai-practitioner-cv.html`
- `deploy/godel-ai-practitioner-cv/index.html`
- `test/tests/vercel-deploy.spec.ts`

## Verification

At minimum, verify:

- no Godel-specific messaging remains in the deployable page
- the deploy copy matches the source copy for the changed sections
- the deploy Playwright test passes against the updated wording
