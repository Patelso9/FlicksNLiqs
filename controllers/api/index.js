const router = require('express').Router();

const userRoutes = require('./user-routes');

// API routes for user admin - signup, signin
router.use("/user", userRoutes);

// API routes for other resources - post, favorite

module.exports = router;
