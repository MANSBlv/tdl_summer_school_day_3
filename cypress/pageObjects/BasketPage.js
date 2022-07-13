import BasePage from "./basePage";
class BasketPage extends BasePage {

    static get CheckoutButton(){
        return cy.get('#checkoutButton');
    }
}

export default BasketPage;