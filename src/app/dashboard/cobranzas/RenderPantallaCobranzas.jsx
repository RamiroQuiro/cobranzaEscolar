"use client"

import { contextCobranzas } from '@/context/contextCobranzas';
import RealizarPago from './RealizarPago';
import TablaCobranzas from './TablaCobranzas';
import CicloLectivos from './CicloLectivos';
import Conceptos from './Conceptos';
import PanelCobranzas from './PanelCobranzas';
import FormularioCargaCicloLectivo from './FormularioCargaCicloLectivo';

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
        return <Conceptos/>
    default:
        return <FormularioCargaCicloLectivo />
        break;
  }
}
