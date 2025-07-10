import { MESSAGES } from '../../support/constants/messages'
import { loginPage } from '../../pages/login_page'
import { USER_DATA } from '../../support/constants/user_data'
import { shoppingCartPage } from '../../pages/shopping_cart_page'

describe('Auth eCommerce Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('should login successfully with valid credentials', () => {
    loginPage.login(USER_DATA.userEmail, USER_DATA.userPassword)
    shoppingCartPage.getShoppingCartContainer().should('be.visible')
  })

  it('should not login with invalid credentials', () => {
    loginPage.login(USER_DATA.userEmail, 'invalidpassword', { isSensitive: false })
    loginPage.getMessageBox().should('include.text', MESSAGES.badCredentials)
    shoppingCartPage.getShoppingCartContainer().should('not.be.visible')
  })
})
