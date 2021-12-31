Cypress.Commands.add('validateCurrentUrl', (expectedUrl) => {
    cy.url().should('include', expectedUrl);
});