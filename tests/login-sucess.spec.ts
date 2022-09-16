import { test, expect } from "@playwright/test";

test('deve logar com sucesso', async ({page}) => {

    //vai paraa página de Login
    await page.goto("https://saucedemo.com/");
    //const title = page.locator('.App-header p');
    //await expect(title).toHaveText('Login');

    //Submeter o formulario de login
    await page.fill('input[placeholder*=Username]', 'standard_user')
    await page.fill('input[placeholder*=Password]', 'secret_sauce')
    await page.click('input#login-button.submit-button.btn_action')
});   



