"use client"
import { contextData } from '@/context/contextData'

export default function BodyTablaAlumnos() {

    const {legajos}=contextData(state=>({
        legajos:state.legajos
    }))
    console.log(legajos)
  return (
    <tbody className="divide-y divide-gray-200">
        {
legajos?.filter(leg=>leg.activo=="true")?.map((leg)=>(
    <tr
    key={leg.id}
    className="odd:bg-primary-300/50">
    <td className="whitespace-nowrap px-4 py-2 font-medium text-primary-text">
      {leg.nombreLegajo}
    </td>
    <td className="whitespace-nowrap px-4 py-2 text-primary-text">
      {leg.legajo}
    </td>
    <td className="whitespace-nowrap px-4 py-2 text-primary-text">
      {leg.dniLegajo}
    </td>
    <td className="whitespace-nowrap px-4 py-2 text-primary-text">
      {leg.activo=="true"?"activo":"inativo"}
    </td>
  </tr>
))

        }
       

      
      </tbody>
  )
}
