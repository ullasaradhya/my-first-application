var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname+'/downloadFiles'));

app.set('view engine', 'ejs');

app.post('/doc', function(req, res){
    console.log("doc "+req.body.submit);
    res.send('Button');
})

app.get('/', function(req, res){
    res.render('form');
})

app.get('/download', function(req, res){

    console.log(req.body.jmeter=='jmeter');
    if(req.body.name=='jmeter'){
    res.download('G://nodejs//code//app//config//DummySamplerExample.jmx');
    }
    else{
        res.send('File Not Found');
    }
} );

app.listen(3000, function(){
    console.log('Server Listening at 3000');
})