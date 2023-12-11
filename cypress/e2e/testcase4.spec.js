describe('Dialog Test', () => {
    it('перевіряє додавання імені у діалозі', () => {
      cy.visit('http://localhost:4200/');
  
      cy.contains('Modal & Overlays').click();
      cy.contains('Dialog').click();

      cy.wait(2000); 
  
      cy.contains('ENTER NAME').should('be.visible').click();
  
      const randomName = 'Kate';
      cy.get('input[placeholder="Name"]').type(randomName);
  
      cy.contains('Submit').click();

      cy.get('.names-list').should('contain', randomName);
    });
  });