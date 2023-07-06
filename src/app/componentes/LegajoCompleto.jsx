"use client";
import { contextData } from "@/context/contextData";
import CabeceraContenedor from "./CabeceraContenedor";
import BotonEmoji from "./BotonEmoji";
import Boton1 from "./Boton1";
import InputFomr from "./InputFomr";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import { toast } from "react-hot-toast";
import { shallow } from "zustand/shallow";
import { contextCobranzas } from "@/context/contextCobranzas";
import { options } from "./ChartJS";
import DaosLegajoCompleto from "./DaosLegajoCompleto";

export default function LegajoCompleto() {
  const { captarUidLegajo } = contextData((state) => ({
    captarUidLegajo: state.captarUidLegajo,
  }),shallow);
  const ciclosLectivos = contextCobranzas((state) => state.ciclosLectivos);
  const [checked, setChecked] = useState(true);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(captarUidLegajo);
  const cargarPantalla = contextData((state) => state.cargarPantalla);
  const [opcionesCicloLectivo, setOpcionesCicloLectivo] = useState({})
  const actualizarLegajo = contextData((state) => state.actualizarLegajo);
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  if (captarUidLegajo.length <= 0) {
    <div>Cargando..</div>;
  }

  useEffect(() => {
    if(!captarUidLegajo || !ciclosLectivos)return
    const cicloLec=ciclosLectivos.find(opt=>opt.uid==captarUidLegajo.cicloLectivo)
    if(!cicloLec)return
    else{
      setForm((form)=>({...form,cicloLectivo:cicloLec.label}))
    }
  }, [captarUidLegajo,ciclosLectivos])
  const guardarLegajo = (e) => {
    e.preventDefault();
    actualizarLegajo(form);
    toast.success('Legajo Modificado')
    setEdit(!edit)
    cargarPantalla("list");
  };
  const toggle = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const handleCheck = () => {
    setChecked((state) => !state);
    setForm({ ...form, activo: checked });
  };
  const etiquetas = [
    {
      nombre: "Nombre y apellido",
      name: "nombreLegajo",
      type: "text",
    },
    {
      nombre: "Numero de Legajo",
      name: "legajo",
      type: "text",
    },
    {
      nombre: "DNI",
      name: "dniLegajo",
      type: "text",
    },
    { nombre: "Nacionalidad", name: "nacionalidad", type: "text" },
    {
      nombre: "Sexo",
      name: "sexo",
      type: edit? "select":"text",
      options: [{label:"masculino"}, {label:"femenino"}
    ],
    },
    { nombre: "Fecha de Nacimiento", name: "fechaNac", type: "date" },
    { nombre: "Domicilio", name: "domicilio", type: "text" },
    { nombre: "Celular o Telefono", name: "celular", type: "text" },
    { nombre: "Correo electronico", name: "email", type: "email" },
    {
      nombre: "Nombre y Apellido Tutor",
      name: "apellidoNombreTutor",
      type: "text",
    },
    { nombre: "Dni Tutor", name: "dniTutor", type: "text" },
    { nombre: "Domicilio Tutor", name: "domicilioTutor", type: "text" },
    { nombre: "Celular Tutor", name: "celularTutor", type: "tel" },
    { nombre: "Correo electronico Tutor", name: "emailTutor", type: "email" },
    { nombre: "Fecha de Ingreso", name: "fechaIngreso", type: "date" },
    { nombre: "Ciclo Lectivo", name: "cicloLectivo", type: edit? "select":"text", options: ciclosLectivos},
      { nombre: "Grado Educativo", name: "gradoLectivo", type: "text" },
  ];
  return (
    <div className="w-full mx-auto relative animate-apDeArriba ">
      <CabeceraContenedor>
        {captarUidLegajo?.nombreLegajo} | {captarUidLegajo?.legajo}
      </CabeceraContenedor>
      <div className="absolute top-2  right-3 space-x-1">
        <BotonEmoji onClick={() => cargarPantalla("irALegajo")}>🔙</BotonEmoji>
        <BotonEmoji status={edit} onClick={toggle}>✏️</BotonEmoji>
      </div>
      <div>
        {}
        <form
          action=""
          className="py-4 md:px-5 w-full flex flex-wrap items-center justify-between mx-auto gap-2"
        >
          <div className=" w-full flex flex-wrap items-center justify-between  mx-auto gap-y-4">
            <h2 className="font-medium my-5 w-full">Legajo de Alumno </h2>

            {
           opcionesCicloLectivo&&
            etiquetas.map((etiq, i) => (
              <DaosLegajoCompleto
              key={i}
              captarUidLegajo={captarUidLegajo}
              edit={edit}
              etiq={etiq}
              form={form}
              handleForm={handleForm}
              />
            ))

          }
          </div>
          <CheckBox handleCheck={edit && handleCheck} state={form?.activo} />
          <Boton1 disabled={!edit} onClick={guardarLegajo}>
            Guardar Datos
          </Boton1>
        </form>
      </div>
    </div>
  );
}
