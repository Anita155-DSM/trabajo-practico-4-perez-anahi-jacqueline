import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const characters = sequelize.define('characters',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ki:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    race:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false
    }
}
)