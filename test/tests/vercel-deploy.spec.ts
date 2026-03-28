import { test, expect } from '@playwright/test';

test.describe('Vercel deploy target', () => {
  test('serves the dedicated Godel CV entrypoint', async ({ page }) => {
    await page.goto('/deploy/godel-ai-practitioner-cv/');

    await expect(page).toHaveTitle(/Godel Technologies/);
    await expect(page.getByText('AI Practitioner for Godel')).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 1, name: 'AI-first delivery across the full SDLC.' })
    ).toBeVisible();
  });
});
