import React from 'react'

export default function DatosLegajo({legajo}) {
  return (
    <div className="flex flex-col gap-2  text-left w-full items-center justify-evenly px-3 py-5 text-sm">
    <div className="flex items-center bg-white w-full rounded-lg py-1 px-2 justify-around mx-auto">
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Nombre y Apellido:</p>
        <p className="font-medium text-base">{legajo?.nombreLegajo}</p>
      </div>
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Numero de Legajo:</p>
        <p className="font-medium text-base">{legajo?.legajo}</p>
      </div>
    </div>
    <div className="flex items-center bg-white w-full rounded-lg py-1 px-2 justify-around mx-auto">
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Dni:</p>
        <p className="font-medium text-base">{legajo?.dniLegajo}</p>
      </div>
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Domicilio:</p>
        <p className="font-medium text-base">{legajo?.domicilio}</p>
      </div>
    </div>
    <div className="flex items-center bg-white w-full rounded-lg py-1 px-2 justify-around mx-auto">
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Telefono:</p>
        <p className="font-medium text-base">{legajo?.celular}</p>
      </div>
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Email:</p>
        <p className="font-medium text-base">{legajo?.email}</p>
      </div>
    </div>
    <div className="flex items-center bg-white w-full rounded-lg py-1 px-2 justify-around mx-auto">
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Nivel Educativo:</p>
        <p className="font-medium text-base">{legajo?.nivelEducativo}</p>
      </div>
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Fecha Ingreso:</p>
        <p className="font-medium text-base">{legajo?.fechaIngreso}</p>
      </div>
    </div>
    <div className="flex items-center bg-white w-full rounded-lg py-1 px-2 justify-around mx-auto">
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Nombre y Apellido Tutor:</p>
        <p className="font-medium text-base">
          {legajo?.apellidoNombreTutor}
        </p>
      </div>
      <div className="flex items-center w-1/2 justify-start gap-2">
        <p>Telefono Tutor:</p>
        <p className="font-medium text-base">{legajo?.celularTutor}</p>
      </div>
    </div>
  </div>
  )
}
