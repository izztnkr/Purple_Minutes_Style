const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');


router.get('/', (req,res) => {
    res.render('homepage', { loggedIn: req.session.loggedIn});
})



router.get('/signup', (req,res) => {

    if(req.session.loggedIn){
        res.redirect('/');
    }
    res.render('signup');

});



router.get('/login', (req,res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
});

// router.get('*', (req,res) => {
//     res.status(404).send('That place does not exist☹️!');
// });

module.exports=router;