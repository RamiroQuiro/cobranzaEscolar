import React from 'react'

export default function BotonesMenuCobranza({onClick,pantallaActiva,children,id}) {

  return (
    <li 
      
      id={id}
      onClick={onClick}
      className={`${pantallaActiva==id? 'border-primary-200 bg-white rounded-full duration-200 ':''}`+ `rounded-full border p-2 cursor-pointer hover:bg-white :text-primary-800 hover:border-primary-200 duration-200`}>
       {children}
      </li>
  )
}
