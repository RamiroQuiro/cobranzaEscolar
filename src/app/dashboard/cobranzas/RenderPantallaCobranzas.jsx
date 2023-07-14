"use client"

import { contextCobranzas } from '@/context/contextCobranzas';
import CicloLectivos from './CicloLectivos';
import Conceptos from './conceptos/Conceptos';
import PanelCobranzas from './PanelCobranzas';
import FormularioCargaCicloLectivo from './FormularioCargaCicloLectivo';
import AgregarConcepto from './conceptos/AgregarConcepto';
import RealizarPago from './pagos/RealizarPago';
import ReciboPDF from './pagos/ReciboPDF';
import VisorRecibos from './pagos/VisorRecibos';
import PDFRealizados from './PDFRealizados';
import PreCargaPDFPagos from './pagos/PreCargaPDFPagos';

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
    case "reciboPDF":
        return <VisorRecibos/>
  
    case "listadoPagosPDF":
        return <PreCargaPDFPagos/>
  
    default:
        return <PanelCobranzas  />
        break;
  }
}
