"use client";
import { contextData, contextOrdenar } from "@/context/contextData";
import { useState } from "react";
import { shallow } from "zustand/shallow";

export default function BodyTablaAlumnos() {
  const { legajos, filtroActivo, busquedaLegajo } = contextData((state) => ({
    legajos: state.legajos,
    busquedaLegajo: state.busquedaLegajo,
    filtroActivo: state.filtroActivo,
  }));
  const [tablaLegajos, setTablaLegajos] = useState(legajos);

  const cargarPantalla = contextData((state) => state.cargarPantalla);
  const capturarLegajo = contextData((state) => state.capturarLegajo);
  const captaruid = (e, uid) => {
    cargarPantalla("irALegajo");
    capturarLegajo(uid);
  };
  const order = contextOrdenar((state) => state.ordenarPor, shallow);


  /* funcion hecha por mi */
/*  const encontrado = (arr) => {
    if (busquedaLegajo?.length <= 3) return arr;
    return arr?.filter((leg) => {
      let nombreLeg = leg.nombreLegajo
        ?.toUpperCase()
        .includes(busquedaLegajo?.toUpperCase());
      let dniLegajo = leg.dniLegajo
        ?.toUpperCase()
        .includes(busquedaLegajo?.toUpperCase());
      let legajo = leg.legajo
        ?.toUpperCase()
        .includes(busquedaLegajo?.toUpperCase());
      let nombreApellidoTutor = leg.nombreApellidoTutor
        ?.toUpperCase()
        .includes(busquedaLegajo?.toUpperCase());
      let cicloLectivo = String(leg.cicloLectivo)?.includes(
        busquedaLegajo?.toUpperCase()
      );
      if (
        nombreLeg ||
        dniLegajo ||
        legajo ||
        nombreApellidoTutor ||
        cicloLectivo
      ) {
        return leg;
      }
    });
  };*/

  /* funcion mejorada por aiEdge */
  const encontrado = (arr) => {
    if (busquedaLegajo?.length <= 3) return arr;
    const busquedaLegajoUpper = busquedaLegajo?.toUpperCase();
    return arr?.filter((leg) => {
      const { nombreLegajo, dniLegajo, legajo, nombreApellidoTutor, cicloLectivo } = leg;
      return (
        nombreLegajo?.toUpperCase().includes(busquedaLegajoUpper) ||
        dniLegajo?.toUpperCase().includes(busquedaLegajoUpper) ||
        legajo?.toUpperCase().includes(busquedaLegajoUpper) ||
        nombreApellidoTutor?.toUpperCase().includes(busquedaLegajoUpper) ||
        String(cicloLectivo)?.includes(busquedaLegajoUpper)
      );
    });
  };
  return (
    <tbody className="divide-y divide-gray-200 my-3">
      {encontrado(legajos)
        ?.sort((a, b) => {
          if (order == "nombreLegajo") {
            if (a.nombreLegajo < b.nombreLegajo) return -1;
            if (a.nombreLegajo > b.nombreLegajo) return 1;
          }
          if (order == "legajo") return a.legajo - b.legajo;
          if (order == "dniLegajo") return a.dniLegajo - b.dniLegajo;
          if (order == "activo") if (a.activo > b.activo) return -1;
        })
        ?.filter((leg) => {
          if (filtroActivo == "activos") {
            return leg.activo == true;
          }
          if (filtroActivo == "inactivos") {
            return leg.activo == false;
          } else {
            return leg;
          }
        })
        ?.map((leg) => (
          <tr
            onClick={(e) => captaruid(e, leg.uid)}
            key={leg.uid}
            className="odd:bg-primary-300/50 cursor-pointer hover:bg-gray-200/80 duration-200 animate-[aparecer_.2s]"
          >
            <td className="whitespace-nowrap px-4 py-2 font-medium text-primary-text">
              {leg.nombreLegajo}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {leg.legajo}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {leg.dniLegajo}
            </td>
            <td className="whitespace-nowrap  text-primary-text">
              <p
                className={
                  leg.activo == true
                    ? " bg-green-300/50 shadow-sm w-2/3 shadow-green-300 text-green-600 rounded-lg text-xs mx-auto text-center"
                    : " bg-red-300/50 shadow-sm w-2/3 shadow-red-300 text-red-600 rounded-lg text-xs mx-auto text-center"
                }
              >
                {leg.activo == true ? "activo" : "inactivo"}
              </p>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
