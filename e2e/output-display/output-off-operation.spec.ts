// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SysEx Output Display', () => {
  test('should display correct output for OFF operation', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown and select 'OFF'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'OFF' }).click();

    // 3. Click effect number '3' button
    await page.getByRole('button', { name: '3' }).click();

    // 4. Verify SysEx output reflects OFF command
    await expect(page.getByText('F0 52 00 6E 64 20 00 02 00 00 00 00 00 00 F7')).toBeVisible();
  });
});
