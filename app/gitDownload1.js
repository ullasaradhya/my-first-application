var express=require('express');
var app=express();
app.set('view engine', 'ejs');

var files=["hello", "hi", "world", "good"];

var sample="G://nodejs//code//app//public//js//scripts.js";


app.get('/', function(req, res){
    res.render('gitDownload', {message : sample});    
})

app.get('/reg', function(req, res){
    res.render('fileUpload');
})

app.get('/download', function(req, res){
    res.download('G://nodejs//code//app//public//js//scripts.js');
})

app.listen(3000, function(){
    console.log('Server Listening at 3000');
})
