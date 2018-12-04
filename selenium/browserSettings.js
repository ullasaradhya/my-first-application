var webdriver=require('selenium-webdriver');
var test=require('selenium-webdriver/testing')
var chai=require('chai');
var expect=chai.expect;
var test=require('mocha');

var driver=new webdriver.Builder()
    .forBrowser('chrome')
    .build();

test.describe ("Login", function(){
    driver.get("https://uppdstest.imfast.co.in:9890/pds_portal/DashBoard.aspx");
})
module.exports ={
    driver :driver,
    webdriver :webdriver,
    test : test,
    expecte : expect
}
