var mysql=require('mysql');
var dbConfig=require('./config.json');
var util=require('util');
var promise=require('promise');

var dbConnection=mysql.createConnection({
    host     : dbConfig.ip,
    user     : dbConfig.uname,
    password : dbConfig.password,
    database : dbConfig.dbname
});
// module.exports={
//     dbData : function (queryData, results){    
//     dbConnection.query(queryData, function(err, rows, fields){
//     if(err) console.log(err);    
//     return results(rows);    
//         });
//     }
// }

// var dbConnectionQuery=util.promisify(dbConnection.query);
// dbConnectionQuery('select * from user').then(function(data){
//     //return rows;
//     console.log(data);
// });

dbConnection.query('asd');
//For Testing 
// module.exports.dbData('CALL dataFetcing(1);', function(rows){
// console.log(JSON.stringify(rows[0]));
// });

/*module.exports.dbChecking('select * from user where id=1',function results(res){
    console.log(res);
});*/

