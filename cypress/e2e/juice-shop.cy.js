import CardsPage from "../pageObjects/ReviewPage";
import HomePage from "../pageObjects/HomePage";
import LemonPage from "../pageObjects/LemonPage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import ReviewPage from "../pageObjects/ReviewPage";
import ShirtPage from "../pageObjects/ShirtPage";
import BasketPage from "../pageObjects/BasketPage";
import SelectAddressPage from "../pageObjects/SelectAddressPage";
import DeliveryMethodPage from "../pageObjects/DeliveryMethodPage";
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage";
import OrderSummaryPage from "../pageObjects/OrderSummaryPage";
import OrderCompletionPage from "../pageObjects/OrderCompletionPage";
import SavedAddressesPage from "../pageObjects/SavedAddressesPage";
import CreateAddressesPage from "../pageObjects/CreateAddressPage";
import SavedPaymentsMethodsPage from "../pageObjects/SavedPaymentsMethodsPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  /*it("Login", () => {
    LoginPage.Account.click();
    LoginPage.LoginNav.click();
    LoginPage.Email.type('demo');
    LoginPage.Password.type('demo');
    LoginPage.LoginButton.click();
    LoginPage.Account.click();
    LoginPage.DropDownMenu.contains('demo');
    // Click Account button
    // Click Login button
    // Set email value to "demo"
    // Set password value to "demo"
    // Click Log in
    // Click Account button
    // Validate that "demo" account name appears in the menu section
  });*/

  /*it("Registration", () => {
    RegistrationPage.Account.click();
    RegistrationPage.LoginNav.click();
    RegistrationPage.NewCustomer.click();
    const x = (Math.random() * 100);
    let emails = 'email_'+x+'@inbox.lv';
    let pass =12345;
    RegistrationPage.EmailControl.type(emails);
    RegistrationPage.PasswordControl.type(pass);
    RegistrationPage.RepeatPassword.type(pass);
    RegistrationPage.SecurityQuestion.click();
    RegistrationPage.Question.contains("Name of your favorite pet?").click();
    RegistrationPage.Answer.type("Amogus");
    RegistrationPage.RegisterButton.click();
    LoginPage.Email.type(emails);
    LoginPage.Password.type(pass);
    LoginPage.LoginButton.click();
    LoginPage.Account.click();
    LoginPage.DropDownMenu.contains(emails);
    // Click Account button
    // Login button
    // Click "Not yet a customer?"
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    // Fill in password field and repeat password field with same password
    // Click on Security Question menu
    // Select  "Name of your favorite pet?"
    // Fill in answer
    // Click Register button
    // Set email value to previously created email
    // Set password value to previously used password value
    // Click login button
    // Click Account button
    // Validate that account name (with previously created email address) appears in the menu section
  });*/
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  /*it("Search and validate Lemon", () => {
    LemonPage.Search.click();
    LemonPage.TypeInSearch.type('Lemon{enter}');
    LemonPage.LemonItem.click();
    LemonPage.Sour.contains('Sour but full of vitamins.')
    // Click on search icon
    // Search for Lemon
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."
  });*/

  /*it("Search 500ml and validate Lemon",()=>{

    LemonPage.Search.click();
    LemonPage.TypeInSearch.type('500ml{enter}');
    LemonPage.FiveHun.contains('Lemon Juice').click();
    LemonPage.Sour.contains('Sour but full of vitamins.')

  })*/
  // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  // Click on search icon
  // Search for 500ml
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."

  /*it("Search 500ml and validate cards",()=>{
    LemonPage.Search.click();
    LemonPage.TypeInSearch.type('500ml{enter}');
    LemonPage.FiveHun.contains('Eggfruit Juice (500ml)').click();
    LemonPage.Sour.contains('Now with even more exotic flavour.');
    LemonPage.Sour.type('{esc}');
    LemonPage.FiveHun.contains('Lemon Juice (500ml)').click();
    LemonPage.Sour.contains('Sour but full of vitamins.');
    LemonPage.Sour.type('{esc}');
    LemonPage.FiveHun.contains('Strawberry Juice (500ml)').click();
    LemonPage.Sour.contains('Sweet & tasty!');
    LemonPage.Sour.type('{esc}');
  })*/
   // Create scenario - Search 500ml and validate cards
  // Click on search icon
  // Search for 500ml
  // Select a product card - Eggfruit Juice (500ml)
  // Validate that the card (should) contains "Now with even more exotic flavour."
  // Close the card
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  // Close the card
  // Select a product card - Strawberry Juice (500ml)
  // Validate that the card (should) contains "Sweet & tasty!"
  
  /*it("Read a review",()=>{
    LemonPage.Search.click();
    LemonPage.TypeInSearch.type('king{enter}');
    LemonPage.FiveHun.contains('King of the Hill').click();
    ReviewPage.ReviewDropDown.click();
    cy.wait(3000);
    ReviewPage.Reviews.contains('K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');

  })*/
 

  // Create scenario - Read a review
  // Click on search icon
  // Search for King
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!

  /*it("Create a review",()=>{
    LemonPage.Search.click();
    LemonPage.TypeInSearch.type('Raspberry{enter}');
    LemonPage.FiveHun.contains('Raspberry Juice (1000ml)').click();
    ReviewPage.WriteReview.click().type("Tastes like metal");
    ReviewPage.SubmitButton.click();
    ReviewPage.ReviewDropDown.click();
    cy.wait(3000);
    ReviewPage.Reviews.contains('Tastes like metal');
    

  })*/

  // Create scenario - Add a review
  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"

  /*it("Validate product card amount",()=>{
 
    HomePage.AllCards.contains("1 – 12 of 35");
    HomePage.DropDownNumbers.click();
    HomePage.ListOfNumbers.contains('24').click();
    HomePage.AllCards.contains("1 – 24 of 35");
    HomePage.DropDownNumbers.click();
    HomePage.ListOfNumbers.contains('36').click();
    HomePage.AllCards.contains("1 – 35 of 35");
    

  })*/

  // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35

  /*it("Buy Girlie T-shirt",()=>{
    LemonPage.Search.click();
    LemonPage.TypeInSearch.type('Girlie{enter}');
    ShirtPage.AddBasket.click();
    ShirtPage.MyBasket.click();
    BasketPage.CheckoutButton.click();
    if(SelectAddressPage.ContainingAddress.contains('United Fakedom')){
      SelectAddressPage.SelectAddress.click();
    }
    SelectAddressPage.ContinueButton();
    DeliveryMethodPage.DeliveryMethod.click();
    SelectAddressPage.ContinueButton();
    if(PaymentOptionsPage.CardNumbers.contains("5678")){
      PaymentOptionsPage.ClickRadio.click();
    }
    SelectAddressPage.ContinueButton();
    OrderSummaryPage.PayButton();
    OrderCompletionPage.Completion.contains("Thank you for your purchase!");
      
  
    
  })*/
  


  // Create scenario - Buy Girlie T-shirt
  // Click on search icon
  // Search for Girlie
  // Add to basket "Girlie"
  // Click on "Your Basket" button


  // Create page object - BasketPage
  // Click on "Checkout"button \done

  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
  // Click Continue button   \done

  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
  // Click Continue button \done

  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
  // Click Continue button \done

  // Create page object - OrderSummaryPage
  // Click on "Place your order and pay" /done

  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!" \done

  /*it("Add address",()=>{
    LoginPage.Account.click();
    LoginPage.DropDownMenu.contains('Orders & Payment').click();
    LoginPage.SavedAddress.click();
    SavedAddressesPage.NewAddressButton();
    CreateAddressesPage.Country.click().type('Uganda');
    CreateAddressesPage.Name.click().type("John");
    CreateAddressesPage.Mobile.click().type('24563847');
    CreateAddressesPage.ZipCode.click().type('UA-123');
    CreateAddressesPage.Addresss.click().type('Street 1');
    CreateAddressesPage.City.click().type('Random');
    CreateAddressesPage.State.click().type('Random2');
    CreateAddressesPage.AddressSubmitButton();
    CreateAddressesPage.ValidateInput.contains('Uganda').should('be.visible');


  })*/

  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses \done

  // Create page object - SavedAddressesPage
  // Click on Add New Address
  // Create page object - CreateAddressPage /done

  // Fill in the necessary information
  // Click Submit button
  // Validate that previously added address is visible /done

  it("Add payment option",()=>{
    LoginPage.Account.click();
    LoginPage.DropDownMenu.contains('Orders & Payment').click();
    LoginPage.MyPaymentOptions.click();
    SavedPaymentsMethodsPage.NewCard.contains("Add new card").click();
    SavedPaymentsMethodsPage.Name.type('Felix');
    SavedPaymentsMethodsPage.CardNumber.type('1234566546655555');
    SavedPaymentsMethodsPage.Month.select('7');
    SavedPaymentsMethodsPage.Year.select('2090');
    SavedPaymentsMethodsPage.SubmitButton.click();
    SavedPaymentsMethodsPage.ValidateCard.contains("Felix");
    //SavedPaymentsMethodsPage.Fields("Name").type('Felix',{force:true});
  })

  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  // Fill in Name
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list
});
