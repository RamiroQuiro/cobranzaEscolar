import React from 'react'
import HeadTablaCobranzas from './HeadTablaCobranzas'
import BodyTablaAlumnos from '../alumnos/BodyTablaAlumnos'
import BodyTablaPagosRealizados from './pagos/BodyTablaPagosRealizados'

export default function TablaCobranzas() {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded relative">
     <HeadTablaCobranzas/>
      <BodyTablaPagosRealizados/>
    </table>
  )
}
