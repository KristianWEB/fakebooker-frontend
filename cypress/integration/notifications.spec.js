describe("Notifications", () => {
  // you should have a user in the db before doing that, I haven't figured it out yet how to target the register pane (antd) so I can register first

  // login user before each test
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-testid="emailLogin"]').type("kristian@kristian.com");
    cy.get('[data-testid="passwordLogin"]').type("Kristian345");
    cy.get('[data-testid="submitLogin"]').click();
  });
  // show empty notification message if there are no notifications

  // display notifications when the navbar button is clicked
  it("Displays the notifications when the notifications navbar button is clicked", () => {
    cy.get('[data-testid="notificationsButton"]').click();
    cy.contains("Notifications");
    cy.get('[data-testid="notificationsRow"]').should("have.length", 1);
    cy.get('[data-testid="notification"]').should("be.visible");
  });

  // new notification should popup on the left bottom of the screen
  // https://3x.ant.design/components/notification/
});
