const colors = {
  "Light": "rgb(255, 255, 255)",
  "Dark": "rgb(34, 43, 69)",
  "Cosmic": "rgb(50, 50, 89)",
  "Corporate": "rgb(255, 255, 255)"
};

describe('Change Theme Test', () => {
  it('should change the application theme and validate the header color', () => {
  
    cy.visit('http://localhost:4200/'); 

    
    cy.wrap(Object.keys(colors)).each(color => {
      
      cy.get('ngx-header nb-select button').click();

      
      cy.contains('nb-option', `${color}`).click();

      
      cy.wait(1000);

     
      cy.get('ngx-header nb-select button')
        .contains(color.trim(), { matchCase: false })
        .should('exist');

      
      cy.get('body').should('have.css', 'background-color', colors[color]);
    });
  });
});
