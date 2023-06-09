// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login",(username,password)=>{

    cy.fixture("login.Page").then((the)=>{
        cy.get(the.input.username).should('be.visible').type(username)
        cy.get(the.input.password).should('be.visible').type(password)
        cy.get(the.button.login).should('be.enabled').click({force:true})
    })
})

Cypress.Commands.add("fastLogin",()=>{

    cy.fixture("login.Page").then((the)=>{
        cy.visit(the.url.login)
        cy.get(the.input.username).should('be.visible').type("Admin")
        cy.get(the.input.password).should('be.visible').type("admin123")
        cy.get(the.button.login).should('be.enabled').click({force:true})
    })
})


