/// <reference types="Cypress" />

describe('UI: Login', () => {
	it('should be possible to login as admin via UI', () => {
		cy.login();
		cy.get('.product-title').should('have.length', 5);
	});
});
