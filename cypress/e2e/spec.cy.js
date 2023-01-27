describe("test",  { testIsolation: false }, () => {
  it('passes', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.visit("https://central.sophos.com")
    cy.wait(6000)
    cy.get('#username').type('hello@sophos.com');
    cy.get('#continue').click();
  })
})