describe('Quiz Page Test', () => {
    it('Answers the ten questions in the quiz', () => {
      cy.visit('https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/quiz.html');

      cy.wait(500);

      cy.get("#progress-bar").should("have.text", "10%");
      cy.get("#test_status").should("have.text", "Question 1 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "20%");
      cy.get("#test_status").should("have.text", "Question 2 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "30%");
      cy.get("#test_status").should("have.text", "Question 3 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "40%");
      cy.get("#test_status").should("have.text", "Question 4 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "50%");
      cy.get("#test_status").should("have.text", "Question 5 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "60%");
      cy.get("#test_status").should("have.text", "Question 6 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "70%");
      cy.get("#test_status").should("have.text", "Question 7 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "80%");
      cy.get("#test_status").should("have.text", "Question 8 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "90%");
      cy.get("#test_status").should("have.text", "Question 9 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#test_status").should("have.text", "Question 10 of 10");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#overall_result").to.match(/You got*\/10 correct/);

    })
})