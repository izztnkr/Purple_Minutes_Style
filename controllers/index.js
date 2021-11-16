const router = require('express').Router();

// add api routes

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// add home routes
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);


// add dashboard-routes.js

const dashboardRoutes = require('./dashboard-routes.js');
router.use('/dashboard', dashboardRoutes);



module.exports = router;