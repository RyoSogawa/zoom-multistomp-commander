import { test, expect } from '@playwright/test';

test.describe('Tuner Operation', () => {
  test('should toggle Tuner OFF', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown and select 'Tuner'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Tuner' }).click();

    // 3. Verify switch is in ON position
    const switchElement = page.getByRole('switch');
    await expect(switchElement).toBeChecked();

    // 4. Click switch to toggle to OFF
    await switchElement.click();

    // 5. Verify switch is in OFF position (unchecked)
    await expect(switchElement).not.toBeChecked();

    // 6. Verify SysEx output is 'F0 52 00 6E 64 0C F7'
    await expect(page.getByText('F0 52 00 6E 64 0C F7')).toBeVisible();
  });
});
