describe('GET /posts', () => {
    it('перевірка статус коду', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').as('getPosts');
      cy.get('@getPosts').its('status').should('eq', 200);
    });
  
  
    it('перевірка наявності постів', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').as('getPosts');
      cy.get('@getPosts').its('body').should('not.be.empty');
    });
  
    it('перевірка формату даних поста', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').as('getPosts');
      cy.get('@getPosts').its('body').each(post => {
        expect(post).to.have.property('userId');
        expect(post).to.have.property('id');
        expect(post).to.have.property('title');
        expect(post).to.have.property('body');
      });
    });
  });