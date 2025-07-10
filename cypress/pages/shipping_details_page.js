import { orderRegisteredPage } from './order_registered_page'

/**
 * Representation of the Shipping details page
 */
class ShippingDetailsPage {
  /**
   * Completes the shipping details form
   * @param {*} param0 shipping details
   */
  completeShippingDetails({ phone, street, city, country }) {
    cy.get('input[name="phone"]').type(phone)
    cy.get('input[name="street"]').type(street)
    cy.get('input[name="city"]').type(city)
    cy.get('select[name="country"]').select(country)
  }

  /**
   * Clicks on the Submit Order button
   * @returns The next page, which is the Order Registered Page
   */
  submitOrder() {
    cy.get('#submitOrderBtn').click()
    return orderRegisteredPage
  }
}

export const shippingDetailsPage = new ShippingDetailsPage()
