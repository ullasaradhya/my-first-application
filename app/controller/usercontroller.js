var dbConfig = require('../config/db');
var util = require('util');
var bcrypt=require('bcrypt');

module.exports.authenticate=function(username, password, retValue){
    let query = util.format('call dataFetching("%s")', username);    
    dbConfig.dbData(query)
        .then(function (rows) {                        
                bcrypt.compare(password, rows[0][0].password, function(err, res){
                    if (res==true)
                    return retValue(0);
                    else
                    return retValue(-2);
                } )                            
        }).catch(function (err) {
            if (err==null){
                return retValue(-2);
            } 
            if (err.code == 'ER_BAD_DB_ERROR' || err.code == 'ENOTFOUND' || err.code == 'ER_BAD_DB_ERROR') {
                return retValue(-1);
            }
        });
}


