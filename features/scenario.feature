Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  Scenario: easy maths
    Given I go to duck duck go
    When  I search for WebdriverIO
    Then  I should see the search results

Scenario: easy maths on google
    Given I go to google
    When  I search for WebdriverIO on google
    Then  I should see the search results on google