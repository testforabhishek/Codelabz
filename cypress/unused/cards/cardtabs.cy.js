
describe( "Card-Tabs | CodeLabz",() =>
{
    context( "Testing all Card Tabs",() =>
    {
        beforeEach( () =>
        {
            cy.viewport( 1280,751 );
            cy.visit( "http://localhost:3000" );
        });

        it( "displays all card-tabs",() =>
        {
            cy.get( "[data-testid=homepageTagSidebar]" ).should( "exist" );
            cy.get( "[data-testid=homepageUpcomingEvents]" ).should( "exist" );
            cy.get( "[data-testid=homepageUsersToFollow]" ).should( "exist" );
            cy.get( "[data-testid=homepageContributors]" ).should( "exist" );
        } );

        it( "Testing User Card",() =>
        {
            cy.get( "[data-testid=UsersCardImg]" ).should( "exist" );
            cy.get( "[data-testid= UsersCard]" ).should( "exist" );
            cy.get( "[data-testid= UsersCardTitle]" ).should( "exist" );
            cy.get( "[data-testid=UserName]" ).should( "exist" );
            cy.get( "[data-testid= UserDesg]" ).should( "exist" );
            cy.get( "[data-testid= UserAdd]" ).should( "exist" );
        } )

        it( "Testing Upcoming Event Card",() =>
        {
            cy.get( "[data-testid=upcomingEventCard]" ).should( "exist" );
            cy.get( "[data-testid= upEventImg]" ).should( "exist" );
            cy.get( "[data-testid= upEventName]" ).should( "exist" );
            cy.get( "[data-testid=upEventDate]" ).should( "exist" );
            cy.get( "[data-testid=upEventBox]" ).should( "exist" );
        } )

        it( "Testing Tags Card",() =>
        {
            cy.get( "[data-testid=TagsCard]" ).should( "exist" );
            cy.get( "[data-testid=TagsCardTitle]" ).should( "exist" );
            cy.get( "[data-testid= TagsChip]" ).should( "exist" );
        } )

    } );
   
} );