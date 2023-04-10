const { Sequelize } = require("sequelize");

const db = new Sequelize('gursung_db', 'root', '0000', {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true,
        timestamps: false,
    }
});

module.exports = db;