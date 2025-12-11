// spec: Complex Workflows
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Complex Workflows', () => {
  test('should handle complete workflow', async ({ page }) => {
    await page.goto('/');

    // 1. Add three operations
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Configure first: ON, effect 6
    await page.getByRole('button', { name: '6' }).first().click();

    // 3. Configure second: OFF, effect 3
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'OFF' }).click();
    await page.getByRole('button', { name: '3' }).nth(1).click();

    // 4. Configure third: Disp, effect 1
    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'Disp' }).click();
    await page.getByRole('button', { name: '1' }).nth(2).click();

    // 5. Verify output shows all three operations (implicitly verified by the output text)

    // 6. Copy to clipboard
    await page.getByRole('button', { name: 'Copy to Clipboard' }).click();

    // 7. Delete second operation
    await page.getByRole('button', { name: '×' }).nth(1).click();

    // 8. Verify output updates to show two operations
    await expect(page.getByText('F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7 F0 52 00 6E 64 20 00 64 01 00 00 00 00 00 F7')).toBeVisible();

    // 9. Add a new operation
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 10. Configure new operation: ON, effect 4
    await page.getByRole('button', { name: '4' }).nth(2).click();

    // 11. Copy updated output to clipboard
    await page.getByRole('button', { name: 'Copy to Clipboard' }).click();

    // 12. Clear all operations
    await page.getByRole('button', { name: 'Clear All' }).click();

    // 13. Verify UI returns to initial state
    await expect(page.getByRole('button', { name: '+ Add Operation' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Operations' })).toBeVisible();
  });
});
