import {mount} from '@cypress/vue'

var CoolInput = require("./CoolInputFormComponent.js")
var CoolInputFormComponent = CoolInput.CoolInputFormComponent

describe('cool input component', () => {
    beforeEach(() => {
        mount(CoolInputFormComponent, {
            propsData: {
                defaultInput: "type your fav color",
            },
        })
    })

    it('sets to a default input', () => {
        cy.get('[data-cy=cool-input]')
            .should('have.value', 'type your fav color')
    })

    it('allows user input', () => {
        cy.get('[data-cy=cool-input]')
            .type('check')
            .should('have.value', 'check')
    })

    it('resets the input field after user clicks on it', () => {
        cy.get('[data-cy=cool-input]')
            .type('check')
            .click()
            .should('have.value', '')
    })

    it('does not change the color of the input when noncolor is typed', () => {
        cy.get('[data-cy=cool-input]')
            .type('not-a-color')
            .should('have.css','background-color', 'rgb(255, 255, 255)')
    })

    it('changes the color of the input element when the CSS color is typed', () => {
        cy.get('[data-cy=cool-input]')
            .type('red')
            .should('have.css','background-color', 'rgb(255, 0, 0)')
    } )
})