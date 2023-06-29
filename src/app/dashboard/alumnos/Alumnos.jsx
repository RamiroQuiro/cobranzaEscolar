"use client";
import React, { useState } from "react";
import { shallow } from "zustand/shallow";
import TablaAlumnos from "./TablaAlumnos";
import PanelBusqueda from "./PanelBusqueda";
import AgregarLegajo from "./AgregarLegajo";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import SectionBackground from "@/app/componentes/SectionBackground";
import { contextData } from "@/context/contextData";
import LegajoModelo from "@/app/componentes/LegajoModelo";
import RenderPantallas from "./RenderPantallas";

export default function Alumnos() {
  const [toggle, setToggle] = useState(false);
 const cargarPantalla=contextData(state=>state.cargarPantalla)
  const { captarUidLegajo } = contextData((state) => ({
    captarUidLegajo: state.captarUidLegajo,
  }),shallow);
  const handleToggle = (e) => {
    setToggle(!toggle)
    cargarPantalla(e.target.name);
  };

  return (
    <SectionBackground>
      <div className="bg-primary-800 overflow-hidden rounded-lg flex flex-col items-center justify-between md:w-1/4 min-h-[250px] flex-auto pb-6">
        <CabeceraContenedor>Buscar alumno</CabeceraContenedor>

        <PanelBusqueda />
        <button onClick={handleToggle} name={toggle?"listar":"agregarLeg"} className="p-2 text-sm text-primary-800 w-1/2 font-medium  bg-primary-200 rounded-lg outline-none">
         {
         !toggle? "Agregar Legajo"
        :
        " Volver al Listado"
        }
        </button>
      </div>
      <div className="bg-primary-800  flex flex-col items-center justify-between w-2/3 flex-auto overflow-hidden rounded-lg">
        <RenderPantallas 
        onClick={handleToggle}
        captarUidLegajo={captarUidLegajo}
        label={toggle}
        />
      </div>
    </SectionBackground>
  );
}
