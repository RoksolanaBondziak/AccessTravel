///<reference types = "Cypress"/>

describe("API employees test", () => {
  Cypress.config("baseUrl", "https://dummy.restapiexample.com/api/v1/");
  it("Get all employees", () => {
    cy.request("GET", "employees").its("status").should("equal", 200);
  });

  it("Get employee, test personal data", () => {
    cy.request("GET", "employee/1")
      .its("body")
      .its("data")
      .should("include", { employee_name: "Tiger Nixon" })
      .and("include", { employee_age: 61 });
  });

  it("Create employee, test personal data", () => {
    const employee = { name: "Lana", salary: "123", age: "23" };
    cy.request("POST", "create", employee)
      .its("body")
      .its("data")
      .should("include", { name: "Lana" })
      .and("include", { salary: "123" });
  });
});
