const getFireJokerGame = () => cy.get('[alt="Fire Joker"]');
const getLikeButton = () => cy.get('[data-at="love-icon"]');
const getErrorMessage = () => cy.get('.notification-wrap__error-text-msg');

export const clickOnFireJokerGame = () => getFireJokerGame().click();
export const clickLikeButton = () => getLikeButton().click();
export const validateErrorMessageAppeared = () => getErrorMessage().should('exist');