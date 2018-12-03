Feature:  Verify the current location functionality
    
    As a user when I toggle temperature button
    then I can see the temperature on page the with enable measurement unit.

    Background:

        Given I open the url

    Scenario: Verify the temp in °C and °F
        When I toggle switch to °F
        Then It should display temperature in °F
        When I toggle switch to °C
        Then It should display temperature in °C


   