///<reference types = "Cypress"/>

describe("Access travel - Positive tests", () => {
  beforeEach(() => {
    cy.visit("https://www.accesstravel.com/en-US");
    cy.get(".logo").click();
    cy.get(".hotels").click();
  });

  it("Destination field", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get("#Filter_DestinationId").invoke("val").should("equal", "21");
  });

  it("CheckIn field", () => {
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckIn"]')
      .invoke("val")
      .should("equal", "2022-08-01");
  });

  it("CheckOut field", () => {
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.CheckOut"]')
      .invoke("val")
      .should("equal", "2022-08-07");
  });

  it("Adult number field", () => {
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[name = "Filter.AdultNum"]').invoke("val").should("equal", "2");
  });

  it("Children number field", () => {
    cy.get('[name = "Filter.ChildrenNum"]').clear().type("1");
    cy.get('[name = "Filter.ChildrenNum"]').invoke("val").should("equal", "1");
  });

  it("Ages of children field", () => {
    cy.get('[name = "Filter.ChildrenNum"]').type("1");
    cy.get('[name = "Filter.AdultNum"]').click();
    cy.get('[id = "Filter_ChildrensAge[0]"]').clear().type("1");
    cy.get('[id = "Filter_ChildrensAge[0]"]')
      .invoke("val")
      .should("equal", "1");
  });

  it("Positive test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[name = "Filter.ChildrenNum"]').clear().type("1");
    cy.get('[name = "Filter.AdultNum"]').click();
    cy.get('[id = "Filter_ChildrensAge[0]"]').clear().type("1");
    cy.get('[type = "submit"]').click();
    cy.get("div").should("not.contain", "Find Your Inclusive Hotel!");
  });
});
