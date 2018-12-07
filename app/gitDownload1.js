var express=require('express');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('gitDownload');
})
app.post('/reg', function(req, res){
    
    if (req.body.downloads=='download_files'){
    console.log('inside download');
     res.redirect('/download');     
    }
    else{
        res.send('File not Found');
    }
})

app.get('/download', function(req, res){

    res.download('G://Ullas//git//my-first-application//app//gitDownload1.js');          
})

app.listen(3000, function(){
    console.log('Server Listening at 3000');
})
