const db=require('../config/db');
var util=require('util');

module.exports={    
    fileUploadingfunction:function(req){
    let project_name=req.body.selectpicker;
    let file =req.files.pic;
    //let path=`G://Ullas//git//my-first-application//app//UploadedFiles//${project_name}`;
    let path=`G://Ullas//git//my-first-application//app//UploadedFiles//${file.name}`;
    console.log("File Name in Controller "+file.name);
    console.log("Project_"+project_name);
    file.mv(`G://Ullas//git//my-first-application//app//UploadedFiles//${file.name}`, function(err){
        if(err) console.log(err);
        else console.log("Done")
    });
    let index='iPOS_1';
    let file_name=JSON.stringify(file.name);
    let pro_name=JSON.stringify(project_name);
    let file_path=JSON.stringify(path);
    let file_index=JSON.stringify(index);
    var query=util.format('call insertFileDetails(%s, %s, %s, %s);', file_name, pro_name, file_path,file_index );

    console.log(`call insertFileDetails('${file.name}', '${project_name}', '${path}','iPOS_1');`);

    db.dbData(query)
        .then(function(rows){
            console.log(rows)
    }).catch(function(err){
            console.log(err);
        });

    console.log(`SELECT * FROM files WHERE project='${project_name}' ORDER BY id DESC LIMIT 1;`);
    db.dbData(`SELECT * FROM files WHERE project='${project_name}' ORDER BY id DESC LIMIT 1;`)
    .then(function(rows){
        console.log(rows[0].file_index);
    }).catch(function (err){
        console.log(err)
    })    
}
}
//fileUpload("abc");