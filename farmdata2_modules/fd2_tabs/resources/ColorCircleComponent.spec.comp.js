import {mount} from '@cypress/vue'

var ColorCircle = require("./ColorCircleComponent.js")
var ColorCircleComponent = ColorCircle.ColorCircleComponent

describe('colored circle component', () =>{
    beforeEach(() => {
        mount(ColorCircleComponent, {
            propsData: {
                defaultColor: 'red',
                defaultValue: 'traffic-light',
            }
        })
    })

    it('sets to a default color and input value', () => {
        cy.get('[data-cy=color-circle]')
            .should('have.value', "traffic-light")
        cy.get('[id^=circles]')
            .should('have.css','background-color', 'rgb(255, 0, 0)')
    })

    it('allows user input', () => {
        cy.get('[data-cy=color-circle]')
            .type('check')
            .should('have.value', 'check')
    })

    it('resets the input field after user clicks on it', () => {
        cy.get('[data-cy=color-circle]')
            .type('check')
            .click()
            .should('have.value', '')
    })

    it('does not change the color of the input when noncolor is typed', () => {
        cy.get('[data-cy=color-circle]')
            .type('not-a-color')
        cy.get('[id^=circles]')
            .should('have.css','background-color', 'rgb(255, 0, 0)')
    })

    it('changes the color of the input element when the CSS color is typed', () => {
        cy.get('[data-cy=color-circle]')
            .type('blue')
        cy.get('[id^=circles]')
            .should('have.css','background-color', 'rgb(0, 0, 255)')
    })

    it('emits an event when the color is changed', () => {
        const spy = cy.spy()
        Cypress.vue.$on('update-color', spy)
        cy.get('[data-cy=color-circle]')
            .type('green')
            .then(() => {
                expect(spy).to.be.calledWith(['green','red'])
            })
    })
})
