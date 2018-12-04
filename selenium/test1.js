var webdriver=require('selenium-webdriver');
const {chrome, Options}=require('selenium-webdriver/chrome');



var driver=new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new Options.setUserPreferences({'profile.default_content_setting_values.notifications': 2}))
    .build();

driver.get('https://www.facebook.com/')
    .then(_ =>
        driver.findElement(webdriver.By.name('email')).sendKeys('8861137077'),
        driver.findElement(webdriver.By.name('pass')).sendKeys('dellinspiron'))
    .then(_=> 
        driver.findElement(webdriver.By.xpath("//input[@id='u_0_3']")).sendKeys(webdriver.Key.RETURN))
    .then(_ => driver.wait(until.titleIs('Facebook'), 1000))
    .then(_ => driver.quit());
