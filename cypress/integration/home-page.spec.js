describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Discover Movies");
        cy.get(".badge").contains(20);
      });
    })
  })