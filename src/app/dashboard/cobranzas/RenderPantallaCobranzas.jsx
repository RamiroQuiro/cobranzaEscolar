"use client"

import { contextCobranzas } from '@/context/contextCobranzas';
import RealizarPago from './RealizarPago';
import CicloLectivos from './CicloLectivos';
import Conceptos from './conceptos/Conceptos';
import PanelCobranzas from './PanelCobranzas';
import FormularioCargaCicloLectivo from './FormularioCargaCicloLectivo';
import AgregarConcepto from './conceptos/AgregarConcepto';

export default function RenderPantallas({captarUidLegajo}) {
    const {pantallaActiva}=contextCobranzas((state)=>({
        pantallaActiva:state.pantallaActiva
    }))
  switch (pantallaActiva) {
    case "pagosEfectuados":
        return <PanelCobranzas />
        break;
    case "realizarPago":
        return <RealizarPago />
        break;
    case "cicloLectivo":
        return <CicloLectivos/>
    case "conceptos":
        return <Conceptos/>
    case "addCicloLectivo":
        return <FormularioCargaCicloLectivo/>
    case "agregarConceptos":
        return <AgregarConcepto/>
    default:
        return <PanelCobranzas  />
        break;
  }
}
