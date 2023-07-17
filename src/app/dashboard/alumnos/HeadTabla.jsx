"use client"

import THTabla from "@/app/componentes/THTabla"
import { contextOrdenar } from "@/context/contextData"

export default function HeadTabla() {
    const cambiarOrden=contextOrdenar((state)=>state.cambiarOrden)
    const ordenarPor=contextOrdenar((state)=>state.ordenarPor)

const handleClick=(e)=>{
    cambiarOrden(e.target.id)
}

const cabeceras=[
  {
    name:"Nombre y Apellido",
    key: '1',
    id:"nombreLegajo"
    
  },
  {
    name:"N°Legajo",
    key: 2,
    id:"legajo"
    //sortable : true,
  },
  {
    name:"DNI",
    key: 4,
    id:"dniLegajo"
    //sortable : true,
  },
  {
    name:"Estado",
    key: 4,
    id:"activo"
    //sortable : true,
  },
  
]
  return (
    <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
    <tr>
      {
        cabeceras?.map((item,i)=>(
            <THTabla
            key={item.key}
            handleClick={handleClick}
            id={item.id}
            label={item.name}
            order={ordenarPor}
            />
        ))
      }
    
  
    </tr>
  </thead>

  )
}
