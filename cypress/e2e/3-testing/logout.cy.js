describe("User can log out with logout button", () => {
  it("allows the user to log out using the logout button", () => {
    // User needs to be logged in first
    cy.visit("/index.html");
    cy.contains("button", "Login").click();
    cy.get("#loginEmail").type("krissa@noroff.no");
    cy.get("#loginPassword").type("krissakrissa");
    cy.get("#loginForm").submit();

    // Check that token is stored in localStorage, user is logged in.
    cy.window().its("localStorage").invoke("getItem", "token").should("exist");

    // Click logout button to log user out
    cy.get('button[data-auth="logout"]').click();

    cy.window().its("localStorage").invoke("getItem", "token").should("not.exist");
    cy.window().its("localStorage").invoke("getItem", "profile").should("not.exist");

    // Check that UI has updated to show the user is logged out
    cy.get('button[data-auth="login"]').should("be.visible");
  });
});
