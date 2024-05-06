import { urls } from '../config/urls';
import { demoQaTestData } from '../support/testData';
import { homePage } from '../pageobjects/demoQa/HomePage';
import { framesPage } from '../pageobjects/demoQa/FramesPage';
import { framesPageSteps } from '../pageobjects/demoQa/FramesPageSteps';

describe('Iframe tests', function() {
    it('test 1', function() {
        cy.setAllureMetadata('Frames test', 'This test checks the texts in two different frames.', urls.demoQa);
        cy.visit(urls.demoQa);
        homePage.clickCard(demoQaTestData.card);
        framesPage.clickLink(demoQaTestData.link);
        framesPageSteps.wrapperExists();
        framesPageSteps.compareTexts();
    });
});
