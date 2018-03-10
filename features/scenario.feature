Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

    Scenario: easy maths on Figure1signup
    Given I go to Figure1Signup
    When I enter SignupDetails
    Then I should see the ConfirmAccountPage

    Scenario: easy maths on Figure1
    Given I go to Figure1
    When I enter username
    Then I should see the error

    Scenario: easy maths on Figure1Passwords
    Given I go to Figure1Passwords
    When I enter invalidcharacters
    Then I should see the characters error