const Page = require('../component/page/AuthorizationPage');
let page;

describe("Авторизация пользователя", () =>  {

    beforeEach(async () => {
        page = new Page();
        await page.visit('https://dev.brick-dev.ru');
        await page.driver.manage().window().maximize();
    }, 10000);

    afterEach(async () => {
        await page.driver.quit();
    }, 10000);

    test('Тест для проверки отображения блока авторизации', async () => {
        await page.clickHeaderInputButton();
        await page.logInFormIsDisplayed();
    }, 10000);

    test('Тест для проверки авторизации пользователя и отображения блока Профиль', async () => {
        await page.clickHeaderInputButton();
        await page.logInFormIsDisplayed();
        await page.emailInputField();
        await page.passwordInputField();
        await page.clickInputButton();
        await page.profileFormIsDisplayed();
    }, 10000);

});
