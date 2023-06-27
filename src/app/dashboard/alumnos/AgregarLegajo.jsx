"use client";
import Boton1 from "@/app/componentes/Boton1";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import CheckBox from "@/app/componentes/CheckBox";
import InputFomr from "@/app/componentes/InputFomr";
import { contextData } from "@/context/contextData";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function AgregarLegajo() {
  const [form, setForm] = useState({ activo: true });
  const [checked, setChecked] = useState(true);
  const cargarNewLegajo = contextData((state) => state.cargarNewLegajo);
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
      onChange: handleForm,
      children: "> Nombre y Apellido Completo",
      id: 1,
    },
    {
      name: "dniLegajo",
      type: "number",
      onChange: handleForm,
      children: "> Numero de Documento",
      id: 2,
    },

    {
      label: "",
      name: "nacionalidad",
      type: "text",
      onChange: handleForm,
      children: "> Nacionalidad",
      id: 4,
    },
    {
      label: "select",
      name: "sexo",
      type: "select",
      options: ["masculino", "femenino"],
      onChange: handleForm,
      children: "> Sexo",
      id: 5,
    },
    {
      label: "date",
      name: "fechaNac",
      type: "date",
      onChange: handleForm,
      children: "> Fecha de Nacimiento",
      id: 3,
    },
    {
      label: "",
      name: "domicilio",
      type: "text",
      onChange: handleForm,
      children: "> Domicilio",
      id: 10,
    },
    {
      label: "",
      name: "celular",
      type: "number",
      onChange: handleForm,
      children: "> Celular o Telefono",
      id: 11,
    },
    {
      label: "",
      name: "email",
      type: "email",
      onChange: handleForm,
      children: "> Correo electronico",
      id: 12,
    },

    {
      label: "",
      name: "apellidoNombreTutor",
      type: "text",
      onChange: handleForm,
      children: "> Nombre y Apellido del Tutor",
      id: 50,
    },
    {
      label: "",
      name: "dniTutor",
      type: "number",
      onChange: handleForm,
      children: "> DNI del Tutor",
      id: 51,
    },
    {
      label: "",
      name: "domicilioTutor",
      type: "text",
      onChange: handleForm,
      children: "> Domicilio",
      id: 52,
    },
    {
      label: "",
      name: "celularTutor",
      type: "number",
      onChange: handleForm,
      children: "> Celular o Telefono",
      id: 53,
    },
    {
      label: "",
      name: "emailTutor",
      type: "email",
      onChange: handleForm,
      children: "> Correo electronico",
      id: 54,
    },
    {
      label: "",
      name: "legajo",
      type: "number",
      onChange: handleForm,
      children: "> Numero de Legajo",
      id: 30,
    },
    {
      label: "date",
      name: "fechaIngreso",
      type: "date",
      onChange: handleForm,
      children: "> Fecha de Ingreso",
      id: 32,
    },
    {
      label: "select",
      name: "nivelEducativo",
      type: "select",
      options: ["jardin", "primaria", "secundaria"],
      onChange: handleForm,
      children: " Nivel Educativo",
      id: 31,
    },
  ];

  const guardarLegajo = (e) => {
    e.preventDefault();
    cargarNewLegajo(form);
    console.log(form)
    toast.success("guardado");
  };
  return (
    <div className="w-full mx-auto animate-apDeArriba ">
      <CabeceraContenedor>Agregar Legajo</CabeceraContenedor>
      <form
        action=""
        className="py-4 md:px-5 w-full flex flex-wrap items-center justify-between mx-auto gap-2"
      >
        <div className=" w-full flex flex-wrap items-center justify-between mx-auto gap-2">
          <h2 className="font-medium">Datos del Alumno</h2>
          {inputs
            ?.filter((input) => input.id >= 0 && input.id <= 20)
            ?.map((input, index) => {
              return (
                <InputFomr
                  options={input.options}
                  label={input.label}
                  name={input.name}
                  onChange={input.onChange}
                  type={input.type}
                  key={input.id}
                >
                  {input.children}
                </InputFomr>
              );
            })}
          <h2 className="font-medium mt-8">Datos del Tutor</h2>
          {inputs
            ?.filter((input) => input.id >= 50 && input.id <= 59)
            ?.map((input, index) => {
              return (
                <InputFomr
                  options={input.options}
                  label={input.label}
                  name={input.name}
                  onChange={input.onChange}
                  type={input.type}
                  key={input.id}
                >
                  {input.children}
                </InputFomr>
              );
            })}
          <h2 className="font-medium mt-8">Datos Escolar</h2>
          {inputs
            ?.filter((input) => input.id >= 30 && input.id <= 39)
            ?.map((input, index) => {
              return (
                <InputFomr
                  options={input.options}
                  label={input.label}
                  name={input.name}
                  onChange={input.onChange}
                  type={input.type}
                  key={input.id}
                >
                  {input.children}
                </InputFomr>
              );
            })}
        </div>
       <CheckBox
       handleCheck={handleCheck}
       state={form}
       />
        <Boton1 onClick={guardarLegajo}>Guardar Datos</Boton1>
      </form>
    </div>
  );
}
