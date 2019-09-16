 afterEach(() => {
   cy
     
     .clearCookies()
   
})
describe('The  Insider Home Page', function() {
  it('Visit the Insider Page', function() {
    cy.viewport(1366, 657 ) 
    cy.visit('https://insider.in/')
    cy.get('[alt="Welcome to the new Paytm Insider. Just select your city to begin"]').should('be.visible')
    cy.contains('Pune').click()
    cy.url().should('include', '/pune')  
    cy.contains('Bacardi NH7 Weekender 2019, Pune').click()
    cy.url().should('include', 'bacardi-nh7-weekender-pune') 

 })
})

   describe('Booking the Tickets', function() {
  it('Checking Ticketing Flow', function() {
    cy.viewport(1366, 657 )
     cy.get('[id="closeModalButton"]').click()
    cy.contains('BUY NOW').click()
    
    cy.wait(1000)
    cy.scrollTo('top') 
    cy.wait(500)
   cy.contains('button', 'Book').click()
   cy.clearCookies() 
    cy.scrollTo('top') 
    
   cy.get('select').eq(0).select('1').should ('have.value', '1')
   cy.scrollTo('top') 
   cy.contains('BUY').click()
   cy.url().should('include', 'checkout') 
   cy.clearCookies() 
   
   
   
    
  })
})