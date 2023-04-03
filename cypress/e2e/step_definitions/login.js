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
        cy.get(the.button.login).should("be.enabled").click({force:true})
    })
  });

  Then("accede a la pagina OrangeHRM como usuario autenticado", () => {
    cy.fixture("login.Page").then((the)=>{
        cy.url().should("eq",the.url.dashboard)
    })
  });

  When("Un usuario ingresa el {string} y el {string}", (username,password) => {
    cy.fixture("login.Page").then((the)=>{
        cy.get(the.input.username).type(username)
        cy.get(the.input.password).type(password)
    })
  });

  Then("se muestra un mensaje {string}", (mensaje) => {
    cy.fixture("login.Page").then((the)=>{
        cy.xpath(the.p.invalidCredentials).should("have.text",mensaje)
    })
  });

  
  