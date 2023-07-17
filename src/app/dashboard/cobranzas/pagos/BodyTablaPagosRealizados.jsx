"use client";
import BotonEmoji from "@/app/componentes/BotonEmoji";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData, contextOrdenar } from "@/context/contextData";
import useRelacionesData from "@/hook/useRelacionesData";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { shallow } from "zustand/shallow";
import ReciboPDF from "./ReciboPDF";
import useBusquedaFiltros from "@/hook/useBusquedaFiltros";
import { useEffect } from "react";

export default function BodyTablaPagosRealizados() {
  const { pagosEfectuados } = contextCobranzas((state) => ({
    pagosEfectuados: state.pagosEfectuados,
  }));
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);
  const order = contextOrdenar((state) => state.ordenarPor, shallow);
  const activarModal = contextData((state) => state.activarModal);
  const capturarUidPago = contextCobranzas((state) => state.capturarUidPago);
  const selectorDePagos = (e, uid) => {
    e.preventDefault();
    capturarUidPago(uid);
    activarModal();
  };

  const { legajos } = contextData((state) => ({
    legajos: state.legajos,
   
  }));
  const { uidPagoSeleccionado, comprobantes, ciclosLectivos, conceptos ,filtroCobranzas} =
    contextCobranzas((state) => ({
      filtroCobranzas:state.filtroCobranzas,
      comprobantes: state.comprobantes,
      conceptos: state.conceptos,
      ciclosLectivos: state.ciclosLectivos,
      uidPagoSeleccionado: state.uidPagoSeleccionado,
    }));

  const { newArrayPagos,relacionesData } = useRelacionesData({
    legajos,
    comprobantes,
    ciclosLectivos,
    pagosEfectuados,
    uidPagoSeleccionado,
    conceptos,
  });
  const handleClick = (e) => {
    activarModal();
    cargarPantalla(e.target.id);
  };

  const encontrado = (arr) => {
    if (filtroCobranzas?.length <= 3) return arr;
    return arr?.filter((leg) => {
      let nombreLeg = leg.nombreLegajo
        ?.toUpperCase()
        .includes(filtroCobranzas?.toUpperCase());
      let dniLegajo = leg.dniLegajo
        ?.toUpperCase()
        .includes(filtroCobranzas?.toUpperCase());
      let legajo = leg.legajo
        ?.toUpperCase()
        .includes(filtroCobranzas?.toUpperCase());
      let nombreApellidoTutor = leg.nombreApellidoTutor
        ?.toUpperCase()
        .includes(filtroCobranzas?.toUpperCase());
      let cicloLectivo = String(leg.cicloLectivo)?.includes(
        filtroCobranzas?.toUpperCase()
      );
       let fecha = (leg.fecha)?.includes(filtroCobranzas) 
    if (
      nombreLeg ||
      dniLegajo ||
      legajo ||
      nombreApellidoTutor ||
      cicloLectivo ||
      fecha
    ) {
      return leg;
    }
    });
  };
  return (
    <tbody className="divide-y divide-gray-200 my-3">
      {encontrado(newArrayPagos)
        ?.reverse()
        ?.sort((a, b) => {
          if (order == "tipoComprobante") {
            return a.tipoComprobante.localeCompare(b.tipoComprobante)
          }
          if (order == "nombreLegajo") {
            return a.nombreLegajo.localeCompare(b.nombreLegajo)
          }
          if (order == "legajo") return a.legajo - b.legajo;
          if (order === "fecha") {
            const dateA = new Date(a.fechaYHora);
            const dateB = new Date(b.fechaYHora);
            return dateA - dateB;
          }
        })
        ?.map((pagos) => (
          <tr
            onClick={(e) => selectorDePagos(e, pagos.uidPago)}
            key={pagos.uid}
            className="odd:bg-primary-300/50 cursor-pointer hover:bg-gray-200/80 duration-200 text-left"
          >
            <td className="whitespace-nowrap px-2 py-2 font-medium text-primary-text">
              {pagos.tipoComprobante}
            </td>
            <td className="whitespace-nowrap px-2 py-2 text-primary-text">
              {pagos.numeroComprobante}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.legajo}
            </td>
            <td className="whitespace-nowrap px-2 py-2 text-primary-text">
              {pagos.nombreLegajo}
            </td>
            <td className="whitespace-nowrap px-2 py-2 text-primary-text">
              {pagos.fecha}
            </td>
            <td className="whitespace-nowrap px-2 py-2 text-primary-text">
              {pagos.montoPagado}
            </td>
            <td className="whitespace-nowrap  text-primary-text flex gap-2 items-center mx-auto justify-center">
              <BotonEmoji onClick={handleClick} id={"reciboPDF"}>
                🖨️
              </BotonEmoji>
              <PDFDownloadLink
                document={<ReciboPDF relacionesData={relacionesData} />}
                fileName="SistemaEscolarCuotas"
              >
                <BotonEmoji>🔽</BotonEmoji>
              </PDFDownloadLink>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
