import { homePage } from "./HomePage";
import { sharedFilesPaths } from "../../support/paths";

class HomePageSharedSteps {
    downloadPdf() {
        homePage.downloadButton.click();
        cy.readFile(sharedFilesPaths.samplePdf); // waiting for the file to be downloaded
    }
}

export const homePageSharedSteps = new HomePageSharedSteps();
