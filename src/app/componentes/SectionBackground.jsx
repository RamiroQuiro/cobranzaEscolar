import React from 'react'

export default function SectionBackground({className,children}) {
  return (
    <section className={className+'w-screen min-h-screen flex flex-col justify-between items-center'}>{children}</section>
  )
}
