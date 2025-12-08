// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Delete Operation', () => {
  test('should delete single operation', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Verify operation is added and Output section is visible
    await expect(page.getByRole('heading', { name: 'Output' })).toBeVisible();
    await expect(page.getByRole('button', { name: '×' })).toBeVisible();

    // 3. Click the delete button (×)
    await page.getByRole('button', { name: '×' }).click();

    // 4. Verify operation is removed
    // 5. Verify 'Clear All' button is no longer visible
    // 6. Verify 'Output' section is no longer visible
    await expect(page.getByRole('button', { name: 'Clear All' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Output' })).not.toBeVisible();
    await expect(page.getByRole('button', { name: '×' })).not.toBeVisible();
  });
});
