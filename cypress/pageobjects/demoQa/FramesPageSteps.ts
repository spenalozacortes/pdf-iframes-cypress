import { framesPage } from "./FramesPage";

class FramesPageSteps {
    wrapperExists() {
        framesPage.framesWrapper.should('exist');
    }

    compareTexts() {
        framesPage.frameHeading1.invoke('text').then(firstText => {
            framesPage.frameHeading2.invoke('text').should('eq', firstText);
        });
    }
}

export const framesPageSteps = new FramesPageSteps();
