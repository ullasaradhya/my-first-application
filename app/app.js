var express=require('express');
var app=express();
var session=require('express-session');
var bodyParser=require('body-parser');
var dbCheck=require('./config/db');
var router=require('./routes/routes');
var fileupload =require('express-fileupload');

app.use(fileupload());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true }));
app.use(express.static(__dirname+'/views'));
app.use(session({
    secret :"Ullas",
    resave :false,
    saveUninitialized:true,
    cookie:{
        maxAge : 1000*60,
        expires : 30 *1000
    }
}));
app.use('/', router);
app.get('/id', function(req, res){
    res.render('home', {message : "hey"});
    console.log(req.sessionID);
    console.log(req.session.id);        
})
app.listen(3000, function(){
    console.log("Server Listening at 3000");
    })