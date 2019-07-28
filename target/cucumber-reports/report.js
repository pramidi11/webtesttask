$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/MenuNavigation.feature");
formatter.feature({
  "name": "Menu Navigation",
  "description": "  As a shopper\n  I need to be able to navigate\n  In order to find what I need",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Shopper has navigated to the store",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.shopper_has_navigated_to_the_store()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Main category navigation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Navigation"
    }
  ]
});
formatter.step({
  "name": "Shopper navigates \"DRESSES\" then \"SUMMER DRESSES\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.shopper_navigates_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Category name should be \"SUMMER DRESSES\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.the_Category_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/RegisterForNewsletter.feature");
formatter.feature({
  "name": "Register For Newsletter",
  "description": "  As a shopper\n  In order to stay informed via newsletter\n  I need to bee able to register my email",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@NewsletterRegistration"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Shopper has navigated to the store",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.shopper_has_navigated_to_the_store()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register email address",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NewsletterRegistration"
    }
  ]
});
formatter.step({
  "name": "Shopper registers a \"valid\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.shopper_registers_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A \"success\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.a_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Shopper has navigated to the store",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.shopper_has_navigated_to_the_store()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid email address error message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NewsletterRegistration"
    }
  ]
});
formatter.step({
  "name": "Shopper registers a \"invalid\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.shopper_registers_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A \"Invalid email\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.a_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});