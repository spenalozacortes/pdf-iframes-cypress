/// <reference types = "Cypress" />

import * as allure from "allure-cypress";

import { urls } from "../config/urls";
import { sharedFilesLocators, freeTestDataLocators } from "../support/locators";
import { sharedFilesPaths, freeTestDataPaths } from "../support/paths";
import { sharedFilesTestData } from "../support/sharedFilesTestData";

describe('PDF tests', function() {
    it('test 1', function() {
        allure.displayName('Shared Files PDF test');
        allure.description('This test checks the number of pages and presence of content in a PDF.');
        allure.link(urls.sharedFiles);
        cy.visit(urls.sharedFiles);
        cy.screenshot();
        cy.get(sharedFilesLocators.downloadButton).click();
        cy.readFile(sharedFilesPaths.samplePdf); // waiting for the file to be downloaded
        cy.task('readPdf', sharedFilesPaths.samplePdf).then(data => {
            const numPages = data.numpages;
            expect(numPages).to.eq(sharedFilesTestData.numPages);
            expect(data.text).to.contain(sharedFilesTestData.introductionBlock);
        });
    });

    it('test 2', function () {
        allure.displayName('Free Test Data PDF test');
        allure.description('This test checks that a PDF is not empty.');
        allure.link(urls.freeTestData);
        cy.visit(urls.freeTestData);
        cy.screenshot();
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
