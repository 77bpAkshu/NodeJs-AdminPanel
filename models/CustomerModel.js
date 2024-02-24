const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Customer = sequelize.define('tbl_customers', {
    c_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    c_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    c_mobile:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    c_email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    c_profile: Sequelize.STRING,
    c_address: Sequelize.STRING

});
module.exports = Customer;

//Cutomer.findAll({where:}).then().catch();