class LoginPage {
    
    get emailInput() {
      return cy.get('#email');
    }
  
    get passwordInput() {
      return cy.get('#password');
    }
  
    get loginButton() {
      return cy.get('#loginButton');
    }
  
    get avatar() {
      return cy.get('.avatar');
    }
  
    fillEmail(email) {
      this.emailInput.type(email);
    }
  
    fillPassword(password) {
      this.passwordInput.type(password);
    }
  
    clickLoginButton() {
      this.loginButton.click();
    }
  
    isAvatarVisible() {
      return this.avatar.should('be.visible');
    }
  }
  
  export default new LoginPage();