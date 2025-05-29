// login & Sign Up Scenarios

import { test, expect } from '@playwright/test';
//env variables

    test('Login for the Red', async ({ page }) => {
      test.slow();
      await page.goto(process.env.BASE_URL);
      await page.getByRole('link', { name: 'Sign in' }).click();
      const inputField = page.locator('div input[type="email"]');
      await inputField.fill(process.env.RED_EMAIL);
      await expect(inputField).toHaveValue(process.env.RED_EMAIL);
      const continueButton = page.locator('input[type="submit"][value="Continue"]');
      await continueButton.click();
      const inputPassword = page.locator('div input[type="Password"]');
      await inputPassword.fill(process.env.RED_PASSWORD);
      const signInButton = page.locator('input[type="submit"][value="Sign in"]');
      await signInButton.click();
      await page.waitForTimeout(5000);
    });
    
    test('Login for the Gold', async ({ page }) => {
      test.slow();
      await page.goto(process.env.BASE_URL);
      await page.getByRole('link', { name: 'Sign in' }).click();
      const inputField = page.locator('div input[type="email"]');
      await inputField.fill(process.env.GOLD_EMAIL);
      await expect(inputField).toHaveValue(process.env.GOLD_EMAIL);
      const continueButton = page.locator('input[type="submit"][value="Continue"]');
      await continueButton.click();
      const inputPassword = page.locator('div input[type="Password"]');
      await inputPassword.fill(process.env.GOLD_PASSWORD);
      const signInButton = page.locator('input[type="submit"][value="Sign in"]');
      await signInButton.click();
      await page.waitForTimeout(5000);
    });

    test('Login for the Diamond', async ({ page }) => {
      test.slow();
      await page.goto(process.env.BASE_URL);
      await page.getByRole('link', { name: 'Sign in' }).click();
      const inputField = page.locator('div input[type="email"]');
      await inputField.fill(process.env.DIAMOND_EMAIL);
      await expect(inputField).toHaveValue(process.env.DIAMOND_EMAIL);
      const continueButton = page.locator('input[type="submit"][value="Continue"]');
      await continueButton.click();
      const inputPassword = page.locator('div input[type="Password"]');
      await inputPassword.fill(process.env.DIAMOND_PASSWORD);
      const signInButton = page.locator('input[type="submit"][value="Sign in"]');
      await signInButton.click();
      await page.waitForTimeout(5000);
    });

    test('Login for the Platinum', async ({ page }) => {
      test.slow();
      await page.goto(process.env.BASE_URL);
      await page.getByRole('link', { name: 'Sign in' }).click();
      await page.getByRole('textbox', { name: 'Email' }).click();
      await page.getByRole('textbox', { name: 'Email' }).fill(process.env.PLATINUM_EMAIL);
      await page.getByRole('button', { name: 'Continue' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PLATINUM_PASSWORD);
      await page.getByRole('button', { name: 'Sign in', exact: true }).click();
      await page.waitForTimeout(5000);
      await page.goto(`${process.env.BASE_URL}/home/platinum-plus/`);
    });

    test('New Member - Register', async ({ page }) => {
      await page.goto(process.env.BASE_URL);
      await page.getByRole('link', { name: 'Join now' }).click();
      await page.getByRole('link', { name: 'Become a member' }).click();
      await page.getByRole('link', { name: 'For individuals' }).click();
      await page.getByRole('link', { name: 'Join Yearly - $48 /yr' }).click();
      await page.getByRole('textbox', { name: 'Full name' }).fill(process.env.REGISTER_NAME);
      await page.getByRole('textbox', { name: 'Email address' }).click();
      await page.getByRole('textbox', { name: 'Email address' }).fill(process.env.REGISTER_EMAIL);
      await page.getByRole('button', { name: 'Add coupon' }).click();
      await page.getByRole('textbox', { name: 'Coupon code' }).fill(process.env.COUPON_CODE);
      await page.getByRole('button', { name: 'Apply' }).click();
      await page.getByRole('button', { name: 'Place your order' }).click();
      await page.goto(`${process.env.BASE_URL}${process.env.POST_PURCHASE_PATH}`);
      });
  


