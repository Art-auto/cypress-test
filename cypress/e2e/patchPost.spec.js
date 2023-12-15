describe('PATCH /posts/:id', () => {
    it('перевірка статус коду', () => {
      const postId = 1; 
      cy.request({
        method: 'PATCH',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        body: {
          title: 'Нова часткова назва вашого поста',
        },
      }).as('patchPost');
      cy.get('@patchPost').its('status').should('eq', 200);
    });
  
  });