// spec: Delete Operation
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Delete Operation', () => {
  test('should delete last operation in multiple operations', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button three times
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure each operation differently (first: effect 6, second: effect 3, third: effect 1)
    await page.getByRole('button', { name: '6' }).first().click();
    await page.getByRole('button', { name: '3' }).nth(1).click();
    await page.getByRole('button', { name: '1' }).nth(2).click();

    // 3. Click delete button (×) on the third (last) operation
    await page.getByRole('button', { name: '×' }).nth(2).click();

    // 4. Verify third operation is removed
    // 5. Verify first and second operations remain
    await expect(page.getByRole('button', { name: '×' })).toHaveCount(2);

    // 6. Verify SysEx output shows first and second operations only
    await expect(page.getByText('F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7 F0 52 00 6E 64 20 00 02 00 01 00 00 00 00 F7')).toBeVisible();
  });
});
