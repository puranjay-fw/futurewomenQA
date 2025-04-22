import { test, expect } from '@playwright/test';

// Test suite for navigation scenarios
test.describe('Navigation Scenarios', () => {
    
    test('Join Now redirects to the pricing page', async ({ page }) => {
        
        //await expect(page).toHaveURL('https://example.com');
        //await expect(page.locator('h1')).toHaveText('Example Domain');

        await page.goto('https://fwstaging-core.futurewomen.com/');
        const joinNowlink = page.locator('a', { hasText: 'Join Now' });
        await joinNowlink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/pricing/');
        await expect(page.locator('h1')).toHaveText('Join the movement');

    });

    test('Navbar - Join Submenu Memberships', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'Join', exact: true }).click();
        await page.getByRole('link', { name: 'Memberships' }).click();
        await page.getByText('Join the movement', { exact: true }).click();
      });

    test('Navbar - Join Submenu Introducing Diamond', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'Join', exact: true }).click();
        await page.getByRole('link', { name: 'Introducing Diamond' }).click();
        await page.getByRole('heading', { name: 'A premium experience for' }).click();
      });

    test('Navbar - Join Submenu Employer opportunities', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'Join', exact: true }).click();
        await page.getByRole('link', { name: 'Employer opportunities' }).click();
        await page.getByText('TURN WORDS INTO ACTION', { exact: true }).click();
      });

    test('Navbar - Join Submenu Our Story', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'Join', exact: true }).click();
        await page.getByRole('link', { name: 'Our story' }).click();
        await page.getByText('WE SUPPORT OUR MEMBERS').click();
      });

    test('Navbar - Resources Submenu Articles', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const articlesLink = await page.locator('a', { hasText: 'Articles' });
        await articlesLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/articles/');
        await expect(page.locator('h1')).toHaveText('THE LATEST');

    });

    test('Navbar - Resources Submenu Podcasts', async ({ page }) => {
        
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const sumitLink = await page.locator('a', { hasText: 'Podcasts' });
        await sumitLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/podcasts/');
        await expect(page.locator('h1')).toHaveText('LISTEN UP');
    });

    test('Navbar - Resources Submenu Newsletters', async ({ page }) => {
        
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const newsletterLink = await page.locator('a', { hasText: 'Newsletters' });
        await newsletterLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/newsletters/');
        await expect(page.locator('h1')).toHaveText('SAVE TIME & STAY AHEAD');
    });

    test('Navbar - Resources Submenu Resources', async ({ page }) => {
        
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const publicationLink = await page.locator('a', { hasText: 'Publications' });
        await publicationLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/publications/');
        await expect(page.locator('h1')).toHaveText('GENDER EQUALITY IN PRINT');
    });
    

    test('Footer navigation Scenario - About FW', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'Join', exact: true }).click();
        await page.getByRole('link', { name: 'Memberships' }).click();
        await page.getByText('Join the movement', { exact: true }).click();
        await page.getByRole('link', { name: 'About FW' }).click();
      });

    test('Footer navigation Scenario - About FAQs', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'FAQs' }).click();
        await page.getByRole('link', { name: 'FW Help Centre home page' }).click();
      });

    test('Footer navigation Scenario - Contact Us form', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'Contact us' }).click();
        await page.getByRole('textbox', { name: 'First' }).click();
        await page.getByRole('textbox', { name: 'First' }).fill('John');
        await page.getByRole('textbox', { name: 'Last' }).click();
        await page.getByRole('textbox', { name: 'Last' }).fill('Doe');
        await page.getByRole('textbox', { name: 'Email (Required)' }).click();
        await page.getByRole('textbox', { name: 'Email (Required)' }).fill('John@gmail.com');
        await page.getByLabel('How can we help you?(Required)').selectOption('Membership Support');
        await page.getByRole('textbox', { name: 'Message (Required)' }).click();
        await page.getByRole('textbox', { name: 'Message (Required)' }).fill('test message');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('Contact Us Thanks for').click();
      });

    test('Footer navigation Scenario - Press', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        await page.getByRole('link', { name: 'Press' }).click();
        await page.locator('span').filter({ hasText: 'IN THE NEWS' }).click();
      });

    test('Footer navigation Scenario - Reconciliation action plan', async ({ page }) => {
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Reconciliation action plan' }).click();
        const page1 = await page1Promise;
        await page1.getByRole('img', { name: 'Page 1 of 22, Future Women' }).click();
      });

});
