import BasePage from "./basePage";
class SelectAddressPage extends BasePage {

    static get SelectAddress(){
        return cy.get("[class='mat-radio-container']");
    }

    static get ContainingAddress(){
        return cy.get("[role='cell']");
    }

    static get Address(){
        return cy.get('[aria-label="Add a new address"]');
    }

   

    static get Testt(){
        return cy.get('.mat-button-wrapper');
    }

    static ContinueButton(){
       return this.Testt.parent().contains("Continue").click();
     }
    
}

export default SelectAddressPage ;