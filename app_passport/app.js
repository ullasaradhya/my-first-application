var express=require('express');
var app=express();
var router=require('./routes/routes');
var auth=require('./auth');

app.set('view engine', 'ejs');
app.use('/',router.routing);
auth.auth(app);



app.listen(3000, function(){
    console.log('Server Listening at 3000....');
});