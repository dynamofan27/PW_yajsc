import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('login with valid credential', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
    await expect(page).toHaveURL(/\/account$/);
    await page.context().storageState({ path: authFile });
});