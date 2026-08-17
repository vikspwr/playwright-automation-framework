import { Page } from "@playwright/test";

async function navigateToSauceDemo(page: Page, url: string) {
    await page.goto(url);
}

export { navigateToSauceDemo }