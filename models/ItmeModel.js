const Sequelize = require("sequelize");
const db = require("../config/db.js");

const { DataTypes } = Sequelize;

const Itme = db.define('item_tb', {
    product_cd: {
        type: DataTypes.STRING
    },
    product_nm: {
        type: DataTypes.STRING
    },
    product_g: {
        type: DataTypes.STRING
    },
    specification: {
        type: DataTypes.STRING
    },
    purchase_p: {
        type: DataTypes.STRING
    },
    sales_p: {
        type: DataTypes.STRING
    },
    product_c: {
        type: DataTypes.STRING
    },
    inventory_m: {
        type: DataTypes.STRING
    },
    sales_p_g: {
        type: DataTypes.STRING
    },
    production_p: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    label: {
        type: DataTypes.STRING
    },
});
module.exports = Itme;