//importar librerias
import mongoose from "mongoose";//conecta la base de datos
import express from "express";//crea el servidor
import dotenv from "dotenv";//variablse de entorno del archivo .env
import cors from "cors";//seguridad

dotenv.config();//Acceder a la configuracion de dotenv

//conectar una db
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("conecto la base de datos")
})
.catch((error)=>{
    console.log("no jalo la base ptm",error)
})//promesa

const app = express();//creando un servidor local
app.use(cors()); //seguridad en el servidor
app.listen(4000, ()=>{
    console.log("Se escucha el servidor")
})// verificando funcionalidad del servidor

