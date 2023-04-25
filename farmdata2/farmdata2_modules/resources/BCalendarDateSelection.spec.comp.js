import { mount } from '@cypress/vue2'
import { shallowMount } from '@vue/test-utils'
import { BCalendar } from 'bootstrap-vue'

var BCalendarComp = require("./BCalendarDateSelection.js")
var BCalendarDateSelection = BCalendarComp.BCalendarDateSelection

describe('BCalendarDateSelection', () => {
    it('renders a BootstrapVue calendar', () => {
        const wrapper = mount(BCalendarDateSelection, {

        })
        // const wrapper = mount(BCalendar, {
        //     propsData: {
        //     locale: 'en'
        //     },
        //     stubs: {
        //     // If you're using a custom input component with BCalendar, you may need to stub it out here
        //     }
        // })

    cy.get('[data-cy=date-select]')
        .should('exist')
    
    cy.get('[data-cy=date-select]')
        .should('be.visible')

    // To test interaction with the calendar, you can use the wrapper to trigger events
    // wrapper.vm.$emit('input', new Date('2022-05-05'))
    // cy.get('input').should('have.value', '05/05/2022')
    })
})
