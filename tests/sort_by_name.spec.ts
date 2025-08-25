import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SortLabel, SortOrder } from './enums/label.sorting';

test.describe('Product sorting by name', () => {
    const sortOptions = [
        { label: SortLabel.AscendingByName, order: SortOrder.Ascending },
        { label: SortLabel.DescendingByName, order: SortOrder.Descending },
    ];

    sortOptions.forEach(({ label, order }) => {
        test(`Verify user can perform sorting by name (${order}): ${label}`, async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.goto();

            await homePage.sort.selectOption({ label });

            const productNames = await homePage.productNames.allTextContents();

            const sortedNames = [...productNames].sort((a, b) =>
                order === SortOrder.Ascending ? a.localeCompare(b) : b.localeCompare(a)
            );

            expect(productNames).toEqual(sortedNames);
        });
    });
});
