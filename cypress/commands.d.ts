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
      setAllureMetadata: (displayName: string, description: string, link: string) => Chainable<any>;

      /**
       * Sums the values of the specified column in a table. 
       * Begin and end markers are unique strings before and after the table respectively.
       * 
       * @param text 
       * @param column 
       * @param beginMarker 
       * @param endMarker 
       * @returns sum
       */
      sumTableColumn: (text: string, column: number, beginMarker: string, endMarker: string) => Chainable<any>;
    }
  }
}
