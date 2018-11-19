app.post('/login', passport.authenticate('local',{
    successRedirect:'/profile',
    failureRedirect:'/signin',    
} ));
passport.use(new LocalStrategy({
    usernameField:'username',
    passwordField:'password',
    passReqToCallback:true
}, 
function(req, username, password, done){
    if(!username||!password){
            return(null, false);
        }
    }
))