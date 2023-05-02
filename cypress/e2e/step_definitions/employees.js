import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  //import {login} from '@pageOrange/login'
  
  require('cypress-xpath');

  Given("un navegador web con un usuario logueado y ubicado en la pagina de listado de empleados", () => {
    cy.fastLogin()
    cy.fixture("items.Menu").then((the)=>{
        cy.xpath(the.url.PIM).click({force:true})
    })
  });
  
  When("ingresa {string} en el campo Employee Name", (name) => {
    cy.fixture("viewEmployeeList.Page").then((the)=>{
        cy.get(the.input.employeeName).type(name)
    })
  });

  When("hace click en el botón Search", () => {
    cy.fixture("viewEmployeeList.Page").then((the)=>{
        cy.xpath(the.button.search).click({force:true})
    })
  });

  Then("se muestra el empleado buscado", () => {
    cy.fixture("viewEmployeeList.Page").then((the)=>{
        cy.get(the.result.searchResult).contains("Records Found")
    })
  });
  

  
  
  
  