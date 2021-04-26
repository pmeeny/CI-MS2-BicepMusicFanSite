describe('404 Test', () => {
    it('Opens the 404.html page, and tests the content on the page', () => {
      // Navigate to the 404.html page
      cy.visit('http://127.0.0.1:5500/404.html');
      cy.url().should('include', '/404.html');
      // Check the content of the page
      cy.contains('404 error page').click();
      cy.contains('Are you sure you typed the right address?').click();
    })
  })