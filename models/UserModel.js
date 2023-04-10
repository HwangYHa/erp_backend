const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Users = db.define('user_tb',{
    email:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
});

module.exports = Users;