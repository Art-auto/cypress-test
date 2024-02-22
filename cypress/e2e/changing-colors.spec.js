/// <reference types="cypress" />

describe('Changing color of the app', ()=>{
    const colors = {
      "Light": "rgb(255, 255, 255)",
      "Dark": "rgb(34, 43, 69)",
      "Cosmic": "rgb(50, 50, 89)",
      "Corporate": "rgb(255, 255, 255)"
     };
  
    beforeEach(()=>{
      cy.visit('/')
    })
   /* it('Change color by clicking', () => {
        cy.wrap(Object.entries(colors)).each(color => {
          cy.get('ngx-header nb-select button.select-button').click()
          cy.contains('nb-option', `${color}`).then(color => cy.wrap(Object.entries(colors)).each(rgb => {
            
          }))
          cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.color)
        })
      })
    */
      it('Switching Light color', () => {
        cy.wrap(Object.keys(colors))
        cy.get('ngx-header .select-button').click()
          cy.contains('nb-option', 'Light').click().wait(3000)
          cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Light)

        
      })

      it('Switching Dark color', () => {
        cy.wrap(Object.keys(colors))
        cy.get('ngx-header .select-button').click()
          cy.contains('nb-option', 'Dark').click().wait(3000)
          cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Dark)

        
      })

      it('Switching Cosmic color', () => {
        cy.wrap(Object.keys(colors))
        cy.get('ngx-header .select-button').click()
          cy.contains('nb-option', 'Cosmic').click().wait(3000)
          cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Cosmic)

        
      })

      it('Switching Corporate color', () => {
        cy.wrap(Object.keys(colors))
        cy.get('ngx-header .select-button').click()
          cy.contains('nb-option', 'Corporate').click().wait(3000)
          cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Corporate)

        
      })
    
    })
    
