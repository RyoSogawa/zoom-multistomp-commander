// patch-volume is temporarily disabled
// import { test, expect } from '@playwright/test';

// test.describe('Patch Volume Operation', () => {
//   test('should select Patch Volume with default value 100', async ({ page }) => {
//     await page.goto('/');

//     // 1. Click '+ Add Operation' button
//     await page.getByRole('button', { name: '+ Add Operation' }).click();

//     // 2. Click operation type dropdown
//     await page.getByRole('combobox').click();

//     // 3. Click 'Patch Volume' option
//     await page.getByRole('option', { name: 'Patch Volume' }).click();

//     // 4. Verify dropdown shows 'Patch Volume'
//     await expect(page.getByRole('combobox')).toContainText('Patch Volume');

//     // 5. Verify slider and number input are visible
//     await expect(page.getByRole('slider')).toBeVisible();
//     await expect(page.getByRole('spinbutton')).toBeVisible();

//     // 6. Verify value is 100
//     await expect(page.getByRole('slider')).toHaveValue('100');
//     await expect(page.getByRole('spinbutton')).toHaveValue('100');

//     // 7. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 00 64 00 00 00 00 F7'
//     await expect(page.getByText('F0 52 00 6E 64 20 00 64 00 64 00 00 00 00 F7')).toBeVisible();
//   });
// });
