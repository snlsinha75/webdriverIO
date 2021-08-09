@AdvanceTargeting @Login
Feature: ||AT|| Validate the login functionality
  1. Validate the login functionality

  @LoginTest
  Scenario: 1. Validate the login functionality
    Given I am logged in to "targetingsearches/search"
    Then Verify the Advance Targeting page PageTitle