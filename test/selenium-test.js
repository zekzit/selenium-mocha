const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');
const should = require('should');

let driver = null

describe('aplus-smarthome', function () {
    before(function (done) {
        this.timeout(100000);
        driver = new Builder()
            .forBrowser('chrome')
            .build();
        driver.get('http://www.aplus-smarthome.com/').then(() => {
            done();
        }).catch(e => done(e));
    })
    describe('title', function () {
        it('should be "aplus-smarthome"', function (done) {
            driver.getTitle().then((title) => {
                should(title).be.exactly('aplus-smarthome');
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('categories', function () {
        it('should have at least 5 categories shown', function (done) {
            driver.findElements(By.className('thumbnail')).then((elements) => {
                should(elements.length).be.above(5);
                done();
            }).catch(function(e) {
                done(e);
            })
        });
    });
    after(function () {
        driver.quit();
    });
});