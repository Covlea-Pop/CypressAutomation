/// <reference types = "Cypress" />

describe('My Third Test Suite', () => {
    it('My Second Test case', () => {


      //Check boxes
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
      cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
      cy.get('input[type="checkbox"]').check(["option2","option3"])

      //Static dropdown

      cy.get("select").select("option2").should("have.value", "option2")

      //Dynamic dropdowns

      cy.get("#autocomplete").type("Ind")
      cy.get(".ui-menu-item div").each(($el, index, $list) => {

        if($el.text()==="India"){
            $el.click()
        }
      })
      cy.get("#autocomplete").should("have.value", "India")





    





     
      })
    })


  