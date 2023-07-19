"use client";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import InputFomr from "@/app/componentes/InputFomr";
import InputSearchLegajo from "@/app/componentes/InputSearchLegajo";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextData } from "@/context/contextData";
import React, { useEffect, useState } from "react";
import BotonDePago from "./BotonPago";

export default function RealizarPago() {
  const [camposSelect, setConceptoSelec] = useState(null);
  const [form, setForm] = useState({});
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);
  const [checkAgrega, setCheckAgrega] = useState(true);
  const { conceptos, ciclosLectivos, comprobantes } = contextCobranzas(
    (state) => ({
      conceptos: state.conceptos,
      comprobantes: state.comprobantes,
      ciclosLectivos: state.ciclosLectivos,
    })
  );
  useEffect(() => {
    if (!camposSelect) return;
    if (camposSelect) {
      let numeroComp = comprobantes?.find(
        (comp) => comp.uid == camposSelect?.tipoComprobante
      )?.numeroComprobante;
      let montoConcepto = conceptos?.find(
        (comp) => comp.uid == camposSelect?.concepto
      )?.montoConcepto;
      setForm((form) => ({
        ...form,
        montoPagado: montoConcepto,
        numeroComprobante: numeroComp,
      }));
    }
  }, [camposSelect]);
  const handleForm = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const captarUidLegajo = contextData((state) => state.captarUidLegajo);


  const onSelectComprobante = (e) => {
    handleForm(e);
    setConceptoSelec((conceptoSelec) => ({
      ...conceptoSelec,
      [e.target.name]: e.target.value,
    }));
  };

  const mostrar4dig = (num) => {
    if (!num) {
      return "0000";
    } else {
      let num_Sring = String(num).padStart(4, "0");
      return num_Sring;
    }
  };
  const comprobarMonto = (num) => {
    if (!num) return "0";
    return num;
  };
  const periodos = [
    { label: "Marzo", },
    { label: "Abril" },
    { label: "Mayo" },
    { label: "Junio" },
    { label: "Julio" },
    { label: "Agosto" },
    { label: "Septiembre" },
    { label: "Octubre" },
    { label: "Noviembre" },
  ];
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
              <InputFomr
                value={mostrar4dig(
                  comprobantes?.find(
                    (comp) => comp.uid == camposSelect?.tipoComprobante
                  )?.numeroComprobante
                )}
                onChange={handleForm}
                name="numeroComprobante"
                className="rounded-lg bg-white px-5 py-2 flex text-right"
                placeholder="Número Comprobante"
              >
                {}
              </InputFomr>
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
            <div className="w- flex-grow-0">
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
            <div className="flex-grow-0">
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
            <div className="w- flex-grow">
              <InputFomr
                className={"w-"}
                onChange={onSelectComprobante}
                type={"select"}
                name={"concepto"}
                options={conceptos}
                classNameInput={"bg-white font-bold"}
              >
                Concepto
              </InputFomr>
            </div>
            <div className="w- flex-grow">
              <InputFomr
                className={""}
                onChange={onSelectComprobante}
                type={"select"}
                name={"periodo"}
                options={periodos}
                classNameInput={"bg-white font-bold"}
              >
                Periodo
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
                value={
                  "$ " +
                  comprobarMonto(
                    conceptos?.find(
                      (comp) => comp.uid == camposSelect?.concepto
                    )?.montoConcepto
                  )
                }
              >
                Moto Concepto
              </InputFomr>
            </div>
            <div className="flex flex-wrap items-center justify-stretch w-1/4 p-2 ">
              <label
                htmlFor="pagoTermino"
                className={`rounded-full cursor-pointer text-xs font-ligth items-center justify-center flex font-bold p-1 mx-auto ${
                  checkAgrega ? " text-green-500" : " text-red-500"
                }`}
              >
                {checkAgrega ? "Pago a Termino" : "No Pago a Termino"}
                <input
                  onClick={() => setCheckAgrega(!checkAgrega)}
                  defaultChecked={checkAgrega}
                  type="checkbox"
                  name="montoAgregadoCheck"
                  id="pagoTermino"
                  className="mx-auto peer ml-2 "
                />
              </label>
              {!checkAgrega && (
                <InputFomr
                  className="peer-checked:hidden flex  w-10/12 rounded text-sm animate-aparecer"
                  type="text"
                  name="montoAgregado"
                  onChange={handleForm}
                ></InputFomr>
              )}
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
        <div className="w-1/3">
          <InputFomr
            value={
              `$ 
              ${(Number(comprobarMonto((
                  conceptos?.find((comp) => comp.uid == camposSelect?.concepto)
                    ?.montoConcepto)
                )
              )+Number(comprobarMonto(form?.montoAgregado))  )}`
              
            }
            onChange={handleForm}
            name="numeroComprobante"
            className="rounded-lg bg-white px-5 py-2 flex text-right"
            placeholder="Número Comprobante"
          >
            Total a Pagar
          </InputFomr>
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
