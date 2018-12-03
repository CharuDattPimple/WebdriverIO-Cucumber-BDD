Feature:  Verify the labels and Sign and signUp on home page UI
    
    As a user when I visited home page 
    I want to see all the header text.
    As a user when I click on Sign In 
    and Sign Up then I can see 
    "sign In Your account" and "Create new account" box.

    Also the things which I havent automated but is imortant to test is
    1.Download all the files from export button and verify whether it is successfully downloaded or not.
    2.All the features related with current temperature shown for city like main,daily,hourly,chart,map.
    3.Once hit the url, whether it is displaying current city weather or not.
    
    Background:

        Given I open the url

    Scenario: Verify all the labels on header bar
        When Verify the header text is displayed against text inside the element

    Scenario: Verify the signIn your account information box .
        When I click on sign In
        Then It should display sign in your account box

    Scenario: Verify the Sign up account information box.
        When I click on sign Up
        Then It should display Create new account box
    