// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Clipboard Copy', () => {
  test('should copy multiple operations output', async ({ page, context, browserName }) => {
    test.skip(browserName !== 'chromium', 'Clipboard API read is only supported in Chromium');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/');

    // 1. Click '+ Add Operation' button three times
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure each operation differently (first: effect 6, second: OFF effect 2, third: Display effect 4)
    await page.getByRole('button', { name: '6' }).first().click();

    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'OFF' }).click();
    await page.getByRole('button', { name: '2' }).nth(1).click();

    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'Display' }).click();
    await page.getByRole('button', { name: '4' }).nth(2).click();

    // 3. Note the complete SysEx output with all operations
    const outputText = await page.locator('pre').textContent();
    expect(outputText).toContain('F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7');
    expect(outputText).toContain('F0 52 00 6E 64 20 00 01 00 00 00 00 00 00 F7');
    expect(outputText).toContain('F0 52 00 6E 64 20 00 64 01 03 00 00 00 00 F7');

    // 4. Click 'Copy to Clipboard' button
    await page.getByRole('button', { name: 'Copy to Clipboard' }).click();

    // 5. Verify clipboard contains all SysEx messages
    await expect(page.getByRole('button', { name: 'Copied!' })).toBeVisible();

    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());

    expect(clipboardText).toContain('F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7');
    expect(clipboardText).toContain('F0 52 00 6E 64 20 00 01 00 00 00 00 00 00 F7');
    expect(clipboardText).toContain('F0 52 00 6E 64 20 00 64 01 03 00 00 00 00 F7');
  });
});
