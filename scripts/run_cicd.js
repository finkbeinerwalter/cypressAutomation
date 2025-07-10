import { execSync } from 'child_process'

let testError
execSync('npm run report:clean', { stdio: 'inherit' })
try {
  execSync(
    'cypress run --config-file cypress/configs/prod.config.js --reporter cypress-mochawesome-reporter --reporter-options reportDir=cypress/reports,overwrite=true,html=false,json=true',
    { stdio: 'inherit' }
  )
} catch (e) {
  testError = e
  console.warn('There were test failures. Continuing to generate report...')
}
execSync('npm run report:merge', { stdio: 'inherit' })
execSync('npm run report:generate', { stdio: 'inherit' })
if (testError) throw testError
