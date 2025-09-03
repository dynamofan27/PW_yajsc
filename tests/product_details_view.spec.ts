import { expect } from '@playwright/test';
import { test } from '../fixtures';

test('Verify user can view product details', async ({ app, page }) => {
    await app.homePage.goto();
    await app.homePage.clickOnProductByName('Combination Pliers');

    await expect(page).toHaveURL(/.*\/product\/.*/);
    await expect(app.productPage.productTitle).toContainText('Combination Pliers');
    await expect(app.productPage.productPrice).toContainText('14.15');
    await expect(app.productPage.addToCart).toBeVisible();
    await expect(app.productPage.addToFavourites).toBeVisible();
});