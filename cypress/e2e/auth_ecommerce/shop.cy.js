import { loginPage } from "../../pages/login_page";
import { USER_DATA } from "../../support/constants/user_data";
import { shoppingCartPage } from "../../pages/shopping_cart_page";
import { parsePriceTextToNumber as parsePriceToNumber } from "../../support/utils/string_utils";
import { MESSAGES } from "../../support/constants/messages";

describe('Auth eCommerce Shop', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login(USER_DATA.userEmail, USER_DATA.userPassword);
  })

  it('should be able to buy several items from the shop and logout', () => {

    let expectedCartTotalPrice = 0

    //Adding shop items to cart and validating for each one of them, the cart item price is correct
    cy.fixture('products').then((products) => {
      products.forEach((product) => {

        shoppingCartPage.getShoppingItem(product.name).addToCart() //We can also do it by index if we don't want to depend on the name
        shoppingCartPage.getShoppingItem(product.name).getPrice().invoke('text')
          .then((shoppingItemPrice) => {
            shoppingCartPage.getCartRow(product.name).getPrice().invoke('text').should('eq', shoppingItemPrice)
            expectedCartTotalPrice += parsePriceToNumber(shoppingItemPrice);
          });

      });
    });

    //Validating that the total amount is also correct
    shoppingCartPage.getCartTotalPrice().invoke('text').then((cartTotalPrice) => {
      expect(parsePriceToNumber(cartTotalPrice)).to.eq(expectedCartTotalPrice)
    });

    //Increasing the quantity of a product to validate that the cart price updates accordingly
    const productItemQuantity = 3
    cy.fixture('products').then((products) => {
      const product = products[0]

      shoppingCartPage.getCartRow(product.name).getPrice().invoke('text')
        .then((cartItemPrice) => {
          shoppingCartPage.getCartRow(product.name).setQuantity(productItemQuantity)
          expectedCartTotalPrice += parsePriceToNumber(cartItemPrice) * (productItemQuantity - 1); // -1 because we already had one
          shoppingCartPage.getCartTotalPrice().invoke('text')
            .then((cartItemNewPrice) => {
              expect(parsePriceToNumber(cartItemNewPrice)).to.eq(expectedCartTotalPrice)
            });
        });

    });

    const shippingDetailsPage = shoppingCartPage.proceedToCheckout();
    cy.fixture('shipping_details').then(shippingDetails => {
      cy.log(shippingDetails)
      shippingDetailsPage.completeShippingDetails(shippingDetails)
      const orderRegisteredPage = shippingDetailsPage.submitOrder()
      orderRegisteredPage.getMessage().should('have.text', MESSAGES.registeredOrder({price: expectedCartTotalPrice, ...shippingDetails}))
      orderRegisteredPage.getTopBar().logout()
      loginPage.getLoginContainer().should('be.visible')
    });
  });
});
