import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { Cart } from '../pages/cart.page';

test('Verify user can add product to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cart = new Cart(page);

    await homePage.goto();
    await homePage.clickOnProductByName('Slip Joint Pliers');

    await expect(page).toHaveURL(/.*\/product\/.*/);
    await expect(productPage.productTitle).toContainText('Slip Joint Pliers');
    await expect(productPage.productPrice).toContainText('9.17');

    await productPage.addToCart.click();

    await expect(productPage.alert).toBeVisible();
    await expect(productPage.alert).toContainText('Product added to shopping cart');
    await expect(productPage.alert).toBeHidden({ timeout: 8000 });
    await expect(productPage.header.navCart).toContainText('1');

    await productPage.header.navCart.click();

    await expect(page).toHaveURL(/\/checkout$/);
    await expect(cart.quantity).toHaveValue('1');
    await expect(cart.productTitle).toContainText('Slip Joint Pliers');
    await expect(cart.checkoutButton).toBeVisible();
});