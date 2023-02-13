/// <reference types="cypress" />

describe("Card | CodeLabz", () => {
    it("Check connect buttons", function () {
        cy.visit("http://localhost:3000/");
        cy.get("[data-testid=UserAvatar]").should("exist");
        cy.get("[data-testid=UserName]").should("exist");
        cy.get("[data-testid=UserOrgName]").should("exist");
        cy.get("[data-testid=Title]").should("exist");
        cy.get("[data-testid=Description]").should("exist");
        cy.get("[data-testid=Time]").should("exist");
        cy.get("[data-testid=CommentIcon]").should("exist");
        cy.get("[data-testid=ShareIcon]").should("exist");
        cy.get("[data-testid=NotifIcon]").should("exist");
        cy.get("[data-testid=MoreIcon]").should("exist");
    });
});
