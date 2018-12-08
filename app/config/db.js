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
                if (err) rejected(err);
                else {
                    if (!rows[0][0] || !rows[0]) {
                        console.log('error');
                        rejected(err);
                    }
                    else {
                        console.log(rows+"db");
                        resolved(rows);
                    }                    
                }
            });
        
       })
    }

}
// var username='ullas';
// var query=util.format('call dataFetching("%s")', username);
// var data=module.exports.dbData(query);
// console.log(data);


//console.log(module.exports.dbConnectCheck());

// module.exports.dbData(`call dataFetching('ullas')`)
// .then(function(rows){
//     console.log("rows"+JSON.stringify(rows[0][0].password));
// }).catch(function(err){
//     console.log(err);
//     // if(err==-2) console.log("Data Not Found");
//     // if(err==-1) console.log("Datbase Connectivity Not Found");
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