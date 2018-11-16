var mysql=require('mysql');
var dbConfig=require('./config.json');
var dbConnection=mysql.createConnection({
    host     : dbConfig.ip,
    user     : dbConfig.uname,
    password : dbConfig.password,
    database : dbConfig.dbname
});
module.exports={
    dbData : function (queryData, results){    
    dbConnection.query(queryData, function(err, rows, fields){
    if(err) console.log(err);    
    return results(rows);    
        });
    }
}
//For Testing 
// module.exports.dbData('CALL dataFetcing(1);', function(rows){
// console.log(JSON.stringify(rows[0]));
// });

module.exports.dbData(`CALL getUser('ullas');`, function(dbPassword){
    dbPassword.toString();
    console.log(JSON.stringify(dbPassword[0][0].password));    
});

// module.exports.dbData(`select * from user where id=1`, function(dbPassword){
//     console.log(JSON.stringify(dbPassword[0]));
// });
