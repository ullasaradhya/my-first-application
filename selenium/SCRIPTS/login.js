var browser=require('../browserSettings');
var loginpage=require('../POM/loginpage');

var test=browser.test;


   test.describe ('UP-PDS Web Portal', function(){

   test.before('Login',async function(){
   await browser.driver.get("https://uppdstest.imfast.co.in:9890/pds_portal/DashBoard.aspx");   
   await loginpage.loginBtn.click();
   await loginpage.userName.sendKeys('vijay');   
   await loginpage.password.sendKeys('admin123');
   await loginpage.submitBtn.click();
})
test.it('User', function(){
    console.log("Login Done");
})
})