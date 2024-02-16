import { defineConfig } from 'cypress';
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

export default defineConfig({
	projectId: 'fk32jg',
	e2e: {
		baseUrl: 'http://localhost:2221/',
		specPattern: 'cypress/tests/**/*.spec.ts',
		supportFile: 'cypress/support/e2e.ts',
		viewportHeight: 1000,
		viewportWidth: 1280,
		setupNodeEvents(on, config) {
			configureAllureAdapterPlugins(on, config);
			return config;
		},
	},
	env: {
		allure: true,
		allureCleanResults: true,
		allureAttachRequests: true,
	},
});
