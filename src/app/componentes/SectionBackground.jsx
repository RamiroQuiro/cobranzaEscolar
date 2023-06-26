import React from 'react'

export default function SectionBackground({className,children}) {
  return (
    <section className={className+' mb-16 min-h-screen w-11/12 mx-auto flex pt-10   items-start justify-between container gap-4 h-full text-primary-text '}>{children}</section>
  )
}
