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

  // login with user A, then create a post, login with user B and then go to user a's profile page, like the post, after that login with user A and successfully receive a notification
  it.only("successfully creates a notification when user B likes/comments user A'post ", () => {
    cy.get('[data-testid="username"]').contains("Kristian Ivanov");
    cy.get('[data-testid="openCreatePostModal"]').click();
    cy.get('[data-testid="createPostInput"]').type(
      "it was fun watching Scarface."
    );
    cy.get('[data-testid="createPostBtn"]').click();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get('[data-testid="emailLogin"]').type("james@james.com");
    cy.get('[data-testid="passwordLogin"]').type("James345");
    cy.get('[data-testid="submitLogin"]').click();
    cy.get('[data-testid="username"]').contains("James Brew");

    // get on user A's profile page
    cy.visit("/profile/kristian.ivanovy3d4s_wbj");

    // comment on his post
    cy.get('[data-testid="createComment"]').type("nice post dude {enter}");

    // login from user A
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get('[data-testid="emailLogin"]').type("kristian@kristian.com");
    cy.get('[data-testid="passwordLogin"]').type("Kristian345");
    cy.get('[data-testid="submitLogin"]').click();
    cy.get('[data-testid="username"]').contains("Kristian Ivanov");

    // assert that you have a new notification
    cy.get('[data-testid="notificationsButton"]').click();
    cy.get('[data-testid="notificationsRow"]').should("have.length", 1);
    cy.get('[data-testid="notification"]').should("be.visible");
  });
  // new notification should popup on the left bottom of the screen
  // https://3x.ant.design/components/notification/
});
