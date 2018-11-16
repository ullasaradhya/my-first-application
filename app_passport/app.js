var express=require('express');
var flash=require('connect-flash');
var app=express();
var passport=require('passport');
var sess=require('express-session');
var router=require('./routes/routes');
var apiroute=require('./controller/apiroute');
var Store=sess.Store;
// var BetterMemoryStore = require('session-memory-store')(sess);
// var store=new BetterMemoryStore({expires:60*60*1000, debug:true});
// app.use(sess({
//     name:'Session',
//     secret:'secret',
//     store:'store',
//     resave:true,
//     saveUninitialized:true
// }));
app.set('view engine', 'ejs');
app.use(flash());
app.use(router);
app.use(passport.session());
app.use(passport.initialize());
//passport.use();
app.post('/login', passport.authenticate('local-login',{
    successRedirect:'/profile',
    failureRedirect:'/signin',
    failureFlash:true
} ), function(req, res, done){
    res.send(req.flash('message'));
});
apiroute(passport);
app.listen(3000, function(){
    console.log('Server Listening at 3000....');
});