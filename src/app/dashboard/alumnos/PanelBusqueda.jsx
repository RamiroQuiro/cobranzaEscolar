"use client";
import BotonEmoji from "@/app/componentes/BotonEmoji";
import InputFomr from "@/app/componentes/InputFomr";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData } from "@/context/contextData";
import { useState } from "react";

export default function PanelBusqueda() {
  const [form, setForm] = useState(null);
  const [search, setSearch] = useState(null)
  const llenarBusquedaLegajo = contextData(
    (state) => state.llenarBusquedaLegajo
  );
  

  const cargarFiltro = contextData((state) => state.cargarFiltro);

  const {ciclosLectivos}=contextCobranzas(state=>({
    ciclosLectivos:state.ciclosLectivos
  }))

  const cargarBusqueda = () => {
    llenarBusquedaLegajo(form?.searchAlumno);
  };

  const handleFiltro = (e) => {
    cargarFiltro(e.target.value);
  };


  const onChange=(e)=>{
    setSearch(search=>({
      ...search,
      searchAlumno:e.target.value,
    }))
    llenarBusquedaLegajo(search?.searchAlumno);
}
  return (
    <form action="" className="w-full flex flex-col items-start  h-full p-4">
      <InputFomr
      classNameInput={"pr-4"}
        onChange={onChange}
        value={form?.nameAlumno}
        id={"searchAlumno"}
        name={"searchAlumno"}
        type={"search"}
      >
        ► Nombre Alumno | Matricula
      </InputFomr>
      <InputFomr
        onChange={onChange}
        value={form?.cicloLectivo}
        id={"searchAlumno"}
        name={"cicloLectivo"}
        label={"select"}
        type={"select"}
        options={ciclosLectivos}
      >
        ► Ciclo Escolar
      </InputFomr>
      <div className="py-4 flex items-center gap-2 text-sm">
        <BotonEmoji onClick={() => cargarBusqueda()}>Buscar 🔎</BotonEmoji>
      </div>

      <InputFomr
        onChange={handleFiltro}
        value={form?.nivelEducativo}
        id={"filtro"}
        name={"filtro"}
        label={"select"}
        type={"select"}
        options={[{label:"activos"}, {label:"todos"}, {label:"inactivos"}]}
      >
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
