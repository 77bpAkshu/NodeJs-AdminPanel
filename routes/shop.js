const path = require('path');
const express = require('express');
const productController = require('../controllers/customers');
const dashboardController = require('../controllers/customers');

const router = express.Router();

router.get('/', dashboardController.getDashboard);
router.get('/product-list', productController.getCustomers);

module.exports = router;