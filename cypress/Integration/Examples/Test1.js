/// <reference types = "Cypress" />

describe('My First Test Suite', () => {
    it('My firstTest case', () => {

      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product').should('have.length',5)
      cy.get('.product:visible').should('have.length',4)
      cy.get(".products").as("productlocator")
      cy.get('@productlocator').find('.product').should('have.length',4)
      cy.get('@productlocator').find('.product').eq(1).contains("ADD TO CART").click()

      cy.get('@productlocator').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
          cy.wrap($el).find('button').click()
        }
        })

        // assert if logo text is correctly displayed
          cy.get(".brand").should("have.text", "GREENKART")
          
        //this is to print to logs
        cy.get(".brand").then(function(logoelement){

          cy.log(logoelement.text())


        })
        

      })

    })
  
