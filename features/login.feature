Feature: Login to the application

  Scenario: As a user, I can log into the secure area

    When I login with candidatex and qa-is-cool
    Then I should see a main screen

