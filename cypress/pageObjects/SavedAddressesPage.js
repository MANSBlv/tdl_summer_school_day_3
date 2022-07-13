import BasePage from '../pageObjects/basePage'

class SavedAddressesPage extends BasePage {

    static get Testt(){
        return cy.get('.mat-button-wrapper');
    }

    static NewAddressButton(){
       return this.Testt.parent().contains("Add New Address").click();
     }

}

export default SavedAddressesPage;