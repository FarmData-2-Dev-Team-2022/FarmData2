import { mount } from '@cypress/vue'

var CollapComp = require("./CollapsibleTextComponent.js")
var CollapsibleTextComponent = CollapComp.CollapsibleTextComponent

describe('collapsible text component', () => {
    context('when Pokémon is Meganium', () => {
        let prop= {
            description: 'The aroma that rises from its petals contains a substance that calms aggressive feelings.',
            resource: 'https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)',
            gen: 'II',
            weight: '100.5',
            height: '1.8',
            rate: '11.9',
            selected: 'false'
        }
    beforeEach(() => {
        mount(CollapsibleTextComponent, {
            propsData: prop
            })
        })

        it('exists', () => {
            cy.get('[data-cy=details-box]')
                .should('exist')
    
            cy.get('[data-cy=summary-box-selectable]')
                .should('exist')
            
            cy.get('[data-cy=first-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=line-break]')
                .should('exist')
    
            cy.get('[data-cy=second-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=third-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=link-fig-tag]')
                .should('exist')
        }) 
    
        
        it('make sure the dropdown text box is closed', () => {
            cy.get('[data-cy=details-box]')
                .should('not.have.attr', 'active');
        })
    
        it('make sure the dropdown text box is open', () => {
            cy.get('[data-cy=details-box]').click()
                .should('not.have.attr', 'disabled');
        })
    
        it('emits on click', () => {
            const spy = cy.spy()
            Cypress.vue.$on('click', spy)
            cy.get('[data-cy=summary-box-selectable]').click()
                    .then(() => {
                        expect(spy).to.be.called
                     })
        })
    
        it('check if the prop values are correct', () => {
            cy.get('[data-cy=first-fig-tag]')
                .should('have.text', 'The aroma that rises from its petals contains a substance that calms aggressive feelings.')
                
            cy.get('[data-cy=second-fig-tag]')
                .should('have.text', 'Weight: 100.5kg Height: 1.8m')
    
            cy.get('[data-cy=third-fig-tag]')
                .should('have.text', 'Introduced: Gen II Catch Rate: 11.9%')
    
            cy.get('[data-cy=link-fig-tag]')
                .find('a')
                .should('have.attr', 'href', 'https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)')
    
        })
    })

    context('when Pokémon is Vaporeon', () => {
        let prop= {
            description: 'When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.',
            resource: 'https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)',
            gen: 'I',
            weight: '29.0',
            height: '1.0',
            rate: '11.9',
            selected: 'false'
        }
    beforeEach(() => {
        mount(CollapsibleTextComponent, {
            propsData: prop
            })
        })

        it('exists', () => {
            cy.get('[data-cy=details-box]')
                .should('exist')
    
            cy.get('[data-cy=summary-box-selectable]')
                .should('exist')
            
            cy.get('[data-cy=first-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=line-break]')
                .should('exist')
    
            cy.get('[data-cy=second-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=third-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=link-fig-tag]')
                .should('exist')
        }) 
    
        
        it('make sure the dropdown text box is closed', () => {
            cy.get('[data-cy=details-box]')
                .should('not.have.attr', 'active');
        })
    
        it('make sure the dropdown text box is open', () => {
            cy.get('[data-cy=details-box]').click()
                .should('not.have.attr', 'disabled');
        })
    
        it('emits on click', () => {
            const spy = cy.spy()
            Cypress.vue.$on('click', spy)
            cy.get('[data-cy=summary-box-selectable]').click()
                    .then(() => {
                        expect(spy).to.be.called
                     })
        })
    
        it('check if the prop values are correct', () => {
            cy.get('[data-cy=first-fig-tag]')
                .should('have.text', 'When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.')
                
            cy.get('[data-cy=second-fig-tag]')
                .should('have.text', 'Weight: 29.0kg Height: 1.0m')
    
            cy.get('[data-cy=third-fig-tag]')
                .should('have.text', 'Introduced: Gen I Catch Rate: 11.9%')
    
            cy.get('[data-cy=link-fig-tag]')
                .find('a')
                .should('have.attr', 'href', 'https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)')
    
        })
    })

    context('when Pokémon is Arcanine', () => {
        let prop= {
            description: 'The sight of it running over 6,200 miles in a single day and night has captivated many people.',
            resource: 'https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)',
            gen: 'I',
            weight: '155.0',
            height: '1.9',
            rate: '17.5',
            selected: 'false'
        }
    beforeEach(() => {
        mount(CollapsibleTextComponent, {
            propsData: prop
            })
        })

        it('exists', () => {
            cy.get('[data-cy=details-box]')
                .should('exist')
    
            cy.get('[data-cy=summary-box-selectable]')
                .should('exist')
            
            cy.get('[data-cy=first-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=line-break]')
                .should('exist')
    
            cy.get('[data-cy=second-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=third-fig-tag]')
                .should('exist')
    
            cy.get('[data-cy=link-fig-tag]')
                .should('exist')
        }) 
    
        
        it('make sure the dropdown text box is closed', () => {
            cy.get('[data-cy=details-box]')
                .should('not.have.attr', 'active');
        })
    
        it('make sure the dropdown text box is open', () => {
            cy.get('[data-cy=details-box]').click()
                .should('not.have.attr', 'disabled');
        })
    
        it('emits on click', () => {
            const spy = cy.spy()
            Cypress.vue.$on('click', spy)
            cy.get('[data-cy=summary-box-selectable]').click()
                    .then(() => {
                        expect(spy).to.be.called
                     })
        })
    
        it('check if the prop values are correct', () => {
            cy.get('[data-cy=first-fig-tag]')
                .should('have.text', 'The sight of it running over 6,200 miles in a single day and night has captivated many people.')
                
            cy.get('[data-cy=second-fig-tag]')
                .should('have.text', 'Weight: 155.0kg Height: 1.9m')
    
            cy.get('[data-cy=third-fig-tag]')
                .should('have.text', 'Introduced: Gen I Catch Rate: 17.5%')
    
            cy.get('[data-cy=link-fig-tag]')
                .find('a')
                .should('have.attr', 'href', 'https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)')
    
        })
    })



})