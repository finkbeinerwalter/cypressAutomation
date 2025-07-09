/**
 * Representation of a Cart row component
 */
export class CartRowComponent {

  constructor(itemName) {
    this._rootElement = cy.get('.cart-row').filter(`:has(.cart-item-title:contains(${itemName}))`)
  }

  setQuantity(quantity) {
    return this._rootElement.find('.cart-quantity-input').clear().type(quantity + '{enter}')
  }

  getPrice() {
    return this._rootElement.find('.cart-price');
  }
}
