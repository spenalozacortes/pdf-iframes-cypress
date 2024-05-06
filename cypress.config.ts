import { defineConfig } from "cypress";
import * as fs from 'fs';
import * as path from 'path';
import pdfParse from 'pdf-parse';
import { allureCypress } from "allure-cypress/reporter";

async function setupNodeEvents(on, config) {
  on('task', {
    readPdf(pdfPath) {
      return new Promise(resolve => {
        const filePath = path.resolve(pdfPath);
        const dataBuffer = fs.readFileSync(filePath);
        pdfParse(dataBuffer).then((data) => resolve(data));
      });
    }
  });

  on('task', {
    deletePdf(pdfPath) {
      const filePath = path.resolve(pdfPath);
      fs.unlink(filePath, error => {
        if (error) {
          cy.log('Error deleting PDF');
        }
      });
      return null;
    }
  });

  allureCypress(on);

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
  },
});
