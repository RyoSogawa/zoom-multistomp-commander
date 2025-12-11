// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SysEx Output Display', () => {
  test('should update output when operation changes', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Verify the initial SysEx output
    await expect(page.getByText('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7')).toBeVisible();

    // 3. Change operation type to 'OFF'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'OFF' }).click();

    // 4. Verify output changes
    await expect(page.getByText('F0 52 00 6E 64 20 00 00 00 00 00 00 00 00 F7')).toBeVisible();

    // 5. Change effect number to '5'
    await page.getByRole('button', { name: '5' }).click();

    // 6. Verify output changes again
    await expect(page.getByText('F0 52 00 6E 64 20 00 04 00 00 00 00 00 00 F7')).toBeVisible();

    // 7. Change operation type to 'Disp'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Disp' }).click();

    // 8. Verify output changes to reflect Display command
    await expect(page.getByText('F0 52 00 6E 64 20 00 64 01 04 00 00 00 00 F7')).toBeVisible();
  });
});
