/// <reference types="cypress" />
describe('hello', () => {
    it('should response hello with name', () => {
        cy.request('GET', '/').should((response) => {
            expect(response.body.name).to.equal('Hello Foo')
        })
    })
})