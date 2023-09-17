const Sequelize = require("sequelize");
const db = require("../config/db.js");

const { DataTypes } = Sequelize;

const Order = db.define('order_tb', {
    orderDate: {
        type: DataTypes.DATE
    },
    client: {
        type: DataTypes.STRING
    },
    manager: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    deliveyDate: {
        type: DataTypes.DATE
    },
    attach: {
        type: DataTypes.STRING
    },
    order_cd: {
        type: DataTypes.STRING
    },
    order_nm: {
        type: DataTypes.STRING
    },
    specification: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    supplyValue: {
        type: DataTypes.STRING
    },
    vat: {
        type: DataTypes.STRING
    },
    rows: {
        type: DataTypes.STRING
    }
});

module.exports = Order;