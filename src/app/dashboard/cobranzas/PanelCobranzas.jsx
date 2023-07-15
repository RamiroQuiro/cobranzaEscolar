import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import React from "react";
import TablaCobranzas from "./TablaCobranzas";
import BotonBorderRedondos from "@/app/componentes/BotonBorderRedondos";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import { contextCobranzas } from "@/context/contextCobranzas";
import PagoCompleto from "./pagos/PagoCompleto";
import InputSearchLegajo from "@/app/componentes/InputSearchLegajo";
import InputFomr from "@/app/componentes/InputFomr";
import BotonEmoji from "@/app/componentes/BotonEmoji";

export default function PanelCobranzas() {
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);
  const cargaFiltroCobranza = contextCobranzas(
    (state) => state.cargaFiltroCobranza
  );

  const handleSearck = (e) => {
    e.preventDefault();
    cargaFiltroCobranza(e.target.value);
  };

  return (
    <ContenedorDePantallas className={"w-full"}>
      <PagoCompleto />
      <CabeceraContenedor>Panel Cobranzas</CabeceraContenedor>
      <div className="w-full flex flex-col items-center justify-evenly ">
        <div className="border-b py-5 border-primary-200/50 w-full flex items-center justify-evenly">
          <BotonBorderRedondos
            id={"realizarPago"}
            onClick={(e) => cargarPantalla(e.target.id)}
            className={"border-primary-800 border-2"}
          >
            Agregar Pago
          </BotonBorderRedondos>
        </div>
        <div className="w-full p-5 gap-x-2 flex items-center justify-evenly">
          <InputFomr
            className={"flex-grow"}
            onChange={handleSearck}
            type={"search"}
          >
            Filtra tu busqueda
          </InputFomr>
          <div className="border-primary-200/50 flex-auto border flex items-center rounded-lg px-2 relative">
            <span className="absolute -top-5 left-4 bg-primary-200 rounded-lg font-medium p-1 text-xs">
              Descarga
            </span>
            <BotonEmoji
              id={"listadoPagosPDF"}
              onClick={(e) => cargarPantalla(e.target.id)}
            >
              PDF
            </BotonEmoji>
            <BotonEmoji>
              <span className="text-sm font-medium">Excel</span>
            </BotonEmoji>
          </div>
        </div>
      </div>
      <div>
        <TablaCobranzas />
      </div>
    </ContenedorDePantallas>
  );
}
