import { test, expect } from '@playwright/test';

test.describe('Operation Type Selection', () => {
  test('should change operation type to OFF', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click the operation type dropdown (shows 'ON' by default)
    await page.getByRole('combobox').click();

    // 3. Verify 'ON', 'OFF', and 'Display' options are visible
    await expect(page.getByRole('option', { name: 'ON' })).toBeVisible();
    await expect(page.getByText('OFF')).toBeVisible();
    await expect(page.getByRole('option', { name: 'Display' })).toBeVisible();

    // 4. Click 'OFF' option
    await page.getByRole('option', { name: 'OFF' }).click();

    // 5. Verify dropdown shows 'OFF'
    await expect(page.getByText('OFF')).toBeVisible();

    // 6. Verify SysEx output is updated
    await expect(page.getByText('F0 52 00 6E 64 20 00 00 00 00 00 00 00 00 F7')).toBeVisible();
  });
});
