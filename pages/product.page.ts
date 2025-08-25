import { Locator, Page } from "@playwright/test";
import { HeaderComponent } from "./fragments/header.fragment";
export class ProductPage {
    page: Page;
    productTitle: Locator;
    productPrice: Locator;
    addToCart: Locator;
    addToFavourites: Locator;
    alert: Locator;
    header: HeaderComponent;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = this.page.getByTestId('product-name');
        this.productPrice = this.page.getByTestId('unit-price');
        this.addToCart = this.page.getByTestId('add-to-cart');
        this.addToFavourites = this.page.getByTestId('add-to-favorites');
        this.alert = this.page.getByRole('alert', { name: 'Product added to shopping cart' });
        this.header = new HeaderComponent(this.page);
    }
}