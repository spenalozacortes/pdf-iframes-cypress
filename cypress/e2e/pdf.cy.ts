import { urls } from "../config/urls";
import { sharedFilesPaths, freeTestDataPaths } from "../support/paths";
import { sharedFilesTestData, freeTestData } from "../support/testData";
import { homePageSharedSteps } from "../pageobjects/sharedFiles/HomePageSharedSteps";
import { homePageFreeSteps } from "../pageobjects/freeTestData/HomePageFreeSteps";

describe('PDF tests', function() {
    it('test 1', function() {
        cy.setAllureMetadata('Shared Files PDF test', 'This test checks the number of pages and presence of content in a PDF.', urls.sharedFiles);
        cy.visit(urls.sharedFiles);
        homePageSharedSteps.downloadPdf();
        cy.checkNumPages(sharedFilesPaths.samplePdf, sharedFilesTestData.numPages);
        cy.checkContent(sharedFilesPaths.samplePdf, sharedFilesTestData.introductionBlock);
    });

    it('test 2', function () {
        cy.setAllureMetadata('Free Test Data PDF test', 'This test checks that a PDF is not empty and the sum of a column in a table.', urls.freeTestData);
        cy.visit(urls.freeTestData);
        homePageFreeSteps.downloadPdf(freeTestData.button);
        cy.checkNotEmpty(freeTestDataPaths.pdf100Kb);
        cy.checkSumTableColumn(freeTestDataPaths.pdf100Kb, freeTestData.column, freeTestData.beginMarker, freeTestData.endMarker, freeTestData.sum);
    });

    after(() => {
        cy.task('deletePdf', sharedFilesPaths.samplePdf);
        cy.task('deletePdf', freeTestDataPaths.pdf100Kb);
    });
});
