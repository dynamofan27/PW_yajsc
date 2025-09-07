import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { CreditCardData } from './enums/credit.card';

test('Verify successful payment', async ({ loggedInApp: app }) => {
    await app.homePage.goto();

    const firstProduct = app.homePage.productNames.first();
    const firstProductName = await firstProduct.textContent();
    const firstProductPrice = (await app.homePage.productPrices.first().textContent())
    ?.replace(/[^0-9.]/g, '')
    .trim();

    await firstProduct.click();
    await app.productPage.addToCart.click();
    await app.productPage.header.navCart.click();

    await expect(app.cart.productTitle).toContainText(firstProductName);
    await expect(app.cart.productPrice).toContainText(firstProductPrice);

    await app.cart.checkoutButton1.click();

    await expect(app.checkoutPage.checkoutButton2).toBeVisible();

    await app.checkoutPage.checkoutButton2.click();
    await app.checkoutPage.fillShippingAddress('Delaware', '19726');
    await app.checkoutPage.checkoutButton3.click();
    await app.checkoutPage.paymentMethod.selectOption('Credit Card')
    await app.checkoutPage.fillCreditCard(CreditCardData);
    await app.checkoutPage.confirmButton.click();

    await expect(app.checkoutPage.successPayment).toContainText('Payment was successful');
});