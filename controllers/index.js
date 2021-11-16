const router = require('express').Router();

// add api routes

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// add home routes



// add dashboard-routes.js

const dashboardRoutes = require('./dashboard-routes.js');
router.use('/dashboard', dashboardRoutes);



module.exports = router;