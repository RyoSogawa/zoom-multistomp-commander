import { test, expect } from '@playwright/test';

test.describe('Help Modal Interaction', () => {
  test('should close help modal when clicking outside', async ({ page }) => {
    // 1. Navigate to http://localhost:3001/
    await page.goto('http://localhost:3001/');

    // 2. Click the '?' help button
    await page.getByRole('button').filter({ hasText: /^$/ }).click();

    // 3. Click outside the modal (using coordinates to click on the overlay)
    await page.click('body', { position: { x: 10, y: 10 } });

    // Expected Results: Help modal closes
    await expect(page.getByRole('dialog', { name: 'About This App' })).not.toBeVisible();
  });
});
