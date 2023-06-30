import SectionBackground from "@/app/componentes/SectionBackground";
import CabeceraContenedor from "@/app/componentes/CabeceraContenedor";
import MenuSeccionesCobranzas from "./MenuSeccionesCobranzas";
import RenderPantallas from "./RenderPantallaCobranzas";

export default function Cobranzas() {
  return (
    <SectionBackground>
      <div className="bg-primary-800 overflow-hidden rounded-lg flex flex-col items-start justify-between md:w-1/5 min-h-[250px] flex-auto pb-6">
        <CabeceraContenedor>Secciones Cobranzas</CabeceraContenedor>
        <MenuSeccionesCobranzas />
      </div>
      <div className="bg-primary-800  flex flex-col items-center justify-between w-2/3 flex-auto overflow-hidden rounded-lg">
        <RenderPantallas />
      </div>
    </SectionBackground>
  );
}
