import { slowCypressDown } from 'cypress-slow-down'
// slow down each command by the default amount
// which is 1 second
slowCypressDown(500)
it('Logout', () => {
    describe('Test for Successfull Login', () => {
      it('Visits the Landing Page', () => {
        cy.visit('http://localhost:3000/')
        // cy.contains('type')
        cy.get('.nav-link').click()
        cy.get('.link-primary').click()
        cy.get(':nth-child(3) > .form-control').type('Hemanth Kumar Emandi')
        cy.get(':nth-child(4) > .form-control').type('emanh01@pfw.edu')
        cy.get(':nth-child(5) > .form-control').type('passoword123')
        cy.get(':nth-child(6) > .form-control').type('2608043744')
        cy.get(':nth-child(7) > .form-control').type('5116, Stonehedge Blvd, Fort Wayne, Indiana - 46835')
        cy.get('.btn').click()
      })
    })

})