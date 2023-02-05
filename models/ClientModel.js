import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;

const Client = db.define('client_tb',{
    client_cd:{
        type: DataTypes.STRING
    },
    client_nm:{
        type: DataTypes.STRING
    },
    representative:{
        type: DataTypes.STRING
    },
    company_nb:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    useStatus:{
        type: DataTypes.STRING
    },
    transferInfo:{
        type: DataTypes.STRING
    },
    Address:{
        type: DataTypes.STRING
    }
});
export default Client;