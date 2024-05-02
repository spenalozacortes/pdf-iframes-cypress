export { };

declare global {
  namespace Cypress {
    interface Chainable {
      /**
      * Sets Allure reporting metadata
      * 
      * @param displayName 
      * @param description 
      * @param link 
      */
      setAllureMetadata(displayName: string, description: string, link: string): Chainable<any>
    }
  }
}
