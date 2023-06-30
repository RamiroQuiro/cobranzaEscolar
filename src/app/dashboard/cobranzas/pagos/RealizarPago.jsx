"use client";
import Boton1 from "@/app/componentes/Boton1";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import CheckBox from "@/app/componentes/CheckBox";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import InputFomr from "@/app/componentes/InputFomr";
import InputSearchLegajo from "@/app/componentes/InputSearchLegajo";
import { contextCobranzas } from "@/context/contextCobranzas";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function RealizarPago() {
  const [form, setForm] = useState({ activo: true });
  const [checked, setChecked] = useState(true);
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);

  const cargarConceptos = contextCobranzas((state) => state.cargarConceptos);
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
      options: ["mensual", "trimestral", "unicaVez", "anual"],
      label: "Modo que se cobrara el Concepto",
      id: 3,
      onChange: handleForm,
    },
  ];
  const guardarLegajo = (e) => {
    e.preventDefault();
    cargarConceptos(form);
    toast.success("guardado");
    setForm({});
    cargarPantalla("conceptos");
  };
  return (
    <ContenedorDePantallas>
      <CabeceraContenedor>Ralizar Pago</CabeceraContenedor>

     <InputSearchLegajo/>
      <form
        action=""
        className="py-4 md:px-5 w-full flex flex-wrap items-center justify-between mx-auto gap-2"
      >
        <div className=" w-full flex flex-wrap items-center justify-between mx-auto gap-2">
          {inputs?.map((input, index) => {
            return (
              <InputFomr
                options={input.options}
                name={input.name}
                onChange={input.onChange}
                type={input.type}
                key={input.id}
              >
                {input.label}
              </InputFomr>
            );
          })}
          <textarea
            onChange={handleForm}
            name="observacionesCicloLectivo"
            id=""
            cols="30"
            placeholder="Observaciones"
            className="w-full border outline-none border-primary-200/50 bg-transparent rounded-xl p-2 text-sm"
            rows="5"
          >
            Obeservaciones
          </textarea>
        </div>
        <CheckBox handleCheck={handleCheck} state={form?.activo} />
        <Boton1 onClick={guardarLegajo}>Guardar Datos</Boton1>
      </form>
    </ContenedorDePantallas>
  );
}
