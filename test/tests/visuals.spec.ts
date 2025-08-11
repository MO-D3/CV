import { test, expect } from '@playwright/test';

test.describe('Landing visuals', () => {
  test('home — full page', async ({ page }) => {
    await page.goto('/index.html');
    await page.getByRole('heading', { level: 1 }).waitFor();
    await expect(page).toHaveScreenshot('home-full.png', { fullPage: true });
  });

  test('header — default language (EN) state', async ({ page }) => {
    await page.goto('/index.html');
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('header-en.png');
  });

  test('home — full page in Polish (desktop)', async ({ page }) => {
    await page.goto('/index.html');
    await page.getByRole('button', { name: 'PL' }).click();
    await page.getByRole('heading', { level: 1 }).waitFor();
    await expect(page).toHaveScreenshot('home-full-pl-desktop.png', { fullPage: true });
  });
});

// Mobile-only visual of the hamburger menu (runs where the toggle is visible)

test('mobile menu — opened state', async ({ page }) => {
  const toggle = page.locator('#menuToggle');
  // Skip if the toggle isn’t visible in this project (desktop viewports)
  test.skip(await toggle.count() === 0, 'Hamburger not present at this viewport');
  await page.goto('/index.html');
  await toggle.click();
  const panel = page.locator('#mobileMenu');
  await expect(panel).toBeVisible();
  await expect(panel).toHaveScreenshot('mobile-menu-open.png');
});

test('home — full page in Polish (mobile)', async ({ page }) => {
  const toggle = page.locator('#menuToggle');
  test.skip(await toggle.count() === 0, 'Hamburger not present at this viewport');
  await page.goto('/index.html');
  await page.getByRole('button', { name: 'PL' }).click();
  await page.getByRole('heading', { level: 1 }).waitFor();
  await expect(page).toHaveScreenshot('home-full-pl-mobile.png', { fullPage: true });
});
