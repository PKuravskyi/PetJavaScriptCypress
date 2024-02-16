export {};

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to log in with the specified username and password.
			 * @param username The username to use for login. Default is 'admin'.
			 * @param password The password to use for login. Default is 'Admin123'.
			 */
			login(username?: string, password?: string): Chainable<null>;
		}
	}
}

Cypress.Commands.add('login', (username = 'admin', password = 'Admin123') => {
	cy.visit('/login');
	cy.get('[placeholder=E-Mail]').type(username);
	cy.get('[placeholder=Password]').type(`${password}{enter}`);
	cy.url().should('not.contain', 'login');
	cy.getCookie('token').should('exist');
});
