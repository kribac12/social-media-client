describe("User Login", () => {
  it("does not allow user to submit login form with invalid credentials", () => {
    // Visit home page where login form is present
    cy.visit("/index.html");

    // Open login modal
    cy.contains("button", "Login").click();

    // Fill out form with invalid credentials
    cy.get("#loginEmail").type("wrong-email@wrong.no");
    cy.get("#loginPassword").type("wrongpassword");

    // Listen for window alert
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal("Either your username was not found or your password is incorrect");
    });

    // Submit form and then the alert should be triggered
    cy.get("#loginForm").submit();

    // Check that no token is saved in localStorage
    cy.window().its("localStorage").invoke("getItem", "token").should("be.null");
  });
});
