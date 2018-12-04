var browser=require('../browserSettings');

module.exports={

    loginBtn : browser.driver.findElement(browser.webdriver.By.id('ctl00_Content_btnShowHideLogin')),

    userName : browser.driver.findElement(browser.webdriver.By.id('ctl00_Content_txtUserName')),

    password : browser.driver.findElement(browser.webdriver.By.id('ctl00_Content_txtPwd')),

    submitBtn : browser.driver.findElement(browser.webdriver.By.id('ctl00_Content_btnLogin'))
};