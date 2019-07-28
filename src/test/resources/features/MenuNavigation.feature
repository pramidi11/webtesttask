@Navigation
Feature: Menu Navigation
  As a shopper
  I need to be able to navigate
  In order to find what I need

  Background:
    Given Shopper has navigated to the store

  Scenario: Main category navigation
    When Shopper navigates "DRESSES" then "SUMMER DRESSES"
    Then the Category name should be "SUMMER DRESSES"
