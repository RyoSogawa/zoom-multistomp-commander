// spec: Add Operation
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add Operation', () => {
  test('should add first operation', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Verify operation is added with default values
    // 3. Verify operation type dropdown shows 'ON'
    await expect(page.getByRole('combobox', { name: '' })).toBeVisible();
    await expect(page.getByText('ON')).toBeVisible();

    // 4. Verify all effect number buttons (1-6) are visible
    await expect(page.getByRole('button', { name: '1' })).toBeVisible();
    await expect(page.getByRole('button', { name: '2' })).toBeVisible();
    await expect(page.getByRole('button', { name: '3' })).toBeVisible();
    await expect(page.getByRole('button', { name: '4' })).toBeVisible();
    await expect(page.getByRole('button', { name: '5' })).toBeVisible();
    await expect(page.getByRole('button', { name: '6' })).toBeVisible();

    // 5. Verify delete button (×) is visible
    await expect(page.getByRole('button', { name: '×' })).toBeVisible();

    // 6. Verify 'Clear All' button appears
    await expect(page.getByRole('button', { name: 'Clear All' })).toBeVisible();

    // 7. Verify 'Output' section appears
    await expect(page.getByRole('heading', { name: 'Output' })).toBeVisible();

    // 8. Verify SysEx output is displayed
    await expect(page.getByText('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7')).toBeVisible();
  });
});
