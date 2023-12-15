import NavigationMenuPage from '../../pageObjects/NavigationMenuPage';
import LoginPage from '../../pageObjects/LoginPage';

describe('Login Page Tests', () => {
  beforeEach(() => {
    
    NavigationMenuPage.navigateToAuth();
  });
    it('перевірка валідації полів email та password', () => {
     
      cy.get('loginLink').click();
      
  cy.get('#email-input')
  .type('invalid-email') 
  .should('have.class', 'is-invalid') 


cy.get('#password-input')
  .type('short') 
  .should('have.class', 'is-invalid') 

    });
  
  });