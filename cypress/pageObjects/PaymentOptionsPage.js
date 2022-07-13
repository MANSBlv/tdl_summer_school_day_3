import BasePage from "./basePage";
class PaymentOptionsPage extends BasePage {

    static get CardNumbers(){
        return cy.get('.mat-column-Number').contains(/.{4}$/);
    }

    static get ClickRadio(){
        return cy.get('[for="mat-radio-44-input"]');
    }
}

export default PaymentOptionsPage ;