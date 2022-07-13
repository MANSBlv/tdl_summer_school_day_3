import BasePage from '../pageObjects/basePage'

class SavedPaymentsMethodsPage extends BasePage {

static get NewCard(){
    return cy.get('[role="button"]');
}

static get Name(){
    return cy.get('[id="mat-input-1"]');
}

static get CardNumber(){
    return cy.get('[id="mat-input-2"]');
}

static get Month(){
    return cy.get('[id="mat-input-3"]');
}

static get Year(){
    return cy.get('[id="mat-input-4"]');
}

static get SubmitButton(){
    return cy.get('#submitButton');
}

static get ValidateCard(){
    return cy.get('[role="table"]');
}


}

export default SavedPaymentsMethodsPage ;