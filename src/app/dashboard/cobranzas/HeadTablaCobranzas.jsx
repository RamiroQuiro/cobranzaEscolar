"use client"

import { contextOrdenar } from "@/context/contextData"

export default function HeadTablaCobranzas() {
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
      id="tipoComprobante"
      className="whitespace-nowrap pl-1 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200">
         Comprobante<span className="duration-200 animate-aparecer absolute top-2 right-2"> {ordenarPor=="tipoComprobante" && "⬇️"}</span>
      </th>
      <th
      onClick={handleClick}
      id="numeroComprobante"
      className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200">
        N° <span className="duration-200 animate-aparecer absolute top-2 right-2"> {ordenarPor=="nombreLegajo" && "⬇️"}</span>
      </th>
      <th 
        onClick={handleClick}
        id="legajo"
        className="whitespace-nowrap relative px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
       Legajo  <span className="duration-200 animate-aparecer absolute top-2 right-2"> {ordenarPor=="legajo" && "⬇️"}</span>
      </th>
      <th 
        onClick={handleClick}
        id="nombreLegajo"
        className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Nombre Alumno  <span className="duration-200 animate-aparecer absolute top-2 right-2"> {ordenarPor=="nombreLegajo" && "⬇️"}</span>
      </th>
      <th 
        onClick={handleClick}
        id="fecha"
        className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Fecha Pago <span className="duration-200 animate-aparecer absolute top-2 right-2"> {ordenarPor=="fecha" && "⬇️"}</span>
      </th>
      <th 
        onClick={handleClick}
        id="montoPagado"
        className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Monto <span className="duration-200 animate-aparecer absolute top-2 right-2"> {ordenarPor=="activo" && "⬇️"}</span>
      </th>
      <th 
        id="acciones"
        className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200">
        Acciones <span className="duration-200"> {ordenarPor=="activo" && "⬇️"}</span>
      </th>
    </tr>
  </thead>

  )
}
