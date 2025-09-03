import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { SortLabel, SortOrder } from './enums/label.sorting';

test.describe('Product sorting by name', () => {
    const sortOptions = [
        { label: SortLabel.AscendingByName, order: SortOrder.Ascending },
        { label: SortLabel.DescendingByName, order: SortOrder.Descending },
    ];

    sortOptions.forEach(({ label, order }) => {
        test(`Verify user can perform sorting by name (${order}): ${label}`, async ({ app }) => {
            await app.homePage.goto();

            await app.homePage.sort.selectOption({ label });

            const productNames = await app.homePage.productNames.allTextContents();

            const sortedNames = [...productNames].sort((a, b) =>
                order === SortOrder.Ascending ? a.localeCompare(b) : b.localeCompare(a)
            );

            expect(productNames).toEqual(sortedNames);
        });
    });
});
