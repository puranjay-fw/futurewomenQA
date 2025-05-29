import { test, expect } from '@playwright/test';

test.describe('Navigation Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
  });

  test('Join Now redirects to the pricing page', async ({ page }) => {
    await page.getByRole('link', { name: 'Join Now' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/pricing/`);
    await expect(page.locator('h1')).toHaveText('Join the movement');
  });

  test('Navbar - Join Submenu Memberships', async ({ page }) => {
    await page.getByRole('link', { name: 'Join', exact: true }).click();
    await page.getByRole('link', { name: 'Memberships' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/pricing/`);
    await expect(page.locator('h1')).toHaveText('Join the movement');
  });

  test('Navbar - Join Submenu Introducing Diamond', async ({ page }) => {
    await page.getByRole('link', { name: 'Join', exact: true }).click();
    await page.getByRole('link', { name: 'Introducing Diamond' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/diamond/`);
    await expect(page.getByRole('heading', { name: 'A premium experience for' })).toBeVisible();
  });

  test('Navbar - Join Submenu Employer opportunities', async ({ page }) => {
    await page.getByRole('link', { name: 'Join', exact: true }).click();
    await page.getByRole('link', { name: 'Employer opportunities' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/corporate/`);
    await expect(page.getByText('TURN WORDS INTO ACTION', { exact: true })).toBeVisible();
  });

  test('Navbar - Join Submenu Our Story', async ({ page }) => {
    await page.getByRole('link', { name: 'Join', exact: true }).click();
    await page.getByRole('link', { name: 'Our story' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/about-fw/`);
    await expect(page.getByText('WE SUPPORT OUR MEMBERS')).toBeVisible();
  });

  test('Navbar - Resources Submenu Articles', async ({ page }) => {
    await page.getByRole('link', { name: 'Resources', exact: true }).click();
    await page.getByRole('link', { name: 'Articles' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/articles/`);
    await expect(page.locator('h1')).toHaveText('THE LATEST');
  });

  test('Navbar - Resources Submenu Podcasts', async ({ page }) => {
    await page.getByRole('link', { name: 'Resources', exact: true }).click();
    await page.getByRole('link', { name: 'Podcasts' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/podcasts/`);
    await expect(page.locator('h1')).toHaveText('LISTEN UP');
  });

  test('Navbar - Resources Submenu Newsletters', async ({ page }) => {
    await page.getByRole('link', { name: 'Resources', exact: true }).click();
    await page.getByRole('link', { name: 'Newsletters' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/newsletters/`);
    await expect(page.locator('h1')).toHaveText('SAVE TIME & STAY AHEAD');
  });

  test('Navbar - Resources Submenu Publications', async ({ page }) => {
    await page.getByRole('link', { name: 'Resources', exact: true }).click();
    await page.getByRole('link', { name: 'Publications' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/publications/`);
    await expect(page.locator('h1')).toHaveText('GENDER EQUALITY IN PRINT');
  });

  test('Footer navigation Scenario - About FW', async ({ page }) => {
    await page.getByRole('link', { name: 'About FW' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/about-fw/`);
    await expect(page.locator('h1')).toHaveText('WE SUPPORT OUR MEMBERS');
  });

  test('Footer navigation Scenario - FAQs', async ({ page }) => {
    await page.getByRole('link', { name: 'FAQs' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/faqs/`);
    await expect(page.locator('h1')).toHaveText('Frequently Asked Questions');
  });

  test('Footer navigation Scenario - Contact Us form', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact us' }).click();
    await page.getByRole('textbox', { name: 'First' }).fill(process.env.CONTACT_FIRST_NAME);
    await page.getByRole('textbox', { name: 'Last' }).fill(process.env.CONTACT_LAST_NAME);
    await page.getByRole('textbox', { name: 'Email (Required)' }).fill(process.env.CONTACT_EMAIL);
    await page.getByLabel('How can we help you?(Required)').selectOption('Membership Support');
    await page.getByRole('textbox', { name: 'Message (Required)' }).fill('Test message');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Contact Us Thanks for')).toBeVisible();
  });

  test('Footer navigation Scenario - Press', async ({ page }) => {
    await page.getByRole('link', { name: 'Press' }).click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/press/`);
    await expect(page.locator('span').filter({ hasText: 'IN THE NEWS' })).toBeVisible();
  });

  test('Footer navigation Scenario - Reconciliation action plan', async ({ page }) => {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'Reconciliation action plan' }).click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/.*reconciliation-action-plan.*/);
  });

  test('Footer navigation Scenario - Facebook', async ({ page }) => {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'Facebook' }).click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.facebook.com/futurewomen');
  });

  test('Footer navigation Scenario - Instagram', async ({ page }) => {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'Instagram' }).click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.instagram.com/futurewomen/');
  });

  test('Footer navigation Scenario - LinkedIn', async ({ page }) => {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'LinkedIn' }).click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.linkedin.com/company/future-women/');
  });
});