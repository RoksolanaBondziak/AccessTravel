///<reference types = "Cypress"/>

describe("Facebook signin signout tests", () => {
  beforeEach(() => {
    cy.visit("http://www.facebook.com");
    cy.get("[data-testid=open-registration-form-button]").click();
  });

  // it("FB signup birth date test", () => {
  //   // cy.wait(4000);

  //   cy.get("#month").select("8");
  //   cy.get("#month").invoke("val").should("equal", "8");

  //   cy.get("#day").select("1");
  //   cy.get("#day").invoke("val").should("equal", "1");

  //   cy.get("#year").select("1990");
  //   cy.get("#year").invoke("val").should("equal", "1990");
  // });

  it("FB signup gender test", () => {
    // cy.get("#u_2_4_it").check().should("be.check");
    cy.get("label")
      .contains("Custom")
      .siblings("input") //.parents, .children
      .check()
      .should("be.checked");
  });
});
