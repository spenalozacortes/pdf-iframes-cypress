import { demoQaLocators } from "../../support/locators";

class FramesPage {
    getLink(link: string) {
        return cy.contains(link);
    }

    get framesWrapper() {
        return cy.get(demoQaLocators.framesWrapper);
    }

    get frameHeading1() {
        return cy.iframe(demoQaLocators.frame1).find(demoQaLocators.frameHeading);
    }

    get frameHeading2() {
        return cy.iframe(demoQaLocators.frame2).find(demoQaLocators.frameHeading);
    }
}

export const framesPage = new FramesPage();
