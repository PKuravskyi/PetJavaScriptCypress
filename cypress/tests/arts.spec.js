/// <reference types="Cypress" />

describe('Arts page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should have 5 arts', () => {
		cy.get('.product-title').should('have.length', 5);
	});

	it('should have Sort dropdown with correct options', () => {
		cy.get('.sort-dropdown option')
			.should('contain', 'Popularity (default)')
			.and('contain', 'Price ascending')
			.and('contain', 'Price descending');
	});
});
