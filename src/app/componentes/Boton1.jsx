import React from 'react'

export default function Boton1({onClick,children,disabled}) {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    className=" mx-auto text-sm font-medium hover:text-primary-200 duration-200 bg-primary-600 rounded-lg p-2 text-primary-800 my-4 disabled:bg-gray-300"
    >{children}</button>
  )
}
