// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Effect Number Selection', () => {
  test('should change effect number multiple times', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click effect number '3' button
    await page.getByRole('button', { name: '3' }).click();

    // 3. Verify SysEx output
    await expect(page.getByText('F0 52 00 6E 64 20 00 02 00 01 00 00 00 00 F7')).toBeVisible();

    // 4. Click effect number '5' button
    await page.getByRole('button', { name: '5' }).click();

    // 5. Verify SysEx output changed
    await expect(page.getByText('F0 52 00 6E 64 20 00 04 00 01 00 00 00 00 F7')).toBeVisible();

    // 6. Click effect number '2' button
    await page.getByRole('button', { name: '2' }).click();

    // 7. Verify SysEx output changed again
    await expect(page.getByText('F0 52 00 6E 64 20 00 01 00 01 00 00 00 00 F7')).toBeVisible();
  });
});
