// Tests the Index page and content
describe('Index Test', () => {
    it('Opens the index.html page, and tests the content on the page', () => {
      // Navigate to the index.html page
      cy.visit('http://127.0.0.1:5500/index.html');
      // Test content of the navigation bar
      cy.get(".nav-item").contains("Home");
      cy.get(".nav-item").contains("About");
      cy.get(".nav-item").contains("Events");
      cy.get(".nav-item").contains("Quiz");
      // Test content of the four images
      cy.get(".dj-vinyl .white-header2-text").should("have.text", "BICEP ABOUT");
      cy.get(".dj-event .white-header2-text").should("have.text", "BICEP EVENT INFO");
      cy.get(".dj-disco .white-header2-text").should("have.text", "BICEP QUIZ GAME");
      cy.get(".dj-pioneer .white-header2-text").should("have.text", "BICEP MAIL LIST");

    })
})