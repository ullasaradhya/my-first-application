const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser=require('body-parser');
const app = express();
const ip='127.0.0.1';
const port=2000;

app.use(bodyParser.urlencoded({extended : true }));
app.set('view engine', 'ejs');
// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
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
        });
        res.send('Done');
  }
  else{
    console.log('file not found');
  }
});  

app.get('/fileUpload', function(req, res){

    res.render('fileUpload', {message : "Upload Files" });
    //res.sendFile(__dirname+'/index.html');
});

app.listen(port,ip, function(){
    console.log(`Server Listening at http://${ip}:${port}`);
});
