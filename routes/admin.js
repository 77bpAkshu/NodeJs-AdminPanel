const path = require('path');
const express = require('express');
const productController = require('../controllers/customers');

const router = express.Router();

router.get('/add-product', productController.getAddCustomer);
router.post('/add-product', productController.postAddCustomer);

module.exports = router;