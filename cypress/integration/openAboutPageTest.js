describe('Open About Page Test', () => {
    it('Opens the about.html page', () => {
      cy.visit('https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/index.html');

      cy.contains('BICEP ABOUT').click();
      cy.url().should('include', '/about.html');
    })
  })