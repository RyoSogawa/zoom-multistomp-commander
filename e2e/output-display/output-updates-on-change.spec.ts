// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SysEx Output Display', () => {
  test('should update output when operation changes', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Note the initial SysEx output
    const outputElement = page.locator('main > div:last-child > div:nth-child(2)');
    await expect(outputElement).toHaveText('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7');

    // 3. Change operation type to 'OFF'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'OFF' }).click();

    // 4. Verify output changes
    await expect(outputElement).toHaveText('F0 52 00 6E 64 20 00 00 00 00 00 00 00 00 F7');

    // 5. Change effect number to '5'
    await page.getByRole('button', { name: '5' }).click();

    // 6. Verify output changes again
    await expect(outputElement).toHaveText('F0 52 00 6E 64 20 00 04 00 00 00 00 00 00 F7');

    // 7. Change operation type to 'Display'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Display' }).click();

    // 8. Verify output changes to reflect Display command
    await expect(outputElement).toHaveText('F0 52 00 6E 64 20 00 64 01 04 00 00 00 00 F7');
  });
});
