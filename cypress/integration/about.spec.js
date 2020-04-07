describe("About Tabs ( Profile )", () => {
  // you should have a user in the db before doing that, I haven't figured it out yet how to target the register pane (antd) so I can register first

  // login user before each test
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-testid="emailLogin"]').type("kristian@kristian.com");
    cy.get('[data-testid="passwordLogin"]').type("Kristian345");
    cy.get('[data-testid="submitLogin"]').click();
  });

  it("successfully add a workplace in about tab ( Profile )", () => {
    cy.get('[data-testid="aboutLink"]').click();
    cy.get('[data-testid="aboutWorkLink"]').click();
    cy.get('[data-testid="addWorkplace"]').click();
    cy.get('[data-testid="workplaceInput"]').type("Facebook");
    cy.get('[data-testid="saveWorkplace"]').click();

    cy.get('[data-testid="workplace"]').contains("Facebook");
  });

  it.only("successfully delete a workplace in about tab ( Profile )", () => {
    cy.get('[data-testid="aboutLink"]').click();
    cy.get('[data-testid="aboutWorkLink"]').click();
    cy.get('[data-testid="addWorkplace"]').click();
    cy.get('[data-testid="workplaceInput"]').type("Facebook");
    cy.get('[data-testid="saveWorkplace"]').click();

    cy.get('[data-testid="deleteWorkplace"]').click();

    cy.get('[data-testid="workplace"]').should("have.length", 0);
  });
});
