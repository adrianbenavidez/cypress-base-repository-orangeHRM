///<reference types="Cypress" />

//require('cypress-plugin-tab')
require('cypress-xpath');

describe("US Login al sistema OrangeHRM",() =>{

    beforeEach(()=>{
        cy.fixture("login.Page").then((the)=>{
           cy.visit(the.url.login)
       })     
    })

    it("Login - Ingreso con credenciales correctas",()=>{
        cy.fixture("login.Page").then((the)=>{
            cy.login(the.data.username,the.data.password)
            cy.url().should("eq",the.url.dashboard)
        })
        //cy.contains("Dashboard").click({force:true})
    })

    it("Login - Ingreso con credenciales incorrectas",()=>{
        cy.fixture("login.Page").then((the)=>{
            cy.login(the.data.incorrectUsername,the.data.incorrectPassword)
            cy.xpath(the.p.invalidCredentials).should("have.text",the.msjErrorInvalidCredentials)
        })      
    })

    it("Login - Acceso al reset de Password", ()=>{
        cy.fixture("login.Page").then((the)=>{
            cy.get(the.button.forgotYourPassword).click({force:true})
        })

        cy.fixture("resetPassword.Page").then((the)=>{
            cy.url().should("eq",the.url.resetPassword)
        })
    })

})//Cierre de describe