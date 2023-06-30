import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function SectionBackground({className,children}) {
  return (
    <section className={className+' mb-16 min-h-screen w-full mx-auto flex pt-10  animate-[aparecer_.5s] items-start justify-between md:w-11/12 gap-4 h-full text-primary-text '}>
      <Toaster/>
      {children}</section>
  )
}
