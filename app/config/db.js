var mysql = require('mysql');
var util = require('util');
var dbConfig = require('./db_config.json');
var dbConnection = mysql.createConnection({
    host: dbConfig.ip,
    user: dbConfig.uname,
    password: dbConfig.password,
    database: dbConfig.dbname
});
module.exports = {
    dbData: function (queryData) {
        return new Promise(function (resolved, rejected) {               
            dbConnection.query(queryData, function (err, rows) {
                    if (err){
                    console.log("Error in rows checking "+err); rejected(err);}
                    else {
                        if (!rows[0][0] && !rows[0] && rows.affectedRows==1) {
                            console.log("Error in rows checking "+err);
                            rejected(err);
                            
                        }
                        else {
                            //console.log(rows+"db");
                            resolved(rows);
                        }
                      }
                    });
                })        
    }
}
module.exports.dbData(`call insertFileDetails('Release_not', 'iPOS', '//iPOS_Path','iPOS_1')`)
        .then(function(err, rows){
            if(err) console.log(err);
            else console.log(rows);
        });



// dbConnection.query(`call insertFileDetails('_name', '_projName', '_path', '_index');`, function(err, rows){
//     if(err)
//     console.log(err +"Error");
//     else
//     console.log('Working');
//     console.log(rows.affectedRows);
// }); 

// var project_name='iPOS';
// module.exports.dbData(`SELECT * FROM files WHERE project='${project_name}' ORDER BY id DESC LIMIT 1;`)
// .then(function(rows){
//     console.log(rows[0]);
// }).catch(function (err){
//     console.log(err)
// })


// var username='ullas';
// var query=util.format('call dataFetching("%s")', username);
// var data=module.exports.dbData(query);
// console.log(data);


//console.log(module.exports.dbConnectCheck());

// module.exports.dbData(`call dataFetching('ullas')`)
// .then(function(rows){
//     console.log("rows"+JSON.stringify(rows[0][0].password));
//     //console.log(rows);
// }).catch(function(err){
//     console.log(err);
//     if(err==-2) console.log("Data Not Found");
//     if(err==-1) console.log("Datbase Connectivity Not Found");
// });

// var dbConnectCheck=dbConnection.connect(function (err) {
//     if (!err) {
//         console.log("Database Conncetion Successful");
//         dbConnectCheck=1;
//     }
//     else {
//         console.log("Connectivity Error");
//         dbConnectCheck=-1;
//     }
// });

// if (dbConnection.state==='disconnected')
// {
//     console.log("Database ");
// }