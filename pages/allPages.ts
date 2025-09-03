import { Page } from '@playwright/test';
import { AccountPage } from './account.page';
import { Cart } from './cart.page';
import { HomePage } from './home.page';
import { LoginPage } from './login.page';
import { ProductPage } from './product.page';
import { CheckoutPage } from './checkoutPage';

export class AllPages {
    accountPage: AccountPage;
    cart: Cart;
    homePage: HomePage;
    loginPage: LoginPage;
    productPage: ProductPage;
    checkoutPage: CheckoutPage;

    constructor(page: Page) {
        this.accountPage = new AccountPage(page);
        this.cart = new Cart(page);
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.productPage = new ProductPage(page);
        this.checkoutPage = new CheckoutPage(page);
    }
}