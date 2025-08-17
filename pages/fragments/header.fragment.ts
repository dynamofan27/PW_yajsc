import { Locator, Page } from "@playwright/test";

export class HeaderComponent {
    page: Page;
    homeLink: Locator;
    categoriesLink: Locator;
    contactLink: Locator;
    signInLink: Locator;
    navMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = this.page.getByTestId('nav-home');
        this.categoriesLink = this.page.getByTestId('nav-categories');
        this.contactLink = this.page.getByTestId('nav-contact');
        this.signInLink = this.page.getByTestId('nav-sign-in');
        this.navMenu = this.page.getByTestId('nav-menu');
    }
}