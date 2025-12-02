// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Clipboard Copy', () => {
  test('should copy output to clipboard', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Note the SysEx output text
    const outputText = await page.locator('div').filter({ hasText: /^F0 52 00 6E 64/ }).textContent();
    expect(outputText).toBeTruthy();

    // 3. Click 'Copy to Clipboard' button
    const copyButton = page.getByRole('button', { name: 'Copy to Clipboard' });
    await copyButton.click();

    // 4. Verify button text changes to 'Copied!'
    await expect(page.getByRole('button', { name: 'Copied!' })).toBeVisible();

    // 5. Verify clipboard contains the SysEx output
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboardText).toBe(outputText);
  });
});
