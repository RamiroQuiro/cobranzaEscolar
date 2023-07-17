"use client";
import { contextData } from "@/context/contextData";
import CabeceraContenedor from "./CabeceraContenedor";
import { Chart } from "./ChartJS";
import DatosLegajo from "../dashboard/alumnos/DatosLegajo";

export default function LegajoModelo({ legajo }) {
  const cargarPantalla = contextData((state) => state.cargarPantalla);
  return (
    <div className="w-full mx-auto relative animate-apDeArriba ">
      <CabeceraContenedor>
        {legajo?.nombreLegajo} | {legajo?.legajo}
      </CabeceraContenedor>
      <div className="absolute top-2  right-3 space-x-1">
        <button
          className="bg-primary-800 hover:bg-primary-300 duration-300 rounded-full p-1"
          onClick={() => cargarPantalla("listar")}
        >
          🔙
        </button>
        <button 
         onClick={() => cargarPantalla("legajoCompleto")}
        className="bg-primary-800 hover:bg-primary-300 duration-300 rounded-full p-1">
          🗒️
        </button>
       
      </div>
      <DatosLegajo legajo={legajo}/>
      <div className="my-5">
        <h2 className="font-medium mt-8 mb-4 ml-4">Estado contable</h2>
        <div className="bg-white p-2 rounded-lg w-11/12 mx-auto">
          <Chart legajo={legajo} />
        </div>
        
      </div>
    </div>
  );
}
