import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function SectionBackground({className,children}) {
  return (
    <section className={className+' mb-16 min-h-screen w-full mx-auto flex pt-10   items-start justify-between container gap-4 h-full text-primary-text '}>
      <Toaster/>
      {children}</section>
  )
}
