// Tests the Events page and content
describe('Events Test', () => {
    it('Opens the events.html page, and tests the content on the page', () => {
      // Navigate to the index.html page and click the event info link
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.contains('BICEP EVENT INFO').click();
      // Check the events page is displayed
      cy.url().should('include', '/events.html');
      // Check the events table loads
      cy.contains('Events');
      cy.contains('Date');
      cy.contains('Time');
      cy.contains('Title');
      cy.contains('Tickets');
      // Sleep to give time to the ticketmaster API requests to load
      cy.wait(500);
      // Check the events loads and the relevant data
      cy.get(".event-url-1").should("have.text", "Buy Tickets");
      cy.get(".event-url-2").should("have.text", "Buy Tickets");
      // Click on the event urls
      cy.get(".event-url-1").click();
      cy.get(".event-url-2").click();
      // Click on each event to load the google maps
      cy.get('#evt-heading1').click();
      cy.get('.event-venue1');
      cy.get('#map1');
      cy.get('#evt-heading2').click();
      cy.get('.event-venue2');
      cy.get('#map2');
      // Test the pagination, next, previous tests
      cy.get('.selected').should("have.text", "0");
      cy.get('#next').click();
      cy.wait(1000);
      cy.get('#next').click();
      cy.wait(1000);
      cy.get('#next').click();
      cy.wait(1000);
      cy.get('#next').click();
      cy.wait(1000);
      cy.get('#previous').click();
      cy.wait(1000);
      cy.get('#previous').click();
      cy.wait(1000);
      cy.get('#previous').click();
      cy.wait(1000);
      cy.get('#previous').click();
      cy.wait(1000);
      cy.get('.selected').should("have.text", "0");
      // Click four of the page numbers to load the contents
      cy.get('.event-page-number').contains('1').click();
      cy.get('.selected').should("have.text", "1");
      cy.get('.event-page-number').contains('2').click();
      cy.get('.selected').should("have.text", "2");
      cy.get('.event-page-number').contains('3').click();
      cy.get('.selected').should("have.text", "3");
      cy.get('.event-page-number').contains('4').click();
      cy.get('.selected').should("have.text", "4");
    })
})