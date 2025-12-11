import { test, expect } from '@playwright/test';

test.describe('Help Modal Interaction', () => {
  test('should close help modal when clicking close button', async ({ page }) => {
    await page.goto('/');

    // 2. Click the '?' help button
    await page.getByRole('button').filter({ hasText: /^$/ }).click();

    // 3. Click the close button in the modal
    await page.getByRole('button', { name: 'Close' }).click();

    // Expected Results: Help modal closes
    await expect(page.getByRole('dialog', { name: 'About This App' })).not.toBeVisible();
  });
});
