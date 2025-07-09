import { CartRowComponent } from "./reusable_components/cart_row_component";
import { ShopItemComponent } from "./reusable_components/shop_item_component";
import { shippingDetailsPage } from "./shipping_details_page";

/**
 * Representation of the shopping cart page
 */
class ShoppingCartPage {

  getShoppingCartContainer() {
    return cy.get('#prooood')
  }

  getShoppingItem(itemName) {
    return new ShopItemComponent(itemName)
  }

  getCartRow(itemName) {
    return new CartRowComponent(itemName)
  }

  getCartTotalPrice() {
    return cy.get('.cart-total-price')
  }

  proceedToCheckout() {
    cy.get('.btn-purchase').click()
    return shippingDetailsPage
  }
}

export const shoppingCartPage = new ShoppingCartPage();
