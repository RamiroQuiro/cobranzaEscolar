import Boton1 from "@/app/componentes/Boton1";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import CheckBox from "@/app/componentes/CheckBox";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import InputFomr from "@/app/componentes/InputFomr";
import { contextCobranzas } from "@/context/contextCobranzas";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function FormularioCargaCicloLectivo() {
  const [form, setForm] = useState({ activo: true });
  const [checked, setChecked] = useState(true);
  const cargarPantalla=contextCobranzas((state)=>state.cargarPantalla)

  const cargarCiclosLectivos=contextCobranzas((state)=>state.cargarCiclosLectivos)
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCheck = () => {
    setChecked((state) => !state);
    setForm({ ...form, activo: checked });
  };
  const inputs = [
    {
      name: "cicloLectivo",
      type: "text",
      label: "Nombre del Ciclo",
      id: 1,
      onChange: handleForm,
    },
    {
      name: "nivelEducativo",
      type: "select",
      options: ["primaria", "secundaria", "jardin"],
      label: "Nivel Educativo",
      id: 2,
      onChange: handleForm,
    },
    {
      name: "añoCiclo",
      type: "select",
      options: ["2020", "2021", "2022", "2023", "2024", "2025"],
      label: "Año del Ciclo Lectivo",
      id: 3,
      onChange: handleForm,
    },
    {
      name: "valorDelCicloLectivo",
      type: "text",
      label: "Valor del Ciclo Lectivo",
      id: 4,
      onChange: handleForm,
    },
    {
      name: "matriculaInicial",
      type: "text",
      label: "Matricula del Ciclo",
      id: 5,
      onChange: handleForm,
    },
  ];
  const guardarLegajo = (e) => {
    e.preventDefault();
    cargarCiclosLectivos(form);
    toast.success("guardado");
    setForm({});
    cargarPantalla("pagosEfectuados");
  };
  return (
    <ContenedorDePantallas>
      <CabeceraContenedor>Agregar un ciclo Lectivo</CabeceraContenedor>
      <div className="absolute top-2  right-3 space-x-1">
        <button
          className="bg-primary-800 hover:bg-primary-300 duration-300 rounded-full p-1"
          onClick={() => cargarPantalla("cicloLectivo")}
        >
          🔙
        </button>
      
       
      </div>
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
        <textarea onChange={handleForm} name="observacionesCicloLectivo" id="" cols="30" placeholder="Observaciones" className="w-full border outline-none border-primary-200/50 bg-transparent rounded-xl p-2 text-sm" rows="5">Obeservaciones</textarea>
        </div>
        <CheckBox handleCheck={handleCheck} state={form?.activo} />
        <Boton1 onClick={guardarLegajo}>Guardar Datos</Boton1>
      </form>
    </ContenedorDePantallas>
  );
}
