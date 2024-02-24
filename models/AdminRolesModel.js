const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Roles = sequelize.define('tbl_adminRoles', {
    role_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    role_custList: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    role_custAdd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    role_custEdit:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    role_custDelete: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    role_AddrList: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    role_AddrAdd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    role_AddrEdit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    role_AddrDelete: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    
});
module.exports = Roles;

