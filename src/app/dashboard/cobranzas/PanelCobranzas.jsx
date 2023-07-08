import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import React from "react";
import TablaCobranzas from "./TablaCobranzas";
import BotonBorderRedondos from "@/app/componentes/BotonBorderRedondos";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import { contextCobranzas } from "@/context/contextCobranzas";
import PagoCompleto from "./pagos/PagoCompleto";
import InputSearchLegajo from "@/app/componentes/InputSearchLegajo";
import InputFomr from "@/app/componentes/InputFomr";

export default function PanelCobranzas() {
const cargarPantalla=contextCobranzas((state)=>state.cargarPantalla)
const cargaFiltroCobranza=contextCobranzas((state)=>state.cargaFiltroCobranza)


const handleSearck=(e)=>{
    e.preventDefault();
    cargaFiltroCobranza(e.target.value)
}

  return (
    <ContenedorDePantallas className={"w-full"}>
      <PagoCompleto/>
      <CabeceraContenedor>Panel Cobranzas</CabeceraContenedor>
      <div className="w-full flex flex-col items-center justify-evenly ">
        <div className="border-b py-8 border-primary-200/50 w-full flex items-center justify-evenly">
        <BotonBorderRedondos
        id={"realizarPago"}
        onClick={(e)=>cargarPantalla(e.target.id)}
        className={"border-primary-800 border-2"}>
          Agregar Pago
        </BotonBorderRedondos>
        </div>
        <div className="w-full py-5">
        <InputFomr
        onChange={handleSearck}
        type={"search"}
        >

          Filtra tu busqueda
        </InputFomr>
        </div>
      </div>
      <div>
        <TablaCobranzas />
      </div>
    </ContenedorDePantallas>
  );
}
