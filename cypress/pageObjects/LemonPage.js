import BasePage from "../pageObjects/basePage";

class LemonPage extends BasePage {
  
    static get Search(){
        return cy.get('[aria-label="Click to search"]');
    }

    static get TypeInSearch(){
        return cy.get('#mat-input-0');
    }

    static get LemonItem(){
        return cy.get('[class="item-name"]');
    }

    static get Sour(){
        return cy.get('[class="container mat-typography"]');
    }

    static get FiveHun(){
        return cy.get('[class="mat-grid-list"]');
    }


}

export default LemonPage;