const express=require('express');
const uuid=require('uuid');
const session =require('express-session');
const app=express();
const bodyparser=require('body-parser');
const FileStore = require('session-file-store')(session);
const passport =require('passport');
const LocalStrategy =require('passport-local').Strategy;
const users=[{ "id":"3036", "email" :"ullas", "password" : "ullas"
}];
passport.use(new LocalStrategy(
    {usernameField : 'email'},
    function(email, password, done){
        console.log('Inside Local Strategy');
        const user=users[0];
        console.log('email :'+email);
        console.log('password: '+password);
        if(email==user.email && password==user.password){
            console.log('Returned local Strategy true');
            done(null, user);
        }
        else{
            done(null, false);
        }
    }
));
passport.serializeUser(function(user, done){
    console.log('Inside Serialize User Method for storing user id in session store');
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    console.log('Inside deserializer method');
    const user=users[0].id==id ? users[0] :false;
    done(null, user);
})
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(session(
{
    genid :(req)=>{
        console.log('Inside the Session Middleware');
        console.log(req.sessionID);
        return uuid();
        },
    store : new FileStore(),
    secret : "Ullas",
    saveUninitialized : true,
    resave :false   
}
))
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function(req, res){
    console.log('Currently in Home Page');
    console.log(req.sessionID);    
    res.send('You Have hit Home Page');
})
app.get('/login', function(req, res){
    console.log('In Login Page');
    console.log(req.sessionID);
    res.send('You are in Login Page');
})
app.post('/login', function(req, res){
    console.log('Inside Login Validator');

    passport.authenticate('local', function(err, user, info){
        console.log('Inside Passport Authenticate Method');
        console.log(`Req Session passport :${JSON.stringify(req.session.passport)}`);
        console.log(`Req.user:${JSON.stringify(req.user)}`);        
        req.login(user, function(err){
            if (err){
                console.log('Error in req.login');
            }
            else{
            console.log('Inside Passport req.login Method');
            console.log(`Req Session passport :${JSON.stringify(req.session.passport)}`);
            console.log(`Req.user:${JSON.stringify(req.user)}`);
            res.send('You have Authenticated');
            }
        })
    })(req, res)
})
app.get('/authenticated', function(req, res){
    console.log('Inside Authenticator method');
    console.log("Is Authenticated  : "+req.isAuthenticated());
    if(req.isAuthenticated()){
        res.send('You have succesfully Authenticated');
    }
    else{
        res.redirect('/');
    }
})


app.listen(3000,()=>{
    console.log('Server Listening at 3000');
})

