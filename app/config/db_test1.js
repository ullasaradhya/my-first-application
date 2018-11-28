var mysql=require('mysql');
var dbConfig=require('./config.json');
var dbdata={
host     : dbConfig.ip,
user     : dbConfig.uname,
password : dbConfig.password,
database : dbConfig.dbname}
function getData(){
new Promise(function(resolved, rejetced){
    var connection=mysql.createConnection(dbdata);
    connection.connect().then(function(conn){
        return conn.query(`call dataFetching('ullas')`);
    })
        .then(function(rows){
        console.log(rows[0][0]);
        })
        .catch(function(err){
        console.log(err);
        })
})}

getData();
