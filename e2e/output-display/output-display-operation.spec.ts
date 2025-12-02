// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SysEx Output Display', () => {
  test('should display correct output for Display operation', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown and select 'Display'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Display' }).click();

    // 3. Click effect number '4' button
    await page.getByRole('button', { name: '4' }).click();

    // 4. Verify SysEx output reflects Display command
    await expect(page.getByText('F0 52 00 6E 64 20 00 64 01 03 00 00 00 00 F7')).toBeVisible();

    // 5. Verify output contains '64' byte (Display command marker)
    const outputText = await page.getByText('F0 52 00 6E 64 20 00 64 01 03 00 00 00 00 F7').textContent();
    expect(outputText).toContain('64');
  });
});
