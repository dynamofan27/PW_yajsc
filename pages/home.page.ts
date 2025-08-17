import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page;
    productCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productCard = this.page.locator('a.card');
    }

    async clickOnProductByName(productName: string) {
        await this.productCard.getByText(productName).click();
    }

    async goto() {
        await this.page.goto('/');
    }
}