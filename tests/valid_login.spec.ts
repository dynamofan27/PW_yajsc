import { test, expect } from '@playwright/test';
import { HeaderComponent } from '../pages/fragments/header.fragment';
import { AccountPage } from '../pages/account.page';

test('login with valid credential', async ({ page }) => {
    const headerFragments = new HeaderComponent(page);
    const accountPage = new AccountPage(page);

    await page.goto('/account');

    await expect(accountPage.pageTitle).toHaveText('My account');
    await expect(headerFragments.navMenu).toHaveText('Jane Doe');
});