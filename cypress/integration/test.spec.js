describe("Sign in screen", () => {
  it("sees the login form first", () => {
    cy.visit("/");

    cy.contains("Sign in to Fakebooker");
  });
});
