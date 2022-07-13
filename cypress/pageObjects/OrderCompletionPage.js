import BasePage from "./basePage";
class OrderCompletionPage extends BasePage {

    static get Completion(){
        return cy.get('[class="confirmation"]') ;
    }

}

export default OrderCompletionPage ;