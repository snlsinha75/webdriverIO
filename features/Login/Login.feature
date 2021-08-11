@Test @Login
Feature: ||AT|| Validate the login functionality
  1. Validate the login functionality

  @LoginTest
  Scenario: 1. Validate the login functionality
    Given I am logged in to "gettingstarted"
    Then Verify the page PageTitle