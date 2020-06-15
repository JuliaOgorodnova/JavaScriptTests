    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;
    var Page = require('./TestUtils');

    Page.prototype.clickHeaderInputButton = function () {
        return this.driver.wait(until.elementLocated(By.xpath('//a[@class=\'brusnika__btn\']')), 10000).click();
    }

    Page.prototype.logInFormIsDisplayed = function () {
        return this.driver.wait(until.elementLocated(By.xpath('//form[@class=\'auth-form\']')), 10000);
    }

    Page.prototype.emailInputField = function () {
        return this.driver.findElement(By.xpath('//div[@name=\'email\']/input')).sendKeys('ulia_ogorodnova@mail.ru');
    }

    Page.prototype.passwordInputField = function () {
        return this.driver.findElement(By.xpath('//div[@name=\'password\']/input')).sendKeys('qwerty');
    }

    Page.prototype.clickInputButton = function () {
        return this.driver.findElement(By.xpath('//div[@class=\'content\']')).click();
    }

    Page.prototype.profileFormIsDisplayed = function () {
        return this.driver.wait(until.elementLocated(By.xpath('//span[@class=\'full-name\']')), 10000);
    }

    module.exports = Page;