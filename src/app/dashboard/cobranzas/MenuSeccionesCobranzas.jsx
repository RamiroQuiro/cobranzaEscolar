"use client";
import { contextCobranzas } from "@/context/contextCobranzas";
import BotonesMenuCobranza from "./BotonesMenuCobranza";

export default function MenuSeccionesCobranzas() {
  const pantallaActiva = contextCobranzas((state) => state.pantallaActiva);
  const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);
  const handleClick = (e) => {
    cargarPantalla(e.target.id);
  };

  const botones = [
    {
      children: " ► Pagos Efectuados",
      pantallaActiva,
      onClick: handleClick,
      id: "pagosEfectuados",
    },
    {
      children: "  ► Realizar Pago",
      onClick: handleClick,
      pantallaActiva,
      id: "realizarPago",
    },
    {
      children: "► Ciclo Lectivos",
      onClick: handleClick,
      pantallaActiva,
      id: "cicloLectivo",
    },
    {
      children: "  ► Conceptos",
      onClick: handleClick,
      pantallaActiva,
      id: "conceptos",
    },
  ];
  return (
    <ul
      className="flex flex-col relative items-start justify-between border rounded-lg border-primary-200/80 p-4 text-sm gap-4 my-5 py-7 mx-auto
     w-10/12"
    >
      <span className="absolute top-0 left-4 rounded-lg bg-primary-200 -translate-y-3 py1 px-3 font-medium text-primary-800">
        Acciones
      </span>
   
    
     {
      botones.map(({children,...props},i)=>(
        <BotonesMenuCobranza key={i} {...props}>
{children}

        </BotonesMenuCobranza>))
     }
    </ul>
  );
}
