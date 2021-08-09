@AdvanceTargeting @ContactSearch
Feature: ||AT|| Check the Contact Search Functionality 
  1. Validate Contact Search for Named Field

  @ContactSearch
  Scenario Outline: 1. Validate Contact Search for Named Field
    Given I am logged in to "targetingsearches/search"
    Then Verify the Advance Targeting page PageTitle
    And Then enter the named field <Named>
    And Click on Search button
    And Click on filter button
    Then Select the filter type
    And Select the filter value
    Then Click on Apply button
    And Click on outlet profile at RHP
    And Click on Action button
    Then Click on Cancel button

    Examples:
      | Named   | PageTitle            |
      | Thomas  | Agility PR Solutions | 