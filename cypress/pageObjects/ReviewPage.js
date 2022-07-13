import BasePage from "./basePage";
class ReviewPage extends BasePage {

    static get ReviewDropDown(){
        return cy.get('[style="transform: rotate(0deg);"]');
    }

    static get Reviews(){
        return cy.get('[class="comment ng-star-inserted"]');
    }

}

export default ReviewPage;