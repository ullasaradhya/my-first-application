var express=require('express');
var router=express.Router();

router.get('/signin', function(req, res){
    res.render('home');
})

router.get('/profile', function(req, res){
    res.send('User Logged In Succesfully');
})



module.exports=router;