describe('Whether API', () => {
    it('Get Whether information for cities', () => {
        cy.request({
            methods: 'GET',
            url: 'https://www.metawhether.com/api/location/search/?query=San'
        })
        
    });
    
});