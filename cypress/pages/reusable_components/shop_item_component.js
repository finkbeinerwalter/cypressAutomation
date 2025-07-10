/**
 * Representation of a Shop Item component
 */
export class ShopItemComponent {
  /**
   * It constructs the shop item component based on the name of the item, or its index, depending what is passed as parameter
   * @param {*} itemNameOrIndex
   */
  constructor(itemNameOrIndex) {
    this._rootElement = isNaN(Number(itemNameOrIndex))
      ? cy.get('.shop-item').filter(`:has(.shop-item-title:contains(${itemNameOrIndex}))`)
      : cy.get('.shop-item').eq(itemNameOrIndex)
  }

  getPrice() {
    return this._rootElement.find('.shop-item-price')
  }

  addToCart() {
    this._rootElement.find('.shop-item-button').click()
  }
}
