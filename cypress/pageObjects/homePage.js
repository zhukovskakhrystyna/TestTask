const getMainLayout = () => cy.get('[data-at="main-layout"]');
const getPageHeader = () => cy.get('#regulations-header');
const getSpelpausButton = () => cy.get('[data-at="regulation-header-spel-paus"]');
const getSpelgranserButton = () => cy.get('[data-at="regulation-header-responsible-gaming"]');
const getSjalvtestButton = () => cy.get('[data-at="regulation-header-self-test"]');
const getSpelinspektionenLogo = () => cy.get('[data-at="spelinspektionen-logo"]');

export const validateSpelinspektionenLogoEnabled = () => getSpelinspektionenLogo().should('not.be.disabled');
export const validateSpelpausButtonVisible = () => getSpelpausButton().should('be.visible');
export const validateSpelgranserButtonVisible = () => getSpelgranserButton().should('be.visible');
export const validateSjalvtestButtonVisible = () => getSjalvtestButton().should('be.visible');
export const validateHomepageLoaded = () => getMainLayout().should('be.visible');
export const validatePageHeaderVisible = () => getPageHeader().should('be.visible');
