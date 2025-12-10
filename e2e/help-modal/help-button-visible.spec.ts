// spec: Help Button Display
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Help Button Display', () => {
  test('should display help button next to title', async ({ page }) => {
    // 1. Navigate to http://localhost:3001/
    await page.goto('http://localhost:3001/');

    // Expected Results: A '?' button is visible next to the title 'ZOOM MultiStomp Commander'
    await expect(page.getByRole('heading', { name: 'ZOOM MultiStomp Commander' })).toBeVisible();
    
    const helpButton = page.getByRole('button').filter({ hasText: /^$/ });
    await expect(helpButton).toBeVisible();
    
    // Verify it's the help button by clicking it and checking the dialog appears
    await helpButton.click();
    await expect(page.getByRole('dialog', { name: 'About This App' })).toBeVisible();
  });
});
