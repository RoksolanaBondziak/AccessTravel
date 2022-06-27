///<reference types = "Cypress"/>

describe("Access Travel - Negative tests", () => {
  beforeEach(() => {
    cy.visit("https://www.accesstravel.com/en-US");
    cy.get(".logo").click();
    cy.get(".hotels").click();
  });

  it("Empty Destination field test", () => {
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Empty CheckIn field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear();
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Empty CheckOut field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear();
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Empty adults field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear();
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Invalid CheckOut date test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-08");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Same CheckIn and CheckOut date test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-08");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-08");
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Wrong format CheckIn and CheckOut date test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("20220801");
    cy.get('[name = "Filter.CheckOut"]').clear().type("0");
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Negative number in adults field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type(-5);
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Letter in adults field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type("h");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Special character in adults field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type("&");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Zero in adults and children field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type(0);
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Negative number in children field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[name = "Filter.ChildrenNum"]').clear().type("-7");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Huge number in children field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[name = "Filter.ChildrenNum"]').clear().type("92");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Zero adults and one child test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type(0);
    cy.get('[name = "Filter.ChildrenNum"]').clear().type("1");
    cy.get('[name = "Filter.AdultNum"]').click();
    cy.get('[id = "Filter_ChildrensAge[0]"]').clear().type("10");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });

  it("Negative age in age of children field test", () => {
    cy.get("#Filter_DestinationId").select("Bucharest");
    cy.get('[name = "Filter.CheckIn"]').clear().type("2022-08-01");
    cy.get('[name = "Filter.CheckOut"]').clear().type("2022-08-07");
    cy.get('[name = "Filter.AdultNum"]').clear().type("2");
    cy.get('[name = "Filter.ChildrenNum"]').clear().type("1");
    cy.get('[name = "Filter.AdultNum"]').click();
    cy.get('[id = "Filter_ChildrensAge[0]"]').clear().type("-23");
    cy.get('[type = "submit"]').click();
    cy.get(".sub-heading")
      .invoke("text")
      .should("equal", "Find Your Inclusive Hotel!");
  });
});
