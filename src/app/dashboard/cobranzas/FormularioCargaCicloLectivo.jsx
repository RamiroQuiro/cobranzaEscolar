import Boton1 from "@/app/componentes/Boton1";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import CheckBox from "@/app/componentes/CheckBox";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import InputFomr from "@/app/componentes/InputFomr";
import SvgComponent from "@/app/componentes/SVGComponent";
import { contextCobranzas } from "@/context/contextCobranzas";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PeriodosCiclosCarga from "./PeriodosCiclosCarga";


const periodos = [
  // { label: "Enero", id: 1 },
  { label: "Febrero", id: 2 },
  { label: "Marzo", id: 3 },
  { label: "Abril", id: 4 },
  { label: "Mayo", id: 5 },
  { label: "Junio", id: 6 },
  { label: "Julio", id: 7 },
  { label: "Agosto", id: 8 },
  { label: "Septiembre", id: 9 },
  { label: "Octubre", id: 10 },
  { label: "Noviembre", id: 11 },
  // { label: "Diciembre", id: 12 },
];
const inputs = [
  {
    name: "label",
    type: "text",
    label: "Nombre del Ciclo",
    id: 1,
  },
  {
    name: "nivelEducativo",
    type: "select",
    options: [{label:"primaria"}, {label:"secundaria"},{label: "jardin"}],
    label: "Nivel Educativo",
    id: 2,
  },
  {
    name: "añoCiclo",
    type: "select",
    options: [{label:"2023"},{label: "2024"},{label: "2025"}],
    label: "Año",
    id: 3,
  },
  {
    name: "valorCuota",
    type: "text",
    label: "Valor de Cuota del Ciclo Lectivo",
    id: 4,
  },
  {
    name: "valorMatricula",
    type: "text",
    label: "Valor de Matricula del Ciclo Lectivo",
    id: 5,
  },
  // {
  //   name: "matriculaInicial",
  //   type: "text",
  //   label: "Matricula del Ciclo",
  //   id: 5,
  //   onChange: handleForm,
  // },
];
export default function FormularioCargaCicloLectivo() {
  //cargando el useState del formiulario con los periodos ya predefinidos
  const [form, setForm] = useState({ activo: true,periodos:{"Febrero":true,"Marzo":true,"Abril":true,"Mayo":true,"Junio":true,"Julio":true,"Agosto":true,"Septiembre":true,"Octubre":true,"Noviembre":true} });
  const uidActivo=contextCobranzas((state)=>state.uidActivo)
  const [checked, setChecked] = useState(true);
  const cargarPantalla=contextCobranzas((state)=>state.cargarPantalla)
  const cargarCiclosLectivos=contextCobranzas((state)=>state.cargarCiclosLectivos)


  useEffect(() => {
    if (!uidActivo) return
  if(uidActivo){
    setForm(uidActivo)
  }
  }, [])
  
  const handleCheck = () => {
    setChecked((state) => !state);
    setForm({ ...form, activo: checked });
  };
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const suma = (a, b) => {
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = 0;
    }
    return Number(a)*Object.values(form?.periodos)?.filter(activo=>activo==true)?.length + Number(b);
  };



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
              <div 
              key={input.id}
              className="w- flex-grow">
              <InputFomr
              value={form?.[input.name]}
                options={input.options}
                name={input.name}
                onChange={handleForm}
                type={input.type}
               
              >
                {input.label}
              </InputFomr>
              </div>
            );
          })}
           <div 
              className="w- flex-grow">
              <InputFomr
                name={"totalValorCiclo"}
                value={"$"+suma(form?.valorCuota,form?.valorMatricula)}
                type={"text"}
               
              >Total Valor del Ciclo Lectivo
              </InputFomr>
              </div>
          <PeriodosCiclosCarga setForm={setForm} periodosForm={form?.periodos} />
        <textarea onChange={handleForm} name="observacionesCicloLectivo" id="" cols="30" placeholder="Observaciones" className="w-full border outline-none border-primary-200/50 bg-transparent rounded-xl p-2 text-sm" rows="5"></textarea>
        </div>
        <CheckBox handleCheck={handleCheck} state={form?.activo} />
        <Boton1 onClick={guardarLegajo}>Guardar Datos</Boton1>
      </form>
    </ContenedorDePantallas>
  );
}
