describe('PUT /posts/:id', () => {
    it('перевірка статус коду', () => {
      const postId = 1; 
      cy.request({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        body: {
          title: 'Нова назва вашого поста',
          body: 'Нове тіло вашого поста',
          userId: 1,
        },
      }).as('updatePost');
      cy.get('@updatePost').its('status').should('eq', 200);
    });
 
  });