import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: 'fk32jg',
	e2e: {
		baseUrl: 'http://localhost:2221/',
		specPattern: 'cypress/tests/**/*.spec.ts',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
