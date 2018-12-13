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
    if(err) 
    {
        console.log(err);    
        //return results(err, null);
    }
    else{
    return results(null, rows);    
    }
});    
    }
}
//For Testing 
module.exports.dbData(`CALL dataFetching('ulla');`, function(error, result){
    if(error){
        console.log(error);
    }
    else if (result.length<0){
        console.log('Invalid UserName/Password');
    }
    else {
        //console.log(result[0][0]);
    }   
}
);

// module.exports.dbData(`CALL getUser('ulla');`, function(dbPassword){
//     dbPassword.toString();
//     console.log(JSON.stringify(dbPassword[0][0].password));    
// });

// module.exports.dbData(`select * from user where id=1`, function(dbPassword){
//     console.log(JSON.stringify(dbPassword[0]));
// });
