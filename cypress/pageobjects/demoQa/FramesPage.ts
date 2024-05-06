import { locators } from "./locators";

class FramesPage {
    clickLink(link: string) {
        cy.contains(link).click();
    }

    get framesWrapper() {
        return cy.get(locators.framesWrapper);
    }

    get frameHeading1() {
        return cy.iframe(locators.frame1).find(locators.frameHeading);
    }

    get frameHeading2() {
        return cy.iframe(locators.frame2).find(locators.frameHeading);
    }
}

export const framesPage = new FramesPage();
