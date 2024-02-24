const path = require('path');
const express = require('express');
const customerController = require('../controllers/CustomersController');


const router = express.Router();

router.get('/add-customer', customerController.getAddCustomer);
router.post('/insert-customer', customerController.postAddCustomer);
router.get('/customer-list', customerController.getCustomers);
router.get('/customer-deatils/:customerID', customerController.getCustDetails);
router.get('/edit-customer/:customerID', customerController.getEditCustomer);
router.post('/update-customer', customerController.postUpdateCustomer);
router.post('/delete-customer', customerController.postDeleteCustomer);




router.get('/cart', customerController.getCart);
router.get('/checkout', customerController.getCheckout);




module.exports = router;