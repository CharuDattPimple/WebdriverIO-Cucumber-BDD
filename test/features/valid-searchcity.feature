Feature: Perform search operation with valid city name

    As a user on city search box
    I want to search for valid city "Mumbai"
    and want to verify weather details.

     Background:

        Given I open the url

    Scenario: Performing a valid search operation
        When I enter city as "Mumbai" into the search box
        And  I click on the search button
        Then It should successfully returns weather details for "Mumbai"