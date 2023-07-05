"use client";
import Boton1 from "@/app/componentes/Boton1";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import CheckBox from "@/app/componentes/CheckBox";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import InputFomr from "@/app/componentes/InputFomr";
import InputSearchLegajo from "@/app/componentes/InputSearchLegajo";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData } from "@/context/contextData";
import React, { useEffect, useState } from "react";
import BotonDePago from "./BotonPago";

export default function RealizarPago() {
  const [checked, setChecked] = useState(true);
  const [conceptoSelec, setConceptoSelec] = useState(null);
  const [form, setForm] = useState({});
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);
  const { conceptos, ciclosLectivos, comprobantes } = contextCobranzas(
    (state) => ({
      conceptos: state.conceptos,
      comprobantes: state.comprobantes,
      ciclosLectivos: state.ciclosLectivos,
    })
  );
  useEffect(() => {
    if(!conceptoSelec)return
if(conceptoSelec){
  let numeroComp=comprobantes?.find((comp) => comp.uid == conceptoSelec)?.numeroComprobante
  setForm({
    ...form,
    numeroComprobante:numeroComp
  })
}

  }, [conceptoSelec])
  

  const cargarConceptos = contextCobranzas((state) => state.cargarConceptos);
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const captarUidLegajo = contextData((state) => state.captarUidLegajo);
  const handleCheck = () => {
    setChecked((state) => !state);
    setForm({ ...form, activo: checked });
  };
  const inputs = [
    {
      name: "nombreLegajo",
      type: "text",
      label: "Nombre de Alumno",
      id: 1,
      onChange: handleForm,
    },
    {
      name: "legajo",
      type: "text",
      label: "N° de Legajo",
      id: 2,
      onChange: handleForm,
    },
    {
      name: "periodoCobroConcepto",
      type: "select",
      options: [
        { label: "mensual" },
        { label: "trimestral" },
        { label: "unicaVez" },
        { label: "anual" },
      ],
      label: "Modo que se cobrara el Concepto",
      id: 3,
      onChange: handleForm,
    },
  ];

  const onSelectComprobante = (e) => {
    handleForm(e);
    setConceptoSelec(e.target.value);
  
  };

  const mostrar4dig = (num) => {
    let num_Sring=String(num).padStart(4, "0")
    if(num_Sring==undefined){
       return 0
    }
    return num_Sring
  }

  return (
    <ContenedorDePantallas>
      <CabeceraContenedor>Realizar Pago</CabeceraContenedor>

      <InputSearchLegajo />
      <form
        action=""
        className="py-4 md:px-5 w-full border-t border-primary-100 pt-8 flex flex-wrap items-center justify-between mx-auto gap-2"
      >
        <div className=" w-full flex flex-wrap items-center justify-between mx-auto gap-2">
          <div className="flex items-center justify-end w-full gap-2 mb-4">
            <div className="">
              <InputFomr
                classNameInput={"text-left"}
                className={"w-"}
                name={"tipoComprobante"}
                onChange={onSelectComprobante}
                type={"select"}
                options={comprobantes}
              >
                Tipo de Recibo
              </InputFomr>
            </div>
            <div className="w-1/3">
              <div
                name="numeroComprobante"
                className="rounded-lg bg-white px-5 py-2 flex text-right"
                placeholder="Número Comprobante"
              >{mostrar4dig(
                comprobantes?.find((comp) => comp.uid == conceptoSelec)?.numeroComprobante
              ) || null}</div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <InputFomr
              name={"nombreLegajo"}
              classNameInput={"bg-white font-bold"}
              value={captarUidLegajo?.nombreLegajo}
              onChange={handleForm}
            >
              Nombre Alumno
            </InputFomr>
            <InputFomr
              name={"name"}
              className={"w-1/3"}
              classNameInput={"bg-white font-bold"}
              value={captarUidLegajo?.legajo}
              onChange={handleForm}
            >
              N° de Legajo
            </InputFomr>
          </div>{" "}
          <div className="flex items-center justify-between w-full gap-2">
            <div className="w-">
              <InputFomr
                name={"cicloLectivo"}
                className={"w-"}
                onChange={handleForm}
                type={"text"}
                classNameInput={"bg-white font-bold"}
                value={
                  ciclosLectivos?.filter(
                    (filtro) => filtro.uid == captarUidLegajo?.cicloLectivo
                  )[0]?.label
                }
              >
                Ciclo Lectivo
              </InputFomr>
            </div>
            <div className="w-">
              <InputFomr
                className={"w-"}
                onChange={handleForm}
                type={"text"}
                name="gradoLectivo"
                value={captarUidLegajo?.gradoLectivo}
                classNameInput={"bg-white font-bold"}
              >
                Grado Escolar
              </InputFomr>
            </div>
            <div className="w-">
              <InputFomr
                className={"w-"}
                onChange={handleForm}
                type={"select"}
                name={"concepto"}
                options={conceptos}
                classNameInput={"bg-white font-bold"}
              >
                Concepto
              </InputFomr>
            </div>
          </div>
          <div className="flex items-center justify-stretch w-full gap-2">
            <div className="w-">
              <InputFomr
                className={"w-"}
                onChange={handleForm}
                name={"formaDePago"}
                type={"select"}
                options={[
                  { label: "contado" },
                  { label: "transferencia" },
                  { label: "cheque" },
                ]}
              >
                Forma de pagos
              </InputFomr>
            </div>
            <div className="w-1/2 flex-grow">
              <InputFomr
                name={"montoPagado"}
                onChange={handleForm}
                type={"text"}
              >
                Moto a Pagar
              </InputFomr>
            </div>
          </div>
          <textarea
          onChange={handleForm}
            name="observacionesPagoRealizado"
            id=""
            cols="30"
            placeholder="Observaciones"
            className="w-full border outline-none border-primary-200/50 bg-transparent rounded-xl p-2 text-sm"
            rows="5"
          />
        </div>

        <BotonDePago
          legajoSelect={captarUidLegajo}
          form={form}
          cargarPantalla={cargarPantalla}
          setForm={setForm}
        />
      </form>
    </ContenedorDePantallas>
  );
}
