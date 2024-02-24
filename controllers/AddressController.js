const Address = require('../models/AddressModel');

exports.getAddAddress = (req, res, next) => {
    res.render('Address/add', {
        custAddress: [], 
        pageTitle: 'Add Address',
        path: '/add-address',
        editing: false
    });
};

exports.postAddAddress = (req, res, next) => {
    const type = req.body.ad_type;
    const title = req.body.ad_title;
    const landmark = req.body.ad_landmark;
    const city = req.body.ad_city;
    const state = req.body.ad_state;
    const pincode = req.body.ad_pincode;

    Address.create({
        ad_type: type,
        ad_title: title,
        ad_landmark: landmark,
        ad_city: city,
        ad_state: state,
        ad_pincode: pincode
    })
    .then(result => {
        console.log('Address added successfully');
    })
    .catch(err => {
        console.log(err);
    }); 
};

exports.getEditAddress = (req, res, next) => {
    const editMode = req.query.edit;
    //console.log(editMode);
    if(!editMode) {
        res.redirect('/');
    }
    const addrID = req.params.addressID;
    Address.findAll({ where: { ad_id: addrID } })
    .then(address =>  {
        if(!address) {
            res.redirect('/');
        }
        res.render('Address/edit', {
            custAddress: address[0], 
            pageTitle: 'Edit Address',
            path: '/edit-address/',
            editing: editMode
        });
    })
    .catch(err => {
        console.log(err);
    });
    
};


exports.postUpdateAddress = (req, res, next) => {
    const addrId = req.body.ad_id;
    const type = req.body.ad_type;
    const title = req.body.ad_title;
    const landmark = req.body.ad_landmark;
    const city = req.body.ad_city;
    const state = req.body.ad_state;
    const pincode = req.body.ad_pincode;

    Address.findOne({ where: { ad_id: addrId } })
    .then(address => {
        if (!address) {
            throw new Error('address not found');
        }

        // Update the address properties
        address.ad_type = type;
        address.ad_title = title;
        address.ad_landmark = landmark;
        address.ad_city = city;
        address.ad_state = state;
        address.ad_pincode = pincode;


        // Save the changes
        return address.save();
    })
    .then(updatedAddress => {
        console.log('address updated successfully');
        res.redirect('/address-list');
    })
    .catch(err => {
        console.log(err);
        // Handle the error appropriately, e.g., send an error response to the client or redirect to an error page.
    });
};


exports.getAddresss = (req, res, next) => {
    Address.findAll()
    .then(address => {
        res.render('Address/index', {
            custAddress: address, 
            pageTitle: 'Address list',
            path: '/address-list', 
        });
    })
    .catch(err => {
        console.log(err);
    });

    
};

exports.getAddrDetails = (req, res, next) => {
    const addrID = req.params.addressID;
    Address.findAll({ where: { ad_id: addrID } })
    .then(address => {
        res.render('Address/show', {
            custAddress: address[0], 
            pageTitle: 'Address Details',
            path: '/address-deatils', 
        });
    })
    .catch(err => {
        console.log(err);
    });
 
};



exports.postDeleteAddress = (req, res, next) => {
    const addrID = req.body.adid;
    Address.findOne({ where: { ad_id: addrID } })
    .then(address => {
        if (!address) {
            throw new Error('Address not found');
        }
        // Delete the address
        return address.destroy();
    })
    .then(() => {
        console.log('Address deleted successfully');
        res.redirect('/address-list');
    })
    .catch(err => {
        console.log(err);
        // Handle the error appropriately, e.g., send an error response to the client or redirect to an error page.
    });
};

