import { test, expect } from "@playwright/test";

test.only('compra com sucesso', async ({page}) => {

    await page.goto("https://saucedemo.com/");

    await page.fill('input[placeholder*=Username]', 'standard_user')
    await page.fill('input[placeholder*=Password]', 'secret_sauce')
    await page.click('input#login-button.submit-button.btn_action')


    await page.click('button#add-to-cart-sauce-labs-backpack')

    await page.click('div#shopping_cart_container')

    await page.click('button#checkout')


    await page.fill('input#first-name', 'Augusto')
    await page.fill('input#last-name', 'Oliveira Lima')
    await page.fill('input#postal-code', '18400030')
    await page.click('input#continue.submit-button')

    await page.click('button#finish')

    const modalMessage = page.locator('.complete-header')
    await expect(modalMessage).toHaveText('tt')
});