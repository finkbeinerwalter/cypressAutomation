import { TopBarComponent } from './reusable_components/top_bar_component'

/**
 * Representation of the Order Registered page
 */
class OrderRegisteredPage {
  getTopBar() {
    return new TopBarComponent()
  }

  getMessage() {
    return cy.get('#message')
  }
}

export const orderRegisteredPage = new OrderRegisteredPage()
