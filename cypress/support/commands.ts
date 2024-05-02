import * as allure from "allure-cypress";

Cypress.Commands.add('setAllureMetadata', (displayName, description, link) => {
    allure.displayName(displayName);
    allure.description(description);
    allure.link(link);
});
