import { sharedFilesLocators } from "../../support/locators";

class HomePage {
    get downloadButton() {
        return cy.get(sharedFilesLocators.downloadButton);
    }
}

export const homePage = new HomePage();
