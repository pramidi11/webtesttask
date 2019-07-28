package com.fred.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LandingPage {

    WebDriver browser;

    public LandingPage(WebDriver driver) {
        this.browser = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.ID, using = "newsletter-input")
    private WebElement newsLetterAddress;

    @FindBy(how = How.NAME, using = "submitNewsletter")
    private WebElement submitNewsLetterButton;

    @FindBy(how = How.CLASS_NAME, using = "alert")
    private WebElement message;

    @FindBy(how = How.CLASS_NAME, using = "cat-name")
    private WebElement categoryName;


    public void enterEmailAddress(String email) {
        newsLetterAddress.sendKeys(email);
    }

    public void clickNewsletterButton() {
        submitNewsLetterButton.click();
    }

    public WebElement getFeedbackMessage() {
        return message;
    }

    public void openCategoryAndSelectSubcategory(String category, String subCategory) {
        Actions actions = new Actions(browser);
//        To open main category dropdown by hovering the mouse over it
        WebElement menuCategory = browser.findElement(By.linkText(category));
        actions.moveToElement(menuCategory).perform();

//        It takes time for the menu to react, so we need to wait for it
        WebElement menuSubCategory = (new WebDriverWait(browser, 10)).until(ExpectedConditions.elementToBeClickable(By.linkText(subCategory)));
        menuSubCategory.click();
    }

    public WebElement getCategoryName() {
        return categoryName;
    }
}
