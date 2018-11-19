var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var sess=require('express-session');

module.exports=function(app, user){
    app.use(sess({
        name:'Session',
        secret:'secret',    
        store:store,
        resave:true,
        rolling:true,
        saveUninitialized:true,
        cookie:{maxAge:60}    
    }));
    app.use(passport.session());
    app.use(passport.initialize());
    passport.serializeUser(function(user, done){
        console.log('Serializer :'+user);
        done(null, user.id);
    })
    passport.deserializeUser(function(id, done){
               
    })
    //passport.use();   
}