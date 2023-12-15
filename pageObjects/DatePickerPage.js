class DatepickerPage {
  
    get commonDatepickerInput() {
      return cy.get('#commonDatepickerInput');
    }
  
    openCommonDatepicker() {
      this.commonDatepickerInput.click();
    }
  
    selectTodayInCommonDatepicker() {
     
    }
  
    getCommonDatepickerValue() {
      return this.commonDatepickerInput.invoke('val');
    }
  }
  
  export default new DatepickerPage();