const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/ErrorController');
const sequelize = require('./util/database');
const Customer = require('./models/CustomerModel');
const Address = require('./models/AddressModel');
const Admin = require('./models/AdminModel');
const Roles = require('./models/AdminRolesModel');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const customerRoutes = require('./routes/customer');
const dashboardRoutes = require('./routes/dashboard');
const addressRoutes = require('./routes/address');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    Admin.findOne({ where: { admin_id: 1 } })
    .then(admin => {
        req.admin = admin;
        next();
    })
    .catch(err => {
        console.log(err);
    });
});

app.use(customerRoutes);
app.use(dashboardRoutes);
app.use(addressRoutes);


app.use(errorController.get404);
Address.belongsTo(Customer, {constraints: true, onDelete: 'CASCADE'});
Customer.hasMany(Address);
Roles.belongsTo(Admin, {constraints: true, onDelete: 'CASCADE'});
Admin.hasOne(Roles);
sequelize
//.sync({ force: true })
.sync()
.then(result => {
    return Admin.findOne({ where: { admin_id: 1 } });

    //console.log(result);
})
.then(admin => {
    if (!admin) {
        return Admin.create({ 
            admin_role: 'Super Admin', 
            admin_name:'Akshatha', 
            admin_email: 'akshathaTest@gmail.com', 
            admin_mobile: '4354323142',
            admin_userName: 'akshatha@test.com', 
            admin_password: '123456',
            admin_address: 'Udupi',
            admin_isAdmin: 1
        });
    }
    return admin;
})
.then(admin => {
    //console.log(admin);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});

