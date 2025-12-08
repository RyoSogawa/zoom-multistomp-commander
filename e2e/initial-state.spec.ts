// spec: Initial State
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Initial State', () => {
  test('should display correct initial state', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });

    // 1. Navigate to /
    await page.goto('/');

    // 2. Verify page title is 'ZOOM MultiStomp Commander'
    await expect(page.getByText('ZOOM MultiStomp Commander')).toBeVisible();

    // 3. Verify 'Operations' heading is visible
    await expect(page.getByRole('heading', { name: 'Operations' })).toBeVisible();

    // 4. Verify '+ Add Operation' button is visible
    await expect(page.getByRole('button', { name: '+ Add Operation' })).toBeVisible();

    // 5. Verify 'Clear All' button is NOT visible
    const hasClearAllButton = await page.getByRole('button', { name: 'Clear All' }).isVisible().catch(() => false);
    expect(hasClearAllButton).toBe(false);

    // 6. Verify 'Output' section is NOT visible
    const hasOutputHeading = await page.getByRole('heading', { name: 'Output' }).isVisible().catch(() => false);
    expect(hasOutputHeading).toBe(false);
  });
});
