"use client";
import React, { useEffect, useState } from "react";
import THTabla from "./THTabla";
import { contextCobranzas } from "@/context/contextCobranzas";
import TableEstadoCiclo from "../dashboard/alumnos/TableEstadoCiclo";
import HeadTableEstadoCiclo from "../dashboard/alumnos/HeadTableEstadoCiclo";
import BodyTableEstadoCiclo from "../dashboard/alumnos/BodyTableEstadoCiclo";
import PaneoPagoMensual from "../dashboard/cobranzas/pagos/PaneoPagoMensual";

export default function CuentaEstudiante({ legajo,label }) {
  const [datos, setDatos] = useState(null);

  const { pagosEfectuados, ciclosLectivos } = contextCobranzas((state) => ({
    ciclosLectivos: state.ciclosLectivos,
    pagosEfectuados: state.pagosEfectuados,
  }));

  useEffect(() => {
    if (!ciclosLectivos || !pagosEfectuados) return;
    const cicloLectivoLegajo = ciclosLectivos.find(
      (ciclo) => ciclo.uid == legajo.cicloLectivo
    );
    if (!cicloLectivoLegajo) return;
    else {
      const filtrar = pagosEfectuados.filter(
        (pago) =>
          pago.legajo == legajo.legajo &&
          pago.concepto == cicloLectivoLegajo?.conceptoCuota &&
          pago.cicloLectivo == legajo.cicloLectivo
      );
      if (!filtrar) return;
      else {
        setDatos(filtrar);
      }
    }
  }, [pagosEfectuados,legajo]);

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

  const totales = datos?.reduce(
    (acum, dato) => {
      let montoPagado = Number(dato.montoPagado);
      let montoAgregado = Number(dato.montoAgregado) || 0;

      acum.totalMontoPagado += montoPagado;
      acum.totalMontoAgregado += montoAgregado;
      acum.totalMontoTotal += montoPagado + montoAgregado;

      return acum;
    },
    { totalMontoPagado: 0, totalMontoAgregado: 0, totalMontoTotal: 0 }
  );
  if (!datos) {
    return <div>Cargando...</div>;
  } else
  if(label==="paneoGral"){
    return (
      <PaneoPagoMensual periodos={periodos}    datos={datos} />
    )
  }else
    return (
      <TableEstadoCiclo>
        <HeadTableEstadoCiclo cabeceras={cabeceras} />
        <BodyTableEstadoCiclo
          periodos={periodos}
          totales={totales}
          datos={datos}
        />
      </TableEstadoCiclo>
    );
}
