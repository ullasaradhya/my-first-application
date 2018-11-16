var bodyParser=require('body-parser');
var jsonParser=require('json-parser');
var dbChecking=require('../config/db');
var express=require('express');
var router=express.Router();
var LocalStrategy=require('passport-local').Strategy;

module.exports=function(passport){
    var passport=require('passport');
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });
    passport.deserializeUser(function(id,done){
        dbChecking.dbData('CALL getUser('+id+');', function(err, rows){
            done(err, rows[0]);
        });
    })

    passport.use('local-login',new LocalStrategy({
        usernameField:'username',
        passwordField:'password',
        passReqToCallback:true
    }, 
    function(req, username, password, done){
        if(!username||!password){
            return done(null, false, req.flash('message', 'All Fields are required'));            
        }
        }
    ))
}