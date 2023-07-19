"use client";
import { contextData } from "@/context/contextData";
import CabeceraContenedor from "./CabeceraContenedor";
import { Chart } from "./ChartJS";
import DatosLegajo from "../dashboard/alumnos/DatosLegajo";
import CuentaEstudiante from "./CuentaEstudiante";
import BotonEmoji from "./BotonEmoji";

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
          className="bg-primary-800 hover:bg-primary-300 duration-300 rounded-full p-1"
        >
          🗒️
        </button>
      </div>
      <DatosLegajo legajo={legajo} />
      <div className="my-5 w-full flex flex-col items-center justify-between">
        <div className="w-full flex px-5 items-center justify-between">
          <h2 className="font-medium ">Estado contable</h2>

          <div className="border-primary-200/50 border text-xs flex items-center justify-between rounded-lg px-2 relative">
          <span className="absolute -top-6 left-3 bg-primary-200 text-gray-50 rounded-lg font-medium p-1 text-xs">
              Descarga
            </span>
            <BotonEmoji
              id={"estadoContableAlumno"}
              onClick={(e) => cargarPantalla(e.target.id)}
            >
              PDF
            </BotonEmoji>
            <BotonEmoji>
              <span className="font-medium">Excel</span>
            </BotonEmoji>
          </div>
        </div>
        <div className="w-8/12 rounded-lg mx-auto overflow-hidden my-5">
          <CuentaEstudiante legajo={legajo} />
        </div>
        {/* <div className="bg-white p-2 rounded-lg w-11/12 mx-auto">
          <Chart legajo={legajo} />
        </div> */}
      </div>
    </div>
  );
}
