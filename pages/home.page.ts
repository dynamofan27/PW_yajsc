import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page;
    productCard: Locator;
    sort: Locator;
    productNames: Locator;
    productPrices: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productCard = this.page.locator('a.card');
        this.sort = this.page.getByTestId('sort');
        this.productNames = this.page.getByTestId('product-name');
        this.productPrices = this.page.getByTestId('product-price');
    }

    async clickOnProductByName(productName: string) {
        await this.productCard.getByText(productName).click();
    }

    async goto() {
        await this.page.goto('/');
    }
}