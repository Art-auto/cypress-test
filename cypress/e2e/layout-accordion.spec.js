/// <reference types="cypress" />

describe('Checking of visibility property', ()=>{
  
    beforeEach(()=>{
      cy.visit('/pages/layout/accordion')
    })

    it('', () => {
        cy.get('.ng-tns-c22-1 > .item-body').should('be.hidden')
        cy.get('button.appearance-filled').click()
        cy.get('.ng-tns-c22-1 > .item-body').should('be.visible')
    })

})