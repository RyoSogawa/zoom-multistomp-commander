// spec: Add Operation
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add Operation', () => {
  test('should add multiple operations', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click '+ Add Operation' button again
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 3. Click '+ Add Operation' button a third time
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 4. Verify three operations are displayed
    const comboboxes = page.getByRole('combobox');
    await expect(comboboxes).toHaveCount(3);

    // 5. Verify each operation has its own controls
    await expect(comboboxes.first()).toBeVisible();
    await expect(comboboxes.nth(1)).toBeVisible();
    await expect(comboboxes.nth(2)).toBeVisible();

    // 6. Verify SysEx output contains three messages
    await expect(page.getByText('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7 F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7 F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7')).toBeVisible();
  });
});
