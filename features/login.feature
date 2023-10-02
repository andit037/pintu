Feature: The login module android apps

  Scenario Outline: As a user, I can see error message on mandatory field
    Given I am on the login page
    When I login with <email> and <password>
    And I submit data login
    Then I see a error message saying <message> on login page

    Examples: 
      | email          | password | message                   |
      |                |          | Enter Valid Email         |
      | test@gmail.com |          | Enter Valid Email         |
      |                |    12fRe | Enter Valid Email         |
      | testgmail.com  |    12fRe | Enter Valid Email         |
      | test@gmailcom  |   12fRe$ | Enter Valid Email         |

  Scenario Outline: As a user, I can see flash message on login page
    Given I am on the login page
    When I login with <email> and <password>
    And I submit data login
    Then I should see a flash message saying <message> on login page

    Examples: 
      | email          | password | message                 |
      | test@gmail.com |    12345 | Wrong Email or Password |

  Scenario: As a user, I register and login successfully without any error message
    Given I am on the register page
    When I register with tomsmith and test@gmail.com and 12fRe$ and 12fRe$
    And I submit data register
    And I should see a success message saying Registration Successful
    And I go to login page
    And I login with test@gmail.com and 12fRe$
    And I submit data login
    Then I should see my name tomsmith and my email test@gmail.com and my password 12fRe$ on dashboard