import { AllPages } from './pages/allPages';
import { test as base } from '@playwright/test';
import path from 'path';

type MyFixtures = {
  app: AllPages;
  loggedInApp: AllPages;
};

const authFile = path.join(__dirname, './playwright/.auth/user.json');

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    const app = new AllPages(page);
    await use(app);
  },

  loggedInApp: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();

    const app = new AllPages(page);
    await use(app);

    await context.close();
  },
});

export { expect } from '@playwright/test';
