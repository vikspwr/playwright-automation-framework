import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { navigateToSauceDemo } from '../utils/helper'
import { InventoryPage } from '../pages/inventory-page';

test.describe("Login Page Testing", () => {

    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach("Precondition", async ({ page }) => {
        loginPage = new LoginPage(page);
        await navigateToSauceDemo(page, "https://www.saucedemo.com/")

    });

    test("Login Functionality", async ({ page }) => {

        await test.step("Perform Login", async () => {
            inventoryPage = await loginPage.loginToSauceDemo("standard_user", "secret_sauce");
        })

    });

    test("Validate text on Login Page", async ({ page }) => {
        await test.step("Assertion - Text on Login Page", async () => {
            const textOnLoginPage = await loginPage.textOnLoginPage();
            expect(textOnLoginPage).toBe("Swag Labs");
        })

    });

    test("Validate Login Page URL", async ({ page }) => {

        await test.step("Assertion - Login Page URL", async ({ }) => {
            const loginPageURL = loginPage.urlOfloginPage();
            await expect(page).toHaveURL(loginPageURL);
        })

    });

})