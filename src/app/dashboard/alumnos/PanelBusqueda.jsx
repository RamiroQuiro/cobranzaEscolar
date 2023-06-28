"use client"
import BotonEmoji from "@/app/componentes/BotonEmoji";
import CheckBox from "@/app/componentes/CheckBox";
import InputFomr from "@/app/componentes/InputFomr";
import { contextData } from "@/context/contextData";
import { useState } from "react";

export default function PanelBusqueda() {
const [form, setForm] = useState(null)
const llenarBusquedaLegajo=contextData((state)=>(state.llenarBusquedaLegajo))
const cargarFiltro=contextData((state)=>(state.cargarFiltro))
const {busquedaLegajo}=contextData((state)=>({busquedaLegajo:state.busquedaLegajo}))

const cargarBusqueda=()=>{
    llenarBusquedaLegajo(form)
}

const handleFiltro=(e)=>{
  cargarFiltro(e.target.value)

}
const handleForm=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
 cargarBusqueda()
}


  return (
 
      <form action="" className="w-full flex flex-col items-start  h-full p-4">
        <InputFomr onChange={handleForm} value={form?.nameAlumno} id={"nameAlumno"} name={"nameAlumno"} type={"text"}>
          ► Nombre Alumno | Matricula
        </InputFomr>
        <InputFomr onChange={handleForm} value={form?.nivelEducativo} id={"nameAlumno"} name={"nivelEducativo"} label={"select"} type={"select"} options={["jardin","primaria","secundaria"]}>
          ► Grado Escolar
        </InputFomr>
       <div className="py-4 flex items-center gap-2 text-sm">

        <BotonEmoji onClick={()=>cargarBusqueda()} >Buscar 🔎</BotonEmoji></div>

        <InputFomr onChange={handleFiltro} value={form?.nivelEducativo} id={"filtro"} name={"filtro"} label={"select"} type={"select"} options={["activos","todos","inactivos"]}>
          ► Estado
        </InputFomr>
       
        <div className="p-4 text-sm ">
          <p className="my-2">
            Ingrese a buscar el alumno a visualuzar el legajo
          </p>
         
        </div>
      </form>
   
  );
}
