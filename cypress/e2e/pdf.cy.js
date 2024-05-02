/// <reference types = "Cypress" />

import { urls } from "../config/urls";
import { sharedFilesLocators, freeTestDataLocators } from "../support/locators";
import { sharedFilesPaths, freeTestDataPaths } from "../support/paths";
import { sharedFilesTestData } from "../support/sharedFilesTestData";

describe('PDF tests', function() {
    it('test 1', function() {
        cy.visit(urls.sharedFiles);
        cy.get(sharedFilesLocators.downloadButton).click();
        cy.readFile(sharedFilesPaths.samplePdf); // waiting for the file to be downloaded
        cy.task('readPdf', sharedFilesPaths.samplePdf).then(data => {
            const numPages = data.numpages;
            expect(numPages).to.eq(sharedFilesTestData.numPages);
            expect(data.text).to.contain(sharedFilesTestData.introductionBlock);
        });
    });

    it('test 2', function () {
        cy.visit(urls.freeTestData);
        cy.contains(freeTestDataLocators.downloadSection, freeTestDataLocators.download100Kb).find(freeTestDataLocators.downloadButton).click();
        cy.readFile(freeTestDataPaths.pdf100Kb); 
        cy.task('readPdf', freeTestDataPaths.pdf100Kb).then(data => {
            expect(data.text).to.not.be.empty;
        });
    });

    after(() => {
        cy.task('deletePdf', sharedFilesPaths.samplePdf);
        cy.task('deletePdf', freeTestDataPaths.pdf100Kb);
    });
});
