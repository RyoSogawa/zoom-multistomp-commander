import { test, expect } from '@playwright/test';

test.describe('Patch Volume Operation', () => {
  test('should change Patch Volume to 50', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown and select 'Patch Volume'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Patch Volume' }).click();

    // 3. Set value to 50 using number input
    await page.getByRole('spinbutton').fill('50');

    // 4. Verify slider position updates
    await expect(page.getByRole('slider')).toHaveValue('50');

    // 5. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 00 32 00 00 00 00 F7'
    await expect(page.getByText('F0 52 00 6E 64 20 00 64 00 32 00 00 00 00 F7')).toBeVisible();
  });
});
