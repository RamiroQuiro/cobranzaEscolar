import React from 'react'

export default function ContenedorDePantallas({children,className}) {
  return (
    <div className={`${className}  mx-auto relative animate-apDeArriba`}>{children}</div>
  )
}
