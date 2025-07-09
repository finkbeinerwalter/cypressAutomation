import { URLS } from "../support/constants/urls";

/**
 * Representation of the login form for /auth_ecommerce page
 */
class LoginPage {

  /**
   * Navigates to the login page
   */
  visit() {
    cy.visit(URLS.authEcommerceUrl);
  }

  /**
   * Logs into the application with the provided credentials
   * 
   * @param {*} email user email
   * @param {*} password user password
   */
  login(email, password, {isSensitive = true} = {}) {
    cy.get('#email').type(email)
    cy.get('#password').type(password, { sensitive: isSensitive })
    cy.get('#submitLoginBtn').click()
  }

  /**
   * 
   * @returns the login message box
   */
  getMessageBox() {
    return cy.get('#message')
  }

  /**
   * @returns the login section
   */
  getLoginContainer() {
    return cy.get('#loginSection')
  }
}

export const loginPage = new LoginPage();
