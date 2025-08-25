import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { PowerTools } from './enums/product.categories';

test('Verify user can filter products by category', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await page.getByRole('checkbox', { name: PowerTools.Sander }).check();

    const productNames = await homePage.productNames.allTextContents();
    productNames.forEach((name) => {
        expect(name).toContain('Sander');
    });
});
