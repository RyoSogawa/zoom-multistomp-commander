// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Clipboard Copy', () => {
  test('should copy updated output after changes', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure operation (ON, effect 3)
    await page.getByRole('button', { name: '3' }).click();

    // 3. Click 'Copy to Clipboard' button
    await page.getByRole('button', { name: 'Copy to Clipboard' }).click();

    // 4. Verify clipboard has first output
    const firstClipboard = await page.evaluateHandle(() => navigator.clipboard.readText());
    const firstOutput = await firstClipboard.jsonValue();
    expect(firstOutput).toBe('F0 52 00 6E 64 20 00 02 00 01 00 00 00 00 F7');

    // 5. Change to different configuration (OFF, effect 5)
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'OFF' }).click();
    await page.getByRole('button', { name: '5' }).click();

    // 6. Wait for button to reset to 'Copy to Clipboard'
    await expect(page.getByRole('button', { name: 'Copy to Clipboard' })).toBeVisible();

    // 7. Click 'Copy to Clipboard' button again
    await page.getByRole('button', { name: 'Copy to Clipboard' }).click();

    // 8. Verify clipboard has updated output
    const secondClipboard = await page.evaluateHandle(() => navigator.clipboard.readText());
    const secondOutput = await secondClipboard.jsonValue();
    expect(secondOutput).toBe('F0 52 00 6E 64 20 00 04 00 00 00 00 00 00 F7');
    expect(secondOutput).not.toBe(firstOutput);
  });
});
