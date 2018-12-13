var express=require('express');
var router=express.Router();

module.exports.authenticate=function(passport){
router.get('/signin', function(req, res){
    res.render('home');
})

router.post('/profile', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect :'/'   
})
)
}
module.exports.routing=router;