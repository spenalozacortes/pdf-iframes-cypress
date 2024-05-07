import { locators } from "./locators";

class HomePage {
    get downloadButton() {
        return cy.get(locators.downloadButton);
    }
}

export const homePage = new HomePage();
