import express from "express";
import sequelize from "./src/config/database.js";
import dotenv from 'dotenv';
dotenv.config ();

const app = express();
const PORT = process.env.BD_PORT || 4000;
//aca probamos conexion 
sequelize.authenticate()
.then (() => {
    console.log ("Base de datos conectada good")
})
.catch ((err) => {
    console.log ("Error en cuanto a la conexion de la BD")
})

app.listen (PORT, () => {
    console.log ("el servidor esta corriendo en: "+ PORT)
})