describe("User Login Flow", () => {
  it("allows user to log in and view profile", () => {
    cy.visit("/index.html");

    cy.contains("button", "Login").click();

    cy.get("#loginEmail").type("krissa@noroff.no");
    cy.get("#loginPassword").type("krissakrissa");
    cy.get("#loginForm").submit();

    cy.window().its("localStorage").invoke("getItem", "token").should("exist");
    cy.window().its("localStorage").invoke("getItem", "profile").should("exist");
  });
});
