/// <reference types="cypress" />
describe('function :: hello :: ', () => {
    test('should response hello with name', () => {
        cy.request('GET', '/').should((response) => {
            expect(response.body.name).to.equal('Hello Foo')
        })
    })
})