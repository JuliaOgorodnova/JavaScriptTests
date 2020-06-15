    var webdriver = require('selenium-webdriver');
    chrome = require('selenium-webdriver/chrome'),
        o = new chrome.Options();
    o.addArguments('disable-infobars');

    var Page = function () {
        this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();
        var driver = this.driver;

        this.visit = function (theUrl) {
            return driver.get(theUrl);
        }

        this.quit = function () {
            return driver.quit();
        }
    }

    module.exports = Page;