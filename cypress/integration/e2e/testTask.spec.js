import * as homePage from '../../pageObjects/homePage';
import * as casinoPage from '../../pageObjects/casinoPage';

describe('Test task', function () {
    beforeEach(() => {
        cy.setCookie('integrationtesting', 'true');
    })

    it('Validate home page is loaded', () => {
        cy.visit('/');
        cy.validateCurrentUrl('hajper');
        homePage.validateHomepageLoaded();
        homePage.validatePageHeaderVisible();
        homePage.validateSpelpausButtonVisible();
        homePage.validateSpelgranserButtonVisible();
        homePage.validateSjalvtestButtonVisible();
        homePage.validateSpelinspektionenLogoEnabled();
    });

    it('User should not be able to like game when he is not logged in', () => {
        cy.visit('/casino/explore');
        casinoPage.clickOnFireJokerGame();
        casinoPage.clickLikeButton();
        casinoPage.validateErrorMessageAppeared();
    })
});