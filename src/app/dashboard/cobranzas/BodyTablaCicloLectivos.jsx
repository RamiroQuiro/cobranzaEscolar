import BotonEmoji from "@/app/componentes/BotonEmoji"
import { contextCobranzas } from "@/context/contextCobranzas"

export default function BodyTablaCicloLectivos() {
    const {ciclosLectivos}=contextCobranzas((state)=>({
        ciclosLectivos:state.ciclosLectivos
          }))

          const captaruid=contextCobranzas((state)=>state.captaruid)
          const cargarPantalla = contextCobranzas((state) => state.cargarPantalla);

          const handleClick=(leg)=>{
            cargarPantalla("addCicloLectivo")
            captaruid(leg)
          }
  return (
    <tbody className="divide-y divide-gray-200 my-3">
    
    {
    //ciclosLectivos
    //   ?.sort((a, b) => {
    //     if(order=="nombreLegajo"){
    //       if (a.nombreLegajo < b.nombreLegajo) return -1;
    //       if (a.nombreLegajo > b.nombreLegajo) return 1;
    //     }if (order=="legajo") return a.legajo-b.legajo
    //     if (order=="dniLegajo") return a.dniLegajo-b.dniLegajo
    //     if (order=="activo")  if (a.activo > b.activo) return -1;
    //   })
    //   ?.filter((leg) => {
    //     if (filtroActivo == "activos") {
    //       return leg.activo == true;
    //     }
    //     if (filtroActivo == "inactivos") {
    //       return leg.activo == false;
    //     } else {
    //       return leg;
    //     }
    //   })
      ciclosLectivos?.map((leg) => (
        <tr
          onClick={() => handleClick(leg)}
          key={leg.id}
          className="odd:bg-primary-300/50 cursor-pointer hover:bg-gray-200/80 duration-200"
        >
          <td className="whitespace-nowrap px-4 py-2 font-medium text-primary-text">
            {leg.label}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-primary-text">
            {leg.nivelEducativo}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-primary-text">
            {leg.añoCiclo}
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
          <td className="whitespace-nowrap px-1 py-2 text-center text-primary-text">
           <BotonEmoji>✏️</BotonEmoji> 
          </td>
        </tr>
      ))}
  </tbody>
  )
}
