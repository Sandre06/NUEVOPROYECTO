import { TablaAlumnos } from "../models/alumnos.model.js";

TablaAlumnos.create({
    name:"Jesús",
    edad:25,
    calificacion:10
},
{
    name:"Jessy",
    edad:24,
    calificacion:9.9
},
{
    name:"vitor",
    edad:69,
    calificacion:6
})

export const test = ()=>{
    console.log("Se está llamando al controlador desde app")
}