const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('should');
const assert = require('assert');
let driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.aplus-smarthome.com/');
driver.getTitle().then((title) => {
    assert(title === 'aplus-smarthome');
});

// driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();