// login & Sign Up Scenarios

import { test, expect } from '@playwright/test';

/*test.beforeEach(async ({ page }) => {
  // Runs before each test
  await page.goto('https://fwstaging-core.futurewomen.com/');
});*/

test('Login for the Diamond', async ({ page }) => {
  test.slow();
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

});

test('Login for the Red', async ({ page }) => {
  test.slow();
      await page.goto('https://fwstaging-core.futurewomen.com/');
      await page.getByRole('link', { name: 'Sign in' }).click();
      //await signInLink.click();
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
      //await expect(heading).toHaveText('WELCOME BACK', { timeout: 10000 });
      //await expect(page).toHaveTitle("Women's Club For Personal And Professional Success - FW");
  
  });

test('Login for the Gold', async ({ page }) => {
  test.slow();
      await page.goto('https://fwstaging-core.futurewomen.com/');
      await page.getByRole('link', { name: 'Sign in' }).click();
      const inputField = await page.locator('div input[type="email"]');
      await inputField.fill('gold.ns@yopmail.com');
      await expect(inputField).toHaveValue('gold.ns@yopmail.com'); 
      const continueButton = await page.locator('input[type="submit"][value="Continue"]');
      await continueButton.click();
      const inputPassword = await page.locator('div input[type="Password"]');
      await inputPassword.fill('Test@123'); 
      const signInButton = await page.locator('input[type="submit"][value="Sign in"]');
      await signInButton.click(); 
      await page.waitForTimeout(5000);
      //await expect(page).toHaveTitle(/Diamond/);
  
  });


test('New Member Register', async ({ page }) => {
  test.slow();
      //const joinNowlink = page.locator('a', { hasText: 'Join Now' }); 
      //await joinNowlink.click(); 
      //const indivisualBtn = await page.locator('div input[type="For Individuals"]');  
      //await indivisualBtn.click;
      await page.goto('https://lewinnovation.memberful.com/checkout?plan=103012');
      const buttonReg = page.locator('button', { hasText: 'Add coupon' });
      buttonReg.click();
      const inputCupon = page.locator('input[aria-label="Coupon code"]');
      await inputCupon.fill('DEVTEST1234');
      const applyButton = page.locator('button', { hasText: 'Apply' });      
      applyButton.click();
      const fullName = page.locator('input[name="checkout[full_name]"]');
      await fullName.fill('Puranjay');
      const email = page.locator('input[placeholder="Email address"]');
      await email.fill('puranjay@gmail.com');
      const orderButton = page.locator('button', { hasText: 'Place your order' });
      await orderButton.click();
  
  });

test('Login for the Platinum', async ({ page }) => {
  test.slow();
    await page.goto('https://fwstaging-core.futurewomen.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('platinum.n1@yopmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(5000);
    await page.goto('https://fwstaging-core.futurewomen.com/home/platinum-plus/');
    
  });


