var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var sess=require('express-session');
var flash=require('connect-flash');
var dbConfig=require('./config/db');
var authRouting=require('./routes/routes');

module.exports.auth=function(app){
    app.use(sess({
        name:'Session',
        secret:'secret',            
        resave:true,
        rolling:true,
        saveUninitialized:true,
        cookie:{maxAge:60}    
    }));
    app.use(passport.session());
    app.use(passport.initialize());
    app.use(flash());
    passport.serializeUser(function(user, done){
        console.log('Serializer :'+user);
        done(null, user.id);
    })
    passport.deserializeUser(function(id, done){
               
    })    //passport.use();   
    passport.use(new LocalStrategy( function(username, password, done){
        let pass="";
        dbConfig.dbData(`call dataFetching('${username}')`, function(rows, err){
            if(rows[0][0]){
                if (rows[0][0].password==password){
                    done(null, true, {message:'Login Succesful'})
                }
                else{
                    done(null, false, {message:'Invalid UserName/Password'})
                }
            }            
            
        });
        //if ()

    }))
}
module.exports.passport=passport;
authRouting.authenticate(passport);