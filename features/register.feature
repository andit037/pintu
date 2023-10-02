Feature: The register module android apps

  Background: 
    Given I am on the register page

  Scenario Outline: As a user, I can see error message on mandatory field
    When I register with <name> and <email> and <password> and <confirm_password>
    And I submit data register
    Then I should see a error message saying <message>

    Examples: 
      | name     | email          | password | confirm_password | message                   |
      |          |                |          |                  | Enter Full Name           |
      | tomsmith |                |   12fRe$ |           12fRe$ | Enter Valid Email         |
      | tomsmith | test@gmail.com |          |           12fRe$ | Enter Password            |
      | tomsmith | test@gmail.com |    12fRe |                  | Password Does Not Matches |
      |          | test@gmail.com |    12fRe |           12fRe$ | Enter Full Name           |
      | tomsmith | testgmail.com  |   12fRe$ |           12fRe$ | Enter Valid Email         |
      | tomsmith | test@gmailcom  |   12fRe$ |           12fRe$ | Enter Valid Email         |
      | tomsmith | test@gmail.com |    12fRe | ABCd             | Password Does Not Matches |


  Scenario Outline: As a user, I can register sucessfully
    When I register with <name> and <email> and <password> and <confirm_password>
    And I submit data register
    Then I should see a success message saying <message>

    Examples: 
      | name     | email          | password | confirm_password | message                 |
      | tomsmith | test@gmail.com |   12fRe$ |           12fRe$ | Registration Successful |
