import BasePage from "./basePage";
class ShirtPage extends BasePage {

static get AddBasket(){
    return cy.get('[aria-label="Add to Basket"]');
}
static get MyBasket(){
    return cy.get('[routerlink="/basket"]');
}

}

export default ShirtPage;