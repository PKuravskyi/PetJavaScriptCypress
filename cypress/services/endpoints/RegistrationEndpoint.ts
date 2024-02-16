import { BaseClientAPI } from './BaseClientAPI';

export class RegistrationEndpoint extends BaseClientAPI {
	constructor() {
		super();
	}

	registerUser(userData: {
		username: string;
		password: string;
	}): Cypress.Chainable<any> {
		return cy
			.request({
				method: 'POST',
				url: this.baseApiUrl + 'signup',
				body: userData,
				failOnStatusCode: false,
			})
			.then(response => {
				if (response.status !== 200) {
					throw new Error(
						'Failed to register user.\n' +
							`Status code: ${response.status}\n` +
							`Error message: ${response.body.message}`
					);
				}
				return response;
			});
	}
}

export const registrationEndpoint: RegistrationEndpoint =
	new RegistrationEndpoint();
