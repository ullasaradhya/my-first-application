var router=require('routes');


router.post('/upload', function(req, res) {
    console.log(req.body.selectpicker);
    if (req.files){
      let file=req.files.pic;
      let project=req.body.selectpicker;
      let path="views"
      switch(project){
        case("iPOS") : path="controller"; break;
        case("Kiosk") : path="config"; break;
      }
      let fileName=file.name;
        console.log(file.name);
        console.log(file.md5());
        file.mv(`G:/nodejs/code/app/${path}/${fileName}`, function(err){
          if(err) console.log("File Not Found");
          else console.log('Done');
          res.render('fileUpload', {message : "Upload Files" });
        });
        res.send('Done');
  }
  else{
    console.log('file not found');
  }
});  
app.get('/download', function(req, res){

  console.log(req.body);
  if(req.body.name=='jmeter'){
  res.download('G://nodejs//code//app//config//DummySamplerExample.jmx');
  }
  else{
      res.send('File Not Found');
  }
} );

app.get('/fileUpload', function(req, res){
    
    res.render('fileUpload', {message : "Upload Files" });
    //res.sendFile(__dirname+'/index.html');
});

app.listen(port,ip, function(){
    console.log(`Server Listening at http://${ip}:${port}`);
});