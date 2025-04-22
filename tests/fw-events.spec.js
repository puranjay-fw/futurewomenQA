import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://fwstaging-core.futurewomen.com/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Reconciliation action plan' }).click();
    const page1 = await page1Promise;
  });