var express=require('express');
var router=express.Router();
var util=require('util');
var userAccess=require('../controller/usercontroller');
var dbConfig = require('../config/db');

router.get('/', function(req, res){
    res.render('home', {message: ""});
});

router.post('/profile', function(req, res){    
    
    console.log('Authnticate');

    userAccess.authenticate(req.body.username, req.body.password, function (userAuthenticate){
    switch(userAuthenticate){
        case 0: res.render('fileUpload',{message : "Log in Succesful"}); 
        console.log("Req Session ID"+req.sessionID);        
        break;
        case -1: res.send('Datbase Connectivity Not Found, Check Database Configurations');                
        break;    
        case -2:  res.render('home', {message : "Invalid UserName/password"});
        break;
        default :res.render('home', {message : "Session Timeout"});
    }
    
});
})
router.get('/register', function(req, res){
    res.render('form');    
    


});





// router.post('/profile', function (req, res) {
//     let uname=req.body.username;
//     let pwd=req.body.password;    
//     let query = util.format('call dataFetching("%s")', uname);
//     dbConfig.dbData(query)
//         .then(function (rows) {
//             console.log("data"+rows[0][0].password);
//             if (rows[0][0].password==pwd){
//                 res.render('fileUpload',{message : "Log in Succesful"});    
//             }
//             else{
//                 res.render('home', {message : "Invalid UserName/password"});
//             }           
//         }).catch(function (err) {
//             if (err==null){
//                 res.send('Data Not Found');
//             } 
//             if (err.code == 'ER_BAD_DB_ERROR' || err.code == 'ENOTFOUND' || err.code == 'ER_BAD_DB_ERROR') {
//                 res.send('Datbase Connectivity Not Found : Check Database Configuration');                
//             }
//         });
// });

router.post('/profile', function(req, res){

})


module.exports=router;



