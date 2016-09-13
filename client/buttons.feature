Feature: Review buttons
  Make it as effortless as possible for students to review fvi.edu.
  The review sites are google, facebook and yelp.
  For more information see the attached `online_review.pdf` documents provided byt he client

  Scenario: User wants to review fvi.edu with google
    Given the google button loads
    When the user clicks the button
    Then the user should be directed to the google review page

  Scenario: User wants to review fvi.edu with facebook
    Given the google button loads
    When the user clicks the button
    Then the user should be directed to the facebook review page

  Scenario: User wants to review fvi.edu with yelp
    Given the yelp button loads
    When the user clicks the button
    Then the user should be directed to the yelp review page
