import { freeTestDataLocators } from "../../support/locators";

class HomePage {
    getDownloadButton(button: string) {
        return cy.contains(freeTestDataLocators.downloadSection, button).find(freeTestDataLocators.downloadButton);
    }
}

export const homePage = new HomePage();
