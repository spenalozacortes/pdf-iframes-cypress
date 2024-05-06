import { locators } from "./locators";

class HomePage {
    getDownloadButton(button: string) {
        return cy.contains(locators.downloadSection, button).find(locators.downloadButton);
    }
}

export const homePage = new HomePage();
