import { test, expect } from '@playwright/test';

test.describe('Vercel deploy target', () => {
  test('serves the AI engineer entrypoint with a compact greeting button in the topbar', async ({ page }) => {
    await page.goto('/deploy/godel-ai-practitioner-cv/');

    await expect(page).toHaveTitle(/AI Engineer/);
    await expect(page.getByText('AI Engineer | Quality + Reliability')).toBeVisible();
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'AI engineer for reliable delivery.',
      })
    ).toBeVisible();

    const audio = page.locator('#greetingAudio');
    const source = page.locator('#greetingAudio source');
    const toggle = page.getByRole('button', { name: 'Play greeting' });

    await expect(toggle).toBeVisible();
    await expect(source).toHaveAttribute('src', 'greeting.mp3');
    await expect(page.getByText('Hear a short intro in my AI-generated voice.')).toHaveCount(0);

    await toggle.click();
    await expect(page.getByRole('button', { name: 'Pause greeting' })).toBeVisible();
    await expect.poll(async () => {
      return page.locator('#greetingAudio').evaluate((node: HTMLAudioElement) => ({
        paused: node.paused,
        duration: node.duration,
      }));
    }).toMatchObject({ paused: false });
  });

  test('keeps a safe gap between the email card and navigation on tight desktop widths', async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 900 });
    await page.goto('/deploy/godel-ai-practitioner-cv/');

    await expect(page.getByRole('link', { name: 'Email micholesiak@gmail.com' })).toBeVisible();

    const navGap = await page.evaluate(() => {
      const emailCard = Array.from(document.querySelectorAll('.topbar-meta-item')).find((item) =>
        item.textContent?.includes('micholesiak@gmail.com')
      );
      const nav = document.querySelector('.nav');

      if (!emailCard || !nav) {
        return -1;
      }

      return nav.getBoundingClientRect().left - emailCard.getBoundingClientRect().right;
    });

    expect(navGap).toBeGreaterThanOrEqual(48);
  });
});
