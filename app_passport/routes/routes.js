var express=require('express');
var router=express.Router();

router.get('/signin', function(req, res){
    res.render('home');
})

router.get('', function(req, res){
    res.send('User Logged In Succesfully');
})

router.post('/profile', function(req, res){
    res.send("User Login Successful");
    console.log('Session ID :'+req.sessionID);
    console.log('Session ID :'+req.session.id);
})
module.exports=router;