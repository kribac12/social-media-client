describe("User Login Flow", () => {
  it("allows user to log in and view profile", () => {
    // Visit homepage with a login form
    cy.visit("/index.html");

    // Open login modal
    cy.contains("button", "Login").click();

    // Fill out and submit login form
    cy.get("#loginEmail").type("krissa@noroff.no");
    cy.get("#loginPassword").type("krissakrissa");
    cy.get("#loginForm").submit();

    cy.window().its("localStorage").invoke("getItem", "token").should("exist");

    //Check that profile data is in local storage
    cy.window().its("localStorage").invoke("getItem", "profile").should("exist");

    //Check if profile information is displayed
    cy.url().should("include", "profile");
  });
});
