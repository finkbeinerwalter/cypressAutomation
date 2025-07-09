import { loginPage } from "../login_page"

/**
 * Representation of the top bar component
 */
export class TopBarComponent {

  logout() {
    cy.get("#logout").click()
    return loginPage
  }
}
