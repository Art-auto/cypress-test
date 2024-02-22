/// <reference types="cypress" />

describe('Modal&Overlays', ()=>{
    

    it('Hover the element without clicking it', ()=> {
        cy.visit('/pages/modal-overlays/popover').wait(3000)
        cy.get('nb-card-body button').contains('Right').trigger("mouseenter").then(el=>{
            cy.get('nb-popover')
            .contains("Hello, how are you today?")
        })
    })

    it('Enter, Submit and Assert', ()=>{

        cy.visit('/pages/modal-overlays/dialog').wait(3000)
        cy.get('.result-from-dialog > .appearance-filled').click().get('.ng-star-inserted > nb-card > nb-card-body > .size-medium')
        .type('Mariia').then(name =>{
            
            cy.get('button.status-success').click()
            cy.wrap(name).get('.result-from-dialog > ul li').should('have.text', 'Mariia')
        })
        
        
    }
    
    )

})
