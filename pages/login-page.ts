import { Locator, Page } from "@playwright/test";
import { loginPageLocators } from "../page-locators/login-page-locators";
import { InventoryPage } from "./inventory-page";

export class LoginPage {

    // Page Objects

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginLogo: Locator;
    readonly emptyCredentialsErrorMessage: Locator;
    readonly invalidCredentialsErrorMessage: Locator;

    // Object Initialization

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator(loginPageLocators.usernameInput);
        this.passwordInput = page.locator(loginPageLocators.passwordInput);
        this.loginButton = page.locator(loginPageLocators.loginButton);
        this.loginLogo = page.locator(loginPageLocators.loginLogo);
        this.usernameInput = page.locator(loginPageLocators.usernameInput);
        this.emptyCredentialsErrorMessage = page.locator(loginPageLocators.emptyCredentialsErrorMessage.selector, loginPageLocators.emptyCredentialsErrorMessage.options);
        this.invalidCredentialsErrorMessage = page.locator(loginPageLocators.invalidCredentialsErrorMessage.selector, loginPageLocators.invalidCredentialsErrorMessage.options);
    }

    // Actions

    async loginToSauceDemo(username: string, password: string) {

        await this.usernameInput.clear();
        await this.usernameInput.fill(username);
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        return new InventoryPage(this.page);

    }

    async textOnLoginPage(): Promise<string | null> {
        return await this.loginLogo.textContent();
    }

    urlOfloginPage(): string {
        return this.page.url();
    }

}