const { defineConfig } = require("cypress");
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');
const { allureCypress } = require("allure-cypress/reporter");

async function setupNodeEvents(on, config) {
  on('task', {
    readPdf(pdfPath: string) {
      return new Promise(resolve => {
        const filePath = path.resolve(pdfPath);
        const dataBuffer = fs.readFileSync(filePath);
        pdf(dataBuffer).then((data) => resolve(data));
      });
    }
  });

  on('task', {
    deletePdf(pdfPath: string) {
      const filePath = path.resolve(pdfPath);
      fs.unlink(filePath, error => {
        if (error) {
          console.error('Error deleting PDF file:', error);
        }
        else {
          console.log('PDF file deleted successfully.');
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
