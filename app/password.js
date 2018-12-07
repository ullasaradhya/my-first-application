var bcrypt=require('bcrypt');

bcrypt.hash("ullas", 10, function(pass, err){
    if(err){
        throw err;
    }
    else{
        console.log(pass);
    }
})