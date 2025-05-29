import { test, expect } from '@playwright/test';

test('Booking an Event for Red/Godl/Plat', async ({ page }) => {
  test.slow();

  // Navigate to the base URL
  await page.goto(process.env.BASE_URL);

  // Click on 'Sign in'
  await page.getByRole('link', { name: 'Sign in' }).click();

  // Fill in the email
  const emailInput = page.locator('div input[type="email"]');
  await emailInput.fill(process.env.RED_EMAIL);
  await expect(emailInput).toHaveValue(process.env.RED_EMAIL);

  // Click on 'Continue'
  await page.locator('input[type="submit"][value="Continue"]').click();

  // Fill in the password
  await page.locator('div input[type="Password"]').fill(process.env.RED_PASSWORD);

  // Click on 'Sign in'
  await page.locator('input[type="submit"][value="Sign in"]').click();

  // Wait for navigation to complete
  await page.waitForTimeout(5000);

  // Navigate to the welcome page
  await page.goto(`${process.env.BASE_URL}/home/welcome-red/`);

  // Click on 'YOUR EVENTS'
  await page.getByRole('link', { name: 'YOUR EVENTS' }).click();

  // Navigate to the events page
  await page.goto(`${process.env.COMMUNITY_URL}/events/red-member-events/`);

  // Click on the specific event
  await page.locator('a').filter({ hasText: 'PS - Test Automation Event' }).click();

  // Book the event
  await page.getByRole('button', { name: 'Book now Free' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Confirm the booking
  await page.locator('div').filter({ hasText: /^Confirm$/ }).locator('span').click();

  // Add to calendar
  await page.locator('#am-add-to-calendar div').filter({ hasText: 'Add to Calendar' }).click();

  // Finish the process
  await page.getByText('Finish').click();
});


test('Register a Diamond Course', async ({ page }) => {
  test.slow();

  // Navigate to the base URL
  await page.goto(process.env.BASE_URL);

  // Sign in
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('div input[type="email"]').fill(process.env.DIAMOND_EMAIL);
  await page.locator('input[type="submit"][value="Continue"]').click();
  await page.locator('div input[type="Password"]').fill(process.env.DIAMOND_PASSWORD);
  await page.locator('input[type="submit"][value="Sign in"]').click();

  // Wait for navigation to complete
  await page.waitForTimeout(5000);

  // Navigate to the welcome page
  await page.goto(`${process.env.BASE_URL}/home/welcome-diamond/`);

  // Handle potential dialog
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  // Register for the course
  await page.locator('.event-button').first().click();
});