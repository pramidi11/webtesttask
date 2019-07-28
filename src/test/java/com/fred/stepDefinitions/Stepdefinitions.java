package com.fred.stepDefinitions;

import com.fred.pageObjects.LandingPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.UUID;

public class Stepdefinitions {

    WebDriver driver;

    @Given("Shopper has navigated to the store")
    public void shopper_has_navigated_to_the_store() {
        driver.get("http://automationpractice.com");
    }

    @When("Shopper registers a {string} email address")
    public void shopper_registers_a_email_address(String type) {

        LandingPage page = new LandingPage(driver);

        //To get a valid and unique email address
        UUID uniqId = UUID.randomUUID();

        switch (type) {
            case "valid":
                page.enterEmailAddress(uniqId + "@mail.com");
                break;
            case "invalid":
                page.enterEmailAddress("not a valid one");
                break;
            default:
        }
        page.clickNewsletterButton();
    }

    @Then("A {string} message is displayed")
    public void a_message_is_displayed(String string) {
        LandingPage page = new LandingPage(driver);
        String message = page.getFeedbackMessage().getText();
        assert message.contains(string);
    }

    @When("Shopper navigates {string} then {string}")
    public void shopper_navigates_then(String category, String subCategory) {
        LandingPage page = new LandingPage(driver);

        page.openCategoryAndSelectSubcategory(category, subCategory);
    }

    @Then("the Category name should be {string}")
    public void the_Category_name_should_be(String expected) {
        LandingPage page = new LandingPage(driver);
        String actual = page.getCategoryName().getText();
        assert actual.contains(expected);
    }

    @Before
    public void Setup(){
        driver = new ChromeDriver();
    }

    @After
    public void TearDown() {
        driver.close();
    }
}
