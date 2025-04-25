/*import { test, expect } from '@playwright/test';

test('Booking an Event for Red', async ({ page }) => {
  await page.goto('https://fwstaging-core.futurewomen.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mailto:red.ns@yopmail.com');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email' }).fill('red.ns@yopmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.goto('https://fwstaging-core.futurewomen.com/home/welcome-red/');
  await page.getByRole('link', { name: 'YOUR EVENTS' }).click();
  await page.goto('https://fwstaging-community.futurewomen.com/events/red-member-events/');
  await page.locator('a').filter({ hasText: 'PS - Test Automation Event' }).click();
  await page.getByRole('button', { name: 'Book now Free' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('div').filter({ hasText: /^Confirm$/ }).locator('span').click();
  await page.locator('#am-add-to-calendar div').filter({ hasText: 'Add to Calendar' }).click();
  await page.getByText('Finish').click();
  await page.getByText('Apr 29 PS - Test Automation Event 2025 Free 2/10 7:45PM - 8:45PM').click();
  await page.getByRole('button', { name: 'Close' }).click();
});

test('Register a Diamond Course', async ({ page }) => {
  await page.goto('https://fwstaging-core.futurewomen.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('diamond.ns@yopmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.goto('https://fwstaging-core.futurewomen.com/home/welcome-diamond/');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('.event-button').first().click();
});*/
