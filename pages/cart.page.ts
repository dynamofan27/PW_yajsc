import { Locator, Page } from "@playwright/test";

export class Cart {
    page: Page;
    productTitle: Locator;
    quantity: Locator;
    productPrice: Locator;
    totalProductPrice: Locator;
    totalCartPrice: Locator;
    checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = this.page.getByTestId('product-title');
        this.quantity = this.page.getByTestId('product-quantity');
        this.productPrice = this.page.getByTestId('product-price');
        this.totalProductPrice = this.page.getByTestId('line-price');
        this.totalCartPrice = this.page.getByTestId('cart-total');
        this.checkoutButton = this.page.getByTestId('proceed-1');
    }

}