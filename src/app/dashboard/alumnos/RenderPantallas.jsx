import React from 'react'
import TablaAlumnos from './TablaAlumnos';
import AgregarLegajo from './AgregarLegajo';
import LegajoModelo from '@/app/componentes/LegajoModelo';
import { contextData } from '@/context/contextData';
import LegajoCompleto from '@/app/componentes/LegajoCompleto';

export default function RenderPantallas({captarUidLegajo}) {
    const {label}=contextData((state)=>({
        label:state.label
    }))

  switch (label) {
    case "listar":
        return <TablaAlumnos />
        break;
    case "agregarLeg":
        return <AgregarLegajo />
        break;
    case "irALegajo":
        return <LegajoModelo legajo={captarUidLegajo}/>
    case "legajoCompleto":
        return <LegajoCompleto legajo={captarUidLegajo}/>
    default:
        return <TablaAlumnos />
        break;
  }
}
