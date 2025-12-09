import { test, expect } from '@playwright/test';

test.describe('Tuner Operation', () => {
  test('should toggle Tuner ON again', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown and select 'Tuner'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Tuner' }).click();

    // 3. Click switch to toggle to OFF
    const switchElement = page.getByRole('switch');
    await switchElement.click();

    // 4. Verify SysEx output is 'F0 52 00 6E 64 0C F7'
    await expect(page.getByText('F0 52 00 6E 64 0C F7')).toBeVisible();

    // 5. Click switch to toggle back to ON
    await switchElement.click();

    // 6. Verify switch is in ON position
    await expect(switchElement).toBeChecked();

    // 7. Verify SysEx output is 'F0 52 00 6E 64 0B F7'
    await expect(page.getByText('F0 52 00 6E 64 0B F7')).toBeVisible();
  });
});
