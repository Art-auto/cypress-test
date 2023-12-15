describe('POST /posts', () => {
    it('перевірка статус коду', () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          title: 'Назва ',
          body: 'Тіло ',
          userId: 1,
        },
      }).as('createPost');
      cy.get('@createPost').its('status').should('eq', 201);
    });
  
    
  });