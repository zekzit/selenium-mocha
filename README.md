# Selenium + Mocha Test

This is an example on how to use Selenium with Mocha to do some automated test on web frontend.

## Prerequisites
* Node.js + Git installed
* Selenium Chrome WebDriver executable in PATH environment

## Required setup
* Clone this project into your computer
* Run `npm install` to load some dependencies
* Run `npm test` will trigger tests within `/test` folder
* Sit back and see test results

## Explanation
* Test in file `test/selenium-test.js` will do this
  * Initial Selenium by download website that need to be investigate in `before()` section
  * Test each case specified in `describe()` section
  * After that it will close a browser in `after()` section