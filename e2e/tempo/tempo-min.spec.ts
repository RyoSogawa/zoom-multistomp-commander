import { test, expect } from '@playwright/test';

test.describe('Tempo Operation', () => {
  test('should change Tempo to minimum 40 BPM', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown and select 'Tempo'
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Tempo' }).click();

    // 3. Set value to 40 using number input
    await page.getByRole('spinbutton').fill('40');

    // 4. Verify slider position updates
    await expect(page.getByRole('slider')).toHaveValue('40');

    // 5. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 02 28 00 00 00 00 F7'
    await expect(page.getByText('F0 52 00 6E 64 20 00 64 02 28 00 00 00 00 F7')).toBeVisible();
  });
});
