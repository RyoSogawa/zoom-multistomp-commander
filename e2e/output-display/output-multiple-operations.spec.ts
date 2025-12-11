// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SysEx Output Display', () => {
  test('should display concatenated output for multiple operations', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure first operation (ON, effect 6)
    await page.getByRole('button', { name: '6' }).click();

    // 4. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 5. Configure second operation (OFF, effect 2)
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'OFF' }).click();
    await page.getByRole('button', { name: '2' }).nth(1).click();

    // 6. Verify output contains both messages
    await expect(page.getByText('F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7 F0 52 00 6E 64 20 00 01 00 00 00 00 00 00 F7')).toBeVisible();

    // 8. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 9. Configure third operation (Disp, effect 4)
    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'Disp' }).click();
    await page.getByRole('button', { name: '4' }).nth(2).click();

    // 10. Verify output contains all three messages in order
    await expect(page.getByText('F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7 F0 52 00 6E 64 20 00 01 00 00 00 00 00 00 F7 F0 52 00 6E 64 20 00 64 01 03 00 00 00 00 F7')).toBeVisible();
  });
});
