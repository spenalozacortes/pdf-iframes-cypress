/// <reference types = "Cypress" />

import { urls } from "../config/urls";
import { sharedFilesPaths, freeTestDataPaths } from "../support/paths";
import { sharedFilesTestData, freeTestData } from "../support/testData";
import { homePageSteps as homePageStepsShared } from "../pageobjects/sharedFiles/HomePageSteps";
import { homePageSteps as homePageStepsFree } from "../pageobjects/freeTestData/HomePageSteps";

describe('PDF tests', function() {
    it('test 1', function() {
        cy.setAllureMetadata('Shared Files PDF test', 'This test checks the number of pages and presence of content in a PDF.', urls.sharedFiles);
        cy.visit(urls.sharedFiles);
        homePageStepsShared.downloadPdf();
        cy.task('readPdf', sharedFilesPaths.samplePdf).then(data => {
            const numPages = data.numpages;
            expect(numPages).to.eq(sharedFilesTestData.numPages);
            expect(data.text).to.contain(sharedFilesTestData.introductionBlock);
        });
    });

    it.only('test 2', function () {
        cy.setAllureMetadata('Free Test Data PDF test', 'This test checks that a PDF is not empty.', urls.freeTestData);
        cy.visit(urls.freeTestData);
        homePageStepsFree.downloadPdf(freeTestData.button);
        cy.task('readPdf', freeTestDataPaths.pdf100Kb).then(data => {
            expect(data.text).to.not.be.empty;
        });
    });

    after(() => {
        cy.task('deletePdf', sharedFilesPaths.samplePdf);
        cy.task('deletePdf', freeTestDataPaths.pdf100Kb);
    });
});
