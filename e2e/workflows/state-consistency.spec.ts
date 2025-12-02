// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Complex Workflows', () => {
  test('should maintain state consistency', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Add operation and configure as OFF, effect 2
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'OFF' }).click();
    await page.getByRole('button', { name: '2' }).click();

    // 2. Add second operation and configure as Display, effect 5
    await page.getByRole('button', { name: '+ Add Operation' }).click();
    await page.getByRole('combobox').filter({ hasText: 'ON' }).click();
    await page.getByRole('option', { name: 'Display' }).click();
    await page.getByRole('button', { name: '5' }).nth(1).click();

    // 3. Change first operation to ON, effect 3
    await page.getByRole('combobox').filter({ hasText: 'OFF' }).click();
    await page.getByRole('option', { name: 'ON' }).click();
    await page.getByRole('button', { name: '3' }).first().click();

    // 4. Verify second operation remains Display, effect 5
    const secondOperationCombobox = page.getByRole('combobox').nth(1);
    await expect(secondOperationCombobox).toContainText('Display');
    const secondOperationEffect5 = page.getByRole('button', { name: '5' }).nth(1);
    await expect(secondOperationEffect5).toHaveAttribute('class', /active/);

    // 5. Delete first operation
    await page.getByRole('button', { name: '×' }).first().click();

    // 6. Verify second operation still shows Display, effect 5
    const remainingCombobox = page.getByRole('combobox');
    await expect(remainingCombobox).toContainText('Display');
    const remainingEffect5 = page.getByRole('button', { name: '5' });
    await expect(remainingEffect5).toHaveAttribute('class', /active/);

    // 7. Add new operation
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 8. Verify new operation has default values (ON, effect 1)
    const newOperationCombobox = page.getByRole('combobox').nth(1);
    await expect(newOperationCombobox).toContainText('ON');
    const newOperationEffect1 = page.getByRole('button', { name: '1' }).nth(1);
    await expect(newOperationEffect1).toHaveAttribute('class', /active/);

    // 9. Verify previous operation unchanged
    const previousCombobox = page.getByRole('combobox').first();
    await expect(previousCombobox).toContainText('Display');
    const previousEffect5 = page.getByRole('button', { name: '5' }).first();
    await expect(previousEffect5).toHaveAttribute('class', /active/);
  });
});
