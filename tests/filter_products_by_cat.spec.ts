import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { PowerTools } from './enums/product.categories';

test('Verify user can filter products by category', async ({ app, page }) => {

    await app.homePage.goto();
    await page.getByRole('checkbox', { name: PowerTools.Sander }).check();

    const productNames = await app.homePage.productNames.allTextContents();
    productNames.forEach((name) => {
        expect(name).toContain('Sander');
    });
});
