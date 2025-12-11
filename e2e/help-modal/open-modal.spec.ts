// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Help Modal Interaction', () => {
  test('should open help modal when clicking help button', async ({ page }) => {
    await page.goto('/');

    // 2. Click the '?' help button
    await page.getByRole('button').filter({ hasText: /^$/ }).click();

    // Verify help modal opens
    await expect(page.getByRole('dialog', { name: 'About This App' })).toBeVisible();

    // Verify modal contains app description text
    await expect(page.getByText('This tool generates SysEx commands to control ZOOM MultiStomp series effects pedals via MIDI controllers.')).toBeVisible();

    // Verify modal contains GitHub link
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();

    // Verify modal contains Buy Me A Coffee link
    await expect(page.getByRole('link', { name: '☕ Buy me a coffee' })).toBeVisible();
  });
});
