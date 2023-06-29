"use client"

import { contextOrdenar } from "@/context/contextData"

export default function HeadTabla() {
    const cambiarOrden=contextOrdenar((state)=>state.cambiarOrden)
    const ordenarPor=contextOrdenar((state)=>state.ordenarPor)

const handleClick=(e)=>{
    cambiarOrden(e.target.id)
}
  return (
    <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
    <tr>
      <th
      onClick={handleClick}
      id="nombreLegajo"
      className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200">
        Nombre y Apellido <span className="duration-200"> {ordenarPor=="nombreLegajo" && "⬇️"}</span>
      </th>
      <th 
        onClick={handleClick}
        id="legajo"
        className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        N°Legajo  <span className="duration-200"> {ordenarPor=="legajo" && "⬇️"}</span>
      </th>
      <th 
        onClick={handleClick}
        id="dniLegajo"
        className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        DNI  <span className="duration-200"> {ordenarPor=="dniLegajo" && "⬇️"}</span>
      </th>
      <th 
        onClick={handleClick}
        id="activo"
        className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Estado <span className="duration-200"> {ordenarPor=="activo" && "⬇️"}</span>
      </th>
    </tr>
  </thead>

  )
}
