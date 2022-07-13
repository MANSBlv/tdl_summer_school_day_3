import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }
  static get Account(){
    return cy.get('#navbarAccount');
  }

  static get LoginNav(){
    return cy.get('#navbarLoginButton');
  }

  static get NewCustomer(){
    return cy.get('#newCustomerLink');
  }

  static get EmailControl(){
    return cy.get('#emailControl');
  }

  static get PasswordControl(){
    return cy.get('#passwordControl');
  }

  static get RepeatPassword(){
    return cy.get('#repeatPasswordControl');
  }

  static get SecurityQuestion(){
    return cy.get('[name="securityQuestion"]');
  }

  static get Question(){
    return cy.get('[class="mat-option-text"]');
  }

  static get Answer(){
    return cy.get('#securityAnswerControl');
  }

  static get RegisterButton(){
    return cy.get('#registerButton');
  }
}

export default RegistrationPage;
