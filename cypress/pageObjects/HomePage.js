import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get AllCards(){
    return cy.get('[class="table-container custom-slate"]');
  }

  static get DropDownNumbers(){
    return cy.get('[role="combobox"]');
  }
  static get ListOfNumbers(){
    return cy.get('[role="listbox"]');
  }
}

export default HomePage;
