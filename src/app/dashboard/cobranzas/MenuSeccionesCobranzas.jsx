"use client"
import { contextCobranzas } from "@/context/contextCobranzas";


export default function MenuSeccionesCobranzas() {

const pantallaActiva=contextCobranzas((state)=>state.pantallaActiva)
const cargarPantalla=contextCobranzas((state)=>state.cargarPantalla)
    const handleClick=(e)=>{
        cargarPantalla(e.target.id)
    }

  return (
    <ul
      className="flex flex-col relative items-start justify-between border rounded-lg border-primary-200/80 p-4 text-sm gap-4 my-5 py-7 mx-auto
     w-10/12"
    >
      <span className="absolute top-0 left-4 rounded-lg bg-primary-200 -translate-y-3 py1 px-3 font-medium text-primary-800">
        Acciones
      </span>
      <li 
      
      id="pagosEfectuados"
      onClick={handleClick}
      className={`${pantallaActiva=="pagosEfectuados"? 'border-primary-200 bg-white rounded-full duration-200 ':''}`+ `rounded-full border p-2 cursor-pointer hover:bg-white :text-primary-800 hover:border-primary-200 duration-200`}>
        ► Pagos Efectuados
      </li>
      <li 
       id="realizarPago"
       onClick={handleClick}
       className="rounded-full border p-2 cursor-pointer hover:bg-white :text-primary-800 hover:border-primary-200 duration-200">
        ► Realizar Pago
      </li>
      <li
      id="cicloLectivo"
      onClick={handleClick}
      className="rounded-full border p-2 cursor-pointer hover:bg-white :text-primary-800 hover:border-primary-200 duration-200">
        ► Ciclo Lectivos
      </li>
      <li 
      id="conceptos"
      onClick={handleClick}
      className="rounded-full border p-2 cursor-pointer hover:bg-white :text-primary-800 hover:border-primary-200 duration-200">
        ► Conceptos
      </li>
    </ul>
  );
}
