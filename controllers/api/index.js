const router = require('express').Router();


// assign the userRoutes to the Express.js router

const userRoutes = require('./user-routes');
router.use('/users', userRoutes);


module.exports = router;