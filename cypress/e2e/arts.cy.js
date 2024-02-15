/// <reference types="Cypress" />

describe('Arts page', () => {
	it('should have 5 arts', () => {
		cy.visit('/');
		cy.get('.product-title').should('have.length', 5);
	});

	it('should have Sort dropdown', () => {
		cy.visit('/');
		cy.get('.sort-dropdown option')
			.should('contain', 'Popularity (default)')
			.and('contain', 'Price ascending')
			.and('contain', 'Price descending');
	});
});
