import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HeaderComponent } from '../pages/fragments/header.fragment';
import { AccountPage } from '../pages/account.page';

test('login with valid credential', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const headerFragments = new HeaderComponent(page);
    const accountPage = new AccountPage(page);

    await loginPage.goto();

    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

    await expect(page).toHaveURL(/\/account$/);
    await expect(accountPage.pageTitle).toHaveText('My account');
    await expect(headerFragments.navMenu).toHaveText('Jane Doe');
});