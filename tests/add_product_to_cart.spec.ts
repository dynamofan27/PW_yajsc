import { expect } from '@playwright/test';
import { test } from '../fixtures';

test('Verify user can add product to cart', async ({ app, page }) => {

    await app.homePage.goto();
    await app.homePage.clickOnProductByName('Slip Joint Pliers');

    await expect(page).toHaveURL(/.*\/product\/.*/);
    await expect(app.productPage.productTitle).toContainText('Slip Joint Pliers');
    await expect(app.productPage.productPrice).toContainText('9.17');

    await app.productPage.addToCart.click();

    await expect(app.productPage.alert).toBeVisible();
    await expect(app.productPage.alert).toContainText('Product added to shopping cart');
    await expect(app.productPage.alert).toBeHidden({ timeout: 8000 });
    await expect(app.productPage.header.navCart).toContainText('1');

    await app.productPage.header.navCart.click();

    await expect(page).toHaveURL(/\/checkout$/);
    await expect(app.cart.quantity).toHaveValue('1');
    await expect(app.cart.productTitle).toContainText('Slip Joint Pliers');
    await expect(app.cart.checkoutButton1).toBeVisible();
});