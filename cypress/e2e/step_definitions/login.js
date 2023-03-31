import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  //import {login} from '@pageOrange/login'
  
  require('cypress-xpath');

  Given("Un navegador web en la pagina de login de OrangeHRM", () => {
    cy.fixture("login.Page").then((the)=>{
        cy.visit(the.url.login)})
  });
  
  When("Un usuario ingresa el usuario y el password", () => {
    cy.fixture("login.Page").then((the)=>{
        cy.get(the.input.username).type(the.data.username)
        cy.get(the.input.password).type(the.data.password)
    })
  });
  
  When("hace click en el boton Login", () => {
    cy.fixture("login.Page").then((the)=>{
        cy.get(the.button.login).click({force:true})
    })
  });

  Then("accede a la pagina OrangeHRM como usuario autenticado", () => {
    cy.fixture("login.Page").then((the)=>{
        cy.url().should("eq",the.url.dashboard)
    })
  });
  