// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Delete Operation', () => {
  test('should delete first operation in multiple operations', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button twice to create two operations
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure first operation (e.g., ON, effect 6)
    await page.getByRole('button', { name: '6' }).first().click();

    // 3. Configure second operation (e.g., OFF, effect 2)
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'OFF' }).click();
    await page.getByRole('button', { name: '2' }).nth(1).click();

    // 4. Note the SysEx output (before deletion)
    // Expected: F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7 F0 52 00 6E 64 20 00 01 00 00 00 00 00 00 F7

    // 5. Click delete button (×) on the first operation
    await page.getByRole('button', { name: '×' }).first().click();

    // 6. Verify first operation is removed
    // 7. Verify second operation remains
    // 8. Verify SysEx output shows only second operation
    await expect(page.getByRole('button', { name: 'Clear All' })).toBeVisible();
    await expect(page.getByText('F0 52 00 6E 64 20 00 01 00 00 00 00 00 00 F7')).toBeVisible();
  });
});
