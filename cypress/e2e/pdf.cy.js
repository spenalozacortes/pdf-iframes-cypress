/// <reference types = "Cypress" />

describe('PDF tests', function() {
    it('test 1', function() {
        cy.visit('https://www.sharedfilespro.com/download-sample-pdf/');
        cy.get('a.shared-files-download-button').click();
        cy.readFile('./cypress/downloads/sample.pdf'); // waiting for the file to be downloaded
        cy.task('readPdf', './cypress/downloads/sample.pdf').then(data => {
            const numPages = data.numpages;
            expect(numPages).to.eq(5);
            expect(data.text).to.contain(`Introduction\nTheVirtual Reality Modeling Language(VRML)`);
        });
    });

    it('test2', function () {
        cy.visit('https://freetestdata.com/document-files/pdf/');
        cy.contains('.elementor-inner-section', '100 KB').find('.elementor-button').click();
        cy.readFile('./cypress/downloads/Free_Test_Data_100KB_PDF.pdf'); 
        cy.task('readPdf', './cypress/downloads/Free_Test_Data_100KB_PDF.pdf').then(data => {
            expect(data.text).to.not.be.empty;
        });
    });

    after(() => {
        cy.task('deletePdf', './cypress/downloads/sample.pdf');
        cy.task('deletePdf', './cypress/downloads/Free_Test_Data_100KB_PDF.pdf')
    });
});