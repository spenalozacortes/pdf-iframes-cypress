import * as allure from "allure-cypress";

Cypress.Commands.add('setAllureMetadata', (displayName, description, link) => {
    allure.displayName(displayName);
    allure.description(description);
    allure.link(link);
});

Cypress.Commands.add('sumTableColumn', (text, column, beginMarker, endMarker) => {
    const lines = text.split('\n');
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

    return cy.wrap(sum);
});
