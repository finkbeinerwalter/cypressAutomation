import eslintPluginCypress from 'eslint-plugin-cypress'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        Cypress: 'readonly',
        cy: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
    ignores: ['node_modules'],
  },
  prettierConfig,
]
