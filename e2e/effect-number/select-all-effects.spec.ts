// spec: specs/app.test-plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Effect Number Selection', () => {
  test('should select all effect numbers sequentially', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // 1. Click '+ Add Operation' button
    await page.getByRole('button', { name: '+ Add Operation' }).click();

    // 2. Click effect number '6' button and verify output
    await page.getByRole('button', { name: '6' }).click();
    await expect(page.getByRole('button', { name: '6' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('main').getByText('F0 52 00 6E 64 20 00 05 00 01 00 00 00 00 F7')).toBeVisible();

    // 3. Click effect number '5' button and verify output
    await page.getByRole('button', { name: '5' }).click();
    await expect(page.getByRole('button', { name: '5' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: '6' })).not.toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('main').getByText('F0 52 00 6E 64 20 00 04 00 01 00 00 00 00 F7')).toBeVisible();

    // 4. Click effect number '4' button and verify output
    await page.getByRole('button', { name: '4' }).click();
    await expect(page.getByRole('button', { name: '4' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: '5' })).not.toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('main').getByText('F0 52 00 6E 64 20 00 03 00 01 00 00 00 00 F7')).toBeVisible();

    // 5. Click effect number '3' button and verify output
    await page.getByRole('button', { name: '3' }).click();
    await expect(page.getByRole('button', { name: '3' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: '4' })).not.toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('main').getByText('F0 52 00 6E 64 20 00 02 00 01 00 00 00 00 F7')).toBeVisible();

    // 6. Click effect number '2' button and verify output
    await page.getByRole('button', { name: '2' }).click();
    await expect(page.getByRole('button', { name: '2' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: '3' })).not.toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('main').getByText('F0 52 00 6E 64 20 00 01 00 01 00 00 00 00 F7')).toBeVisible();

    // 7. Click effect number '1' button and verify output
    await page.getByRole('button', { name: '1' }).click();
    await expect(page.getByRole('button', { name: '1' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: '2' })).not.toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('main').getByText('F0 52 00 6E 64 20 00 00 00 01 00 00 00 00 F7')).toBeVisible();
  });
});
