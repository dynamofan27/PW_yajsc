import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SortLabel, SortOrder } from './enums/label.sorting';

test.describe('Product sorting by price', () => {
    const sortOptions = [
        { label: SortLabel.AscendingByPrice, order: SortOrder.Ascending },
        { label: SortLabel.DescendingByPrice, order: SortOrder.Descending },
    ];

    sortOptions.forEach(({ label, order }) => {
        test(`Verify user can perform sorting by name (${order}): ${label}`, async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.goto();

            await homePage.sort.selectOption({ label });

            const productPrices = await homePage.productPrices.allTextContents();

            const sortedNames = [...productPrices].sort((a, b) =>
                order === SortOrder.Ascending ? a.localeCompare(b) : b.localeCompare(a)
            );

            expect(productPrices).toEqual(sortedNames);
        });
    });
});
