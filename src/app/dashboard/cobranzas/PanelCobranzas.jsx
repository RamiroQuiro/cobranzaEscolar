import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import React from "react";
import TablaCobranzas from "./TablaCobranzas";
import BotonBorderRedondos from "@/app/componentes/BotonBorderRedondos";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";

export default function PanelCobranzas() {
  return (
    <ContenedorDePantallas>
      <CabeceraContenedor>PanelCobranzas</CabeceraContenedor>
      <div className="w-full py-3 flex items-center justify-evenly ">
        <BotonBorderRedondos className={"border-primary-800 border-2"}>
          Agregar Pago
        </BotonBorderRedondos>
      </div>
      <div>
        <TablaCobranzas />
      </div>
    </ContenedorDePantallas>
  );
}
