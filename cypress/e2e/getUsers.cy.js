/// <reference types="cypress"/>

describe('Rest API Testing using Cypress', () => {
  it('Get Users',()=>{
    cy.request({
      methos:'GET',
      url:'https://gorest.co.in/public-api/users',
      Headers:{
        'authorization':'Bearer 779dd21efd508709c535821dd39dec403e128c2901263bce7da2aa701541aa89'
      }
    }).then((res)=>{
      expect(res.status).to.eq(200)
      let responseData =(res.body.data)
      for(let i=0;i< (responseData.length);i++){
        cy.log(responseData[i].name)
      }
      // expect(res.body.data.name).to.eq('Patricia')
    })
  })
  it ('Get User by UserID',()=>{
    cy.request({
      methos:'GET',
      url:'https://gorest.co.in/public-api/users/2',
      Headers:{
        'authorization':'Bearer 779dd21efd508709c535821dd39dec403e128c2901263bce7da2aa701541aa89	'
      }
    }).then((res)=>{
      expect(res.status).to.eq(200)
      let responseData =(res.body.data)
      cy.log(responseData)
      // expect(res.body.data.name).to.eq('Patricia')
    })
  })
})