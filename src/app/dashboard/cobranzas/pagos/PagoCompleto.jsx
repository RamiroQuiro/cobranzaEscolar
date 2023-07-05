"use client";
import BotonEmoji from "@/app/componentes/BotonEmoji";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import ModalPantalla from "@/app/componentes/ModalPantalla";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData } from "@/context/contextData";
import { useEffect, useState } from "react";

export default function PagoCompleto({ uidPago }) {
  const [relacionesData, setRelacionesData] = useState(null);
  const { modal, legajos } = contextData((state) => ({
    legajos: state.legajos,
    modal: state.modal,
  }));
  const activarModal = contextData((state) => state.activarModal);
  const capturarUidPago = contextCobranzas((state) => state.capturarUidPago);
  const { uidPagoSeleccionado, comprobantes, ciclosLectivos, conceptos } =
    contextCobranzas((state) => ({
      comprobantes: state.comprobantes,
      conceptos: state.conceptos,
      ciclosLectivos: state.ciclosLectivos,
      uidPagoSeleccionado: state.uidPagoSeleccionado,
    }));

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
      tipoComprobante: comproban?.label,
      numeroComprobante: uidPagoSeleccionado?.numeroComprobante,
      nombreLegajo: leg?.nombreLegajo,
      conceptoDePago: uidPagoSeleccionado?.conceptoDePago,
      tipoComprobante: comproban?.label,
      concepto: concep?.label,
      cicloLectivo: ciclo?.label,
      montoPagado: uidPagoSeleccionado?.montoPagado,
      obsercacionesPagoRealizado:
        uidPagoSeleccionado?.observacionesPagoRealizado,
      uidPago: uidPagoSeleccionado?.uid,
    });
  }, [legajos, comprobantes, ciclosLectivos, uidPagoSeleccionado]);

  const botonCerrar = () => {
    activarModal();
    capturarUidPago("");
  };
  if (modal) {
    return (
      <ModalPantalla>
        <CabeceraContenedor>
          {relacionesData?.tipoComprobante} N°
          {relacionesData?.numeroComprobante}
        </CabeceraContenedor>
        <div className="absolute top-2 right-2 flex items-center justify-between gap-2">
          <BotonEmoji onClick={activarModal}>🖨️</BotonEmoji>
          <BotonEmoji onClick={activarModal}>🔽</BotonEmoji>
          <BotonEmoji onClick={botonCerrar}>❌</BotonEmoji>
        </div>
        <div className="p-5 flex flex-col w-full justify-between h-full">
          <div className="">
            <pre>
              Pago a cuenta de{" "}
              <span className="uppercase font-bold">
                {relacionesData?.nombreLegajo}
              </span>
            </pre>
          </div>
          <div>
            <pre>
              Monto Pagado:{" "}
              <span className="uppercase font-bold">
                $ {relacionesData?.montoPagado}
              </span>{" "}
            </pre>
            <pre>
              Concepto de pago:{" "}
              <span className="uppercase font-bold">
                {relacionesData?.concepto}
              </span>{" "}
            </pre>
          </div>
          <div>
            <pre>
              Observaciones de pago:{" "}
              <span className="uppercase font-bold">
                {relacionesData?.obsercacionesPagoRealizado}
              </span>{" "}
            </pre>
            <pre>
              UID del Pago:{" "}
              <span className="uppercase font-bold">
                {relacionesData?.uidPago}
              </span>{" "}
            </pre>
          </div>
        </div>
      </ModalPantalla>
    );
  } else {
    null;
  }
}
