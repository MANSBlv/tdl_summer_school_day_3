import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get Account(){
    return cy.get('#navbarAccount');
  }

  static get LoginNav(){
    return cy.get('#navbarLoginButton');
  }

  static get Email(){
    return cy.get("#email");
  }

  static get Password(){
    return cy.get('#password');
  }

  static get LoginButton(){
    return cy.get('#loginButton');
  }

  static get DropDownMenu(){
    return cy.get('#mat-menu-panel-0');
  }

  static get SavedAddress(){
    return cy.get('[routerlink="/address/saved"]');
  }

  static get MyPaymentOptions(){
    return cy.get('[routerlink="/saved-payment-methods"]');
  }
}

export default LoginPage;
