/// <reference types="Cypress" />

import { registrationEndpoint } from '../../services/endpoints/RegistrationEndpoint';

describe('API Registration', () => {
	it('should register a new user', () => {
		const randomUsername = new Date().getTime().toString();
		const userData = {
			username: randomUsername,
			password: 'Test12345',
		};

		registrationEndpoint.registerUser(userData).then(response => {
			console.log(response);
			expect(response.status).to.eq(200);
			expect(response.body).to.have.property('token');
		});
	});
});
