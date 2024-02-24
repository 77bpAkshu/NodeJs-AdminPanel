const path = require('path');
const express = require('express');
const dashboardController = require('../controllers/DashboardController');

const router = express.Router();

router.get('/', dashboardController.getDashboard);

module.exports = router;