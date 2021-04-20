describe('Open Events Page Test', () => {
    it('Opens the events.html page', () => {
      cy.visit('https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/index.html');

      cy.contains('BICEP EVENT INFO').click();
      cy.url().should('include', '/events.html');
    })
})