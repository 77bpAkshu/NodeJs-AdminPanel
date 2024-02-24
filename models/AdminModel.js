const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Admin = sequelize.define('tbl_admins', {
    admin_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    admin_role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin_mobile:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    admin_email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    admin_userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    admin_password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    admin_profile: Sequelize.STRING,
    admin_address: Sequelize.STRING,
    admin_isAdmin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    admin_isActive: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    admin_isDeleted: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    }

});
module.exports = Admin;

