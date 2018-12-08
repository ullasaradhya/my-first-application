const db=require('../config/db');

var fileUpload =function(files){
    let project_name='iPOS';
    console.log(`SELECT * FROM files WHERE project='${project_name}' ORDER BY id DESC LIMIT 1;`);
    db.dbData(`SELECT * FROM files WHERE project='${project_name}' ORDER BY id DESC LIMIT 1;`)
    .then(function(rows){
        console.log(rows[0][0]);
    }).catch(function (err){
        console.log(err)
    })
}

fileUpload("abc");