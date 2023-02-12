/// <reference types="cypress" />

describe("Testing Logout Functionality | CodeLabz", () => {
  beforeEach(function () {
    cy.fixture("login").then(function (credentials) {
      this.credentials = credentials;
    });
    cy.fixture("base_url").then(function (data) {
      this.base_url = data.base_url;
      cy.visit(this.base_url);
    });
  });

  before(function () {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  })

  it("Logout using Navbar", function (){
    cy.visit(`${this.base_url}`)
    if(cy.get("[data-testId=Logout]").should("not.exist")){
        cy.get("[data-test-id=login]").click();
        cy.get(".email").type(this.credentials.email);
        cy.get(".password").type(this.credentials.password);
        cy.get("[data-testId=loginButton]").click();
        cy.location().should((loc) => {
        expect(loc.href).to.eq(`${this.base_url}dashboard/my_feed`);
        });
    }
    cy.visit(`${this.base_url}`);
    cy.get("[data-testId=Logout]").should("exist");
    cy.get("[data-testId=Logout]").click();
    cy.get("[data-testId=Logout]").should("not.exist");
    cy.visit(`${this.base_url}profile`)
    cy.location().should((loc) => {
        expect(loc.href).to.not.eq(`${this.base_url}profile`);
        expect(loc.href).to.eq(`${this.base_url}login`)
      });

  })

  it("Logout using Profile Dropdown", function (){
    cy.visit(`${this.base_url}`)
    if(cy.get("[data-testId=nav-user]").should("not.exist")){
        cy.get("[data-test-id=login]").click();
        cy.get(".email").type(this.credentials.email);
        cy.get(".password").type(this.credentials.password);
        cy.get("[data-testId=loginButton]").click();
        cy.location().should((loc) => {
        expect(loc.href).to.eq(`${this.base_url}dashboard/my_feed`);
        });
    }
    cy.visit(`${this.base_url}`);
    cy.get("[data-testId=nav-user]").should("exist");
    cy.get("[data-testId=nav-user]").click();
    cy.get("#log-out").should("exist");
    cy.get("#log-out").click();
    cy.visit(`${this.base_url}profile`)
    cy.location().should((loc) => {
        expect(loc.href).to.not.eq(`${this.base_url}profile`);
        expect(loc.href).to.eq(`${this.base_url}login`)
      });

  })
});
