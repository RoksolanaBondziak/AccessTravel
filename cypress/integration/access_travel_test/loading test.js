///<reference types = "Cypress"/>

describe("Facebook signin signout tests", () => {
  beforeEach(() => {
    cy.visit("https://www.accesstravel.com/en-US");
  });

  it("Access Travel loading test", () => {
    cy.get("title")
      .invoke("text")
      .should(
        "equal",
        "Inclusive Tours & Activities - Official Site - AccessTravels"
      );
  });
  it("Access Travel and Hotel buttons", () => {
    cy.get(".logo").click();
    cy.get("a")
      .contains("Access Travels")
      .invoke("text")
      .should("equal", "Access Travels");

    cy.get(".hotels").click();
    cy.get("a").contains(" Hotels").invoke("text").should("equal", " Hotels");
  });
});
