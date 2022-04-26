import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.c-tabs__tablist button')).toHaveCount(3);
	await page.locator('text=Show D >> input[type="checkbox"]').check();
	await expect(page.locator('.c-tabs__tablist button')).toHaveCount(4);
	await page.locator('text=Show E >> input[type="checkbox"]').check();
	await expect(page.locator('.c-tabs__tablist button')).toHaveCount(5);
	await page.locator('text=Show D >> input[type="checkbox"]').uncheck();
	await expect(page.locator('.c-tabs__tablist button')).toHaveCount(4);
	await page.locator('text=Show E >> input[type="checkbox"]').uncheck();
	await expect(page.locator('.c-tabs__tablist button')).toHaveCount(3);
	await page.pause();
});
