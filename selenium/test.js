const webdriver =require('selenium-webdriver');
var chrome=require('selenium-webdriver/chrome')
//var chrome=require('chromedriver');
var options=new chrome.Options();

options.setUserPrefences({'profile.default_content_setting_values.notifications': 2});
let driver=new webdriver.Builder()
    .forBrowser('chrome')    
    .withCapabilities(options.toCapabilities())
    .build();
launchBrowser();
async function launchBrowser(params) {
    await driver.get("https://www.facebook.com/");
    await driver.findElement(webdriver.By.name('email')).sendKeys('8861137077');               
    await driver.findElement(webdriver.By.name ('pass')).sendKeys('dellinspiron');
    await driver.findElement(webdriver.By.id ('u_0_8')).click();            
    await driver.findElement(webdriver.By.xpath('//div[@class=_2n_9 f_click]')).click();
    driver.sleep(5000);
    await driver.findElement(webdriver.Browser)
}