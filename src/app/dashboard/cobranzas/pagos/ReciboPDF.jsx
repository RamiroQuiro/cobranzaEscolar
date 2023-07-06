"use client"

import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData } from "@/context/contextData";
import useRelacionesData from "@/hook/useRelacionesData";

export default function ReciboPDF() {
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

    const {relacionesData} = useRelacionesData({
      legajos,
      comprobantes,
      ciclosLectivos,
      uidPagoSeleccionado,
      conceptos,
    });
  return (
    <div className="w-full flex flex-col items-center justify-normal h-[350px] rounded-md shadow-shadowCaja1">
      <div className="bg-blue-800 h-1/3 flex items-center justify-evenly w-full">
        <div className="w-1/3 h-full">
            <div className="bg-white mx-auto h-full rounded-full w-1/2 flex items-center justify-center text-7xl">🏫</div>
        </div>
        <div className="w-1/3 h-full"> <div className=" mx-auto flex h-full items-center justify-center text-3xl text-white">RECIBO</div></div>
        <div className="w-1/3 h-full"> <div className=" mx-auto flex h-full items-center justify-center text-3xl text-white">N° 0002</div></div>
      </div>
      <div className="w-full">

      <div className="p-5 flex flex-col w-full justify-between h-full gap-3">
        <div className="w-full flex items-center justify-between">
            <pre>
              Fecha de Pago{" "}
              <span className="uppercase font-bold">
                {relacionesData?.fecha}
              </span></pre>
            <pre>
              Hora :
              <span className="uppercase font-bold">
              {
                relacionesData?.hora
              }</span>
            </pre>
            </div>
          <div className="border-b w-10/12 flex items-center justify-between">
            <pre>
             Recibi Conforme de{" "}
              <span className="uppercase font-bold">
                {relacionesData?.nombreLegajo}
              </span>
            </pre>
            <pre>
             N° Legajo{" "}
              <span className="uppercase font-bold">
                {relacionesData?.legajo}
              </span>
            </pre>
          </div>
          <div className="border-b">
            
            <pre>
              Por concepto de:{" "}
              <span className="uppercase font-bold">
                {relacionesData?.concepto}
              </span>{" "}
            </pre>
            <pre>
              El Monto de:{" "}
              <span className="uppercase font-bold">
                $ {relacionesData?.montoPagado}
              </span>{" "}
            </pre>   <pre>
              Medio de Pago:{" "}
              <span className="uppercase font-bold">
                {relacionesData?.formaDePago}

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
         
          </div>
        </div>
      </div>
    </div>
  );
}
