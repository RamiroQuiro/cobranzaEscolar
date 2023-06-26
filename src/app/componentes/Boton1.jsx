import React from 'react'

export default function Boton1({children}) {
  return (
    <button
    className=" mx-auto text-sm font-medium hover:text-primary-100 duration-200 bg-primary-600 rounded-lg p-2 text-primary-800 my-4"
    >{children}</button>
  )
}
