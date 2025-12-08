// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Clipboard Copy', () => {
  test('should show button state change on copy', async ({ page, context, browserName }) => {
    if (browserName === 'chromium') {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    }
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click 'Copy to Clipboard' button
    await page.getByRole('button', { name: 'Copy to Clipboard' }).click();

    // 3. Verify button text is 'Copied!'
    await expect(page.getByRole('button', { name: 'Copied!' })).toBeVisible();

    // 4. Wait for 2 seconds
    await page.waitForTimeout(2000);

    // 5. Verify button text returns to 'Copy to Clipboard'
    await expect(page.getByRole('button', { name: 'Copy to Clipboard' })).toBeVisible();
  });
});
