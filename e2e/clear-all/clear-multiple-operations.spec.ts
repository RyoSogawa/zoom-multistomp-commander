// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Clear All Operations', () => {
  test('should clear all operations with multiple operations', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button three times
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure each operation differently
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'OFF' }).click();
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'Display' }).click();
    await page.getByRole('button', { name: '2' }).nth(2).click();

    // 3. Verify all three operations are visible
    await expect(page.getByRole('combobox').first()).toBeVisible();
    await expect(page.getByRole('combobox').nth(1)).toBeVisible();
    await expect(page.getByRole('combobox').nth(2)).toBeVisible();

    // 4. Click 'Clear All' button
    await page.getByRole('button', { name: 'Clear All' }).click();

    // 5. Verify all operations are removed
    await expect(page.getByRole('button', { name: '+ Add Operation' })).toBeVisible();
    await expect(page.getByRole('combobox').first()).not.toBeVisible();

    // 6. Verify UI returns to initial state
    await expect(page.getByRole('heading', { name: 'Output' })).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Clear All' })).not.toBeVisible();
  });
});
