"use client"

import { contextCobranzas } from '@/context/contextCobranzas';
import RealizarPago from './RealizarPago';
import TablaCobranzas from './TablaCobranzas';
import CicloLectivos from './CicloLectivos';
import Conceptos from './Conceptos';

export default function RenderPantallas({captarUidLegajo}) {
    const {pantallaActiva}=contextCobranzas((state)=>({
        pantallaActiva:state.pantallaActiva
    }))

    console.log(pantallaActiva)
  switch (pantallaActiva) {
    case "pagosEfectuados":
        return <TablaCobranzas />
        break;
    case "realizarPago":
        return <RealizarPago />
        break;
    case "cicloLectivo":
        return <CicloLectivos/>
    case "conceptos":
        return <Conceptos/>
    default:
        return <TablaCobranzas />
        break;
  }
}
