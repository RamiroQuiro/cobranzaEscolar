import Boton1 from "@/app/componentes/Boton1";
import BotonBorderRedondos from "@/app/componentes/BotonBorderRedondos";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import TablaCicloLectivo from "./TablaCicloLectivo";
import ContenedorDePantallas from "@/app/componentes/ContenedorDePantallas";
import { contextCobranzas } from "@/context/contextCobranzas";

export default function CicloLectivos() {
const cargarPantalla=contextCobranzas((state)=>state.cargarPantalla)
const captaruid=contextCobranzas((state)=>state.captaruid)
const agregarCiclos=(id)=>{
  cargarPantalla(id)
  captaruid("")
}
  return (
   <ContenedorDePantallas className={"w-full"}>
      <CabeceraContenedor>Ciclos Lectivos</CabeceraContenedor>
      <div className="w-full py-3 flex items-center justify-evenly ">
         <BotonBorderRedondos 
         id={"addCicloLectivo"}
         onClick={(e)=>agregarCiclos(e.target.id)}
         className={"border-primary-800 border-2"}>Agregar Ciclo</BotonBorderRedondos>
      </div>
      <div className="md:w-[96%] mx-auto my-8 rounded-lg bg-white overflow-hidden">
      <TablaCicloLectivo/>
      </div>
    </ContenedorDePantallas>
  );
}
