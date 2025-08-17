import { Locator, Page } from "@playwright/test";

export class ProductPage {
    page: Page;
    productTitle: Locator;
    productPrice: Locator;
    addToCart: Locator;
    addToFavourites: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = this.page.getByTestId("product-name");
        this.productPrice = this.page.getByTestId("unit-price");
        this.addToCart = this.page.getByTestId("add-to-cart");
        this.addToFavourites = this.page.getByTestId("add-to-favorites");
    }
}