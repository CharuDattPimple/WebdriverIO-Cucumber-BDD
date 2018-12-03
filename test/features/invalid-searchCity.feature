Feature: Perform search operation with invalid city name

    As a user on city search box
    I want to search for invalid city 
    and Verify sugested city is not found.

    Background:

        Given I open the url

    Scenario: Performing a invalid search operation
        When I enter "ABCD" into the search box
        And  I click on the search button
        Then It should display "Not found" instead of city