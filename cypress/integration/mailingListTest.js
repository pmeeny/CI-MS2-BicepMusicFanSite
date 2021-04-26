describe('Mailing List Test', () => {
    it('Tests the mailing list modal and emailJS test', () => {
      // Navigate to the index.html page and opens the mailing list modal
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.contains('BICEP MAIL LIST').click();
      //Wait 500 ms
      cy.wait(500);
      // Fill in the form with values for  name and email address
      cy.get("#full_name")
      .type("Joe Bloggs")
      .should("have.value", "Joe Bloggs");
      cy.get("#email_address")
      .type("joebloggs@gmail.com")
      .should("have.value", "joebloggs@gmail.com");
      // Click on the submit button, and then intercept the email call to emailjs to send the email
      cy.intercept('https://api.emailjs.com/api/v1.0/email/send').as('emailjs');
      cy.get('#submit_button').click();
      cy.wait('@emailjs');
    })
  })