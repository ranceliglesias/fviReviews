Feature: Review Payload

  The site should be able to render the reviews for facebook, google, and yelp.

  Scenario: User visits fvireview.surge.sh
    Given the google reviews load
    Then the the google reviews should render

  Scenario: User visits fvireview.surge.sh
    Given the facebook reviews load
    Then the the facebook reviews should render

  Scenario: User visits fvireview.surge.sh
    Given the yelp reviews are scrapable
    When the reviews are stored
    Then the the yelp reviews should render
