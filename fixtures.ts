import { AllPages } from './pages/allPages';
import { test as base } from '@playwright/test';
//import path from 'path';

type MyFixtures = {
  app: AllPages;
  loggedInApp: AllPages;
};

interface LoginResponse {
  access_token: string;
}

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    const app = new AllPages(page);
    await use(app);
  },

  loggedInApp: async ({ request, page }, use) => {
    const apiUrl = process.env.BASE_API_URL || 'https://api.practicesoftwaretesting.com';

    const response = await request.post(`${apiUrl}/users/login`, {
      data: {
        'email': 'customer@practicesoftwaretesting.com', 
        'password': 'welcome01',
      },
    });

    if (!response.ok()) {
      throw new Error(`Login API failed: ${response.status()} ${response.statusText()}`);
    }

    const jsonData = (await response.json()) as LoginResponse;
    const token = jsonData.access_token;

    await page.goto('/');
    await page.evaluate((token) => {
      localStorage.setItem('auth-token', token);
    }, token);

    await page.reload();

    const app = new AllPages(page);
    await use(app);
  },
});

export { expect } from '@playwright/test';
