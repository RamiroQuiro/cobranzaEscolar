"use client";
import BotonEmoji from "@/app/componentes/BotonEmoji";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData, contextOrdenar } from "@/context/contextData";
import useRelacionesData from "@/hook/useRelacionesData";
import { shallow } from "zustand/shallow";

export default function BodyTablaPagosRealizados() {
  const { pagosEfectuados } = contextCobranzas((state) => ({
    pagosEfectuados: state.pagosEfectuados,
  }));
  const order = contextOrdenar((state) => state.ordenarPor, shallow);
  const activarModal = contextData((state) => state.activarModal);
  const capturarUidPago = contextCobranzas((state) => state.capturarUidPago);
  const selectorDePagos = (e, uid) => {
    e.preventDefault();
    capturarUidPago(uid);
    activarModal();
  };

  const { modal, legajos } = contextData((state) => ({
    legajos: state.legajos,
    modal: state.modal,
  }));
  const { uidPagoSeleccionado, comprobantes, ciclosLectivos, conceptos } =
    contextCobranzas((state) => ({
      comprobantes: state.comprobantes,
      conceptos: state.conceptos,
      ciclosLectivos: state.ciclosLectivos,
      uidPagoSeleccionado: state.uidPagoSeleccionado,
    }));

  const  {newArrayPagos} = useRelacionesData({
    legajos,
    comprobantes,
    ciclosLectivos,
    pagosEfectuados,
    conceptos,
  });
  const obtenerHora = (data) => {
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
  
  return (
    <tbody className="divide-y divide-gray-200 my-3">
      {newArrayPagos
        ?.reverse()
        ?.sort((a, b) => {
          if (order == "nombreLegajo") {
            if (a.nombreLegajo < b.nombreLegajo) return -1;
            if (a.nombreLegajo > b.nombreLegajo) return 1;
          }
          if (order == "legajo") return a.legajo - b.legajo;
          if (order == "dniLegajo") return a.dniLegajo - b.dniLegajo;
          if (order == "activo")
            if (a.activo > b.activo) return -1;
            else return 1;
        })
        ?.map((pagos) => (
          <tr
            onClick={(e) => selectorDePagos(e, pagos.uidPago)}
            key={pagos.uid}
            className="odd:bg-primary-300/50 cursor-pointer hover:bg-gray-200/80 duration-200"
          >
            <td className="whitespace-nowrap px-4 py-2 font-medium text-primary-text">
              {pagos.tipoComprobante}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.numeroComprobante}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.legajo}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.nombreLegajo}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {obtenerHora(pagos.fechaYHora)}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.montoPagado}
            </td>
            <td className="whitespace-nowrap  text-primary-text flex gap-2 items-center mx-auto justify-center">
              <BotonEmoji>🔽</BotonEmoji>
              <BotonEmoji>🖨️</BotonEmoji>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
