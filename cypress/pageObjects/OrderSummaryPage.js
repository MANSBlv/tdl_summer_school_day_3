import BasePage from "./basePage";
class OrderSummaryPage extends BasePage {

    static get Testt(){
        return cy.get('.mat-button-wrapper');
    }
    
    static PayButton(){
        return this.Testt.parent().contains("Place your order and pay").click();
      }

}

export default OrderSummaryPage ;