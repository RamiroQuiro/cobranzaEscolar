"use client";
import BotonEmoji from "@/app/componentes/BotonEmoji";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import ModalPantalla from "@/app/componentes/ModalPantalla";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData } from "@/context/contextData";
import useRelacionesData from "@/hook/useRelacionesData";
import { useEffect, useState } from "react";
import ReciboPDF from "./ReciboPDF";
import useReceiptPDF from "@/hook/useReciepPDF";
import VisorRecibos from "./VisorRecibos";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function PagoCompleto({ uidPago }) {
  const activarModal = contextData((state) => state.activarModal);
  const capturarUidPago = contextCobranzas((state) => state.capturarUidPago);
  const { modal, legajos } = contextData((state) => ({
    legajos: state.legajos,
    modal: state.modal,
  }));
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);
  const {downloadPDF,generatePDF}=useReceiptPDF()

  const { uidPagoSeleccionado, comprobantes, ciclosLectivos, conceptos } =
    contextCobranzas((state) => ({
      comprobantes: state.comprobantes,
      conceptos: state.conceptos,
      ciclosLectivos: state.ciclosLectivos,
      uidPagoSeleccionado: state.uidPagoSeleccionado,
    }));

    const {relacionesData} = useRelacionesData({
      legajos,
      comprobantes,
      ciclosLectivos,
      uidPagoSeleccionado,
      conceptos,
    });
  const botonCerrar = () => {
    activarModal();
    capturarUidPago("");
  };
  const handleClick = (e) => {
    cargarPantalla(e.target.id);
  };
  const handleDownload=()=>{
    generatePDF("pagoRealizado")
    downloadPDF()
  }
  if (modal) {
    return (
      <ModalPantalla>
        <CabeceraContenedor>
          {relacionesData?.tipoComprobante} N°
          {relacionesData?.numeroComprobante}
        </CabeceraContenedor>
        <div className="absolute top-2 right-2 flex items-center justify-between gap-2">
          <BotonEmoji onClick={handleClick}>🖨️</BotonEmoji>
          <BotonEmoji onClick={handleClick} id={"reciboPDF"}>🔎</BotonEmoji>
          <PDFDownloadLink document={<ReciboPDF/>}></PDFDownloadLink><BotonEmoji onClick={handleDownload}>🔽</BotonEmoji><PDFDownloadLink/>
          <BotonEmoji onClick={botonCerrar}>❌</BotonEmoji>
        </div>
        <div id="pagoRealizado" className="p-5 flex flex-col w-full justify-between h-full gap-3">
          <div className="border-b">
            <pre>
              Pago a cuenta de{" "}
              <span className="uppercase font-bold">
                {relacionesData?.nombreLegajo}
              </span>
            </pre>
            <pre>
              Fecha de Pago{" "}
              <span className="uppercase font-bold">
                {relacionesData?.fecha}
              </span>
            </pre>
          </div>
          <div className="border-b">
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
          <div className="border-b">
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
