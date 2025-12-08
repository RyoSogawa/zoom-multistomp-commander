// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SysEx Output Display', () => {
  test('should display correct output for ON operation', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Verify operation type is 'ON'
    await expect(page.getByRole('combobox')).toContainText('ON');

    // 3. Click effect number '1' button
    await page.getByRole('button', { name: '1' }).click();

    // 4. Verify SysEx output starts with 'F0 52 00 6E 64 20'
    await expect(page.getByText('F0 52 00 6E 64 20')).toBeVisible();

    // 5. Verify SysEx output ends with 'F7'
    // 6. Verify output contains proper ON command bytes
    const outputText = await page.locator('text=/F0 52 00 6E 64 20.*F7/').textContent();
    expect(outputText).toBeTruthy();
    expect(outputText?.trim().endsWith('F7')).toBe(true);
    expect(outputText).toContain('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7');
  });
});
