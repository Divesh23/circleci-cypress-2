describe('test spec', () => {
    it('passes', () => {
        cy.visit('/');
        cy.url().should('include', 'google');
    })
})