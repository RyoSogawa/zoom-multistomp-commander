import { test, expect } from '@playwright/test';

test.describe('Tempo Operation', () => {
  test('should select Tempo with default value 120 BPM', async ({ page }) => {
    await page.goto('/');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click operation type dropdown
    await page.getByRole('combobox').click();

    // 3. Click 'Tempo' option
    await page.getByRole('option', { name: 'Tempo' }).click();

    // 4. Verify dropdown shows 'Tempo'
    await expect(page.getByRole('combobox')).toContainText('Tempo');

    // 5. Verify slider, number input, and 'BPM' label are visible
    await expect(page.getByRole('slider')).toBeVisible();
    await expect(page.getByRole('spinbutton')).toBeVisible();
    await expect(page.getByText('BPM')).toBeVisible();

    // 6. Verify value is 120
    await expect(page.getByRole('spinbutton')).toHaveValue('120');

    // 7. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 02 78 00 00 00 00 F7'
    await expect(page.getByText('F0 52 00 6E 64 20 00 64 02 78 00 00 00 00 F7')).toBeVisible();
  });
});
