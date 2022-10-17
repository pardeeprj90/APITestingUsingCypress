/// <reference types="cypress"/>

describe('Rest API Testing using Cypress', () => {
  it('Get Users',()=>{
    cy.request({
      methos:'GET',
      url:'https://gorest.co.in/public/v2/users',
      Headers:{
        'authorization':'Bearer 779dd21efd508709c535821dd39dec403e128c2901263bce7da2aa701541aa89	'
      }
    }).then((res)=>{
      expect(res.status).to.eq(200)
    })
  })
})