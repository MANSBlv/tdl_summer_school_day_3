import BasePage from "./basePage";
class ReviewPage extends BasePage {

    static get ReviewDropDown(){
        return cy.get('[style="transform: rotate(0deg);"]');
    }

    static get Reviews(){
        return cy.get('[class="comment ng-star-inserted"]');
    }

    static get WriteReview(){
        return cy.get('[placeholder="What did you like or dislike?"]');
    }

    static get SubmitButton(){
        return cy.get('#submitButton');
    }

}

export default ReviewPage;