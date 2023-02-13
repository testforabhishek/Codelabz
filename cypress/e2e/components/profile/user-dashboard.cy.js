/// <reference types="cypress" />

describe("User Dashboard Test | CodeLabz", () => {
    beforeEach(function () {
        cy.fixture("login").then(function (credentials) {
            this.credentials = credentials;
        });
        cy.fixture("base_url").then(function (data) {
            this.base_url = data.base_url;
        });
    })

    it("login", function () {
        indexedDB.deleteDatabase("firebaseLocalStorageDb");
        cy.visit(`${this.base_url}login`);
        cy.wait(2000);
        cy.get(".email").type(this.credentials.email);
        cy.get(".password").type(this.credentials.password);
        cy.get(".loginButton").click();
        cy.wait(5000);
    })

    it("check user dashboard", function () {
        cy.visit(`${this.base_url}user-dashboard/profile`);
    })

    it("Check Switch Account", function () {
        cy.visit(`${this.base_url}user-dashboard/profile`);

        cy.get("[data-testid=switchAccount]").should("exist");
        cy.get("[data-testid=switchAccount_switch]").should("exist")
    })

    it("Check Profile", function () {
        cy.visit(`${this.base_url}user-dashboard/profile`);
        cy.get('[data-testid="profile"]').should("exist").click();
        cy.get("[data-testid=profilePage]").should("exist");
        cy.get("[data-testid=name]").children().clear().type("testname");
        cy.get("[data-testid=selectCountry]").click();
        cy.get("[data-testid=selectCountryItem]").first().click();
        cy.get("[data-testid=website]").children().clear().type("https://test.web");
        cy.get("[data-testid=description]").children().clear().type("description");
        cy.get("[data-testid=editProfileFacebook]")
            .find("div > input")
            .clear()
            .type("facebook");
        cy.get("[data-testid=editProfileTwitter]")
            .find("div > input")
            .clear()
            .type("twitter");
        cy.get("[data-testid=editProfileLinkedin]")
            .find("div > input")
            .clear()
            .type("linkedin");
        cy.get("[data-testid=editProfileGithub]")
            .find("div > input")
            .clear()
            .type("github");
        cy.get("[data-testid=editProfileSave]").click();

    })

    it("Check User Settings", function () {
        cy.visit(`${this.base_url}user-dashboard/profile`);

        cy.get('[data-testid="userSettings"] > .makeStyles-navLink-81 > .MuiButtonBase-root').should("exist").click();
        cy.get("[data-testid=userSettingsPage]").should("exist");
        cy.get("[data-testid=exportData]").should("exist");
        cy.get("[data-testid=startExport]").should("exist");
        cy.get("[data-testid=successorSettings]").should("exist");
        cy.get("[data-testid=addSuccessor]").should("exist");
        cy.get("[data-testid=deactivateAccount]").should("exist");
        cy.get("[data-testid=deleteAccount]").should("exist");

    })

    it("Check Social Media", function () {
        cy.visit(`${this.base_url}user-dashboard/profile`);
        cy.wait(2000);
        cy.get("[data-testid=socialMedia]").should("exist").click();
        cy.get("[data-testid=socialMediaPage]").should("exist");
        // cy.wait(2000);
    })
    it("Check Password", function () {
        cy.visit(`${this.base_url}user-dashboard/profile`);

        cy.get("[data-testid=password]").should("exist").click();
        cy.get("[data-testid=passwordPage]").should("exist");
        cy.get("[data-testid=oldPassword]").type("oldPassword");
        cy.get("[data-testid=newPassword]").type("newPassword");
        cy.get("[data-testid=confirmPassword]").type("newPassword");
        cy.get("[data-testid=updatePassword]").should("exist");
        cy.get("[data-testid=logout]").should("exist");
        cy.get("[data-testid=logoutOfOtherBrowsers]").should("exist");
        cy.get("[data-testid=loginSecurity]").should("exist");
        cy.get("[data-testid=emailVerification]").should("exist");

        // cy.wait(2000);
    })
    it("Check Organizations", function () {
        cy.visit(`${this.base_url}user-dashboard/profile`);

        cy.get("[data-testid=organizations]").should("exist").click();
        cy.get("[data-testid=organizationsPage]").should("exist");
        // cy.wait(2000);
    })
})