import { test, expect } from '@playwright/test';

test.describe('Tuner Operation', () => {
  test('should select Tuner operation and display ON by default', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown
    await page.getByRole('combobox').click();

    // 3. Click 'Tuner' option
    await page.getByRole('option', { name: 'Tuner' }).click();

    // 4. Verify dropdown shows 'Tuner'
    await expect(page.getByRole('combobox')).toContainText('Tuner');

    // 5. Verify switch UI is visible with OFF/ON labels
    const switchElement = page.getByRole('switch');
    await expect(switchElement).toBeVisible();
    await expect(page.getByText('OFF')).toBeVisible();
    await expect(page.getByText('ON', { exact: true })).toBeVisible();

    // 6. Verify switch is in ON position (checked)
    await expect(switchElement).toBeChecked();

    // 7. Verify SysEx output is 'F0 52 00 6E 64 0B F7'
    await expect(page.getByText('F0 52 00 6E 64 0B F7')).toBeVisible();
  });
});
