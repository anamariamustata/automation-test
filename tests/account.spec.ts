import {test, expect} from '@playwright/test'
import LoginPage from '..//pages/log.page'

test('Login Action', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce')
    await page.locator('[value="Login"]').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    });


    test('Login with incorrect username', async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      await page.locator('#user-name').fill('new_user');
      await page.locator('#password').fill('secret_sauce')
      await page.locator('[value="Login"]').click()
      page.locator('[value="error-message-container"]').isVisible
      });

      test('Login with incorrect password', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('password123')
        await page.locator('[value="Login"]').click()
        page.locator('[value="error-message-container"]').isVisible
        });



