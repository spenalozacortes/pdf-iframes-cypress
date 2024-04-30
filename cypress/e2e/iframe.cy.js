/// <reference types = "Cypress" />

import 'cypress-iframe';

describe('Iframe tests', function() {
    it('test 1', function() {
        cy.visit('https://demoqa.com/');
        cy.contains('Alerts, Frame & Windows').parent().click();
        cy.contains('Frames').click();
        cy.get('#framesWrapper').should('exist');
        cy.iframe('#frame1').find('#sampleHeading').invoke('text').then(firstText => {
            cy.iframe('#frame2').find('#sampleHeading').invoke('text').should('eq', firstText);
        });
    });
});
