describe('Mailing List Test', () => {
    it('Tests the mailing list modal and emailJS test', () => {
      cy.visit('http://127.0.0.1:5500/index.html');

      cy.contains('BICEP MAIL LIST').click();
      
      cy.wait(500);

      cy.get("#full_name")
      .type("Joe Bloggs")
      .should("have.value", "Joe Bloggs");

      cy.get("#email_address")
      .type("joebloggs@gmail.com")
      .should("have.value", "joebloggs@gmail.com");

      cy.intercept('https://api.emailjs.com/api/v1.0/email/send').as('emailjs');
      cy.get('#submit_button').click();
      cy.wait('@emailjs');


    })
  })