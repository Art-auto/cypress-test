import NavigationMenuPage from '../../pageObjects/NavigationMenuPage';
import DatepickerPage from '../../pageObjects/DatepickerPage';

describe('Datepicker Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    NavigationMenuPage.goToFormsMenu();
    NavigationMenuPage.goToDatepicker();
  });

  it('перевірка вибору сьогоднішньої дати в Common Datepicker', () => {
    DatepickerPage.clickCommonDatepickerInput();
    DatepickerPage.selectTodayInCommonDatepicker();

    const todayDate = Cypress.moment().format('DD/MM/YYYY');

    DatepickerPage.getCommonDatepickerInputValue().should('eq', todayDate);
  });
});