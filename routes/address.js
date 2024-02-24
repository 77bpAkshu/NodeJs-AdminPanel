const path = require('path');
const express = require('express');
const addressController = require('../controllers/AddressController');


const router = express.Router();

router.get('/add-address', addressController.getAddAddress);
router.post('/insert-address', addressController.postAddAddress);
router.get('/address-list', addressController.getAddresss);
router.get('/address-deatils/:addressID', addressController.getAddrDetails);
router.get('/edit-address/:addressID', addressController.getEditAddress);
router.post('/update-address', addressController.postUpdateAddress);
router.post('/delete-address', addressController.postDeleteAddress);

module.exports = router;