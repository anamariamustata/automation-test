import {test, expect} from '@playwright/test'
import LoginPage from '..//pages/log.page'

test('Login Action', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce')
    await page.locator('[value="Login"]').click()

    //products are added to cart
    await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()


//make assertion
    expect(page.locator('[id="remove-sauce-labs-backpack"]')).toBeVisible
    expect(page.locator('[id="remove-sauce-labs-bolt-t-shirt"]')).toBeVisible

    //go to shopping cart
    await page.click('.shopping_cart_link');
    //verify if the checkout is visible
    expect(page.locator('[id="checkout"]')).toBeVisible

    await page.locator('[id="checkout"]').click()
    
    await page.locator('#first-name').fill('Alice');
    await page.locator('#last-name').fill('John');
    await page.locator('#postal-code').fill('1234');
    await page.locator('[id="continue"]').click()

    await expect(page.getByText('Total: $49.66')).toBeVisible();

    await page.locator('#finish').click();

    expect(page.getByText('Thank you for your order!')).toBeVisible();










    });



