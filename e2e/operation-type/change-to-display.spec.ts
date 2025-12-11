// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Operation Type Selection', () => {
  test('should change operation type to Display', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click the operation type dropdown
    await page.getByRole('combobox').click();

    // 3. Click 'Disp' option
    await page.getByRole('option', { name: 'Disp' }).click();

    // 4. Verify dropdown shows 'Disp'
    await expect(page.getByRole('combobox')).toContainText('Disp');

    // 5. Verify SysEx output is updated
    await expect(page.getByText('F0 52 00 6E 64 20 00 64 01 00 00 00 00 00 F7')).toBeVisible();
  });
});
