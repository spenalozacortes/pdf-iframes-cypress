import { homePage } from "./HomePage";
import { sharedFilesPaths } from "../../support/paths";

class HomePageSteps {
    downloadPdf() {
        homePage.downloadButton.click();
        cy.readFile(sharedFilesPaths.samplePdf); // waiting for the file to be downloaded
    }
}

export const homePageSteps = new HomePageSteps();
