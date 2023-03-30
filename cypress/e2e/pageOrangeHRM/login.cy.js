///<reference types="Cypress" />

//require('cypress-plugin-tab')
require('cypress-xpath');

describe("US Login al sistema OrangeHRM",() =>{

    beforeEach(()=>{
        cy.fixture("login.Page").then((the)=>{
           cy.visit(the.url.login)
       })     
        
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
    })

    it("Login - Ingreso con credenciales correctas",()=>{
        
        cy.fixture("login.Page").then((the)=>{
            cy.get(the.input.username).type(the.data.username)
            cy.get(the.input.password).type(the.data.password)
            cy.get(the.button.login).click({force:true})
            cy.url().should("eq",the.url.dashboard)
        })
        //cy.contains("Dashboard").click({force:true})
    })

    it("Login - Ingreso con credenciales incorrectas",()=>{

        cy.fixture("login.Page").then((the)=>{
            cy.get(the.input.username).type(the.data.incorrectUsername)
            cy.get(the.input.password).type(the.data.incorrectPassword)
            cy.get(the.button.login).click({force:true})
            cy.xpath(the.p.invalidCredentials).should("have.text",the.msjErrorInvalidCredentials)
        })      
    })

    it("Login - Acceso al reset de Password", ()=>{

        cy.fixture("login.Page").then((the)=>{
            cy.xpath(the.button.forgotYourPassword).click({force:true})
        })

        cy.fixture("resetPassword.Page").then((the)=>{
            cy.url().should("eq",the.url.resetPassword)
        })
        
    })

})//Cierre de describe