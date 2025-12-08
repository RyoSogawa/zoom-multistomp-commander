// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Clipboard Copy', () => {
  test('should copy updated output after changes', async ({ page, context, browserName }) => {
    test.skip(browserName !== 'chromium', 'Clipboard API read is only supported in Chromium');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure operation (ON, effect 3)
    await page.getByRole('button', { name: '3' }).click();

    // 3. Click 'Copy to Clipboard' button
    await page.getByRole('button', { name: 'Copy to Clipboard' }).click();

    // 4. Verify clipboard has first output
    const firstOutput = await page.evaluate(() => navigator.clipboard.readText());
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
    const secondOutput = await page.evaluate(() => navigator.clipboard.readText());
    expect(secondOutput).toBe('F0 52 00 6E 64 20 00 04 00 00 00 00 00 00 F7');
    expect(secondOutput).not.toBe(firstOutput);
  });
});
