describe('Open About page', () => {
    it('Visits the Index.html', () => {
      cy.visit('https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/index.html');

      cy.contains('BICEP MAIL LIST').click();
      
      cy.wait(500);

      cy.get("#full_name")
      .type("Joe Bloggs")
      .should("have.value", "Joe Bloggs");

      cy.get("#email_address")
      .type("joebloggs@gmail.com")
      .should("have.value", "joebloggs@gmail.com");

      //cy.get('#submit_button').click();


    })
  })