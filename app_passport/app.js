var express=require('express');
var app=express();
var passport=require('passport');
var session=require('express-session');
var router=require('./routes/routes');
var LocalStrategy=require('passport-local').Strategy;
//var apiroute=require('./controller/apiroute');
//var Store=sess.Store;
app.set('view engine', 'ejs');
app.use('/', router);
app.use(session({
    name:'Session',
    secret:'secret',    
    resave:true,
    rolling:true,
    saveUninitialized:true,
    cookie:{maxAge:60}    
}));
//apiroute(passport);
app.listen(3000, function(){
    console.log('Server Listening at 3000....');
});