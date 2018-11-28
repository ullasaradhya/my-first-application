var app=require('express')();
var fileUpload=require('express-fileupload');
app.set('view engine', 'ejs');
app.use(fileUpload());
app.get('/fileUpload', function(req, res){

    res.render('fileUpload', {message : "Upload Files" });
});

app.post('/upload', function(req, res){
    
    if (Object.keys(req.files).length==0){
        console.log("Zero Size");
    }
    else{    
    var sampleFile=req.files.pic;
    sampleFile.mv('G:/nodejs/code/app/routes/abc.jpg');    
    }
});

app.listen(2500, function(){
    console.log("Server Listenin at 2500");
});
