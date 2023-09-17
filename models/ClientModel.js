const Sequelize = require("sequelize");
const db = require("../config/db.js");

const { DataTypes } = Sequelize;

const Client = db.define('client_tb', {
    client_cd: {
        type: DataTypes.STRING
    },
    client_nm: {
        type: DataTypes.STRING
    },
    Classification: {
        type: DataTypes.STRING
    },
    ceo: {
        type: DataTypes.STRING
    },
    event: {
        type: DataTypes.STRING
    },
    company_nb: {
        type: DataTypes.STRING
    },
    fax: {
        type: DataTypes.STRING
    },
    searchContents: {
        type: DataTypes.STRING
    },
    mobile: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    address2: {
        type: DataTypes.STRING
    },
    homePage: {
        type: DataTypes.STRING
    },
    manager: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    accountGroup: {
        type: DataTypes.STRING
    },
    accountGroup2: {
        type: DataTypes.STRING
    },
    accountLayerGroup: {
        type: DataTypes.STRING
    },
    transferInfo: {
        type: DataTypes.STRING
    },
    useStatus: {
        type: DataTypes.STRING
    },
});

module.exports = Client;