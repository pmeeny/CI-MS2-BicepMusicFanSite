describe('Open Quiz Page Test', () => {
    it('Opens the quiz.html page', () => {
      cy.visit('https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/index.html');

      cy.contains('BICEP QUIZ GAME').click();
      cy.url().should('include', '/quiz.html');
    })
})