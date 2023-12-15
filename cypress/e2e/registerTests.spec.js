import NavigationMenuPage from '../../pageObjects/NavigationMenuPage';
import RegisterPage from '../../pageObjects/RegisterPage';

describe('Register Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    NavigationMenuPage.goToAuthMenu();
    NavigationMenuPage.goToRegister();
  });

  it('перевірка валідації всіх полів', () => {

    RegisterPage.fillFirstName('Kate');
    RegisterPage.fillLastName('Test');
    RegisterPage.fillEmail('invalid-email'); 
    RegisterPage.fillPassword('password123');
    RegisterPage.clickSubmitButton();

    RegisterPage.verifyEmailError('Введіть коректний email');
  });
  
  it('перевірка успішної реєстрації', () => {
    
    RegisterPage.fillFirstName('Kate');
    RegisterPage.fillLastName('Test');
    RegisterPage.fillEmail('katetest@example.com');
    RegisterPage.fillPassword('Password123');
    RegisterPage.clickSubmitButton();
  

    cy.url().should('include', '/home'); 
    cy.get('.avatar').should('be.visible'); 
  });
});

