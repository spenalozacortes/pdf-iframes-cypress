import { freeTestDataPaths } from "../../support/paths";
import { homePage } from "./HomePage";

class HomePageSteps {
    downloadPdf(button: string) {
        homePage.getDownloadButton(button).click();
        cy.readFile(freeTestDataPaths.pdf100Kb); 
    }
}

export const homePageSteps = new HomePageSteps();
