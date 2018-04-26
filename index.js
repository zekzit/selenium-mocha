const { Builder, By, Key, until } = require("selenium-webdriver");
const should = require("should");
const assert = require("assert");
let driver = new Builder().forBrowser("chrome").build();

async function main() {
  try {
    await driver.get("http://localhost:8080/imed/index.jsp");
    // await driver.switchTo().frame(By.name("mainFrame"));
    await driver.switchTo().frame("mainFrame");
    await driver.findElement(By.name("loginName")).sendKeys("imhi");
    await driver.findElement(By.name("password")).sendKeys("demo");
    setTimeout(async () => {
      await driver.findElement(By.name("password")).sendKeys(Key.RETURN);
    }, 1000);
  } catch (e) {
    console.log(e);
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 10000);
  }
}

main()
  .then(() => console.log("complete"))
  .catch(err => console.log(err));
