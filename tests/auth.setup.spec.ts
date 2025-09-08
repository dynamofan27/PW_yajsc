import { test } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

let token: string;

test('login with valid credential', async ({ page, request }) => {
    const resp = await request.post('https://api.practicesoftwaretesting.com', {
        data: { 
            'email': 'customer@practicesoftwaretesting.com', 
            'password': 'welcome01',
        }
    });

    const jsonData = await resp.json(); 
    token = jsonData.access_token;

    await page.goto('');
    await page.evaluate((token) => {
        localStorage.setItem('auth-token', token);
    }, token);
    
    await page.reload();
    await page.context().storageState({ path: authFile });
});