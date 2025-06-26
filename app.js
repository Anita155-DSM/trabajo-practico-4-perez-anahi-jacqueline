import express from "express";
import sequelize from "./src/config/database.js";
import dotenv from 'dotenv';
import router from "./src/routes/character.routes.js";

dotenv.config ();

const app = express();
const PORT = process.env.BD_PORT || 4000;
//aca probamos conexion 
sequelize.sync()
.then (() => {
    console.log ("Base de datos conectada con éxito")
})
.catch ((err) => {
    console.log ("Error en cuanto a la conexion de la BD")
})
app.listen (PORT, () => {
    console.log ("el servidor esta corriendo en: http://localhost"+ PORT)
})

app.use(express.json());
app.use("/characters", characterRoutes);
app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});