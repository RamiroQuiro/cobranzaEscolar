"use client";
import React, { useState } from "react";
import InputFomr from "./InputFomr";
import { contextData } from "@/context/contextData";
import { contextCobranzas } from "@/context/contextCobranzas";
import useBusquedaFiltros from "@/hook/useBusquedaFiltros";

export default function InputSearchLegajo() {
  const { legajos } = contextData((state) => ({
    legajos: state.legajos,
  }));

const{encontrado,handleSearch,search,setSearch}=useBusquedaFiltros(legajos)
  const capturarLegajo = contextData((state) => state.capturarLegajo);

  const handleClick = (leg) => {
    capturarLegajo(leg.uid);
    setSearch("");
  };
  return (
    <div>
      <div className="my-5 md:w-10/12 mx-auto relative">
        <InputFomr classNameInput={"pr-4"} value={search} onChange={handleSearch} type={"search"}>
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
