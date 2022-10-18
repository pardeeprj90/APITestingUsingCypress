/// <reference types="Cypress"/>

describe('Create a New user using Post Request',()=>{
    cy.fixture(CreateUser).then((testData)=>{

    
    it('Create User',()=>{
        cy.request({
            method: 'POST',
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                'Authorization':'Bearer 779dd21efd508709c535821dd39dec403e128c2901263bce7da2aa701541aa89'
            },
            body:{
                "name":testData.name,
                "gender":testData.gender,
                "email":testData.email,
                "status":testData.status
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email',testData.email)
            expect(res.body.data).has.property('name',testData.name)
            expect(res.body.data).has.property('gender',testData.gender)
            expect(res.body.data).has.property('status',testData.status)
        })
    })
})
})