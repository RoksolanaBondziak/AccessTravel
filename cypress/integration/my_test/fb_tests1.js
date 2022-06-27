///<reference types = "Cypress"/>

describe("Facebook signin signout tests", () => {
  beforeEach(() => {
    cy.visit("http://www.facebook.com");
  });

  it("FB titile page", () => {
    cy.get("title")
      .invoke("text")
      .should("equal", "Facebook - log in or sign up");
  });

  it("Email and password fields check", () => {
    cy.get('[id = "email"]').type("Ivan@gmail.com");
    cy.get('[id = "pass"]').type("IvanPetrovych");

    cy.get('[id = "email"]').invoke("val").should("equal", "Ivan@gmail.com");
    cy.get('[id = "pass"]').invoke("val").should("equal", "IvanPetrovych");
  });

  it("FB create new accout button", () => {
    cy.get("[data-testid=open-registration-form-button]").click();
    cy.get("div").contains("Sign Up").invoke("text").should("equal", "Sign Up");
  });
});
