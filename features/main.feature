Feature: Explore main screen

  Scenario: As a user, I can open second page in the pagination

    Given I am on the main page
    When I can open a random page from the pagination
    Then I can see the articles from the opened pagination


  Scenario: As a user, I can open an article

    Given I am on the main page
    When I can open a random article
    Then I can see article details

  Scenario: As a user, I can open a user

    Given I am on the main page
    When I can open a random user
    Then I can see user details

  Scenario: As a user, I can open a user

    Given I am on the main page
    When I can open a random tag
    Then I can see tag details