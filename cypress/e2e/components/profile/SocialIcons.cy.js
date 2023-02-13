/// <reference types="cypress" />

describe("Social Icons | CodeLabz", () => {
  it("Check connect buttons", function () {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=FacebookIcon]").should("exist");
    cy.get("[data-testid=LinkedInIcon]").should("exist");
    cy.get("[data-testid=GithubIcon]").should("exist");
    cy.get("[data-testid=TwitterIcon]").should("exist");
    cy.get("[data-testid=LinkIcon]").should("exist");
  });
});
