
"use client"
import React, { useEffect, useState } from "react";
import THTabla from "./THTabla";
import { contextCobranzas } from "@/context/contextCobranzas";

export default function CuentaEstudiante({  legajo }) {
    const [datos, setDatos] = useState(null)
    
  
  const {pagosEfectuados,ciclosLectivos}=contextCobranzas((state)=>({
    ciclosLectivos:state.ciclosLectivos,
  pagosEfectuados:state.pagosEfectuados
  }))
  
  useEffect(() => {
    if(!ciclosLectivos || !pagosEfectuados)return
    const cicloLectivoLegajo=ciclosLectivos.find(ciclo=>ciclo.uid==legajo.cicloLectivo)
    if(!cicloLectivoLegajo)return
    else{
      const filtrar=pagosEfectuados.filter(pago=>pago.legajo==legajo.legajo && pago.concepto==cicloLectivoLegajo?.conceptoCuota  && pago.cicloLectivo==legajo.cicloLectivo)
      if(!filtrar)return
      else{
        
        setDatos(filtrar)
      }
    }
  }, [pagosEfectuados])
  
  const cabeceras = [
    {
      name: "Periodo",
      key: "1",
      id: "periodoPagado",
    },
    {
      name: "Pagado",
      key: 2,
      id: "montoPagado",
      //sortable : true,
    },
    {
      name: "Intereses",
      key: 3,
      id: "intereses",
      //sortable : true,
    },
    {
      name: "Totales",
      key: 7,
      id: "totalPeriodo",
      //sortable : true,
    },
  ];
  const periodos = [
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
  ];
  const suma = (a, b) => {
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = 0;
    }
    return Number(a) + Number(b);
  };

  const totales = datos?.reduce((acum, dato) => {
    let montoPagado = Number(dato.montoPagado);
    let montoAgregado = Number(dato.montoAgregado) || 0;
    
    acum.totalMontoPagado += montoPagado;
    acum.totalMontoAgregado += montoAgregado;
    acum.totalMontoTotal += montoPagado + montoAgregado;
    
    return acum;
  }, {totalMontoPagado: 0, totalMontoAgregado: 0, totalMontoTotal: 0});

  if (!datos) {
    return <div>Cargando...</div>
  }else
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded relative">
      <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
        <tr>
          {cabeceras?.map((item, i) => (
            <THTabla key={item.key} id={item.id} label={item.name} />
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 my-3">
        {periodos.map((period, index) => {
          let isPay = datos?.find(
            (pago) => pago.periodo.toLowerCase() == period.toLowerCase()
          );
          return (
            <tr
              key={index}
              className="odd:bg-primary-300/50 cursor-pointer text-sm hover:bg-gray-200/80 duration-200 animate-[aparecer_.2s]"
            >
              <td className="whitespace-nowrap px-2 py-0.5 font-medium text-primary-text">
                {period}
              </td>
              <td
                className={`border px-2 py-0.5 font-medium text-xs ${
                  isPay ? "text-green-500" : "text-red-500"
                }`}
              >
                $ {isPay ? isPay.montoPagado : "0"}
              </td>
              <td
                className={`border px-2 py-0.5 font-medium text-xs ${
                  !isPay?.montoAgregado ? "text-green-500" : "text-red-500"
                }`}
              >
                $ {isPay?.montoAgregado ? isPay?.montoAgregado : "0"}
              </td>
              <td className="border px-2 py-0.5">
                {" "}
                $ {isPay ? suma(isPay?.montoPagado, isPay?.montoAgregado) : "0"}
              </td>
            </tr>
          );
        })}
        <tr className="bg-primary-700/80  cursor-pointer text font-medium hover:bg-gray-200/80 duration-200 animate-[aparecer_.2s] text-primary-400">
          <td className="whitespace-nowrap px-2 py-0.5  ">{"Totales"}</td>
          <td className="border px-2 py-0.5">
            ${totales?.totalMontoPagado}
          </td>
          <td className="border px-2 py-0.5">  ${totales?.totalMontoAgregado}</td>
          <td className="border px-2 py-0.5">
            ${totales?.totalMontoTotal}</td>
        </tr>
      </tbody>
    </table>
  );
}
