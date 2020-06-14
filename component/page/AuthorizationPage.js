    var Page = require('./TestUtils');

    Page.prototype.clickHeaderInputButton = function () {
        return this.find('//a[@class=\'brusnika__btn\']').click();
    }

    Page.prototype.logInFormIsDisplayed = function () {
        this.find('//form[@class=\'auth-form\']');
    }

    Page.prototype.emailInputField = function () {
        this.write('//input[@id=\'input-44\']','ulia_ogorodnova@mail.ru');
    }

    Page.prototype.passwordInputField = function () {
        this.write('//input[@id=\'input-46\']','qwerty');
    }

    Page.prototype.clickInputButton = function () {
        return this.find('//button[@class=\'button login-btn filled large brusnika\']').click();
    }

    Page.prototype.profileFormIsDisplayed = function () {
        this.emailInputField();
        this.passwordInputField();
        this.clickInputButton();
        return this.find('//span[@class=\'full-name\']').getText();
    };

    module.exports = Page;