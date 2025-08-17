import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';

test('Verify user can view product details', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.goto();
    await homePage.clickOnProductByName('Combination Pliers');

    await expect(page).toHaveURL(/.*\/product\/.*/);
    await expect(productPage.productTitle).toContainText('Combination Pliers');
    await expect(productPage.productPrice).toContainText('14.15');
    await expect(productPage.addToCart).toBeVisible();
    await expect(productPage.addToFavourites).toBeVisible();
});