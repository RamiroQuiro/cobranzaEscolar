import { contextCobranzas } from '@/context/contextCobranzas'
import React from 'react'
import BodyTablaCicloLectivos from './BodyTablaCicloLectivos'

export default function TablaCicloLectivo() {


  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded relative ">
    <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
      <tr>
        <th
          id="nombreLegajo"
          className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer hover:bg-primary-300/20 duration-200"
        >
         Ciclo Lectivo
        </th>
        <th
          id="legajo"
          className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
        >
         Nivel Educativo
        </th>
        <th
          id="legajo"
          className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
        >
          Grado Educativo
        </th>
        <th
          id="legajo"
          className="whitespace-nowrap px-4 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
        >
         Estado
        </th>
      </tr>
    </thead>
    <BodyTablaCicloLectivos/>
  </table>
  )
}
