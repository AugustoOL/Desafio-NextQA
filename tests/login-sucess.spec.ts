import { test, expect } from "@playwright/test";

test('deve logar com sucesso', async ({page}) => {

    await page.goto("https://saucedemo.com/");

    await page.fill('input[placeholder*=Username]', 'standard_user')
    await page.fill('input[placeholder*=Password]', 'secret_sauce')
    await page.click('input#login-button.submit-button.btn_action')
});   



