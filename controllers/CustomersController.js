const Customers = require('../models/CustomerModel');

exports.getAddCustomer = (req, res, next) => {
    res.render('Customer/add-customer', {
        custs: [], 
        pageTitle: 'Add Customer',
        path: '/add-customer',
        editing: false
    });
};

exports.postAddCustomer = (req, res, next) => {
    //customers.push({c_name: req.body.c_name})
    const name = req.body.c_name;
    const mobile = req.body.c_mobile;
    const email = req.body.c_email;
    const address = req.body.c_address;
    Customers.create({
        c_name: name,
        c_mobile: mobile,
        c_email: email,
        c_address: address
    })
    .then(result => {
        console.log('Customer added successfully');
    })
    .catch(err => {
        console.log(err);
    }); 
};

exports.getEditCustomer = (req, res, next) => {
    const editMode = req.query.edit;
    //console.log(editMode);
    if(!editMode) {
        res.redirect('/');
    }
    const custID = req.params.customerID;
    Customers.findAll({ where: { c_id: custID } })
    .then(customer =>  {
        if(!customer) {
            res.redirect('/');
        }
        res.render('Customer/edit', {
            custs: customer[0], 
            pageTitle: 'Edit Customer',
            path: '/edit-customer/',
            editing: editMode
        });
    })
    .catch(err => {
        console.log(err);
    });
    
};


exports.postUpdateCustomer = (req, res, next) => {
    const custId = req.body.c_id;
    const name = req.body.c_name;
    const mobile = req.body.c_mobile;
    const email = req.body.c_email;
    const address = req.body.c_address;

    Customers.findOne({ where: { c_id: custId } })
    .then(customer => {
        if (!customer) {
            throw new Error('Customer not found');
        }

        // Update the customer properties
        customer.c_name = name;
        customer.c_email = email;
        customer.c_mobile = mobile;
        customer.c_address = address;

        // Save the changes
        return customer.save();
    })
    .then(updatedCustomer => {
        console.log('Customer updated successfully');
        res.redirect('/customer-list');
    })
    .catch(err => {
        console.log(err);
        // Handle the error appropriately, e.g., send an error response to the client or redirect to an error page.
    });
};


exports.getCustomers = (req, res, next) => {
    Customers.findAll()
    .then(customers => {
        res.render('Customer/customer-list', {
            custs: customers, 
            pageTitle: 'Customer list',
            path: '/customer-list', 
        });
    })
    .catch(err => {
        console.log(err);
    });

    
};

exports.getCustDetails = (req, res, next) => {
    const custID = req.params.customerID;
    Customers.findAll({ where: { c_id: custID } })
    .then(customer => {
        res.render('Customer/show', {
            custs: customer[0], 
            pageTitle: 'Customer Details',
            path: '/customer-deatils', 
        });
    })
    .catch(err => {
        console.log(err);
    });
    // Customers.findById(custID)
    // .then(customer => {
    //     res.render('Customer/show', {
    //         custs: customer, 
    //         pageTitle: 'Customer Details',
    //         path: '/customer-deatils', 
    //     });
    // })
    // .catch(err => {
    //     console.log(err);
    // });
};

exports.getCart = (req, res, next) => {
    Customers.fetchAll((customers) => {
        res.render('Customer/cart', {
            custs: customers, 
            pageTitle: 'Your Cart',
            path: '/cart', 
        });
    });
};

exports.getCheckout = (req, res, next) => {
    Customers.fetchAll((customers) => {
        res.render('Customer/checkout', {
            custs: customers, 
            pageTitle: 'Checkout',
            path: '/checkout', 
        });
    });
};

exports.postDeleteCustomer = (req, res, next) => {
    const custId = req.body.cid;
    //const custID = req.params.customerID;

    Customers.findOne({ where: { c_id: custId } })
    .then(customer => {
        if (!customer) {
            throw new Error('Customer not found');
        }
        // Delete the customer
        return customer.destroy();
    })
    .then(() => {
        console.log('Customer deleted successfully');
        res.redirect('/customer-list');
    })
    .catch(err => {
        console.log(err);
        // Handle the error appropriately, e.g., send an error response to the client or redirect to an error page.
    });
};

