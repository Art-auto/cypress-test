class RegisterPage {
    
    get usernameInput() {
      return cy.get('#username');
    }
  
    get emailInput() {
      return cy.get('#email');
    }
  
    get passwordInput() {
      return cy.get('#password');
    }
  
    get confirmPasswordInput() {
      return cy.get('#confirmPassword');
    }
  
    get registerButton() {
      return cy.get('#registerButton');
    }
  
    get avatar() {
      return cy.get('.avatar');
    }
  
 
    fillUsername(username) {
      this.usernameInput.type(username);
    }
  
    fillEmail(email) {
      this.emailInput.type(email);
    }
  
    fillPassword(password) {
      this.passwordInput.type(password);
    }
  
    fillConfirmPassword(confirmPassword) {
      this.confirmPasswordInput.type(confirmPassword);
    }
  
    clickRegisterButton() {
      this.registerButton.click();
    }
  
    isAvatarVisible() {
      return this.avatar.should('be.visible');
    }
  }
  
  export default new RegisterPage();