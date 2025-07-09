/**
 * Cypress configuration for executing tests in STAGING environmment
 * only prod env is accessible for this activity. This one may not even exist, but was added as an example
 */
import { defineConfig } from 'cypress';
import { loadEnv } from './env_loader.js';

loadEnv('.env.staging')

export default defineConfig({
  e2e: {
    baseUrl: 'https://staging.qa-practice.netlify.app',
    env: {
      USER_EMAIL: process.env.USER_EMAIL,
      USER_PASSWORD: process.env.USER_PASSWORD,
    }
  },
});
