export { };

declare global {
  namespace Cypress {
    interface Chainable {
      /**
      * Sets Allure reporting metadata.
      * 
      * @param displayName 
      * @param description 
      * @param link 
      */
      setAllureMetadata: (displayName: string, description: string, link: string) => void;

      /**
       * Checks the sum of the values of the specified column in a table in a PDF. 
       * Begin and end markers are unique strings before and after the table respectively.
       * 
       * @param pdfPath 
       * @param column 
       * @param beginMarker 
       * @param endMarker 
       * @param expectedSum
       */
      checkSumTableColumn: (pdfPath: string, column: number, beginMarker: string, endMarker: string, expectedSum: number) => void;

      /**
       * Checks the number of pages in a PDF.
       * 
       * @param pdfPath 
       * @param expectedPages 
       */
      checkNumPages: (pdfPath: string, expectedPages: number) => void;

      /**
       * Checks a PDF contains the expected content.
       * 
       * @param pdfPath 
       * @param expectedContent 
       */
      checkContent: (pdfPath: string, expectedContent: string) => void;

      /**
       * Checks a PDF is not empty.
       * 
       * @param pdfPath 
       */
      checkNotEmpty: (pdfPath: string) => void;
    }
  }
}
