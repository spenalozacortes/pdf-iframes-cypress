/// <reference types = "Cypress" />

import 'cypress-iframe';

import { urls } from '../config/urls';
import { demoQaLocators } from '../support/locators';

describe('Iframe tests', function() {
    it('test 1', function() {
        cy.setAllureMetadata('Frames test', 'This test checks the texts in two frames.', urls.demoQa);
        cy.visit(urls.demoQa);
        cy.screenshot();
        cy.contains(demoQaLocators.alertsFramesWindowsCard).parent().click();
        cy.contains(demoQaLocators.framesLink).click();
        cy.get(demoQaLocators.framesWrapper).should('exist');
        cy.iframe(demoQaLocators.frame1).find(demoQaLocators.frameHeading).invoke('text').then(firstText => {
            cy.iframe(demoQaLocators.frame2).find(demoQaLocators.frameHeading).invoke('text').should('eq', firstText);
        });
    });
});