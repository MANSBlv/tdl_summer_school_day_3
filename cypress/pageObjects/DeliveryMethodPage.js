import BasePage from "./basePage";
class DeliveryMethodPage extends BasePage {

    static get DeliveryMethod(){
        return cy.get('[for="mat-radio-43-input"]');
    }
}

export default DeliveryMethodPage ;