"use client";
import React, { useState } from "react";
import TablaAlumnos from "./TablaAlumnos";
import PanelBusqueda from "./PanelBusqueda";
import AgregarLegajo from "./AgregarLegajo";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import SectionBackground from "@/app/componentes/SectionBackground";

export default function Alumnos() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <SectionBackground>
      <div className="bg-primary-800 overflow-hidden rounded-lg flex flex-col items-center justify-between w-1/3 min-h-[250px] flex-auto">
        <CabeceraContenedor>
            Buscar alumno
          </CabeceraContenedor>
        
        <PanelBusqueda />
        <button onClick={handleToggle} className="p-4 text-sm text-primary-100">Click Aqui para agregar Legajo</button>
      </div>
      <div className="bg-primary-800  flex flex-col items-center justify-between w-2/3 flex-auto overflow-hidden rounded-lg">
          {toggle ? <TablaAlumnos /> : <AgregarLegajo/>}
      </div>
    </SectionBackground>
  );
}
