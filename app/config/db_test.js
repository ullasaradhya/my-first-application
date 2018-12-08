// var mysql = require('mysql');
// var dbConfig = require('./config.json');
// var dbConnection = mysql.createConnection({
//     host: dbConfig.ip,
//     user: dbConfig.uname,
//     password: dbConfig.password,
//     database: dbConfig.dbname
// });
// module.exports = {
//     dbData: function (queryData) {
//         return new Promise(function (resolved, rejected) {
//             dbConnection.query(queryData, function (err, rows) {
//                 if (err) rejected(err);
//                 else resolved(rows);
//             });
//         });
//     }
// }

// module.exports.dbData(`call dataFetching('ullas')`)
//     .then(function (rows) {
//         if (!rows[0][0]) {
//             console.log('data not found');
//         }
//         else {
//             console.log(rows[0][0].password);
//         }
//     }).catch(function (err) {
//         console.log(err);
//     })
var row=[1, 2, 3];
var row1=[];
var row2=[]

if (row[0] || row2[0]){
    console.log(true);
}
else{
    console.log(false);
}