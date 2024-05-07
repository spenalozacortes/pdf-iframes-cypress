class HomePage {

    clickCard(card: string) {
        cy.contains(card).parent().click();
    }
}

export const homePage = new HomePage();
