// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Operation Type Selection', () => {
  test('should change operation type back to ON', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click the operation type dropdown
    await page.getByRole('combobox').click();

    // 3. Click 'OFF' option
    await page.getByRole('option', { name: 'OFF' }).click();

    // 4. Click the operation type dropdown again
    await page.getByRole('combobox').click();

    // 5. Click 'ON' option
    await page.getByRole('option', { name: 'ON' }).click();

    // 6. Verify dropdown shows 'ON'
    await expect(page.getByText('ON')).toBeVisible();

    // 7. Verify SysEx output is updated
    await expect(page.getByText('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7')).toBeVisible();
  });
});
