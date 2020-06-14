    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;
    var Page = require('../component/page/AuthorizationPage');
    var mocha = require('mocha');
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    var shoild = chai.should;
    chai.use(chaiAsPromised);

    var page;

    describe("Авторизация пользователя", function () {
        this.timeout(5000);

        afterEach(function () {
            page = new Page();
            page.driver.manage().window().maximize();
            page.visit('https://dev.brick-dev.ru');
        });

        beforeEach(function () {
            page.quit();
        });

        it('Тест для проверки видимости блока авторизации', function () {
            page.clickHeaderInputButton();
            page.logInFormIsDisplayed();
        });

        it('Тест для проверки авторизации пользователя и видимости блока Профиль', function () {
            page.clickHeaderInputButton();
            page.logInFormIsDisplayed();
            page.emailInputField();
            page.passwordInputField();
            page.clickInputButton();
            page.profileFormIsDisplayed();
        });

    });
