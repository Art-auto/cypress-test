describe('DELETE /posts/:id', () => {
    it('перевірка статус коду', () => {
      const postId = 1; 
      cy.request({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      }).as('deletePost');
      cy.get('@deletePost').its('status').should('eq', 200);
    });

  });