class HomePage {

    getCard(card: string) {
        return cy.contains(card).parent();
    }
}

export const homePage = new HomePage();
