import { test, expect } from '../fixtures';
import { mockProducts } from "../utils/mock";

test("Verify products quantity is 20", async ({ page, app }) => {
  await page.route(`https://api.practicesoftwaretesting.com/products**`, mockProducts);

  await app.homePage.goto();

  await expect(page.getByTestId("product-name")).toHaveCount(20);
});