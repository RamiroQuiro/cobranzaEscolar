import React from 'react'
import InputFomr from './InputFomr'

export default function DaosLegajoCompleto({handleForm,etiq,edit,form,captarUidLegajo}) {
  return (
    <div 
    className="w-1/3 flex-grow mx-2"
  >
  <InputFomr
    options={etiq.options}
    disabled={edit ? false : true}
    onChange={handleForm}
    value={ form[etiq.name]}
    name={etiq.name}
    type={etiq.type}
  >
    {etiq.nombre}
  </InputFomr>
  </div>
  )
}
