const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req,res) => {
    res.render('dashboard');

});

// get all content for the dashboard




module.exports=router;