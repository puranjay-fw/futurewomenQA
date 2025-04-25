// login.spec.ts

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs before each test
  await page.goto('https://fwstaging-core.futurewomen.com/');
});

test('Login for the Diamond', async ({ page }) => {
    const signInLink = page.locator('a', { hasText: 'Sign in' });

    const visibleElement = signInLink.locator(':visible').first();

    if (await visibleElement.isVisible()) {
     // Now you can interact with the visible element, e.g., click it
     await visibleElement.click();
    }

    // Locate the input field inside a div (you can refine this with a more specific selector)
    const inputField = await page.locator('div input[type="email"]'); // Adjust the selector if needed

    // Type an email into the input field
    await inputField.fill('diamond.ns@yopmail.com');
  
    // Optionally, verify that the field contains the correct email
    await expect(inputField).toHaveValue('diamond.ns@yopmail.com');

    const continueButton = await page.locator('input[type="submit"][value="Continue"]');

    await continueButton.click();

    const inputPassword = await page.locator('div input[type="Password"]'); // Adjust the selector if needed

    // Type an email into the input field
    await inputPassword.fill('Test@123');

    const signInButton = await page.locator('input[type="submit"][value="Sign in"]');

    await signInButton.click();

    await page.waitForTimeout(5000); // make script wait on the Diamond Home

    //await expect(page).toHaveTitle(/Diamond/);

});

test('Login for the Red', async ({ page }) => {
      const signInLink = page.locator('a', { hasText: 'Sign in' });
      
      const visibleElement = signInLink.locator(':visible').first();

      if (await visibleElement.isVisible()) {
        // Now you can interact with the visible element, e.g., click it
        await visibleElement.click();
      }
      //await signInLink.click();

      // Locate the input field inside a div (you can refine this with a more specific selector)
      const inputField = await page.locator('div input[type="email"]'); // Adjust the selector if needed
  
      // Type an email into the input field
      await inputField.fill('red.ns@yopmail.com');
    
      // Optionally, verify that the field contains the correct email
      await expect(inputField).toHaveValue('red.ns@yopmail.com');
  
      const continueButton = await page.locator('input[type="submit"][value="Continue"]');
  
      await continueButton.click();
  
      const inputPassword = await page.locator('div input[type="Password"]'); // Adjust the selector if needed
  
      // Type an email into the input field
      await inputPassword.fill('Test@123');
  
      const signInButton = await page.locator('input[type="submit"][value="Sign in"]');
  
      await signInButton.click();
  
      await page.waitForTimeout(5000); // make script wait on the Diamond Home
      //await expect(heading).toHaveText('WELCOME BACK', { timeout: 10000 });
      //await expect(page).toHaveTitle("Women's Club For Personal And Professional Success - FW");
  
  });

test('Login for the Gold', async ({ page }) => {

      const signInLink = page.locator('a', { hasText: 'Sign in' });

      const visibleElement = signInLink.locator(':visible').first();

      if (await visibleElement.isVisible()) {
       // Now you can interact with the visible element, e.g., click it
      await visibleElement.click();
      }
  
      // Locate the input field inside a div (you can refine this with a more specific selector)
      const inputField = await page.locator('div input[type="email"]'); // Adjust the selector if needed
  
      // Type an email into the input field
      await inputField.fill('gold.ns@yopmail.com');
    
      // Optionally, verify that the field contains the correct email
      await expect(inputField).toHaveValue('gold.ns@yopmail.com');
  
      const continueButton = await page.locator('input[type="submit"][value="Continue"]');
  
      await continueButton.click();
  
      const inputPassword = await page.locator('div input[type="Password"]'); // Adjust the selector if needed
  
      // Type an email into the input field
      await inputPassword.fill('Test@123');
  
      const signInButton = await page.locator('input[type="submit"][value="Sign in"]');
  
      await signInButton.click();
  
      await page.waitForTimeout(5000); // make script wait on the Diamond Home
  
      //await expect(page).toHaveTitle(/Diamond/);
  
  });


test('New Member Register', async ({ page }) => {
      const joinNowlink = page.locator('a', { hasText: 'Join Now' });
  
      await joinNowlink.click();
  
      const indivisualBtn = await page.locator('div input[type="For Individuals"]'); 
  
      await indivisualBtn.click;

      await page.goto('https://lewinnovation.memberful.com/checkout?plan=103012');

      const buttonReg = page.locator('button', { hasText: 'Add coupon' });

      buttonReg.click();

      const inputCupon = page.locator('input[aria-label="Coupon code"]');

      await inputCupon.fill('DEVTEST1234');

      const applyButton = page.locator('button', { hasText: 'Apply' });
      
      applyButton.click();

      const fullName = page.locator('input[name="checkout[full_name]"]');
      await fullName.fill('Puranjay');

      //const email = page.locator('input[aria-label="Email address"]');
      const email = page.locator('input[placeholder="Email address"]');

      await email.fill('puranjay@gmail.com');

      const orderButton = page.locator('button', { hasText: 'Place your order' });
      
      await orderButton.click();


  
  });


