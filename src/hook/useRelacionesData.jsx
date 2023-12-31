import { useState, useEffect } from "react";

function useRelacionesData({
  legajos,
  comprobantes,
  ciclosLectivos,
  uidPagoSeleccionado,
  conceptos,
  pagosEfectuados,
}) {
  const [relacionesData, setRelacionesData] = useState(null);
  const [newArrayPagos, setNewArrayPagos] = useState(null);
  const obtenerFecha = (data) => {
    let fechapago = data;
    if (!fechapago) return;
    const event = fechapago;
    const fecha = {
      horas: event.getHours(),
      minutos: event.getMinutes(),
      segundos: event.getSeconds(),
      diaSemana: event.getDay(),
      dia: event.getDate(),
      mes: event.getMonth(),
      year: event.getFullYear(),
    };
    return `${fecha.dia < 10 ? "0" + fecha.dia : fecha.dia}/${
      fecha.mes < 10 ? "0" + fecha.mes : fecha.mes
    }/${fecha.year}`;
  };
  const obtenerHora = (data) => {
    let fechapago = data;
    if (!fechapago) return;
    const event = fechapago;
    const fecha = {
      horas: event.getHours(),
      minutos: event.getMinutes(),
      segundos: event.getSeconds(),
      
    };
    return `${fecha.horas < 10 ? "0" + fecha.horas : fecha.horas}:${
      fecha.minutos < 10 ? "0" + fecha.minutos : fecha.minutos
    }:${fecha.segundos < 10 ? "0" + fecha.segundos : fecha.segundos}`;
  };

  useEffect(() => {
    if (!legajos && !comprobantes && !ciclosLectivos) return;
    const concep = conceptos?.find(
      (leg) => leg.uid == uidPagoSeleccionado?.concepto
    );
    const leg = legajos?.find(
      (leg) => leg.legajo == uidPagoSeleccionado?.legajo
    );
    const comproban = comprobantes?.find(
      (comp) => comp.uid == uidPagoSeleccionado?.tipoComprobante
    );
    const ciclo = ciclosLectivos?.find(
      (comp) => comp.uid == uidPagoSeleccionado?.cicloLectivo
    );
    setRelacionesData({
      fechaYHora:uidPagoSeleccionado?.fechaYHora,
      fecha: obtenerFecha(uidPagoSeleccionado?.fechaYHora),
      hora:obtenerHora(uidPagoSeleccionado?.fechaYHora),
      tipoComprobante: comproban?.label,
      legajo: uidPagoSeleccionado?.legajo,
      numeroComprobante: uidPagoSeleccionado?.numeroComprobante,
      nombreLegajo: leg?.nombreLegajo,
      tipoComprobante: comproban?.label,
      concepto: concep?.label,
    formaDePago: uidPagoSeleccionado?.formaDePago,
      cicloLectivo: ciclo?.label,
      montoPagado: uidPagoSeleccionado?.montoPagado,
      obsercacionesPagoRealizado:
        uidPagoSeleccionado?.observacionesPagoRealizado,
      uidPago: uidPagoSeleccionado?.uid,
    });

    if (pagosEfectuados) {
      setNewArrayPagos(
        pagosEfectuados?.map((element) => {
          const concep = conceptos?.find((leg) => leg.uid == element?.concepto);
          const leg = legajos?.find((leg) => leg.legajo == element?.legajo);
          const comproban = comprobantes?.find(
            (comp) => comp.uid == element?.tipoComprobante
          );
          const ciclo = ciclosLectivos?.find(
            (comp) => comp.uid == element?.cicloLectivo
          );
          return {
            fechaYHora:element?.fechaYHora,
            fecha: obtenerFecha(element?.fechaYHora),
            hora:obtenerHora(element?.fechaYHora),
            tipoComprobante: comproban?.label,
            numeroComprobante: element?.numeroComprobante,
            nombreLegajo: leg?.nombreLegajo,
            legajo: element?.legajo,
            tipoComprobante: comproban?.label,
            concepto: concep?.label,
            cicloLectivo: ciclo?.label,
            montoPagado: element?.montoPagado,
            obsercacionesPagoRealizado: element?.observacionesPagoRealizado,
            uidPago: element?.uid,
          };
        })
      );
    }
  }, [
    legajos,
    comprobantes,
    ciclosLectivos,
    uidPagoSeleccionado,
    conceptos,
    pagosEfectuados,
  ]);
  return { relacionesData, newArrayPagos };
}

export default useRelacionesData;
