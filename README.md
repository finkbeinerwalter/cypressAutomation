# ✅ Cypress Automation

This project contains E2E tests for the QA practice application using [Cypress](https://www.cypress.io/).

---

## ⚙️ Prerequisites

Make sure you have the following installed before running Cypress:

- [Node.js](https://nodejs.org/) (tested in v24.3.0)
- [npm](https://www.npmjs.com/) (tested in v11.4.2)

Check versions with:

```bash
node -v
npm -v
```

---

## 📦 Install dependencies

To install the required dependencies:

```bash
npm install
```

---

## 🌍 Environment configuration

Separate configuration files are used for each environment:  
(We only have prod for this activity, but QA and Staging are included as examples)

```
cypress/
├── configs/
│   ├── qa.config.ts
│   ├── staging.config.ts
│   └── prod.config.ts
```

---

## 🔐 Environment variables

Sensitive values such as usernames and passwords are **not hardcoded**. Cypress loads them via environment variables.

If running locally, you can create a `.env` file at the root or use `.env` files per environment (e.g. `.env.prod`).

> ⚠️ Do **not** commit real `.env` files. They are ignored via `.gitignore`.

---

## 🚀 Running tests

### ▶️ Run tests in **headless mode**

```bash
npm run cy:prod        # Runs tests against Production environment
npm run cy:qa          # Runs tests against QA environment (doesn't exist, just added as an example)
npm run cy:staging     # Runs tests against Staging environment (doesn't exist, just added as an example)
```

### 🧪 Run tests in **interactive mode (GUI)**

```bash
npm run cy:prod:open
npm run cy:qa:open
npm run cy:staging:open
```

> ⚠️ Run the tests using the commands detailed above instead of `npx cypress open` directly.

---

## 🤖 Continuous Integration (GitHub Actions)

This project runs Cypress tests remotely using GitHub Actions.

The workflow file is located at:

```
.github/workflows/cypress-activity.yml
```

You can trigger the tests manually from the **Actions** tab on GitHub.  
All videos and screenshots will be available as downloadable artifacts at the end of the run.
