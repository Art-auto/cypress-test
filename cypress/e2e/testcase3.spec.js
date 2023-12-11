describe('Popover Test', () => {
    it('перевіряє відображення nb-popover при наведенні миші на кнопку Right', () => {
     
      cy.visit('http://localhost:4200/');
  
      
      cy.contains('Modal & Overlays').click();
      cy.contains('Popover').click();
  
      cy.wait(2000); 

      cy.get('button').contains('Right').trigger('mouseenter');
  
      cy.get('nb-popover').should('be.visible').contains('Hello, how are you today?');
    });
  });
