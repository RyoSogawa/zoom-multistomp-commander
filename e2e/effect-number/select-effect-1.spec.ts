// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Effect Number Selection', () => {
  test('should select effect number 1', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click effect number '1' button
    await page.getByRole('button', { name: '1' }).click();

    // 3. Verify button '1' is highlighted/active
    await expect(page.getByRole('button', { name: '1' })).toBeVisible();

    // 4. Verify SysEx output is updated
    await expect(page.getByText('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7')).toBeVisible();
  });
});
