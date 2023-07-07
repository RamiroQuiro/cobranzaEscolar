import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import React from "react";
import TablaCobranzas from "./TablaCobranzas";
import BotonBorderRedondos from "@/app/componentes/BotonBorderRedondos";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import { contextCobranzas } from "@/context/contextCobranzas";
import PagoCompleto from "./pagos/PagoCompleto";

export default function PanelCobranzas() {
const cargarPantalla=contextCobranzas((state)=>state.cargarPantalla)

  return (
    <ContenedorDePantallas className={"w-full"}>
      <PagoCompleto/>
      <CabeceraContenedor>Panel Cobranzas</CabeceraContenedor>
      <div className="w-full py-8 flex items-center justify-evenly ">
        <BotonBorderRedondos
        id={"realizarPago"}
        onClick={(e)=>cargarPantalla(e.target.id)}
        className={"border-primary-800 border-2"}>
          Agregar Pago
        </BotonBorderRedondos>
      </div>
      <div>
        <TablaCobranzas />
      </div>
    </ContenedorDePantallas>
  );
}
