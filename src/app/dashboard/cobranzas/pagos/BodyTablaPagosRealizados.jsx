"use client";
import BotonEmoji from "@/app/componentes/BotonEmoji";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData, contextOrdenar } from "@/context/contextData";
import useRelacionesData from "@/hook/useRelacionesData";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { shallow } from "zustand/shallow";
import ReciboPDF from "./ReciboPDF";

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
              {pagos.fecha}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
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
