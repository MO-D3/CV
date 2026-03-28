import { test } from '@playwright/test';

test.describe('Home Page Test with no auth', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://example.com');
    if (['mobile', 'chromium'].includes(testInfo.project.name)) {
      console.log(`Running extra setup for ${testInfo.project.name}...`);
      // Place your additional step here
    }
  });

  test('should display welcome message', async ({ page }) => {
    // Test code here
  });
});

test.describe('Home Page Test with customer01 auth', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://example.com/login');
    if (['mobile', 'chromium'].includes(testInfo.project.name)) {
      console.log(`Running extra setup for ${testInfo.project.name}...`);
      // Place your additional step here
    }
  });

  test('should display user dashboard', async ({ page }) => {
    // Test code here
  });
});
