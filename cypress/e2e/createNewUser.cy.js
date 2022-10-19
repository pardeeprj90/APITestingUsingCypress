/// <reference types="Cypress"/>



describe('Create a New user using Post Request',()=>{
    let randomText = ""
    let testemail = ""
    it('Create User',()=>{
        var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijkmnopqrstuvwxyz"
        for(var i=0;i<10;i++)
        randomText+=pattern.charAt(Math.floor(Math.random()*pattern.length));
        testemail = randomText+'@gmail.com'
        cy.log(testemail)
        cy.fixture('CreateUser').then((testData)=>{
            
// Sending POST Request to Create a User
        cy.request({
            method: 'POST',
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                'Authorization':'Bearer 779dd21efd508709c535821dd39dec403e128c2901263bce7da2aa701541aa89'
            },
            body:{
                "name":testData.name,
                "gender":testData.gender,
                "email":testemail,
                "status":testData.status
            }
// Following assertion will check the response status code and check the properties of responses
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                // expect(res.body.data).has.property('email',testemail)
                // expect(res.body.data).has.property('name',testData.name)
                // expect(res.body.data).has.property('gender',testData.gender)
                // expect(res.body.data).has.property('status',testData.status)
            })
            // .then((res1)=>{
            //         const userid = res1.body.data.id
            //         cy.log(userid)
            //         cy.request({
            //             method:'GET',
            //             url:'https://gorest.co.in/public/v1/users'+userid
            //         }).then((res)=>{
            //             expect(res.status).to.eq(200)
            //             })
        })
    })
})
})