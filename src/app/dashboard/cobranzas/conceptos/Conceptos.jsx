"use client";

import BotonBorderRedondos from "@/app/componentes/BotonBorderRedondos";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import { contextCobranzas } from "@/context/contextCobranzas";
import TableBodyConceptos from "./TableBodyConceptos";

export default function Conceptos() {
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);
  return (
    <ContenedorDePantallas className={"w-full"}>
      <CabeceraContenedor>Conceptos</CabeceraContenedor>
      <div className="w-full py-3 flex items-center justify-evenly ">
        <BotonBorderRedondos
          id={"agregarConceptos"}
          onClick={(e) => cargarPantalla(e.target.id)}
          className={"border-primary-800 border-2"}
        >
          Agregar Concepto
        </BotonBorderRedondos>
      </div>
      <div className="md:w-[96%] mx-auto my-8 rounded-lg bg-white overflow-hidden">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded relative ">
          <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
            <tr>
              <th
                id="nombreLegajo"
                className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200"
              >
                Concepto
              </th>
              <th
                id="legajo"
                className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
              >
               Monto
              </th>
              <th
                id="legajo"
                className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
              >
                Tipo de Pago
              </th>
              <th
                id="legajo"
                className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
              >
                Estado
              </th>
              <th
                id="legajo"
                className="whitespace-nowrap px-1 text-center py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <TableBodyConceptos/>
        </table>
      </div>
    </ContenedorDePantallas>
  );
}
