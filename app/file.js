var express=require('express');
var app=express();

app.set('view engine', 'ejs');

var message=["hello", "hi", "welcome"];
console.log(message.length)

app.get('/', function(req, res){
    res.render('test1', {message});  
})

app.listen(3000, function(){
    console.log("Server Listening at 3000");
})