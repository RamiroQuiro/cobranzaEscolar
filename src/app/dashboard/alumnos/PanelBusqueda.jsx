"use client"
import InputFomr from "@/app/componentes/InputFomr";
import { contextData } from "@/context/contextData";
import { useState } from "react";

export default function PanelBusqueda() {
const [form, setForm] = useState(null)
const llenarBusquedaLegajo=contextData((state)=>(state.llenarBusquedaLegajo))
const {busquedaLegajo}=contextData((state)=>({busquedaLegajo:state.busquedaLegajo}))
const cargarBusqueda=()=>{
    llenarBusquedaLegajo(form)
}

const handleForm=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
 cargarBusqueda()
}


  return (
 
      <form action="" className="w-full flex flex-col items-center  h-full p-4">
        <InputFomr onChange={handleForm} value={form?.nameAlumno} id={"nameAlumno"} name={"nameAlumno"} type={"text"}>
          ► Nombre Alumno | Matricula
        </InputFomr>
        <div className="p-4 text-sm ">
          <p className="my-2">
            Ingrese a buscar el alumno a visualuzar el legajo
          </p>
         
        </div>
      </form>
   
  );
}