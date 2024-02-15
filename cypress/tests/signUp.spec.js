/// <reference types="Cypress" />

describe('Sign up page', () => {
	it('should be possible to register new user via UI', () => {
		const userName = new Date().getTime();

		cy.visit('/signup');
		cy.get('[placeholder="E-Mail"]').type(userName);
		cy.get('[placeholder="Password"]').type('Test123456');
		cy.get('button').contains('Register').click();
		cy.get('.text-amber-500').find('a').contains('Art');
		cy.get('.desktop-nav-link').contains('My Account').click();
		cy.contains('Email: ').and('contain', userName);
	});
});
