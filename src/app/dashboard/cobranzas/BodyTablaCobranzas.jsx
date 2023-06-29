import React from 'react'

export default function BodyTablaCobranzas() {

    const legajos=[{
        nombreLegajo:"ramiro",
        legajo:"3322",
        dniLegajo:"338822",
        activo:true,
                
    },
]
  return (
    <tbody className="divide-y divide-gray-200 my-3">
    {legajos
      ?.sort((a, b) => {
        if(order=="nombreLegajo"){
          if (a.nombreLegajo < b.nombreLegajo) return -1;
          if (a.nombreLegajo > b.nombreLegajo) return 1;
        }if (order=="legajo") return a.legajo-b.legajo
        if (order=="dniLegajo") return a.dniLegajo-b.dniLegajo
        if (order=="activo")  if (a.activo > b.activo) return -1;
      })
      ?.filter((leg) => {
        if (filtroActivo == "activos") {
          return leg.activo == true;
        }
        if (filtroActivo == "inactivos") {
          return leg.activo == false;
        } else {
          return leg;
        }
      })
      ?.map((leg) => (
        <tr
          onClick={(e) => captaruid(e, leg.uid)}
          key={leg.id}
          className="odd:bg-primary-300/50 cursor-pointer hover:bg-gray-200/80 duration-200"
        >
          <td className="whitespace-nowrap px-4 py-2 font-medium text-primary-text">
            {leg.nombreLegajo}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-primary-text">
            {leg.legajo}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-primary-text">
            {leg.dniLegajo}
          </td>
          <td className="whitespace-nowrap  text-primary-text">
            <p
              className={
                leg.activo == true
                  ? " bg-green-300/50 shadow-sm w-2/3 shadow-green-300 text-green-600 rounded-lg text-xs mx-auto text-center"
                  : " bg-red-300/50 shadow-sm w-2/3 shadow-red-300 text-red-600 rounded-lg text-xs mx-auto text-center"
              }
            >
              {leg.activo == true ? "activo" : "inactivo"}
            </p>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-primary-text">
            {leg.dniLegajo}
          </td>
        </tr>
      ))}
  </tbody>
  )
}
