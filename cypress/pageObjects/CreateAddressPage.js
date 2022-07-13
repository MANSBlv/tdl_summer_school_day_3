import BasePage from '../pageObjects/basePage'

class CreateAddressesPage extends BasePage {

    static get Country(){
        return cy.get('[placeholder="Please provide a country."]');
    }

    static get Name(){
        return cy.get('[placeholder="Please provide a name."]');
    }

    static get Mobile(){
        return cy.get('[placeholder="Please provide a mobile number."]');
    }

    static get ZipCode(){
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }

    static get Addresss(){
        return cy.get('[placeholder="Please provide an address."]');
    }
    static get City(){
        return cy.get('[placeholder="Please provide a city."]');
    }
    static get State(){
        return cy.get('[placeholder="Please provide a state."]');
    }

    static get Testt(){
        return cy.get('.mat-button-wrapper');
    }

    static AddressSubmitButton(){
       return this.Testt.parent().contains("Submit").click();
     }

     static get ValidateInput(){
         return cy.get('[role="table"]');
     }
    
}

export default CreateAddressesPage;