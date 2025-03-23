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

    test('Navbar - Join Submenu Redirect 1', async ({ page }) => {
        
        await page.goto('https://fwstaging-core.futurewomen.com/');
 
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const articlesLink = await page.locator('a', { hasText: 'Articles' });
        await articlesLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/articles/');
        await expect(page.locator('h1')).toHaveText('THE LATEST');

    });

    test('Navbar - Join Submenu Redirect 2', async ({ page }) => {
        
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const sumitLink = await page.locator('a', { hasText: 'Podcasts' });
        await sumitLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/podcasts/');
        await expect(page.locator('h1')).toHaveText('LISTEN UP');
    });

    test('Navbar - Join Submenu Redirect 3', async ({ page }) => {
        
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const newsletterLink = await page.locator('a', { hasText: 'Newsletters' });
        await newsletterLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/newsletters/');
        await expect(page.locator('h1')).toHaveText('SAVE TIME & STAY AHEAD');
    });

    test('Navbar - Join Submenu Redirect 4', async ({ page }) => {
        
        await page.goto('https://fwstaging-core.futurewomen.com/');
        const resourceNavLink = await page.locator('a', { hasText: 'Resources' });
        await resourceNavLink.click();
        const publicationLink = await page.locator('a', { hasText: 'Publications' });
        await publicationLink.click();
        await expect(page).toHaveURL('https://fwstaging-core.futurewomen.com/publications/');
        await expect(page.locator('h1')).toHaveText('GENDER EQUALITY IN PRINT');
    });



});
