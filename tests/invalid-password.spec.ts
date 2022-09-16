import { test, expect } from "@playwright/test";

test('senha incorreta', async ({page}) => {

    //vai paraa página de Login
    await page.goto("https://saucedemo.com/");
    //const title = page.locator('.App-header p');
    //await expect(title).toHaveText('Login');

    //Submeter o formulario de login
    await page.fill('input[placeholder*=Username]', 'standard_user')
    await page.fill('input[placeholder*=Password]', 'senha')
    await page.click('input#login-button.submit-button.btn_action')

    //validar o toaster
    const modalMessage = page.locator('.error-message-container')
    await expect(modalMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
});