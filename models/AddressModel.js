const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Address = sequelize.define('tbl_address', {
    ad_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ad_type:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    ad_title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ad_landmark: Sequelize.STRING,
    ad_city: Sequelize.STRING,
    ad_state: Sequelize.STRING,
    ad_pincode: Sequelize.STRING,


});
module.exports = Address;

