/**
 * Cypress configuration for executing tests in PRODUCTION environmment
 */
import { defineConfig } from 'cypress';
import { loadEnv } from './env_loader.js';

loadEnv('.env.prod')

export default defineConfig({
  e2e: {
    baseUrl: 'https://qa-practice.netlify.app',
    env: {
      USER_EMAIL: process.env.USER_EMAIL,
      USER_PASSWORD: process.env.USER_PASSWORD,
    }
  },
});
