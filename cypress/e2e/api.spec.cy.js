/// <reference types="cypress"/>

describe('Rest API Testing using Cypress', () => {
  it('API Test --Header Validations', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('APIResponse')
    cy.get('@APIResponse').its('headers').its('content-type').should('include','application/json')
  })

  it('API Test --Status Code Validation', ()=>{
    cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('APIResponse')
    cy.get('@APIResponse').its('status').should('eq',200)
  })

  it('Validate Name Value',()=>{
    cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('APIResponse')
    cy.get('@APIResponse').its('body').should('include',{name:'Pardeep'})
  })
})