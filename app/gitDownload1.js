var express=require('express');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));

var id=['ipos_1', 'ipos_2'];

var fileName=['Delivery Note', 'Manual'];


app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('gitDownload', {id :id, fileName:fileName});
    //res.render('test1');
})
app.post('/reg', function(req, res){
  
    console.log('inside of it');
    console.log(req.body.fileDownload);
    if (req.body.downloads=='download_files'){
    console.log('inside download');
     res.redirect('/download');     
    }
    else{
        res.send('File not Found');
    }
    
})

app.get('/download', function(req, res){

    res.download('G://nodejs//code//app//gitDownload1.js');          
})

app.listen(3000, function(){
    console.log('Server Listening at 3000');
})
