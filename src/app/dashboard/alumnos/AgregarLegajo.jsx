"use client";
import Boton1 from "@/app/componentes/Boton1";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import InputFomr from "@/app/componentes/InputFomr";
import { useState } from "react";

export default function AgregarLegajo() {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      label: "date",
      name: "sexo",
      type: "text",
      onChange: handleForm,
      children: "> Sexo",
      id: 5,
    },    {
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
        id: 20,
      },
    {
        label: "",
        name: "celular",
        type: "number",
        onChange: handleForm,
        children: "> Celular o Telefono",
        id: 21,
      },
    {
        label: "",
        name: "email",
        type: "email",
        onChange: handleForm,
        children: "> Correo electronico",
        id: 22,
      },

    {
      label: "",
      name: "apellidoNombreTutor",
      type: "text",
      onChange: handleForm,
      children: "> Nombre y Apellido del Tutor",
      id: 6,
    },
    {
      label: "",
      name: "dniTutor",
      type: "number",
      onChange: handleForm,
      children: "> DNI del Tutor",
      id: 6,
    },
    {
      label: "date",
      name: "fechaIngreso",
      type: "date",
      onChange: handleForm,
      children: "> Fecha de Ingreso",
      id: 10,
    },
  ];

  return (
    <div className="w-full mx-auto ">
      <CabeceraContenedor>Agregar Legajo</CabeceraContenedor>
      <form
        action=""
        className="py-4 md:px-5 w-full flex flex-wrap items-center justify-between mx-auto gap-2"
      >
        <div
        className=" w-full flex flex-wrap items-center justify-between mx-auto gap-2"
        >

        {inputs.map((input, index) => {
            return (
                <InputFomr
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

      <Boton1>Guardar Datos</Boton1>
      </form>
    </div>
  );
}
