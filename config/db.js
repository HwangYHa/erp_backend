// var mysql = require('mysql');
// const db = mysql.createPool({
//     host : 'localhost',
//     user : 'root',
//     password : '0000',
//     database : 'userinfo_db',
//     port : '3306'
// });

// module.exports = db;

import { Sequelize } from "sequelize";
 
const db = new Sequelize('userinfo_db', 'root', '0000', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;