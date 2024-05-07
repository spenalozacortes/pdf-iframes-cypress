import * as allure from "allure-cypress";

Cypress.Commands.add('setAllureMetadata', (displayName, description, link) => {
    allure.displayName(displayName);
    allure.description(description);
    allure.link(link);
});

Cypress.Commands.add('checkSumTableColumn', (pdfPath, column, beginMarker, endMarker, expectedSum) => {
  cy.task('readPdf', pdfPath).then(data => {
    const lines = data.text.split('\n');
    let sum = 0;
    let isTable = false;
    let tableProcessed = false;

    lines.forEach((line) => {
      if (isTable && !tableProcessed) {
        const rowData = line.trim().split(/\s+/);
        const columnValue = parseInt(rowData[column - 1]);
        if (!isNaN(columnValue)) {
          sum += columnValue;
        }
      }

      if (line.includes(beginMarker)) {
        isTable = true;
      }
      if (line.includes(endMarker)) {
        isTable = false;
        tableProcessed = true;
      }
    });

    expect(sum).to.eq(expectedSum);
  });
});

Cypress.Commands.add('checkNumPages', (pdfPath, expectedPages) => {
  cy.task('readPdf', pdfPath).then(data => {
    expect(data.numpages).to.eq(expectedPages);
  });
});

Cypress.Commands.add('checkContent', (pdfPath, expectedContent) => {
  cy.task('readPdf', pdfPath).then(data => {
    expect(data.text).to.contain(expectedContent);
  });
});

Cypress.Commands.add('checkNotEmpty', (pdfPath) => {
  cy.task('readPdf', pdfPath).then(data => {            
    expect(data.text).to.not.be.empty;
  });
});
