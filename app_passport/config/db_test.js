var mysql=require('mysql');
var dbConfig=require('./config.json');
//var util=require('util');
//var promise=require('promise');

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
module.exports.dbData(`call dataFetching('llas')`, function(result){
    if (result[0][0]){
        console.log('data not found')
    }
    else{
        console.log('Not Found');
    }
    //console.log(result[0][0]);
})

// var dbConnectionQuery=util.promisify(dbConnection.query);
// dbConnectionQuery('select * from user').then(function(data){
//     //return rows;
//     console.log(data);
// });

//dbConnection.query('asd');
//For Testing 


/*module.exports.dbChecking('select * from user where id=1',function results(res){
    console.log(res);
});*/

