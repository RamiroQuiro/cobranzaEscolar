"use client";
import BotonEmoji from "@/app/componentes/BotonEmoji";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import ModalPantalla from "@/app/componentes/ModalPantalla";
import { comprobantes } from "@/base/cicloLectivo";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData } from "@/context/contextData";
import { useEffect, useState } from "react";

export default function PagoCompleto({ uidPago }) {
  const [relacionesData, setRelacionesData] = useState(null)
  const { modal,legajos } = contextData((state) => ({
    legajos:state.legajos,
    modal: state.modal,
  }));
  const activarModal = contextData((state) => state.activarModal);
  const capturarUidPago = contextCobranzas((state) => state.capturarUidPago);
  const { uidPagoSeleccionado,comprobantes ,ciclosLectivos} = contextCobranzas((state) => ({
    comprobantes:state.comprobantes,
    ciclosLectivos:state.ciclosLectivos,
    uidPagoSeleccionado: state.uidPagoSeleccionado,
  }));

useEffect(() => {
  if(!legajos && !comprobantes&& !ciclosLectivos)return
  const leg=legajos?.find(leg=>leg.legajo==uidPagoSeleccionado?.legajo)
  const comproban=comprobantes?.find(comp=>comp.uid==uidPagoSeleccionado?.tipoComprobante)
  const ciclo=ciclosLectivos?.find(comp=>comp.uid==uidPagoSeleccionado?.cicloLectivo)
console.log(comproban)
  setRelacionesData({
    tipoComprobante:comproban?.label,
    numeroComprobante:uidPagoSeleccionado?.numeroComprobante,


  })

}, [legajos,comprobantes,ciclosLectivos])


  console.log(uidPagoSeleccionado);
const botonCerrar=()=>{
  activarModal()
  capturarUidPago('')

}
  if (modal) {
    return (
      <ModalPantalla>
      <CabeceraContenedor>{relacionesData?.tipoComprobante}  N°{relacionesData?.numeroComprobante}</CabeceraContenedor>
        <div className="absolute top-2 right-2 flex items-center justify-between gap-2">
          <BotonEmoji onClick={activarModal}>🖨️</BotonEmoji>
          <BotonEmoji onClick={activarModal}>🔽</BotonEmoji>
          <BotonEmoji onClick={botonCerrar}>❌</BotonEmoji>
        </div>
        <div>

        </div>
      </ModalPantalla>
    );
  } else {
    null;
  }
}
