class NavigationMenuPage {
  navigateToAuth() {
    cy.visit('http://localhost:4200/');
    cy.contains('Auth').click();
  
  }

    
    get authMenuLink() {
      return cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-41.ng-star-inserted > a > span');
    }
  
    get loginLink() {
      return cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-64.ng-star-inserted > ul > li.menu-item.ng-tns-c7-65.ng-tns-c7-64.ng-star-inserted > a > span');
    }
  
    get registerLink() {
      return cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-87.ng-star-inserted > ul > li.menu-item.ng-tns-c7-89.ng-tns-c7-87.ng-star-inserted > a > span');
    }
  
    get formsMenuLink() {
      return cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-96.ng-star-inserted > a > span');
    }
  
    get datepickerLink() {
      return cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-96.ng-star-inserted > ul > li.menu-item.ng-tns-c7-98.ng-tns-c7-96.ng-star-inserted > a > span');
    }
  
  
    goToAuthMenu() {
      this.authMenuLink.click();
    }
  
    goToLogin() {
      this.loginLink.click();
    }
  
    goToRegister() {
      this.registerLink.click();
    }
  
    goToFormsMenu() {
      this.formsMenuLink.click();
    }
  
    goToDatepicker() {
      this.datepickerLink.click();
    }
  }
  
  export default new NavigationMenuPage();
