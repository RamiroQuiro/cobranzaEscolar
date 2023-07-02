"use client";
import React, { useState } from "react";
import InputFomr from "./InputFomr";
import { contextData } from "@/context/contextData";
import { contextCobranzas } from "@/context/contextCobranzas";

export default function InputSearchLegajo() {
  const [encontrado, setEncontrado] = useState(null);
  const [search, setSearch] = useState(null);
  const { legajos } = contextData((state) => ({
    legajos: state.legajos,
  }));

  const busquedaFiltros = (arr, search) => {
    const encontrado = arr?.filter((leg) => {
      let busquedaLegajo = leg.nombreLegajo
        ?.toUpperCase()
        .includes(search?.toUpperCase());
      let dniLegajo = leg.dniLegajo
        ?.toUpperCase()
        .includes(search?.toUpperCase());
      let legajo = leg.legajo?.toUpperCase().includes(search?.toUpperCase());
      let nombreApellidoTutor = leg.nombreApellidoTutor
        ?.toUpperCase()
        .includes(search?.toUpperCase());
      if (busquedaLegajo || dniLegajo || legajo || nombreApellidoTutor) {
        if (leg.activo == true) {
          return leg;
        }
      }
    });
    return encontrado;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setEncontrado(busquedaFiltros(legajos, search));
  };

  const capturarLegajo = contextData((state) => state.capturarLegajo);

  const handleClick = (leg) => {
    capturarLegajo(leg.uid);
    setSearch("");
  };
  return (
    <div>
      <div className="my-5 md:w-10/12 mx-auto relative">
        <span className="absolute top-3 right-2">🔎</span>
        <InputFomr value={search} onChange={handleSearch} type={"search"}>
          Buscar Alumno | Legajo | Tutor
        </InputFomr>
        {search?.length >= 2 && (
          <div className="w-full absolute z-30 shadow-md  rounded-xl animate-apDeArriba bg-white  text-sm  flex flex-col items-start gap-y-2">
            {encontrado ? (
              encontrado?.map((leg, i) => (
                <div
                  onClick={() => handleClick(leg)}
                  className="w-full animate-aparecer py-2 rounded hover:bg-gray-100  border-b cursor-pointer px-2 text-sm "
                  key={i}
                >
                  ► {leg.nombreLegajo} | ► {leg.dniLegajo} | ► {leg.legajo}
                </div>
              ))
            ) : (
              <span>No se encontro registros</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
