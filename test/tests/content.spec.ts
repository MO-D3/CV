import { test, expect } from '@playwright/test';

test.describe('Landing content', () => {
  test('renders key sections and contact path', async ({ page }) => {
    await page.goto('/index.html');

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('#timeline-heading')).toBeVisible();
    await expect(page.locator('#projects-heading')).toBeVisible();
    await expect(page.locator('#contact-heading')).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  });

  test('uses the updated quality-engineering message in EN by default', async ({ page }) => {
    await page.goto('/index.html');

    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Experienced quality engineer creating measurable impact'
    );
    await expect(page.getByText('Proactive QA leadership')).toBeVisible();
    await expect(page.locator('a[data-i18n="hero_cta_project"][href="#projects"]')).toBeVisible();
  });
});
