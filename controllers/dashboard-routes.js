const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req,res) => {
    res.render('dashboard');
});

// get all content for the dashboard




module.exports=router;