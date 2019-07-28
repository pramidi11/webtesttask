@NewsletterRegistration
Feature: Register For Newsletter
  As a shopper
  In order to stay informed via newsletter
  I need to bee able to register my email

  Background:
    Given Shopper has navigated to the store

  Scenario: Register email address
    When Shopper registers a "valid" email address
    Then A "success" message is displayed

  Scenario: Invalid email address error message
    When Shopper registers a "invalid" email address
    Then A "Invalid email" message is displayed

