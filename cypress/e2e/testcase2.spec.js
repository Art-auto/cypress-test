describe('Accordion Test', () => {
    it('повинен перевірити видимість секції Product Details після перемикання', () => {
      
      cy.visit('http://localhost:4200/');
  
      
      cy.contains('Layout').click();
      cy.contains('Accordion').click();
  
      
      cy.wait(2000); 
      
  
      const productDetailsSection = 'Product Details';
  
    
      cy.contains(productDetailsSection)
        .parent() 
        .should('not.be.visible');
  
      
      cy.get('ngx-accordion nb-card-body button').first().click();
  
      
      cy.contains(productDetailsSection)
        .parent()
        .should('be.visible');
    });
  });