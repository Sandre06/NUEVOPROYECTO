import {Schema,model } from "mongoose";

//Crear una estructura para una tabla
const EsquemaAlumnos = new Schema({
    name:String,
    edad:Number,
    calificacion:Number
})

//Creacion de tabla
export const TablaAlumnos = new model("Alumnos", EsquemaAlumnos)


