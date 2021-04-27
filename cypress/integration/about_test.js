// Tests the About page and content
describe('About Test', () => {
    it('Opens the about.html page, and tests the content on the page', () => {
      // Navigate to the about.html page
      cy.visit('http://127.0.0.1:5500/about.html');
      cy.url().should('include', '/about.html');
      // Test the about section content
      cy.contains('About');
      cy.contains('Note: This album and top track information below is read from Spotify');
      // Test the content of the 2 albums
      cy.contains('Albums');
      cy.get("#album2_tracks").should("have.text", "Tracks(Click to listen in Spotify):1. Atlas2. Cazenove3. Apricots4. Saku5. Lido6. X7. Rever8. Sundial9. Fir10. Hawk");
      cy.get("#album1_tracks").should("have.text", "Tracks(Click to listen in Spotify):1. Orca2. Glue3. Kites4. Vespa5. Ayaya6. Spring7. Drift8. Opal9. Rain10. Ayr11. Vale12. Aura");
      // Test that 10 tracks are returned for the top tracks
      cy.contains('Top Tracks');
      cy.get('#toptracks .top-track-number').should('have.length', 10);
      // Test the click on each top track
      cy.get('#toptracks .top-track-number').click({multiple:true});
    })
  })