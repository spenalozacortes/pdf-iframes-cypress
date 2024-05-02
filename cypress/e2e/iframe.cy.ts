/// <reference types = "Cypress" />

import 'cypress-iframe';

import { urls } from '../config/urls';
import { demoQaTestData } from '../support/testData';
import { homePage } from '../pageobjects/demoQa/HomePage';
import { framesPage } from '../pageobjects/demoQa/FramesPage';

describe('Iframe tests', function() {
    it('test 1', function() {
        cy.setAllureMetadata('Frames test', 'This test checks the texts in two different frames.', urls.demoQa);
        cy.visit(urls.demoQa);
        homePage.getCard(demoQaTestData.card).click();
        framesPage.getLink(demoQaTestData.link).click();
        framesPage.framesWrapper.should('exist');
        framesPage.frameHeading1.invoke('text').then(firstText => {
            framesPage.frameHeading2.invoke('text').should('eq', firstText);
        });
    });
});
