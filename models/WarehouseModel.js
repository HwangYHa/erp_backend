const Sequelize = require("sequelize");
const db = require("../config/db.js");

const { DataTypes } = Sequelize;

const Warehouse = db.define('warehouse_tb', {
    warehouse_cd: {
        type: DataTypes.STRING
    },
    warehouse_nm: {
        type: DataTypes.STRING
    },
    itemClassification: {
        type: DataTypes.STRING
    },
    sales_tax: {
        type: DataTypes.STRING
    },
    purchase_tax: {
        type: DataTypes.STRING
    },
    salesPriceGroup: {
        type: DataTypes.STRING
    },
    purchasePriceGroup: {
        type: DataTypes.STRING
    },
    warehouseLayerGroup: {
        type: DataTypes.STRING
    },
    useStatus: {
        type: DataTypes.STRING
    },
    process_nm: {
        type: DataTypes.STRING
    },
    outsourcingCustomer_nm: {
        type: DataTypes.STRING
    },
});
module.exports = Warehouse;