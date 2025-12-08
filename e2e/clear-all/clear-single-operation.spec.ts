// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Clear All Operations', () => {
  test('should clear all operations with single operation', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Verify operation is added
    await expect(page.getByRole('button', { name: 'Clear All' })).toBeVisible();

    // 3. Click 'Clear All' button
    await page.getByRole('button', { name: 'Clear All' }).click();

    // 4. Verify all operations are removed
    await expect(page.getByRole('heading', { name: 'Operations' })).toBeVisible();

    // 5. Verify 'Clear All' button is no longer visible
    await expect(page.getByRole('button', { name: 'Clear All' })).not.toBeVisible();

    // 6. Verify 'Output' section is no longer visible
    await expect(page.getByRole('heading', { name: 'Output' })).not.toBeVisible();

    // 7. Verify only '+ Add Operation' button remains
    await expect(page.getByRole('button', { name: '+ Add Operation' })).toBeVisible();
  });
});
