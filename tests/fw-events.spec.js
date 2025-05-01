import { test, expect } from '@playwright/test';

test('Booking an Event for Red', async ({ page }) => {
  await page.goto('https://fwstaging-core.futurewomen.com/');
  const signInLink = page.locator('a', { hasText: 'Sign in' });
  await page.getByRole('link', { name: 'Sign in' }).click();
  const inputField = await page.locator('div input[type="email"]');
  await inputField.fill('red.ns@yopmail.com');
  await expect(inputField).toHaveValue('red.ns@yopmail.com');
  const continueButton = await page.locator('input[type="submit"][value="Continue"]');
  await continueButton.click();
  const inputPassword = await page.locator('div input[type="Password"]');
  await inputPassword.fill('Test@123');
  const signInButton = await page.locator('input[type="submit"][value="Sign in"]');
  await signInButton.click();
  await page.waitForTimeout(5000);
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

});

test('Register a Diamond Course', async ({ page }) => {
  await page.goto('https://fwstaging-core.futurewomen.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  const inputField = await page.locator('div input[type="email"]');
  await inputField.fill('diamond.ns@yopmail.com');
  await expect(inputField).toHaveValue('diamond.ns@yopmail.com');
  const continueButton = await page.locator('input[type="submit"][value="Continue"]');
  await continueButton.click();
  const inputPassword = await page.locator('div input[type="Password"]');
  await inputPassword.fill('Test@123');
  const signInButton = await page.locator('input[type="submit"][value="Sign in"]');
  await signInButton.click();
  await page.waitForTimeout(5000);
  await page.goto('https://fwstaging-core.futurewomen.com/home/welcome-diamond/');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('.event-button').first().click();
  
});

//new user auth Scenario
test('Booking an Event for Platimun+', async ({ page }) => {
  await page.goto('https://fwstaging-core.futurewomen.com/');
  const signInLink = page.locator('a', { hasText: 'Sign in' });
  await page.getByRole('link', { name: 'Sign in' }).click();
  const inputField = await page.locator('div input[type="email"]');
  await inputField.fill('platinum.n1@yopmail.com');
  await expect(inputField).toHaveValue('platinum.n1@yopmail.com');
  const continueButton = await page.locator('input[type="submit"][value="Continue"]');
  await continueButton.click();
  const inputPassword = await page.locator('div input[type="Password"]');
  await inputPassword.fill('Test@123');
  const signInButton = await page.locator('input[type="submit"][value="Sign in"]');
  await signInButton.click();
  await page.waitForTimeout(5000);
  await page.goto('https://fwstaging-core.futurewomen.com/home/welcome-red/');
  await page.getByRole('link', { name: 'YOUR EVENTS' }).click();
  await page.goto('https://fwstaging-core.futurewomen.com/home/platinum-plus/');
  /*await page.locator('a').filter({ hasText: 'PS - Test Automation Event' }).click();
  await page.getByRole('button', { name: 'Book now Free' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('div').filter({ hasText: /^Confirm$/ }).locator('span').click();
  await page.locator('#am-add-to-calendar div').filter({ hasText: 'Add to Calendar' }).click();
  await page.getByText('Finish').click();
  */
});
